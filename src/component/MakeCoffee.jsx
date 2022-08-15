import { myCoffee, coffeType, useDay, myCoffees } from '../const/const';
import create from 'zustand';
import axios from 'axios';
import EditCoffee from './EditCoffee';
import Loading from './Loading';
import { tabOnClick } from '../const/const';

// Tab # 2

const onLoading= create(set=>({
  loading : false
  ,onLoad : () => set(state=>({loading: true}))
  ,endLoad : () => set(state=>({loading:false}))
}))

function MakeCoffee(){
  const {type, brand, options} = myCoffee();
  const {coffees, addCoffee} = myCoffees();
  const {thisDay} = useDay();
  const {loading, onLoad, endLoad} = onLoading();
  const {setTab} = tabOnClick(); 

  const brandPath = "/img/"+brand+".png"
  const typePath = "/img/"+type+".png"

  const addCoffeeOnClick = (e) =>{
    console.log(e)
    onLoad()
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
     endLoad()
  }

    return(
        <div>
            {loading? <Loading></Loading>:null}
            <p className="My-coffee">
                <img className= "My-coffee-type" src = {typePath} ></img> 
                <img className= "My-coffee-brand" src = {brandPath} ></img>
            </p>
            <EditCoffee></EditCoffee>
            <button className='Drink-coffee' onClick = {(e) => addCoffeeOnClick(e)}>Drink Coffee</button>
            <button onClick = {(e)=> setTab(1)}>LIST</button>
        </div>
    )
}
 export default MakeCoffee