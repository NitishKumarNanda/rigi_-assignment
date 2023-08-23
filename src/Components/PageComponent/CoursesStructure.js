import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../Image/courses.jpg';


export default function CoursesStructure() {
    return (
        <Card style={{ borderRadius: 20, maxWidth: 300, marginLeft:10, textAlign:'left', border:'10px solid white'}}>
            <img className='img-fluid' src={Image} alt='courses' />
            <br/>
            <h4>The 1% course</h4>
            <p style={{padding:5}}>Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time.</p><br />
            <div style={{ display: 'inline-flex', border: '1px solid white', backgroundColor: '#335FF4', padding: '10px 40px', borderRadius: 30, color: 'white', fontWeight: 600 }}>
                Buy the course @ ₹3,999
            </div>
        </Card>
    )
}
