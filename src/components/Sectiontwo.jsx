import React from 'react'
import Petals from '../assets/petals.jpg'
import Swan from '../assets/swan.jpg'
import Lily from '../assets/lily.jpg'

function Sectiontwo() {
  return (
        <div className="flex-sec">
            <div className="image-sec">
                <div className="sec-image">
                    <img src={Petals} alt="images" />
                </div>
                <div className="sec-image">
                    <img src={Swan} alt="images" />
                </div>
                <div className="sec-image">
                    <img src={Lily} alt="images" />
                </div>
            </div>
            <div className="text-sec">
                <h1>Search for an idea</h1>
                <p>What do you want to try next? Think of something you're into - like "wildlife nature" and see what you'll find.</p>
                <button>Explore</button>
            </div>
        </div>
  )
}

export default Sectiontwo