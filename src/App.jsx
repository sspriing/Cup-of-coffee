import './App.css'
import React from 'react'
import MainCalendar from './component/MainCalendar';
import EditCoffee from './component/EditCoffee';
import MakeCoffee from './component/MakeCoffee';
import CoffeeList from './component/CoffeeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainCalendar></MainCalendar>
        <CoffeeList></CoffeeList>
        <EditCoffee></EditCoffee>
        <MakeCoffee></MakeCoffee>
        {/* {aa} */}
      </header>
    </div>
  )
}

export default App