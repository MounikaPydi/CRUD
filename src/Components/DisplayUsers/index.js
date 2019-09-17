import React, {Component} from 'react';
import axios from 'axios'
import getUsers from '../../Util/getUsers';
import addPost from '../../Util/addPost';
import deletePost from '../../Util/deletePost';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class DisplayUsers extends Component{
    constructor(){
        super()
        
        this.state = {
            userId:'',
            id:'',
            title:'',
            description:'',
            users : []
        }
    }

    handleIdChange = (e) => {
        const id1 = e.target.value;
        this.setState({id:id1})
    }

    handleUserIdChange = (e) => {
        const id1 = e.target.value;
        this.setState({userId:id1})
    }

    handleTitleChange = (e) => {
        const id1 = e.target.value;
        this.setState({title:id1})
    }

    handleDescriptionChange = (e) => {
        const id1 = e.target.value;
        this.setState({description:id1})
    }

    handleClick = () => {
        const { userId, title, description } = this.state;
        const post = {
            userId,
            title,
            description
        }
        addPost(post).then(res => {
            console.log("result on adding post "+res)
        })
    }

    handleDelete = (id) => {
        console.log("deleting the id"+id)
        deletePost(id).then(res => console.log(res))
                      .catch(e => console.log(e))
    }
    
    componentDidMount(){
        getUsers().then(res => {
            this.setState({users: res})
        })
        .catch(e => console.log(e))
       }
    
    render(){
        console.log(this.state.users)
        const {users} = this.state;
        return(
            <div>
                <input type="text" placeholder="enter user id" onChange={this.handleUserIdChange}/>
                <input type="text" placeholder="enter post id" onChange={this.handleIdChange}/>
                <input  type="text" placeholder="enter title" onChange={this.handleTitleChange}/>
                <input  type="text" placeholder="enter description" onChange={this.handleDescriptionChange}/>
                <button onClick={this.handleClick}>ADD</button>
                <ul>
                    {
                        users.map(user => {
                            return (<div><Link to={`/${user.id}`}><li>{user.title}</li></Link>
                                    <Link to={`/edit/${user.id}`}><button>Edit</button></Link>
                                    <button onClick={() => this.handleDelete(user.id)}>Delete</button>
                                    </div>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }

}
export default DisplayUsers;