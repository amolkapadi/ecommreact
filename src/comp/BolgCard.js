import React from 'react'
import Data from '../Data.json';

export default function BolgCard() {
    return (
        <>
        {Data.map((result)=>{
            return(
                <div className='col-md-3 mb-4' key={result.id}>
                <div class="card h-100 text-center p-4"  >
                    <div class="card-body">
                    <h4>{result.title}</h4>
                        <p class="card-text text-algin-justify">{result.body}</p>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    )
}
