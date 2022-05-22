import { myCoffee, coffeType, useDay } from '../const/const';
import axios from 'axios';

function MakeCoffee(){
  const {type, brand} = myCoffee();
  const {thisDay} = useDay();

  const brandPath = "/img/"+brand+".png"
  const typePath = "/img/"+type+".png"

  const addCoffee = (e) =>{
      
     let year = String(thisDay.getFullYear())
     let month = String((thisDay.getMonth()+1)).padStart(2,'0')
     let date = String(thisDay.getDate()).padStart(2,'0')
     let stringDate = year + month + date
     axios.post('/api/post', {thisDay:stringDate, type, brand})
       .then(res => console.log(res.data.test))
       .catch(err => console.log('Login: ', err));
     console.log(stringDate, type, brand)
  }

    return(
        <div>
            <p className="My-coffee">
                <img className= "My-coffee-type" src = {typePath} ></img> 
                <img className= "My-coffee-brand" src = {brandPath} ></img>
            </p>
            <p><button onClick = {(e) => addCoffee(e)}>Add Coffee</button></p>
        </div>
    )
}
 export default MakeCoffee