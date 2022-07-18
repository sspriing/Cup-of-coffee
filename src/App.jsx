import './App.css'
import React from 'react'
import MainCalendar from './component/MainCalendar';
import EditCoffee from './component/EditCoffee';
import MakeCoffee from './component/MakeCoffee';
import CoffeeList from './component/CoffeeList';
import CoffeeTab from './component/CoffeeTab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainCalendar></MainCalendar>
        {/* <CoffeeList></CoffeeList>
        <EditCoffee></EditCoffee>
        <MakeCoffee></MakeCoffee> */}
        <CoffeeTab></CoffeeTab>
        {/* {aa} */}
      </header>
    </div>
  )
}

export default App