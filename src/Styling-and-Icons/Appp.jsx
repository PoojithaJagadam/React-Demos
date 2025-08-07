
import "./index.css";
import { FaCartArrowDown } from "react-icons/fa";
import { GiSlicedBread } from "react-icons/gi";
const Appp = () => {
//   return (
//     <section> //Inline Css we use style attribute with {{}}
//         <h1 style = {{color: 'red', backgroundColor : 'black', padding : '2rem'}}>Inline Styling</h1>
//     </section>
//   )

//Another way of styling using js object
    /*const styles = {
        color: 'red',
        backgroundColor : 'black',
        padding : '2rem'};
    return (
        <h1 style = {styles}>Inline Styling using Javascript variable</h1>
    ) */

//using external file

   /* return (
        <section>
        <h1>Separate file for Styling</h1>
        </section>
    ) */

/*icons embedded in our page by following below steps
    1. npm install react-icons --save
    2. open react-ions website and check for the icon and copy and past the code i.e import (1st line)
    3. in return section return the component with that name mentioned below
*/
    return <div>
        <FaCartArrowDown />
        <GiSlicedBread />

    </div>
}

export default Appp