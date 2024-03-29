import { useDay, myCoffee, coffeType } from '../const/const';
import BrandList from './BrandList';
import OptionList from './OptionList';

function EditCoffee() {
  const {thisDay} = useDay();
  const {type, brand, setType, setBrand} = myCoffee();
    return(
        <div className='Edit-coffee'>
            {/* <p>Coffee of {thisDay.getFullYear()}년 {thisDay.getMonth()+1}월 {thisDay.getDate()}일</p>
            <p>{type} from {brand}</p> */}
            <p>Type : 
                <select id = "coffee-type" onChange={(e) =>{setType(e.target.value)}}>
                    {Object.entries(coffeType).map((key, value)=>(<option value = {value + 1}>{coffeType[value+1]}</option>))}
                </select>
                </p>
            <p><BrandList></BrandList></p>
            <p><OptionList></OptionList></p>
        </div>
    )
}
 export default EditCoffee