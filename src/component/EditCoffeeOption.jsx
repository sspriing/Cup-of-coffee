import { useDay, myCoffee, coffeType } from '../const/const';
import BrandList from './BrandList';

function EditCoffeeOption() {
  const {thisDay} = useDay();
  const {type, brand, setType, setBrand} = myCoffee();
  let customYN = true
  const customOnClick = (e) =>{
    customYN = false
  }
    return(
        <div>
            <p>
                Option : <br/>
                Double shot <input type = "checkbox"></input>
                Whipping Cream<input type = "checkbox"></input>
                Decaf<input type = "checkbox"></input>
                Milk<input type = "checkbox"></input>
                Drink<input type = "checkbox"></input>
                Custom<input type = "checkbox" onChange={(e)=> customOnClick(e)}></input>
                <input type = "text" hidden={customYN}></input>
            </p>
        </div>
    )
}
 export default EditCoffeeOption