import { onUnmounted, onMounted, ref } from "vue"
import moment from 'moment'

export default function useTableData() {
    const time = ref()
    const dataSource = ref()
    
    onMounted(() => {
        getCommemorativeTime()
    })

    onUnmounted(() => clearInterval(time.value))

    const getCommemorativeTime = () => {
        setInterval(() => {
            time.value = moment().diff(moment('2019-06-15 14:15:24'), 'seconds')
            let duration = moment.duration(time.value, 'seconds');
            dataSource.value = moment({y: duration.years(), M: duration.months(), D: duration.days(), h: duration.hours(), m: duration.minutes(), s: duration.seconds()}).format('y年M月D天h小时m分钟s秒')
        }, 1000)
    }

    return {
        dataSource
    }
}