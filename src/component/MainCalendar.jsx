import Calendar from 'react-calendar/dist/umd/Calendar';
import 'react-calendar/dist/Calendar.css';
import { useDay, myCoffees } from '../const/const';
import axios from 'axios';
import {useEffect} from 'react'

function MainCalendar(){
  const {changeDay, thisDay} = useDay();
  const {coffees, addCoffee, resetCoffee} = myCoffees();
  const formatDate = (date)=>{
      var weekday = ["日","月","火","水","木","金","土"]
      return weekday[date.getDay()]
    }
    const formatLabel = (date)=>{
        var tmpdate = new Date() 
        tmpdate = date.date
        var month = tmpdate.getMonth() + 1
        var label = tmpdate.getFullYear() + "年" + month + "月"
        return label
      }
    const onChangeCalendar = (e) =>{
        changeDay(e)    //현재 일자 변경
        resetCoffee()   //coffees 초기화
        
        //thisDay 의 커피 리스트 조회
        let year = String(e.getFullYear())
        let month = String((e.getMonth()+1)).padStart(2,'0')
        let date = String(e.getDate()).padStart(2,'0')
        let stringDate = year + month + date

        axios.get('/api/get', {
            params: {
              thisDay:stringDate
            },
          }).then((res)=>{ res.data.result.rows.map(x =>addCoffee({srno:x[2],type:x[3],brand:x[4]}))})
             .catch(err => console.log('Login: ', err));
    }

    useEffect(() => {
      onChangeCalendar(thisDay)
    }, []);
    return(
        <div>
            <p>
                <Calendar className = "My-calendar" calendarType = "US" 
                    onChange = {(e)=> onChangeCalendar(e)}
                    locale = "en-EN"
                    formatShortWeekday = {(locale, date) => formatDate(date)}
                    navigationLabel ={(date, label) => formatLabel(date)}
                    defaultValue = {thisDay}
                ></Calendar>
            </p>
        </div>
    )
}
 export default MainCalendar