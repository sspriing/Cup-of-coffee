import create from 'zustand'

export const coffeType = 
  {1:'Americano', 2: 'Espresso', 3 : 'Latte'}
export const coffeBrand = 
  {1: 'StarBucks', 2: 'TwoSome', 3: 'Hollys', 4: 'Ediya'
  ,5: 'TomnToms', 6: 'Pascucci', 7:  'AngelInUs', 8: 'GongCha'
  ,9: 'BlueBottle'}

export const useDay = create(set => ({
    thisDay : new Date()
    ,changeDay : (input) => set(({thisDay : input}))
  }))

export const myCoffee = create(set => ({
      type : coffeType[1]
      ,brand : coffeBrand[1]
      ,setType : (input) => set(({type : coffeType[input]}))
      ,setBrand : (input) => set(({brand : coffeBrand[input]}))
  }))