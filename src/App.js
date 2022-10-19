import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useState, useEffect } from 'react';
import "./index.css";

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList'))||[]);

  //useEffect
  //console.log('beforeLoading');

  useEffect(()=>{
    //console.log('insteadLoading');  
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  //console.log('afterLoading');

  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');

 
  const addItem = (item) => {
      console.log(item);
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id, checked: false, item};
      const listItems = [...items, myNewItem];
      setItems(listItems);
  }


  const handleCheck = (id) => {
    //console.log(`key: ${id}`);
    const listItems = items.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
    );
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  // handleChangeName();

  return (
    <div className="App">
        <Header title = "Todo List"/>
        <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
        />
        <SearchItem 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
        />
        <Content 
          items={items.filter(item => (item.item)
            .toLowerCase().includes(searchItem.toLowerCase())
            )}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
        <Footer length = {items.length}/>
    </div>
  );
}

export default App;










