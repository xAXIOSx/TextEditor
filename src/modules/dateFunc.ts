import { ref } from "vue";

const dateFunc = () => {
    let nowDate = new Date()
    let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    let daysObject = { 'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6 }

    let time = ref(`${nowDate.getHours()}:${nowDate.getMinutes()}`)
    let month = ref(monthArr[nowDate.getUTCMonth()])
    let currentDate = ref(`${month.value} ${Object.keys(daysObject)[nowDate.getDay()]} ${nowDate.getFullYear()} ${time.value}`)

    return { time, month, currentDate }
}

export default dateFunc