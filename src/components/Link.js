import React from 'react';


const objectConfig = {
    Youtube: "logo-youtube",
    Weather: "cloud-circle-outline",
    Picture: "image-outline"
}

const Link = ({children, href}) => {
    const onClick = (e) => {

        //prevent page reloading
        e.preventDefault();

        //change the url without causing page refresh
        window.history.pushState({}, '', href)

        //emit a navigation event to all the routes (they will catch this in the route)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    //determine the logo type
    const iconType = objectConfig[children]

    return (
        <a href = {href} onClick={onClick}><ion-icon name = {iconType}></ion-icon></a>
    )
}


export default Link;