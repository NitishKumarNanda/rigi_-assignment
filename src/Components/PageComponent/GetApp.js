import React from 'react'
import getAppImage from '../Image/appImage.png'
export default function GetApp() {
    return (
        <div style={{ marginTop: 40, borderRadius: '50% 50% 0% 0%', backgroundColor: '#335FF4', width:'100%'}}>
            <div style={{ marginTop: 60 }}>
                <h6>Get the app in ine click!</h6>
                <h3>Hack your wealth journey inside
                    <br />
                    the 1% club</h3>
                <br />
                <div style={{ display: 'inline-flex', border: '1px solid white', backgroundColor: 'white', padding: '10px 100px', borderRadius: 30, color: '#335FF4', fontWeight: 600 }}>
                    Join the Community
                </div>
                <br/>
                <img src={getAppImage} alt='getApp' style={{maxWidth:'75%',marginTop:50, marginBottom:50}}/>
            </div>
        </div>
    )
}
