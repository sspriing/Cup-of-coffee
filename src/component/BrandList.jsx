import { coffeBrand , myCoffee } from "../const/const"

function BrandList(){
    const {setBrand} = myCoffee()
    const editLogo = (value) => {
        setBrand(value)
    }
    return (
        <div className="Brand-list">
            {Object.entries(coffeBrand).map((key, value)=>(
                <img className="Brand-icon" src = {"img/"+coffeBrand[value+1]+".png"} 
                        onClick={(e) =>{editLogo(value+1)}}></img>
            ))}
        </div>
    )
}

export default BrandList