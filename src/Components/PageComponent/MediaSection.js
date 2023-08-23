import React, { useState } from 'react'
import videoPic from '../Image/OIP.jfif'
export default function MediaSection() {
    const [videoPlaying, setVideoPlaying] = useState(false);

    const handlePlayButtonClick = () => {
        setVideoPlaying(true);
    };
    return (
        <div style={{marginTop:100, padding:10}}>
            <h6>MediaSection </h6>
            <h3>Check out the intro video of the community</h3><br/>
            <div className="video-container" style={{ height:'50vh', width:'100%'}} >
                {!videoPlaying ? (
                    <div onClick={handlePlayButtonClick} style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center', borderRadius:20, backgroundImage: `url(${videoPic})`,backgroundPosition: 'center',backgroundSize: 'cover', }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                    </div>
                ) : (
                    <video controls autoPlay style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center', borderRadius:20, backgroundColor:'lightgrey' }}>
                        <source src="your-video-source.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    )
}
