import axios from 'axios';

const instanse = axios.create(
    {
        baseURL: process.env.API_BASE_URL
    }
)

console.log("API_BASE_URL:" + process.env.REACT_APP_API_BASE_URL)


type CounterSettingsType = {
    maxValue: number
    startValue: number

}

const APIservice = {
    getCounterSetting() {
        return instanse.get<CounterSettingsType>('/counter-settings').then(res=>res.data)
    },
    updateCounterSetting() {
    },
    // updateCounterSetting() {
    // },
    //
    // updateCounterSetting() {
    // },
    // updateCounterSetting() {
    // },

}