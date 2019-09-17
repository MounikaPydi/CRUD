import axios from 'axios'
import { reject } from 'q';
const getSinglePost = (id) => {
    return new Promise((resolve,reject) => 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if(res.status > 300){
                reject("error")
            }
            else{
                resolve(res.data)
            }
        })
        .catch(e => reject(e))
)
}
export default getSinglePost;