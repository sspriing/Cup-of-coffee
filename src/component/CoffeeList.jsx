import { useDay, myCoffee, tabOnClick, myCoffees } from '../const/const';
import axios from 'axios';
import BrandList from './BrandList';

// Tab # 1
function CoffeeList() {
  const {thisDay} = useDay();
  const {type, brand, setType, setBrand} = myCoffee();
  const {coffees, deleteCoffee} = myCoffees();
  const {setTab} = tabOnClick();

  const deleteOnClick = (i)=>{
      
    //thisDay 의 커피 리스트 조회
    let year = String(thisDay.getFullYear())
    let month = String((thisDay.getMonth()+1)).padStart(2,'0')
    let date = String(thisDay.getDate()).padStart(2,'0')
    let stringDate = year + month + date

    axios.post('/api/delete', {
        params: {
          thisDay:stringDate,
          srno : i
        },
      }).then((res)=>{ res.data.result == "success" ? console.log(i) : console.log("fail")})

    deleteCoffee(i)
  }

    return(
        <div className='My-coffee-list'>
            {coffees.map((x, i)=>(
                // console.log(x.coffee.brand)
                <span className='My-coffee'>
                    <img className="My-coffee-type" src = {"img/"+x.coffee.type+".png"} 
                        onClick={(e) =>{}}></img>
                    <img className="My-coffee-brand" src = {"img/"+x.coffee.brand+".png"} 
                        onClick={(e) =>{}}></img>     
                    <button className = "Delete-button" onClick = {(e) => deleteOnClick(x.coffee.srno)}>x</button>  
                </span>
            ))}
            <button onClick = {(e)=> setTab(2)}>DRINK</button>
        </div>
    )
}
 export default CoffeeList