import { myCoffee, coffeType, useDay, myCoffees } from '../const/const';
import axios from 'axios';
import EditCoffee from './EditCoffee';

function MakeCoffee(){
  const {type, brand, options} = myCoffee();
  const {coffees, addCoffee} = myCoffees();
  const {thisDay} = useDay();

  const brandPath = "/img/"+brand+".png"
  const typePath = "/img/"+type+".png"

  const addCoffeeOnClick = (e) =>{
    console.log(e)
      
     let year = String(thisDay.getFullYear())
     let month = String((thisDay.getMonth()+1)).padStart(2,'0')
     let date = String(thisDay.getDate()).padStart(2,'0')
     let stringDate = year + month + date

     axios.post('/api/post', {thisDay:stringDate, type, brand, options})
       .then(res => console.log(res.data.test))
       .catch(err => console.log('Login: ', err));
     console.log(stringDate, type, brand, options)

     let maxSrno = 0
     if (coffees.length > 0) {
       maxSrno = (coffees[coffees.length -1].coffee.srno) + 1
      }
     addCoffee({srno:maxSrno,type:type,brand:brand})
     
  }

    return(
        <div>
            <p className="My-coffee">
                <img className= "My-coffee-type" src = {typePath} ></img> 
                <img className= "My-coffee-brand" src = {brandPath} ></img>
            <button onClick = {(e) => addCoffeeOnClick(e)}>Drink Coffee</button></p>
        </div>
    )
}
 export default MakeCoffee