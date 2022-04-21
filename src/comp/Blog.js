import React from 'react'
import BolgCard from './BolgCard'

export default function Blog() {
  return (
    <div>
      <div className='container mt-5'>
            <div className='row'>
            <h1 className='text-center'>Blog Post</h1>
            <hr/>
                <BolgCard />
              </div>
            </div>
    </div>
  )
}
