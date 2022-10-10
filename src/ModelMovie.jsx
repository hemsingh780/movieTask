
import React from 'react'

import "./App.css"
// {show  , movieId }
const ModelMovie = ({id , handleClose}) => {
  const [data ,  setData] = React.useState([])
  let getData = async () => {
    let link = `https://movie-task.vercel.app/api/movie?movieId=${id}` 
    let d = await fetch(link)
     let jd = await d.json();
     console.log(jd.data);
     setData(jd.data)
  }
  React.useEffect(() => {
       getData();
  },[id])
  let imgSrc = ""
  let backdropImg = " "
if(data !== []){
   imgSrc =`https://image.tmdb.org/t/p/original${data.poster_path}`
   backdropImg = `https://image.tmdb.org/t/p/original${data.backdrop_path}`
}

return (
   <>
    <div className='mModel'>


        <div className='imgContainer'>
          <img 
            src={imgSrc}
            alt={data.original_title}
            />
        </div>
        <div className='mModeldetail'>
            <p>{data.original_title}</p>
            <div>{data.overview}</div>
            <div className='buttonMmodel'>
            <button variant="primary">Book ticket</button>
        </div>

        </div>
        <div 
          style={{
            fontSize:"22px",
            fontWeight:"bolder",
            cursor:"pointer"
          }}
          onClick={() =>  handleClose()}
        >x</div>

</div>
      <div
       style={{
        backgroundImage: `url(${backdropImg})`,
        backgroundSize:"100% 100%",
        opacity:"0.5",
        height:'100vh'
       }}
      > 
      </div> 
    </>
  )
}
export default ModelMovie     