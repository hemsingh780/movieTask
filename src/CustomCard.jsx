import React from 'react'
import "./App.css"
const CustomCard = ({showModel , id , title , imgPath}) => {
  let  imgSrc = `https://image.tmdb.org/t/p/original${imgPath}`
  console.log("imagSrc" , imgSrc)
  return (
    <div className='customCard'
    onClick={() => showModel(id)}
    >
        <div >
            <img 
            src={imgSrc}
            alt={title}
            />
        </div>
          <div className='customDetail'>
                <p>{title}</p>
          </div>
    </div>
  )
}

export default CustomCard