import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";
import axios from "axios";
import db from "../../firebase";

const Posts = () => {
  const classes = Style();

  const [posts, setPosts] = useState([]);
  // Make this above global context 
  const fetchPosts = async () => {
    try {
      let s1 = `${process.env.REACT_APP_BACKEND}`;

      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const d = await axios.get(s1 + 'getAll', requestOptions);
      console.log(d);
      setPosts(d.data);
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {

    fetchPosts();
    // const unsubscribe = db
    //   .collection("posts")
    //   .orderBy("timestamp", "desc")
    //   .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    return posts;
  }, []);

  return (
    <div className={classes.posts}>
      <FlipMove style={{ width: "100%" }}>

        {(posts).map((post) => (
          <Post
            key={post._id}
            _id={post._id}
            profile={post.profile}
            username={post.username}
            timestamp={post.timestamp}
            description={post.description}
            fileType={post.fileType}
            fileData={post.fileData}
            likes={post.likes}
          />
        ))}
      </FlipMove>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  posts: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default Posts;
