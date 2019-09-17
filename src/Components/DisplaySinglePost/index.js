import React, { Component } from 'react';
import getSinglePost from '../../Util/getSinglePost';

class DisplaySinglePost extends Component{
    constructor(){
        super();
        this.state = {
            post:[]
        }
    }

    componentDidMount(){
        getSinglePost(this.props.match.params.id).then(res => {
            this.setState({post:res})
        }
        )
    }
    render(){
        const {id,userId,title,body} = this.state.post
        return(
            <div>
                {id}<br/>
                {userId}<br/>
                {title}<br/>
                {body}<br/>
                <p>enter valuesif you want to change</p>
                
            </div>
        )
    }
}
export default DisplaySinglePost;