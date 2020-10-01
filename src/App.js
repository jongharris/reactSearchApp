import React, {useState} from 'react';
import Header from './components/Header';
import Route from './components/Route';
import Picture from './components/Picture';
import Weather from './components/Weather';
import Youtube from './components/Youtube';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import youtube from './apis/youtube'
import "./components/styles.css"

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [youtubeData, setYoutubeData] = useState([]);
    const [pictureData, setPictureData] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSelectVideo = (video) => {
        console.log(video);
        setSelectedVideo(video);
    }

    const onSubmitText = async (term) => {
        //determine which state to enter based off the path
        const path = window.location.pathname;

        //abstract the AXIOS code later **reminder
        if (path === '/youtube') {

            const {data} = await youtube.get('/search', {
                params: {
                    q: term
                }
            });

            setYoutubeData(data.items);
        } else if (path ==='/picture') {
            
            //add the picture soon
            setPictureData(term);
        } else if (path === '/'){

            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
                params: {q: term,
                appId:'9e052bf2df21eb996bbdaab83c94e716'}
            });

            setWeatherData(response);
        }
    }

    return (
        <div className = "wrapper">
            <nav className = "sideNav">
                <div className = "logo">
                    Search.Em
                </div>
                <hr className = "navDivider"/>
                <Header />
            </nav>

            <header className = "header">
                <div className = "leftHeader">
                    <SearchBar onSubmitText = {onSubmitText}/>
                </div>
                <div className = "rightHeader">
                </div>
            </header>

            <section className = "content">
                <Route path = "/">
                    <Weather  data = {weatherData}/>
                </Route>
                <Route path = "/youtube" >
                    <Youtube data= {youtubeData} onSelect = {onSelectVideo} video = {selectedVideo} />
                </Route>
                <Route path = "/picture">
                    <Picture data= {pictureData}/>
                </Route>
            </section>

            <footer className = "footer">
                <h3> Created by Jonathan Harris - React App</h3>
            </footer>
        </div> 
    )
}

export default App;