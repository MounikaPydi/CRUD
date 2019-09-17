import axios from 'axios'
const editPost = (post,id) => {
    return new Promise((resolve,reject) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{...post})
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
export default editPost;