import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingDrawer from "./ShoppingDrawer";


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
    },
});

class DenseAppBar extends Component {

    removeFromCart = (id) => {
        this.props.removeFromCart(id);
    }


    render() {
        const {classes} = this.props;


        return (
            <div className={classes.root}>

                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.title}>
                            Photos
                        </Typography>
                        <div>
                            <ShoppingDrawer
                                cartItems={this.props.cartItems}
                                removeFromCart={this.removeFromCart}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(useStyles)(DenseAppBar);

