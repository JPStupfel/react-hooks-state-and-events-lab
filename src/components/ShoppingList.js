import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [displayItems, setDisplayItems] = useState(items)
  function handleFilter(event){
    const newDisplayArray = event.target.value==='All'? [...items] : items.filter(e=>e.category===event.target.value)
    setDisplayItems(newDisplayArray)
  }
  return (
    <div className="ShoppingList" onChange={handleFilter}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
//make state array for display items

//make function to handleFilter that setDisplayItems
//add onChange with handleFilter to the ShoppingList div