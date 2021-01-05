import React, { Component } from 'react';
import axios from "axios"

import './FullPost.css';

class FullPost extends Component {
    
state={
    loadedPost:null
}

    componentDidUpdate(){
        if(this.props.Id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.props.Id !== this.state.loadedPost.id)){
        axios.get('/posts/'+this.props.Id)
        .then(response => this.setState({loadedPost:response.data}))
        }
    }
    }   

    deletePostHandler = () =>{
        axios.delete('/posts/'+this.props.Id)
        .then(response => console.log(response))
    }
    
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.Id){
            post = <p>Loading ... </p>
        }
        if(this.state.loadedPost){
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );
    }
        return post;
    }
}

export default FullPost;