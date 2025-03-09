import React, { useState } from "react";
import instagram from './img/instagram.png';
import email from './img/mail.png';
import telephone from './img/telephone.png';
import { Link } from "react-router-dom";

const InstagramLink = ({ username }) => { const instagramURL = `https://www.instagram.com/${username}/`;

    return (
        <div>
            <a className='contactIg' style={{paddingLeft: '25px'}} href={instagramURL} target="_blank" rel="noopener noreferrer">@{username}</a>
        </div>
      );
};

const Contact = () => {

    const [textInput, setTextInput] = useState("");
    const [textEmail, setTextEmail] = useState("");
    const [textArea, setTextArea] = useState("");

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleTextEmail = (event) => {
        setTextEmail(event.target.value);
    };

    const handleTextArea = (event) => {
        setTextArea(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Berhasil disimpan');

        console.log('Name : ', textInput);
        console.log('Email : ',textEmail);
        console.log('Message : ', textArea);
    }

    return (
        <div>
            
            <div className="contactme">
            <h2>Contact Me</h2>
            <hr />
            <div className='contact'>
                
                        <img className='contactImg' src={telephone} style={{width: '20px', height: '20px', paddingLeft: '5px'}}/>
                        <p className='contactDesc'>+62-895-3012-6035</p>
                    </div>
                    <div className='contact'>
                        <img className='contactImg' src={email}  style={{width: '20px', height: '20px', paddingLeft: '5px'}}/>
                        <p className='contactDesc'>naylatrianggita7@gmail.com</p>
                    </div>
                    <div className='contact'>
                        <img className='contactImg' src={instagram} style={{width: '20px', height: '20px', paddingLeft: '5px'}}/>
                        <InstagramLink username="nxylx_x" className='contactDesc' />
                </div>

          <hr />
          </div>

          <div className="message">
            <h2>Send me a message:</h2>

            <div>
            <form onSubmit={handleSubmit}>
            <label>
                <b>Name:</b> <input type="text" value={textInput} onChange={handleTextChange} required />
            </label> <br/>
            <label>
                <b>Email:</b> <input type="email" value={textEmail} onChange={handleTextEmail} required />
            </label> <br/>
            <label>
                <b className="textTextarea">Message:</b> <textArea value={textArea} onChange={handleTextArea} required />
            </label> <br/>
            <input type="submit" value="Submit" className="submit" />
            </form>
            </div>
        </div>

        
        </div>
    );
}

export default Contact;

