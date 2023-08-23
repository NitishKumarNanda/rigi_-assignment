import React, { useEffect, useState } from 'react'
import Community from './Community';
import Courses from './Courses';
import Consultation from './Consultation';

export default function Services() {
    const [type, setType] = useState('Community');
    const notSelected = { display: 'inline-flex', border: '1px solid lightskyblue', backgroundColor: 'white', padding: '10px 70px', borderRadius: 30, color: '#335FF4', fontWeight: 600, marginLeft: 20, cursor:'pointer' };
    const selected = { display: 'inline-flex', border: '1px solid lightskyblue', backgroundColor: '#335FF4', padding: '10px 70px', borderRadius: 30, color: 'white', fontWeight: 600, marginLeft: 20 , cursor:'pointer'}
    useEffect(() => {
        console.log(type);
    }, [type])


    return (
        <>
            <h6 style={{ marginTop: 100 }}>Services</h6>
            <h3>Start your journey towards financial freedom</h3>
            <div>
                <div style={type === 'Community' ? selected : notSelected} onClick={(e) => setType(e.target.innerText)}>
                    Community
                </div>
                <div style={type === 'Courses' ? selected : notSelected} onClick={(e) => setType(e.target.innerText)}>
                    Courses
                </div>
                <div style={type === 'Consultation' ? selected : notSelected} onClick={(e) => setType(e.target.innerText)}>
                    Consultation
                </div>
            </div>

            <div style={{ marginTop:20 }}>
                {type === 'Community' && <Community />}
                {type === 'Courses' && <Courses />}
                {type === 'Consultation' && <Consultation />}
            </div>
            
        </>
    )
}
