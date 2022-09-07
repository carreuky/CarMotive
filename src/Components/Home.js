import React from 'react'
import Slide from './Carousel';
import CardServices from './CardServices';
import Welcome from './Welcome';


function Home() {
 return(
    <div>
        <Slide/>
        <CardServices/>
        <Welcome />
    </div>
 )
}

export default Home;