import React, { Component } from "react";
import axios from "axios";
import "./postlist.css";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Something went wrong",
        });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2>Lists of Posts</h2>
        {posts.length
          ? posts.map((post) => (
              <div className="posts" key={post.id}>
                {post.title}
              </div>
            ))
          : null}
        {errorMsg.length ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
