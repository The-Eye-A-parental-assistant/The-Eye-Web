export default function adaptorScreenTime(screenTime) {
    const res = [];
    const keys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const days = {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday'
    }
    for (const day of keys) {
        res.push({ name: days[day], hours: parseFloat((screenTime[day]/3600).toFixed(2)) });
    }
    return res;
}
