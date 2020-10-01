import React, {useState} from 'react';
import './styles.css';

const SearchBar = ({onSubmitText}) => {
    const [term, setTerm] = useState('');

    const onTermSubmit = (e) => {
        e.preventDefault();
        document.querySelector('input').value = "";
        onSubmitText(term);
    }
    return (
        <form className = "form-group" onSubmit={onTermSubmit}>
            <input className = "searchBar"  type = "text" onChange = {(e) => {setTerm(e.target.value)}}/>
        </form>
    )
}

export default SearchBar;