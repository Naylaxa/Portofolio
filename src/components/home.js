import React from 'react';
import nayla from './img/naylaaaaa.jpg';


const Home = (props) => {
    return (
        <div>
            <img className='imgme' src={nayla} />
            <div className='text'>
                <h1>Hello, I'm Nayla.</h1>
                <p>I am a student at SMKN 1 Purbalingga who is studying programming. </p>
                <p>Someone who has a hobby of drawing and design.</p>
                <div className='hanguk'><p>어려움이 있는 곳에는 언제나 편안함이 따라온다</p></div>

            </div>
            </div>
    );
}

export default Home;