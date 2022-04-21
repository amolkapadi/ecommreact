import React from 'react'
import Products from './Products'


export default function Home() {
    return (
        <div className='Home'>
            <div className="card bg-dark text-white border-0">
                <img src="./cover.jpg" className="card-img  " alt="home img" height={700}/>
                    <div className="card-img-overlay d-flex flex-column
                    justify-content-center">
                    <div className='container'>
                    <h5 className="card-title display-3  fw-bold text-primary">Special Summer Offer </h5>
                        <p className="card-text fs-2">Shopping All Electrical,Fashion, Men... </p>
                    </div>
                    </div>
            </div>
            <Products />
        </div>
    )
}
