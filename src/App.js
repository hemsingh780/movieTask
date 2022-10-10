import './App.css';
import React from 'react'
import CustomCard from './CustomCard';
import ModelMovie from './ModelMovie';



function App() {

  const [data , setData] = React.useState([]);
  const [model , setModel] = React.useState(false);
  const [id , setId] = React.useState(null);
  async function getData(){
      let jdata =  await fetch("https://movie-task.vercel.app/api/popular?page=1");
      let data  =  await jdata.json();
      setData(data.data.results);
      console.log(data.data.results);
  }
  
  React.useEffect(() => {
    getData();
     console.log("mount")
  } ,[])

  let showModel = (id) => {
     setId(id);
     setModel(true);
  }

  let renderCard;
  if(data === []) {
    renderCard  = null;
  }  else {
 renderCard = data.map(data => 
     <CustomCard 
        key={data.id}
        id  = {data.id}
        title = {data.title}
        imgPath = {data.poster_path}
        showModel = {showModel}
     />
     )
  }

  console.log("setModel" ,  model)
function handleClose(){
  setModel(false)
}
if(model){
  return(
    <div className='App'>
        <ModelMovie  
          id={id}
          handleClose={handleClose}
        />
    </div>
  )  
}
  return (
<>
    <div className='App'>
           <h1>
                Popular movies 
            </h1>
            <div className="grid">
             {renderCard}
            </div> 
    </div>
  </>
  );
}

export default App;
