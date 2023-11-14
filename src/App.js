import React from 'react';
import { useState,useRef,useEffect} from 'react';
import {FaPlay} from 'react-icons/fa'
import './App.css';
import home from "./assets/home.png";
import search from "./assets/searc.png";
import alec from './assets/alec.jpg';
import ariana from './assets/ariana.jpg'
import billi from './assets/billi.jpg'
import chord from './assets/chord.jpg'
import colio from './assets/colio.jpg'
import emi from './assets/eminem.jpg'
import enrique from './assets/en.jpg'
import hasley from './assets/hasley.jpg'
import dragons from './assets/im.jpg'
import james from './assets/james.jpg'
import masked from './assets/masked.jpg'
import moon from './assets/moon.jpg'
import nf from './assets/NF.jpg'
import olivia from './assets/olivia.jpg'
import peter from './assets/peter.jpg'
import sam from './assets/samsmith.jpg'
import sasha from './assets/sasha.jpg'
import shane from './assets/shane.jpg'
import lovely from "./assets/lovely.mp3"
import astro from "./assets/astro.mp3";
import believer from "./assets/believer.mp3";
import breathless from "./assets/breath.mp3";
import complication from "./assets/complic.mp3";
import fire from "./assets/firefire.mp3";
import gangsta from "./assets/gangsta.mp3";
import head from "./assets/head.mp3";
import hero from "./assets/hero.mp3";
import holdon from "./assets/holdon.mp3";
import infinity from "./assets/infinity.mp3";
import letme from "./assets/letme.mp3";
import mocking from "./assets/mocking.mp3";
import moonlight from "./assets/moon.mp3";
import older from "./assets/older.mp3";
import para from "./assets/para.mp3";
import position from "./assets/positions.mp3";
import sorry from "./assets/sorry.mp3";

function App() {
  const music = [
    {
      id:0,
      name:'lovely',
      lyrics:'Billie Ellish',
      imageurl:billi,
      song:lovely,
      },
    {
      id:1,
      name:'Let Me Down Slowly',
      lyrics:'Alec Benjamin',
      imageurl:alec,
      song: letme,
    },
    {
      id:2,
      name:'Older',
      lyrics: 'Sasha Alex',
      imageurl:sasha,
      song: older,
    },
    {
      id:3,
      name:'Sorry',
      lyrics: 'Halsey',
      imageurl:hasley,
      song: sorry,
    },
    {
      id:4,
      name:'Fire on Fire',
      lyrics: 'Sam Smith',
      imageurl: sam,
      song: fire,
    },
    {
      id:5,
      name:'In My Head',
      lyrics: 'Peter Manos',
      imageurl: peter,
      song: head,
    },
    {
      id:6,
      name:'Hold On',
      lyrics: 'Chord',
      imageurl:chord,
      song: holdon,
    },
    {
      id:7,
      name:'Complicated',
      lyrics: 'Olivia',
      imageurl:olivia,
      song: complication,
    },
    {
      id:8,
      name:'Paralyzed',
      lyrics: 'NF',
      imageurl:nf,
      song: para,
    },
    {
      id:9,
      name:'infinity',
      lyrics: 'James Young',
      imageurl:james,
      song: infinity,
    },
    {
      id:10,
      name:'Breathless',
      lyrics: 'shayne ward',
      imageurl:shane,
      song: breathless,
    },
    {
      id:11,
      name:'Hero',
      lyrics: 'Enrique',
      imageurl:enrique,
      song: hero,
    },
    {
      id:12,
      name: 'Gangsta Paradise',
      lyrics: 'Coolio',
      imageurl:colio,
      song: gangsta,
    },
    {
      id:13,
      name: 'Astronaut',
      lyrics: 'Masked Wolf',
      imageurl:masked,
      song: astro,
    },
    {
      id:14,
      name:'Mocking Bird',
      lyrics: 'Eminem',
      imageurl:emi,
      song: mocking,
    },
    {
      id:15,
      name:'Believer',
      lyrics: 'Imagine Dragons',
      imageurl:dragons,
      song: believer,
    },
    {
      id:16,
      name:'Moonlight',
      lyrics: 'Kali Uchis',
      imageurl:moon,
      song: moonlight,
    },
    {
      id:17,
      name:'Positions',
      lyrics: 'Ariana Grande',
      imageurl:ariana,
      song: position,
    }

  ];
  const [butid,setbutid] = useState(0);
  const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
   
    useEffect(() => {
       audioRef.current.play();
    }, [src]);
   
    return <audio ref={audioRef} src={src}  controls/>;
   };
   const [audioSrc, setAudioSrc] = React.useState('');
   
 
  return (
      <div className='spotify'>
        <div className='container'>
        <div className='home'>
          <div className="homecont">
            <ul>
              <li>
                  <img id='icons' src={home} alt='' />
                  <h>Home</h>
              </li>
              <li>
                  <img id='icons' src={search} alt='' />
                  <h>Search</h>  
              </li>
            </ul>
          </div>
        </div>
        <div className='sidebar'>
          <img  className='sideimg' alt='' src={music[butid].imageurl} />
          <div className='shrink'>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
            <div id='wave'></div>
          </div>
        </div>
        <div className='content'>
          <div className='conts-body'>
          {music.map((music)=>{
            return(
              <div className='cards' >
                <div className='cards-pad'>
                  <img  className ='Image' src={music.imageurl} alt='' />
                  <div className='card-det'>
                    <h id='spe-he'>{music.name}</h>
                    <h id= 'spe-pa'>{music.lyrics}</h>
                  </div>
                  <div className='icodiv'>
                    <FaPlay className='icon play' id={music.id} onClick={()=>{
                      setbutid(music.id);
                      setAudioSrc(music.song)
                    }}/>
                    </div>
                </div>
              </div>
              )
          })
          }
          </div>
         </div>
        <div className='footer'>
          <div id="contrl-1">
            <div className="current">
                <div className="profile">
                    <img id='pro-img' style={{
                        position: 'relative',
                        height : `30px`,
                        width : `30px`,
                        
                        
                    }}src={music[butid].imageurl} alt='' />
                </div>
                <div className="optionals">
                    <h>{music[butid].name}</h>
                    <h id='head'>{music[butid].lyrics}</h>
                </div>
            </div>
            <div className="audio">
            <AudioPlayer src={audioSrc} />
                
            </div>
        </div>
        </div>
      </div>
      </div>
    )
}

export default App;
