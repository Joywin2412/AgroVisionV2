import { makeStyles } from "@material-ui/core/styles";
import { darkPrimary, darkSecondary, textDark, blue, black } from "../../../assets/Colors";

export default makeStyles((theme) => ({
  post: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: theme.palette.type === "dark" && darkPrimary,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
      border: 0,
      boxShadow: "none",
    },
  },

  post__header: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    "& > .MuiAvatar-root": {
      cursor: "pointer",
    },
    "& > .MuiSvgIcon-root": {
      color: theme.palette.type === "dark" ? textDark : "grey",
      cursor: "pointer",
      borderRadius: 999,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
  },

  header__info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    "& > h4": {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 3,
    },
    "& > p": {
      color: "grey",
      fontSize: 12,
    },
  },

  post__body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  body__description: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    paddingTop: 5,
  },

  body__image: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    "& > img": {
      width: "100%",
      height: "auto",
      objectFit: "contain",
      transition: "all 0.5s ease",
      "&:hover": {
        transform: "scale(1.1)",
        [theme.breakpoints.down("xs")]: {
          transform: "scale(1.0)",
        },
      },
    },
  },

  post__footer: {
    width: "100%",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "normal",
    padding: 10,
    paddingBottom: 0,
  },

  footer__stats: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 10,
    borderBottom: `1px solid ${theme.palette.type === "dark" ? darkSecondary : "lightgrey"}`,

    "& > div": {
      display: "flex",
      "& > img": {
        width: 18,
        height: 18,
      },
    },

    "& > h4": {
      flex: 1,
      color: theme.palette.type === "dark" && textDark,
      fontSize: 14,
      marginLeft: 5,
      fontWeight: 500,
    },

    "& > section": {
      display: "flex",
      alignItems: "center",

      "& > h4": {
        color: theme.palette.type === "dark" && textDark,
        fontSize: 13,
        marginLeft: 10,
        fontWeight: 500,
      },
    },
  },

  footer__actions: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 4,
  },
  general_focus: {
    // flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    // marginLeft: "6px",
    "&:hover": {
      backgroundColor: "#e5e5e5",
    },
    padding: "3px",

  },
  focus: {
    // flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 230,
    marginLeft: "6px",
    "&:hover": {
      backgroundColor: "#e5e5e5",
      color: blue,
    },

    padding: "1px",

  },
  creation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: "3px"
  },
  creation2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: "2px"
    // backgroundColor: "green",
  },
  focus2: {
    // flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 230,
    marginRight: "6px",
    "&:hover": {
      backgroundColor: "#e5e5e5",
      color: black,
    },
    // width: "80%",
    padding: "1px",
  },
  action__icons: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    marginRight: 2,
    marginLeft: "9px",
    padding: "5px",
    borderRadius: 999,
    cursor: "pointer",
    transition: "all 0.3s ease",
    paddingRight: "2px",
    paddingLeft: "2px",
    color: theme.palette.type === "dark" ? "lightgrey" : darkSecondary,

    backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",

    [theme.breakpoints.down("xs")]: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& > .MuiSvgIcon-root": {
      color: theme.palette.type === "dark" && textDark,
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
      },
    },
    "& > h4": {
      color: theme.palette.type === "dark" && textDark,
      marginLeft: 4,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
  },
  action__icons2: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    marginRight: 2,
    padding: "5px",
    backgroundColor: "#d3d3d3",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: theme.palette.type === "dark" ? "lightgrey" : darkSecondary,
    // backgroundColor: "#808080",
    paddingRight: "2px",
    paddingLeft: "2px",
    [theme.breakpoints.down("xs")]: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& > .MuiSvgIcon-root": {
      color: theme.palette.type === "dark" && textDark,
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
      },
    },
    "& > h4": {
      color: theme.palette.type === "dark" && textDark,
      marginLeft: 4,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
  },
}));
