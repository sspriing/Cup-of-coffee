import { Fragment } from 'react';
import Modal from 'react-modal'
import create from 'zustand';
import { modalStyle } from '../const/const';
import CoffeeList from './CoffeeList';
import EditCoffee from './EditCoffee';
import MakeCoffee from './MakeCoffee'

const tabOnClick= create(set=>({
    tab : 1
    ,setTab : (input)=>set(state=>({tab: input}))
}))

const modalOnClick = create(set => ({
    modal : false
    ,openModal : ()=>set(state=>({modal : !state.modal}))
}))

function CoffeeTab(){
    const {tab, setTab} = tabOnClick()
    const {modal, openModal} = modalOnClick()
    return(
        <div className='-box'>
            <button className='Tab-button' onClick={(e)=>{setTab(1), openModal()}}>Drink</button>
            <button className='Tab-button'onClick={(e)=>{setTab(2), openModal()}}>List</button>
            <Modal isOpen = {modal} onRequestClose = {(e)=>openModal()} style = {modalStyle} >
                {tab==1?<Fragment><EditCoffee></EditCoffee><MakeCoffee></MakeCoffee></Fragment>:<CoffeeList></CoffeeList>}
            </Modal>
        </div>
    )
}

export default CoffeeTab;