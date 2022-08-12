import {
  alpha,
  AppBar,
  Avatar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useAuthContext } from "../../../hooks/useAuthContext";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "#b5b8eb",
    color: 'black'
  },
  logoLg: {
    display: "none",
    fontFamily: "'Ultra', serif",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    fontFamily: "'Ultra', serif",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    }
  },
  searchButton: {
    marginRight: theme.spacing(2),
    color: "black",
    [theme.breakpoints.up("sm")]: {
      display: 'none'
    }
  },
  input: {
    color: 'black',
    marginLeft: theme.spacing(1)
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? "none" : "flex")
  },
  badges: {
    marginRight: theme.spacing(1)
  }

}));

const Navbar = () => {

  const { user } = useAuthContext();

  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Tutelage
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Tutelage
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={() => setOpen(true)} />
          <Link to="/profile" style={{ textDecoration: "none" }}><Avatar style={{ backgroundColor: "#7177f3", color: "white", fontFamily: "'Rubik', sans-serif" }}>
            {user.user.fname[0]}
          </Avatar></Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;