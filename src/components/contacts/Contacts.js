import React, { useState, useEffect } from "react";
import { Avatar, Tooltip, Paper, Divider } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InfoBar from "../util/InfoBar";
import Style from "./Style";
import axios from "axios";

const Contacts = () => {
  const classes = Style();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchOptions = async () => {
    let name, email, accesstoken, id_now;
    const loggedInUser = localStorage.getItem("user");
    const polygonUser = localStorage.getItem("polygon");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      accesstoken = foundUser.token;
      name = foundUser.name;
      email = foundUser.email;
    }
    if (polygonUser) {
      const foundUser = JSON.parse(polygonUser);
      id_now = foundUser.polygon_id;
    }
    let s = `${process.env.REACT_APP_BACKEND}`;
    let s1 = s + `/user/options`;
    let requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    let val = JSON.stringify({
      name: name,
      email: email,
    });
    try {


      let d = await axios.post(
        s + `/user/acceptList`,
        JSON.stringify({ email1: email }),
        requestOptions
      );
      console.log(d.data.length)
      if ((d.data.length) !== 0) {
        let arr = d.data;

        console.log("This is friends", arr);
        console.log(arr)
        setUsers(arr);

        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <Paper elevation={0} className={classes.contacts}>
      <Scrollbars autoHide autoHideDuration={200}>
        <Divider />
        <div className={classes.contacts__tab}>
          <h4>Your Pages</h4>
          <MoreHorizIcon />
        </div>
        <Divider />
        <div className={classes.contacts__tab}>
          <h4>Friends</h4>
          <SearchIcon />
          <MoreHorizIcon />
        </div>
        {users.map(({ Name }) => (
          <InfoBar
            title={Name}
          />
        ))}
      </Scrollbars>
    </Paper>
  );
};

export default Contacts;
