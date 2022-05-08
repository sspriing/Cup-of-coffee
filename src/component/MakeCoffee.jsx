import { myCoffee, coffeType, useDay } from '../const/const';

function MakeCoffee(){
  const {type, brand} = myCoffee();
  const {thisDay} = useDay();

  const brandPath = "/img/"+brand+".png"
  const typePath = "/img/"+type+".png"

//   console.log(jsonCoffee)

  const addCoffee = (e) =>{
    //   localStorage.setItem(thisDay, JSON.stringify({type:type, brand:brand}))
    //   console.log(localStorage.getItem(thisDay))
  }

    return(
        <div>
            <p className="My-coffee">
                <img className= "My-coffee-type" src = {typePath} ></img> 
                <img className= "My-coffee-brand" src = {brandPath} ></img>
            </p>
            <p><button onClick = {(e) => addCoffee(e)}>Add Coffee</button></p>
            {/* {(localStorage.getItem(thisDay))} */}
        </div>
    )
}
 export default MakeCoffee