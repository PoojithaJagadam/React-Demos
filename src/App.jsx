/*const App = () => {
  return <section>hello</section>
}
export default App; */

import CardParent from "./Components/CardParent";
import Loop from "./Components/Loop";
import Person from "./Components/Person";
import Prod from "./Components/Product";
import ProductList from "./Components/ProductList";
import Props from "./Components/Props";
import UserList from "./Components/UserList";

/*import Greet from "./Components/Greet";
import Loop from "./Components/Loop";
import ProductInfo from "./Components/ProductInfo"; */
//when we create  component first letter should be upppercase remaining should be anything

function App() {
  //Expressions
  /*const name = "Poojitha"
  const multiply = (a,b) => a*b;
  //it evaluates the expression written inside {} and gives the result
     return <section>
    <p>2 + 2 ={2 + 2}</p>
    <h1>{name}</h1>
    <p> My friends list: {['Hari', 'Giri','Siri']} </p>
    <p>2 * 3 = {multiply(2,3)}</p>
  </section>
} */

   /* return <div>
      
    <UserList />
    <ProductList />
    <Props />
    <Person />
    <Prod />


    </div>*/
    return <div>
      <CardParent />
    </div>
    
}
export default App; //we can use this component in other part  