import axios from 'axios';

const instanse = axios.create(
    {
        baseURL: process.env.REACT_APP_API_BASE_URL
    }
)

console.log("API_BASE_URL:" + process.env.REACT_APP_API_BASE_URL)


export type CounterSettingsType = {
    maxValue: number
    startValue: number
    memoryValue: number
}

export const  APIservice = {
    getCounterSetting() {
        return instanse.get<CounterSettingsType>('/counter-settings').then(res=>res.data)
    },
    updateCounterStartValue(val:number) {
        return instanse.patch<{startValue: number}>(`/counter-settings`,
            {
                "startValue": val
            })
            .then(res=>
            {
                return res.data})
    },
    updateCounterMaxValue(val:number) {
        return instanse.patch<{maxValue: number}>(`/counter-settings`,
            {
                "maxValue": val
            })
            .then(res=>res.data)
    },
    // updateCounterMemoryValue(val:number) {
    //     return instanse.patch<{memoryValue: number}>(`/counter-settings`,
    //         {
    //             "memoryValue": val
    //         })
    //         .then(res=>res.data)
    // },

    updateCounterMemoryValue : async function (val:number) {
        const promise =await instanse.patch<{memoryValue: number}>(`/counter-settings`,
            {
                "memoryValue": val
            });
        return promise.data
    },

}