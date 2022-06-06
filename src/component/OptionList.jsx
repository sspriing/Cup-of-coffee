import { myCoffee, coffeeOption } from '../const/const';
import create from 'zustand';


function OptionList() {
  const {options, setOption} = myCoffee()
  const  check =(value) => {
      setOption(value)
  }
  
    return(
        <div>
            <p>
                Option : <br/>
            <div className="Option-list">
                {Object.entries(coffeeOption).map((key, value)=>(
                  coffeeOption[value+1] != "custom"?
                    <fragment>{coffeeOption[value+1]} <input type = "checkbox" name="option" onClick={(e)=>check(value)} checked={options[value]} ></input></fragment>
                    :
                    <fragment>
                      {coffeeOption[value+1]} <input type = "checkbox" name="option" onClick={(e)=>check(value)} checked={options[value]} ></input>
                      <input type = "text" hidden={!options[value]}></input>
                    </fragment>
                ))}
            </div>
            </p>
        </div>
    )
}
 export default OptionList