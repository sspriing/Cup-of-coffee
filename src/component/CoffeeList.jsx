import { useDay, myCoffee, tabOnClick, myCoffees } from '../const/const';
import create from 'zustand';
import axios from 'axios';
import BrandList from './BrandList';
import { Fragment } from 'react';

// Tab # 1

const cardFlip= create(set=>({
   backCard : -1
  ,flipCard : (i) => set(state=>(i==state.backCard?{backCard:-1}:{backCard: i}))
}))

function CoffeeList() {
  const {thisDay} = useDay();
  const {type, brand, setType, setBrand} = myCoffee();
  const {coffees, deleteCoffee} = myCoffees();
  const {setTab} = tabOnClick();
  const {backCard, flipCard} = cardFlip();

  // 커피 카드 클릭시 Flip 효과와 함께 상세정보 노출
  const showDetail = (i)=>{
    console.log(coffees[i].coffee.brand, coffees[i].coffee.type, coffees[i].coffee.options )
  }
  // 커피 삭제.
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
      <Fragment>
        <div className='My-coffee-list'>
            {coffees.map((x, i)=>(
                <div className='Coffee-card'>
                  <div className='Coffee-card-inner' onClick = {(e)=>{flipCard(i)}}>
{backCard!=i?
                    <span className='My-coffee-front' onClick = {(e) =>{showDetail(i)}}>
                        <img className="My-coffee-type" src = {"img/"+x.coffee.type+".png"} 
                            onClick={(e) =>{}}></img>
                        <img className="My-coffee-brand" src = {"img/"+x.coffee.brand+".png"} 
                            onClick={(e) =>{}}></img>     
                        <div className = "Delete-button" onClick = {(e) => deleteOnClick(x.coffee.srno)}>x</div>  
                    </span>:
                    <span className='My-coffee-back'>
                      <div>{x.coffee.brand}</div>
                      <div>{x.coffee.type}</div>
                    </span> }
                  </div>
                </div>
            ))}
        </div>
        
        <button className='Drink-coffee' onClick = {(e)=> setTab(2)}>Go To Drink</button>
      </Fragment>
    )
}
 export default CoffeeList