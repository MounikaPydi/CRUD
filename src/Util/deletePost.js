import axios from 'axios';
const deletePost = (id) => {
    return new Promise((resolve,reject) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if(res.status > 300){
                reject("error")
            }
            else{
                resolve(res.data)
            }
        })
        .catch(e => reject(e))
    })
}
export default deletePost;