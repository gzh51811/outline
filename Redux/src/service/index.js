import axios from 'axios';
export function getData(url,params){
    return axios.get(url,{
        params
    })
}