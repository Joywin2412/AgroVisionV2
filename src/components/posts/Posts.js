import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";
import axios from "axios";
import db from "../../firebase";
import { useGlobalContext } from "../../pages/context";

const Posts = () => {
  const classes = Style();

  const { posts, setPosts } = useGlobalContext();
  // Make this above global context 
  const fetchPosts = async () => {
    try {
      let s1 = `${process.env.REACT_APP_BACKEND2}`;

      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const d = await axios.get(s1 + 'getAll', requestOptions);
      let arr = d.data;
      console.log(arr)
      arr.sort((a, b) => {
        // First, compare based on likes
        if (a.likes !== b.likes) {
          return b.likes - a.likes; // Sort in descending order of likes
        }

        // If likes are equal, compare based on createdAt
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setPosts(arr);
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
