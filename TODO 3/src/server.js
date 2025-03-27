import axios from "axios"

const API = "http://localhost:3000/todos"


async function postTodo(obj){
    try {
        await axios.post(API, obj)
    } catch (error) {
        confirm.log(error)
    }
}


export {postTodo}