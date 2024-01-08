import React, { forwardRef, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import axios from "axios";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import Like from "../../../assets/images/like.png";
import Love from "../../../assets/images/love.png";
import Care from "../../../assets/images/care.png";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import Style from "./Style";

const Post = forwardRef(
  ({ _id, profile, username, timestamp, description, fileType, fileData, likes }, ref) => {
    const classes = Style();

    const [likesCount, setLikesCount] = useState(likes);
    const [commentsCount, setCommentsCount] = useState(0);
    const [sharesCount, setSharesCount] = useState(0);
    const [likeIconOrder, setLikeIconOrder] = useState(0);
    const [loveIconOrder, setLoveIconOrder] = useState(0);
    const [careIconOrder, setCareIconOrder] = useState(0);
    let [userReaction, setUserReaction] = useState(0);
    const [likedArray, setLikedArray] = useState([])
    const [dislikedArray, setDislikedArray] = useState([])
    const showPostsLiked = async () => {
      try {
        let s1 = `${process.env.REACT_APP_BACKEND}`;

        const requestOptions = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        console.log("Check this->", _id)
        const d = await axios.post(s1 + 'getPostLikes', { _id: _id }, requestOptions);
        console.log(d);
        setLikedArray(d.data.liked_arr);
        setDislikedArray(d.data.disliked_arr);

        if (d.data.liked_arr.includes(username)) {
          setUserReaction(1)
        }
        else if (d.data.disliked_arr.includes(username)) {
          setUserReaction(2)
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    useEffect(() => {
      showPostsLiked();


    }, []);

    const likeCountHandler = async (likes, show, like) => {
      try {
        let s1 = `${process.env.REACT_APP_BACKEND}`;

        const requestOptions = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        if (show == 1) {
          let likedArray2 = []
          const d = await axios.post(s1 + 'likes', { _id: _id, likes: likes }, requestOptions);
          // console.log(d);
          const d2 = await axios.post(s1 + 'showLike', { post_id: _id, user_id: username, like: like }, requestOptions);
          // console.log(d2);
          if (like == 1) {
            console.log("addded")
            console.log(likedArray)
            likedArray2 = likedArray
            likedArray2.push(username)
            setLikedArray(likedArray2)
          }
          else {

            let dislikedArray2 = []
            dislikedArray2 = dislikedArray
            dislikedArray2.push(username)
            setDislikedArray(dislikedArray2)
          }
        }
        else {
          const d = await axios.post(s1 + 'likes', { _id: _id, likes: likes }, requestOptions);
          console.log(d);
          const d2 = await axios.post(s1 + 'dontshowLike', { post_id: _id, user_id: username, like: like }, requestOptions);
          console.log(d2);
          if (like == 1) {
            console.log("removed")
            let likedArray2 = []
            likedArray2 = likedArray
            likedArray2 = likedArray2.filter((curr_ele, curr_idx, curr_arr) => {
              return curr_ele != username
            })
            console.log("i'm here");
            console.log(likedArray2)
            setLikedArray(likedArray2)
          }
          else {
            let dislikedArray2 = []
            dislikedArray2 = dislikedArray
            dislikedArray2 = dislikedArray2.filter((curr_ele, curr_idx, curr_arr) => {
              return curr_ele != username
            })
            setDislikedArray(dislikedArray2)
          }
          // arr.push(username)
        }
      }
      catch (err) {
        console.log(err);
      }

    }
    const Reactions = () => {
      return (
        <div className={classes.footer__stats}>
          <div>
            <img src={Like} style={{ order: `${likeIconOrder} ` }} alt="like-icon" />
            <img src={Love} style={{ order: `${loveIconOrder} ` }} alt="love-icon" />
            <img src={Care} style={{ order: `${careIconOrder} ` }} alt="care-icon" />
          </div>
          <h4>{likesCount}</h4>
          <section>
            <h4>{commentsCount} Comments</h4>
            <h4>{sharesCount} Shares</h4>
          </section>
        </div>
      );
    };

    return (
      <Paper ref={ref} className={classes.post}>
        <div className={classes.post__header}>
          <Avatar src={profile} />
          <div className={classes.header__info}>
            <h4>{username}</h4>
            <p>

            </p>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className={classes.post__body}>
          <div className={classes.body__description}>
            <p>{description}</p>
          </div>
          {fileData && (
            <div className={classes.body__image}>
              {fileType === "image" ? (
                <img src={fileData} alt="post" />
              ) : (
                <ReactPlayer url={fileData} controls={true} />
              )}
            </div>
          )}
        </div>
        <div className={classes.post__footer}>

          <div className={classes.footer__actions}>
            <div className={classes.action__icons2} >
              <div className={classes.focus}>

                {(userReaction != 2 && userReaction == 1) ? <ThumbUpAltOutlinedIcon onClick={(e) => {
                  likeCountHandler(likesCount - 1, 0, 1)
                  setLikesCount(likesCount - 1);
                  setUserReaction(0)

                }} style={{ marginRight: "1px", color: "blue" }} />
                  : <ThumbUpAltOutlinedIcon onClick={(e) => {
                    if (userReaction == 0) {
                      likeCountHandler(likesCount + 1, 1, 1)
                      setLikesCount(likesCount + 1);
                      setUserReaction(1)
                    }

                  }} style={{ marginRight: "1px" }} />}

              </div>
              <div style={{ marginLeft: "4px", marginRight: "4px" }}>
                <h4 > {likesCount}</h4>
              </div>
              <div className={classes.focus2}>
                {(userReaction != 1 && userReaction == 2) ? <ThumbDownAltOutlinedIcon className={classes.creation2} onClick={(e) => {
                  likeCountHandler(likesCount + 1, 0, 0);
                  setLikesCount(likesCount + 1);
                  setUserReaction(0);

                }} style={{ marginLeft: "1px", color: "black" }} /> : <ThumbDownAltOutlinedIcon className={classes.creation2} onClick={(e) => {
                  if (userReaction == 0) {
                    likeCountHandler(likesCount - 1, 1, 0);
                    setLikesCount(likesCount - 1);
                    setUserReaction(2);
                  }
                }} style={{ marginLeft: "1px" }} />}
              </div>
            </div>
            <div className={classes.action__icons}>
              <div className={classes.general_focus}>
                <ChatBubbleOutlineOutlinedIcon />
                <h4 >Comment</h4>
              </div>
            </div>
            <div className={classes.action__icons}>
              <div className={classes.general_focus}>
                <ReplyOutlinedIcon style={{ transform: "scaleX(-1)" }} />
                <h4>Share</h4>
              </div>
            </div>

          </div>
        </div>
      </Paper >
    );
  }
);

export default Post;
