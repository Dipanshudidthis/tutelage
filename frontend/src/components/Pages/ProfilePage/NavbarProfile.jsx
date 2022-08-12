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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from "react";
import { Link } from "react-router-dom";
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
    icons: {
        alignItems: 'center',
        display: (props) => (props.open ? "none" : "flex")
    },
    badges: {
        marginRight: theme.spacing(1)
    }

}));

const NavbarProfile = () => {

    
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
                <div className={classes.icons}>
                    <Link to="/profile" style={{ textDecoration: "none" }}><Avatar style={{ backgroundColor: "#7177f3", color: "white", fontFamily: "'Rubik', sans-serif" }}>
                        {user.user.fname[0]}
                    </Avatar></Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavbarProfile;