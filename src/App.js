import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Recipes from "./Components/Recipes";

import Axios from "axios";
function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "383cdaba";
  const APP_KEY = "fff8eb13583b66f6af06dedac4714212";

  useEffect(async () => {
    await getRecipes();
  }, []);

  const getRecipes = async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(result.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () =>{
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} 
        onSearchClick = {onSearchClick}
      />
      <div className='container'>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
