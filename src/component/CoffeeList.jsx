import { useDay, myCoffee, coffeType, myCoffees } from '../const/const';
import BrandList from './BrandList';

function CoffeeList() {
  const {thisDay} = useDay();
  const {type, brand, setType, setBrand} = myCoffee();
  const {coffees} = myCoffees();
    return(
        <div className='My-coffee-list'>
            {coffees.map((x)=>(
                // console.log(x.coffee.brand)
                <span>
                    <img className="My-coffee-type" src = {"img/"+x.coffee.type+".png"} 
                        onClick={(e) =>{}}></img>
                    <img className="My-coffee-brand" src = {"img/"+x.coffee.brand+".png"} 
                        onClick={(e) =>{}}></img>     
                    <button>x</button>  
                </span>
            ))}
        </div>
    )
}
 export default CoffeeList