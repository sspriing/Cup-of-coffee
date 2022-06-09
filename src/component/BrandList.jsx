import { coffeBrand , myCoffee } from "../const/const"
import create from 'zustand'

const foldOnClick = create(set => ({
    fold : true
    ,setFold : () => set(state=>({fold : !state.fold}))
}))

function BrandList(){
    const {brand, setBrand} = myCoffee()
    const {fold,setFold} = foldOnClick()

    const editLogo = (value) => {
        setBrand(value)
        setFold()
    }

    return (
        <div>
            Brand : 
            <div className="Selected-brand" hidden= {!fold}  onClick={setFold}>{brand} <button className={fold?"arrowRight":"arrowDown"}></button>  </div>
            <div className="Brand-list" hidden={fold}>
                {Object.entries(coffeBrand).map((key, value)=>(
                    <img className="Brand-icon" src = {"img/"+coffeBrand[value+1]+".png"} 
                            onClick={(e) =>{editLogo(value+1)}}></img>
                ))}
            </div>
        </div>
    )
}

export default BrandList