

function MyRecipesComponent({label, image, cal, ingredients, cuisine}){

    return(
        <div  className="list">
            <div className="container">
                <h2 className="darkGreenText">{label}</h2>
            </div>
           
            <div className="container">
                <img className="searchImg" src={image} alt="recipe" width='200px' height='200px'/>
            </div>
             { <ul className="itemContainer">
                 {ingredients.map((element,index)=>
                     (<li key={index}> 
                         <span>🔹  </span>
                         {element}
                      </li>))}
            </ul> } 
           
            <hr/>
             
            <div className="container">
                <p className="upperCase">{cuisine} cuisine </p>
                <p className="greenText"> | </p>
                <p>{cal.toFixed()} Kcal</p>
            </div>
         
             <hr/>
            </div>
    )
}

export default MyRecipesComponent;