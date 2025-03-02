
import { useEffect, useState } from 'react';
import video from './food.mp4'
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';


function App() {

  

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  const MY_ID = '0123cdbf';
  const MY_KEY = 'a726caae1b35f312395451aa0b6fd875';

  useEffect(()=>{
    const getRecipe = async()=>{
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}%09`);
    const data = await res.json();
    setMyRecipes(data.hits);
    }

    getRecipe();
    
  }, [wordSubmitted])

 

  const myRecipeSearch = (e) =>{
    setMySearch(e.target.value);
  }

  const finalSearch = (e)=>{
    e.preventDefault()
    if (mySearch===''){alert('Text your ingredients')}
    else {setWordSubmitted(mySearch)}
  }
  
      return (
        <div>

        <div className="container">
          <video autoPlay muted loop>
            {<source src={video} type="video/mp4" />}
           </video>   
        </div>

        <div className='container'>
           <form onSubmit={finalSearch}>
             <input className='search' placeholder='Find a recipe by ingredients...' onChange={myRecipeSearch} value={mySearch} />
           </form>
             <button className='btn' onClick={finalSearch}>
               🔍
             </button>
        </div >

         <div className="container">
         {myRecipes.map((item,index)=>(
          <MyRecipesComponent 
          label ={item.recipe.label} 
          image={item.recipe.image} 
          cal = {item.recipe.calories} 
          ingredients = {item.recipe.ingredientLines} 
          cuisine = {item.recipe.cuisineType}
          key={index}/>
         ))}
         </div>
         
        </div>
  );
}

export default App;
