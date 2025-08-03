import React from 'react'

const Props = () => {
  return (
    <Users 
    img ="https://images.app.goo.gl/wkTdVupZRzqUpTz89"
    name = "Hellooo" age={22} isMarried = {true} Hobbies = {['Reading', 'Sleeping','Eating']}/>
  )
}

/*const Users = (props) => {
    return (<div>
        <img src={props.img} alt={props.name} width = {200}/>
        <h1>Name : {props.name}</h1>
        <h1>Age : {props.age}</h1>
        <h1>Married : {props.isMarried}</h1>
        <h1>Hobbies : {props.Hobbies}</h1>
    </div> )
} */
//now destructuring
 const Users = ({img,name,age,isMarried, Hobbies}) => {
    return (<section>
        <img src={img} alt={name} width = {200}/>
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
        <h1>Married : {isMarried}</h1>
        <h1>Hobbies : {Hobbies}</h1>
    </section> )
}    
export default Props