import HogTiles from "./HogTiles";
import { useState } from 'react'

function HogList({ hogs }) {

    const [ selectedCategory, setCategory ] = useState('All')

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const displayHogs = hogs.filter(hog => {
        if(selectedCategory === "All") {
            return hogs
          } else if (selectedCategory === "greased")
          { return hog.greased === true }
          else if (selectedCategory === "ungreased") {
            return hog.greased === false
          }
    })
        
    const hogCard = displayHogs.map(hog => (
        <HogTiles className='hoggyText' key={hog.name} {...hog} hma={hog["highest medal achieved"]}/>
    ))
    
    return (
      <section>
        <select onChange={handleCategory}type="text" placeholder="filter">
            <option value="All">Select category...</option>
            <option value="greased">Greased</option>
            <option value="ungreased">Ungreased</option>
        </select>
        <ul>{hogCard}</ul>
      </section>  
    )
}

export default HogList