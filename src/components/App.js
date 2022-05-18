import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [dark, setDark] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = dark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>setDark((dark)=>!dark)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

//add event listener to DarkMode button
//make DarkMode state hook
//set dom content to darkmode default state, color
//make toggleDarkMode callback function to seDarkmode?
//set button text to opposite.