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
            Brand<button className={fold?"arrowRight":"arrowDown"} onClick={setFold}></button> 
            <div className="Selected-brand" hidden= {!fold}>{brand}</div>
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