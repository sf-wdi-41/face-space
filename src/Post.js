import React, { Component } from 'react';
import './Post.css'

class Post extends Component {

  constructor(props){
    super()
    this.state = {
      like: false,
      dislike: false,
      appendField: ""
    }
  }

  likeStatus(e){
    this.setState({
      like: !this.state.like,
      dislike: false
    })
  }

  dislikeStatus(e){
    this.setState({
      dislike: !this.state.dislike,
      like: false
    })
  }

  thumbs(e){
    if(this.state.like){
      return <img alt="Yay!" className="thumbs" src="https://pbs.twimg.com/profile_images/2352662248/john-goodman.jpg"/>
    } else if(this.state.dislike){
      return <img alt="Boo!" className="thumbs" src="http://geeknation.com/wp-content/uploads/2015/09/john-goodman-featured-image.jpg"/>
    }
  }

  appendWords(e){
    this.setState({
      appendField: <Post statusInfo={this.props.statusInfo} />
    })
  }

  render() {
    return (
      <div >
        <hr />
        {this.thumbs()}
        {this.thumbs()}

        <img src={this.props.statusInfo.picture} alt="profile" />
        <p> Status: {this.props.statusInfo.status} </p>
        <p> User: {this.props.statusInfo.user} </p>
        <button onClick={e => this.likeStatus(e)}>Like</button> <button className="btn btn-warning" onClick={e => this.dislikeStatus(e)}>Dislike</button>
        <button onClick={e => this.appendWords(e)}>Duplicate This Post!</button>
        {this.state.appendField}
      </div>
    );
  }
}

export default Post;
