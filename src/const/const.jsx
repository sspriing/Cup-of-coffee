import create from 'zustand'

/**
 * @typedef {Object} coffeeType
 * 커피 종류
 * { ex> 아메리카노, 라떼..}
 */
export const coffeType = 
  {1:'Americano', 2: 'Espresso', 3 : 'Latte'}

/**
 * @typedef {Object} coffeBrand
 * 커피 브랜드
 * { ex> 스타벅스, 투썸..}
 */
export const coffeBrand = 
  {1: 'StarBucks', 2: 'TwoSome', 3: 'Hollys', 4: 'Ediya'
  ,5: 'TomnToms', 6: 'Pascucci', 7:  'AngelInUs', 8: 'GongCha'
  ,9: 'BlueBottle', 10:'Compose', 11:'Dalkomm', 12:'Mammoth', 13:'MegaCoffee'
  ,14: 'Artisee'}

/**
 * @typedef {Object} coffeeOption
 * 커피 옵션
 * { ex> 샷 추가, 휘핑 크림..}
 */
export const coffeeOption = 
 {1:'shots', 2:'whip cream', 3:'milk', 4:'decaf', 5:'drink', 6:'custom'}

/**
 * 선택 날짜 관리 객체
 * @params thisDay - 선택된(or 현재) 일자
 * @params changeDay(Date date1) - date1 을 thisDay로 지정 
 */
export const useDay = create(set => ({
    thisDay : new Date()
    ,changeDay : (input) => set(({thisDay : input}))
  }))

/**
 * @typedef {myCoffee} myCoffee
 * type - 커피 타입
 * brand - 커피 브랜드
 * options - 커피 옵션
 */
 export const myCoffee = create(set => ({
  type : coffeType[1]
  ,brand : coffeBrand[1]
  ,options: [false,false,false,false,false,false]
  ,setType : (input) => set(({type : coffeType[input]}))
  ,setBrand : (input) => set(({brand : coffeBrand[input]}))
  ,setOption : (input) => set((state)=> ({options : [...state.options.slice(0,input), ...[!state.options[input]], ...state.options.slice(input+1,state.options.length)]}))
}))


/**
 * 월별 커피 리스트 관리 객체
 * @params thisMonthcoffee - 커피 리스트
 * @params addMonthCoffee(myCoffee) - myCoffee 를 thisMonthCoffee 에 append
 * @params resetMonthCoffee() - 커피 리스트 초기화
 */
export const monthCoffee = create(set =>({
   thisMonthCoffee : []
   ,addMonthCoffee : (input) => set((state)=> ({thisMonthCoffee : [...state.thisMonthCoffee, {input}]}))
   ,resetMonthCoffee : () => set(()=>({thisMonthCoffee : []}))
}))


export const myCoffees = create(set => ({
  coffees : []
  ,addCoffee : (coffee) => set((state) => ({coffees : [...state.coffees, {coffee}]}))
  ,deleteCoffee : (i) => set((state) => ({coffees : state.coffees.filter((item) => item.coffee.srno != i)}))
  ,resetCoffee : () => set(() => ({coffees : []}))
}))

export const tabOnClick= create(set=>({
  tab : 1
  ,setTab : (input)=>set(state=>({tab: input}))
}))

export const modalOnClick = create(set => ({
  modal : false
  ,openModal : ()=>set(state=>({modal : true}))
  ,closeModal : ()=>set(state=>({modal : false}))
}))

export const cardFlip= create(set=>({
  backCard : -1
 ,flipCard : (i) => set(state=>(i==state.backCard?{backCard:-1}:{backCard: i}))
}))
