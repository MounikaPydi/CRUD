import axios from 'axios'
const getUsers = () =>{
    return new Promise ((resolve,reject) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if(res.status > 300)
                reject("error")
            else
                resolve(res.data)

        })
       .catch(e => reject(e))

    }
)
}
export default getUsers;