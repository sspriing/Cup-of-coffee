import create from 'zustand';
import Modal from 'react-modal'

function CoffeeModal(){
    const {tab, setTab} = tabOnClick()
    return(
        <div className='-box'>
            <button className='Tab-button' onClick={(e)=>setTab(1)}>Drink</button>
            <button className='Tab-button'onClick={(e)=>setTab(2)}>List</button>
            <Fragment>
                {/* {tab==1?<Fragment><EditCoffee></EditCoffee><MakeCoffee></MakeCoffee></Fragment>:<CoffeeList></CoffeeList>} */}
            </Fragment>
        </div>
    )
}

export default CoffeeModal;