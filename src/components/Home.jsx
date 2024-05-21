import React from 'react'
import NavBar from './NavBar'
import { Products } from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark text-white border-0">
                <img src="/assets/backg.jpg" className="card-img" alt="Background" height={"600px"} />
                <div className="card-img-overlay d-flex flex-column my-5">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Arrivals</h5>
                        <p className="card-text lead fs-2">Check out all the new trendy clothes to wear on.</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}
