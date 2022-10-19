import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">add item</label>
        <input 
            type="text" 
            id="addItem"
            ref={ inputRef }
            autoFocus
            placeholder="add item"
            required
            value={ newItem }
            onChange={(e)=> setNewItem(e.target.value)}
        />
        <button 
            type="submit"
            onClick={()=>inputRef.current.focus()}
            aria-label="addItem"> 
            <FaPlus />
        </button>
    </form>

  )
}

export default AddItem