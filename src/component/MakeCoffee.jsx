import { myCoffee, coffeType, useDay } from '../const/const';
import axios from 'axios';

function MakeCoffee(){
  const {type, brand} = myCoffee();
  const {thisDay} = useDay();

  const brandPath = "/img/"+brand+".png"
  const typePath = "/img/"+type+".png"

  const addCoffee = (e) =>{
     axios.get('/api/get').then((res)=>{console.log(res.data.test)});
      
      axios.post('/api/post', {thisDay, type, brand})
       .then(res => console.log(res.data.test))
       .catch(err => console.log('Login: ', err));
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