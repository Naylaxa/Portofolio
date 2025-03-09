import ec from './img/EC pict.jpg';
import echamp from'./img/Echamp pict.jpg';
import engfest from './img/EngFest pict.jpg';
import broadcast from './img/broadcast.jpg';
import revbook from './img/revbook pict.jpg';
import yearbook from './img/yearbook pict.png';

const Portofolio = () => {
    return (
        <div>
            <h1>Portofolio Image</h1>
            <div className='portfolio'>
            <div className='port-container'>
                <div className='portfolio-box'>
                    <img src={ec} alt='EC'/>
                    <div className='layer'>
                        <h4>English Club Extracurricular</h4>
                        <p>I joined the extracurricular English club at State Vocational Highschool 1 Purbalingga and became the core structure</p>
                        {/* <a>K</a> */}
                    </div>
                </div>
                <div className='portfolio-box'>
                    <img src={echamp} alt='Echamp'/>
                    <div className='layer'>
                        <h4>English Champ</h4>
                        <p>I took part in a story telling competition at Jenderal Soedirman University in 2023</p>
                        {/* <a>K</a> */}
                    </div>
                </div>
                <div className='portfolio-box'>
                    <img src={engfest} alt='engfest'/>
                    <div className='layer'>
                        <h4>English Fest</h4>
                        <p>I took part in a story telling competition at the Muhammadiyah University of Purwokerto in 2024</p>
                        {/* <a>K</a> */}
                    </div>
                </div>
                <div className='portfolio-box'>
                    <img src={broadcast} alt='broadcast'/>
                    <div className='layer'>
                        <h4>Broadcasting</h4>
                        <p>I took part in extracurricular broadcasting at school</p>
                        {/* <a>K</a> */}
                    </div>
                </div>
                <div className='portfolio-box'>
                    <img src={revbook} alt='revbook'/>
                    <div className='layer'>
                        <h4>Review Buku</h4>
                        <p>I am working on a book review web project together with two of my friends.</p>
                        {/* <a>K</a> */}
                    </div>
                </div>
                <div className='portfolio-box'>
                    <img src={yearbook} alt='yearbook'/>
                    <div className='layer'>
                        <h4>Yearbook Project</h4>
                        <p>I am working on a web yearbook project together with two of my friends.</p>
                        {/* <a>K</a> */}
                    </div>
                </div>
            </div>
            </div>

            
        </div>
    );
}

export default Portofolio;