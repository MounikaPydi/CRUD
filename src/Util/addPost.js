import axios from 'axios'
const addPost = (post) =>{
    console.log("printing post"+post.description)
    return new Promise ((resolve,reject) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {...post})
        .then(res => {
            console.log("in addpost method"+res.data)
            if(res.status > 300)
                reject("error")
            else
                resolve(res.data)

        })
       .catch(e => reject(e))

    }
)
}
export default addPost;