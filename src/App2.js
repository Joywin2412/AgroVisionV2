import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useEffect, useState, useGlobalContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Hidden, Paper } from "@material-ui/core";
import Login from "./components/login/Login.js";
import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Contacts from "./components/contacts/Contacts.js";
import Stories from "./components/stories/Stories.js";
import Form from "./components/form/Form.js";
import Posts from "./components/posts/Posts.js";
import { LoginAction, LogoutAction } from "./store/actions/auth.js";
// import { auth } from "./firebase.js";
import { lightPrimary } from "./assets/Colors.js";
import Style from "./Style.js";
import Navbar from "./pages/Navbar.js";
const App = () => {
  const [profile, setProfile] = useState(1);
  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.user);

  const mode = useSelector((state) => state.util);

  const muiTheme = createMuiTheme({
    palette: {
      type: mode ? "dark" : "light",
    },
  });

  // useEffect(() => {
  //   // auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(LoginAction(authUser));
  //     } else {
  //       dispatch(LogoutAction());
  //     }
  //   });
  // }, [dispatch]);

  const classes = Style();
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Navbar profile={profile} setProfile={setProfile} show={1} />
        <Paper
          elevation={0}
          className={classes.root}
          style={{ backgroundColor: !mode && lightPrimary }}
        >
          <Grid className={classes.app}>
            <Grid item container className={classes.app__header}>
              {/* ----Header---- */}
            </Grid>
            <Grid item container className={classes.app__body}>
              {/* ----Body---- */}
              <Hidden smDown>
                <Grid item container className={classes.body__left} md={3}>
                  {/* ----Sidebar---- */}
                  <Sidebar />
                </Grid>
              </Hidden>
              <Grid
                item
                container
                className={classes.body__feed}
                xs={12}
                sm={8}
                md={6}
              >
                {/* ----Feed---- */}

                <Grid item container className={classes.feed__form}>
                  {/* ----Upload Form---- */}
                  <Form />
                </Grid>
                <Grid item container className={classes.feed__posts}>
                  {/* ----Posts---- */}
                  <Posts />
                </Grid>
              </Grid>
              <Hidden smDown>
                <Grid item container className={classes.body__right} md={3}>
                  {/* ----Right sidebar---- */}
                  <Contacts />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
