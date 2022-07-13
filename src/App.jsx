import './App.css';
import React from 'react';
import Posts from './components/Posts'

export default class App extends React.Component {
  state = {
    posts: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "ReactJS" },
      { id: 3, name: "VueJS" }
    ]
  }

  handleSomething = () => {
    console.log('App.js setState updated');
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post=> post.id !== id)})
  }

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} removePost={this.removePost} deleteFunk={this.removePost} />
      </div>
    )
  }
}
