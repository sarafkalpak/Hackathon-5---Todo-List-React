
import React,{useState} from "react";
import "./../styles/App.css";
import ListItem from "./ListItem";
// todod
function App() 
{
	const [items,setItems] = useState([]);
	const [newItem, setNewItem] = useState("");

	const addItem = () => {
		items.push(newItem);
		setItems([...items])
		setNewItem("");

	}
	const NewItemChanged = (evt) => {
		setNewItem(evt.target.value)
	}
	const deleteHandler = (index) => {
		items.splice(index, 1);
		setItems([...items])
	}
	const editHandler = (editedvalue, index) => {
		items[index] = editedvalue;
		setItems([...items])
	}
	return (
	<div id="main">
	  <textarea  id="task" onChange={NewItemChanged}
	   placeholder="New Item" 
	   value={newItem}></textarea>
	  <button id="btn" onClick={addItem} disabled={newItem.trim().length === 0}>Add Item</button>
	  {items.map((item,idx) => (
		  <ListItem item={item} key={`${item}_${idx}`} idx={idx} 
		  editHandler={editHandler}
		  deleteHandler={deleteHandler}/>
	  ))}
	</div>
	);
}


export default App;
