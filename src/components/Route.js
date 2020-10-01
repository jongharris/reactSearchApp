import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
    const[currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {

        const onLocationChange = () => {
            //set the current state
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange);

        //clean up

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }) 

    //if the path passed is equal to the current path of the window, then we will
    //render the correct component
    return currentPath === path
    ? children : null;
}

export default Route;