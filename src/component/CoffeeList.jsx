import { useDay, myCoffee, tabOnClick, myCoffees, cardFlip } from '../const/const';
import axios from 'axios';
import { Fragment } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Tab # 1

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
      }).then((res)=>{ res.data.result == "success" ? toast.error('Coffee Deleted', {transition:Flip}) : console.log("delete fail")})

    deleteCoffee(i)
  }

    return(
      <Fragment>
        <div className='My-coffee-list'>
            {coffees.map((x, i)=>(
                <div className='Coffee-card'>
                  <div className='Coffee-card-inner' onClick = {(e)=>{flipCard(i)}}>
                  {
                   backCard!=i?
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
                    </span> 
                  }
                  </div>
                </div>
            ))}
        </div>
        
        <button className='Drink-coffee' onClick = {(e)=> setTab(2)}>Go To Drink</button>
        <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover={false}
         />
      </Fragment>
    )
}
 export default CoffeeList