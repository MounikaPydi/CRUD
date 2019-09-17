import React, { Component } from 'react';
import editPost from '../../Util/editPost';
class EditPost extends Component{
    constructor(){
        super();
        this.state = {
            userId:'',
            title:'',
            description:''
        }
    }

    handleUserIdChange = (e) => {
        const userId = e.target.value;
        this.setState({userId})
    }

    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState({title})
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description})
    }

    handleClick = () => {
        const { userId, title, description } = this.state;
        const id = this.props.match.params.id;
        const post = {id,userId,title,description}
        editPost(post,id).then(res => console.log("result on editing post " +res))
                      .catch(e => console.log("error on editing post "+e))
    }

    render(){
        return(
            <div>
                editing
                <input type="text" placeholder="enter user id" onChange={this.handleUserIdChange}/>
                <input  type="text" placeholder="enter title" onChange={this.handleTitleChange}/>
                <input  type="text" placeholder="enter description" onChange={this.handleDescriptionChange}/>
                <button onClick = {this.handleClick}>Submit</button>
            </div>
        )
    }
}
export default EditPost;