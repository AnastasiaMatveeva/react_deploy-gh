
const Footer = ({length}) => {

const toDate = new Date();

  return (
    <footer className="footer">
        <p style = {{margin: "15px", color: "#f60707"}}>
          {length} list {length <= 1 ? 'item' : 'items'}
        </p>
        <p>Copyright {toDate.getFullYear()} </p>

    </footer>
  )
}

export default Footer;






// const Footer = () => {

//     const dateNow = new Date();
//     return(
//         <footer className="footer">
//             <p>Copyright {dateNow.getFullYear()}</p>
//         </footer>
//     )
// }

// export default Footer;