import axios from 'axios'
const url = 'http://localhost:5000'


export const fetchEntries = async () => {
    try{
        const response = await axios.get(`${url}/entries`)
        if (await response.data.length > 0) {
            return response.data;
        }
    }   
    catch(error){
        console.log(error);
    }
}

export const postEntry = async (body) => {
    try{
        await axios.post(`${url}/entries/add`, body)
    }
    catch(error){
        console.log(error);
    }
}

export const getCategory = async () => {
    try{
        const response = await axios.get(`${url}/category`)
        if (await response.data.length > 0) {
            return response.data;
        }
    }
    catch(error){
        console.log(error);
    }
}