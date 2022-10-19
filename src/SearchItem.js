
// const SearchItem = ({searchItem, setSearchItem}) => {
//   return (
//     <form 
//         className="searchForm" 
//         onSubmit={(e) => e.preventDefault()}>
//         <input 
//         type="text" 
//         id="search" 
//         role="searchbox" 
//         placeholder="search item"
//         value={searchItem}
//         onChange={(e)=>setSearchItem(e.target.value)}
//         />
//     </form>
//   )
// }

// export default SearchItem

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text"
          id="search"
          role="searchbox"
          placeholder="search item"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />

    </form>
  )
}

export default SearchItem