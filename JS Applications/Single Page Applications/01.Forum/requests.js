import {htmlForPost} from './utility.js'

export async function makingNewPost(headers){
    try{
        const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    
        const response = await fetch(url, headers)    
        const data = await response.json()

        return data

    }catch (error){
        alert(`Error: ${error.message}`)
    }
}
