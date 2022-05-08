import Calendar from 'react-calendar/dist/umd/Calendar';
import 'react-calendar/dist/Calendar.css';
import { useDay } from '../const/const';

function MainCalendar(){
  const {changeDay, thisDay} = useDay();
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
    console.log(thisDay.getMonth())
    return(
        <div>
            <p>
                <Calendar className = "My-calendar" calendarType = "US" onChange = {(e)=> changeDay(e)}
                    locale = "en-EN"
                    formatShortWeekday = {(locale, date) => formatDate(date)}
                    navigationLabel ={(date, label) => formatLabel(date)}
                ></Calendar>
            </p>
        </div>
    )
}
 export default MainCalendar