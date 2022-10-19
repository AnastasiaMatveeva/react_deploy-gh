import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
        {items.length ? (
       <ItemList 
       items = {items}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
       />
        ) : (
            <p className='empty'>Your list is empty</p>
        )
        }
    </main>
  )

}

export default Content




// import { FaTrashAlt } from 'react-icons/fa';

// const Content = ({items, handleChacked, handleDelete}) => {
//     return(
//         <main>
//             <h2> Content</h2>
//             {items.length ? (<ul>
//                 {items.map(item => {
//                     return(
//                         <li  
//                         className="item"
//                         key={item.id}>
//                         <input 
//                         type="checkbox" 
//                         checked={item.checked}
//                         onChange={() => handleChacked(item.id)}/>
//                         <label>{item.item}</label>
//                         <FaTrashAlt 
//                             role="button"
//                             tabIndex={0}
//                             onClick={()=>handleDelete(item.id)}
//                         />
//                     </li>
//                     )
//                 })}
//             </ul> )
//             : ( 
//             <p className='empty'>Your list is empty</p>)}
            
//         </main>
//     )

// }
// export default Content;