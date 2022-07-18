import create from 'zustand'

export const coffeType = 
  {1:'Americano', 2: 'Espresso', 3 : 'Latte'}

export const coffeBrand = 
  {1: 'StarBucks', 2: 'TwoSome', 3: 'Hollys', 4: 'Ediya'
  ,5: 'TomnToms', 6: 'Pascucci', 7:  'AngelInUs', 8: 'GongCha'
  ,9: 'BlueBottle', 10:'Compose', 11:'Dalkomm', 12:'Mammoth', 13:'MegaCoffee'
  ,14: 'Artisee'}
  
export const coffeeOption = 
 {1:'shots', 2:'whip cream', 3:'milk', 4:'decaf', 5:'drink', 6:'custom'}

export const useDay = create(set => ({
    thisDay : new Date()
    ,changeDay : (input) => set(({thisDay : input}))
  }))

export const monthCoffee = create(set =>({
   thisMonthCoffee : []
   ,addMonthCoffee : (input) => set((state)=> ({thisMonthCoffee : [...state.thisMonthCoffee, {input}]}))
   ,resetMonthCoffee : () => set(()=>({thisMonthCoffee : []}))
}))

export const myCoffee = create(set => ({
      type : coffeType[1]
      ,brand : coffeBrand[1]
      ,options: [false,false,false,false,false,false]
      ,setType : (input) => set(({type : coffeType[input]}))
      ,setBrand : (input) => set(({brand : coffeBrand[input]}))
      ,setOption : (input) => set((state)=> ({options : [...state.options.slice(0,input), ...[!state.options[input]], ...state.options.slice(input+1,state.options.length)]}))
  }))

export const myCoffees = create(set => ({
  coffees : []
  ,addCoffee : (coffee) => set((state) => ({coffees : [...state.coffees, {coffee}]}))
  ,deleteCoffee : (i) => set((state) => ({coffees : state.coffees.filter((item) => item.coffee.srno != i)}))
  ,resetCoffee : () => set(() => ({coffees : []}))
}))

export const modalStyle = {
  overlay: {
      position: 'absolute',
      top: '95px',
      bottom: '70px',
      left: '50%',
      marginLeft: '35px',
      marginRight: 'auto',
      transform: 'translate(-50%, 0%)',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      border: 'none',
  },
  content: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      background: '#fff',
      overflow: 'auto',
      padding: '10px',
      border: 'none',
  }
};