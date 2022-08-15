import { Fragment } from 'react';
import create from 'zustand';
import CoffeeList from './CoffeeList';
import EditCoffee from './EditCoffee';
import MakeCoffee from './MakeCoffee'
import { useDay } from '../const/const';

const tabOnClick= create(set=>({
    tab : 1
    ,setTab : (input)=>set(state=>({tab: input}))
}))

const modalOnClick = create(set => ({
    modal : false
    ,openModal : ()=>set(state=>({modal : true}))
    ,closeModal : ()=>set(state=>({modal : false}))
}))

function CoffeeTab(){
    const {tab, setTab} = tabOnClick()
    const {modal, openModal, closeModal} = modalOnClick()
    const {thisDay} = useDay();
    return(
        <div className='Tab'>
            <button className='Tab-button' onClick={(e)=>{setTab(1), openModal()}}>Drink</button>
            <button className='Tab-button'onClick={(e)=>{setTab(2), openModal()}}>List</button>
            <div className = {modal? 'Modal-back': 'Modal-close'} onClick={(e)=>{closeModal()}}>
                <div className= {modal? 'Modal-open':'Modal-close'} onClick={(e)=>{e.stopPropagation()}} >
                    <div className='Modal-body'>
                            <p>{thisDay.getFullYear()}年 {thisDay.getMonth()+1}月 {thisDay.getDate()}日</p>
                        {tab==1?<Fragment><MakeCoffee></MakeCoffee></Fragment>:<CoffeeList></CoffeeList>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeTab;