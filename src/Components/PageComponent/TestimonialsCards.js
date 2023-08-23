import React from 'react'
import { Card } from 'react-bootstrap'
import rustomImage from '../Image/R.png';

export default function TestimonialsCards() {
    return (
        <Card style={{ padding: 15, borderRadius:20}}>
            <p>Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time. Now, I'm on a mission to help you get to the RICHEST 1% - one educational finance content at a time</p>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <img className='img-fluid' src={rustomImage} alt='Rustom' style={{maxWidth:100,  borderRadius:'50%', backgroundColor:'#335FF4'}} />
            </div><br/>
            <h6>Rustom Paji</h6>
            Hotel owner
        </Card>
    )
}
