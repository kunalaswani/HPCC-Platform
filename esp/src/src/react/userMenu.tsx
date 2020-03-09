import * as React from 'react';
// import { theme } from './theme';
// import { ThemeProvider } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState(true);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const additionalOpen = React.useRef(open);
  React.useEffect(() => {
    if (additionalOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    additionalOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          title="Logged in as: kaswani"
        >
          <MenuIcon style={{ color: "#1A9BD7" }} fontSize="large" />
        </IconButton>
        <Popper
          open={open}
          openList={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <PersonIcon
                          style={{ color: "#1A9BD7" }}
                          fontSize="large"
                        />
                      </ListItemIcon>
                      user
                    </MenuItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Set Banner" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Set Toolbar" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Release Notes" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Documentation" />
                    </ListItem>
                    <ListItem button onClick={handleClick}>
                      <ListItemText primary="Additional Resources" />
                      {!open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={!open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemText primary="Red Book" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemText primary="Forums" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemText primary="Issue Reporting" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemText primary="Transition Guide" />
                        </ListItem>
                      </List>
                    </Collapse>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Configuration" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Lock" />
                    </ListItem>
                    <ListItem style={{ color: "red" }} button>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
