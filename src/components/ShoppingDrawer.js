import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import {Drawer, Button, Typography, Badge, Divider} from '@material-ui/core';
import {IconButton} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import CartItem from "./CartItem";

const useStyles = (theme) => ({
    root: {
        width: 500,
    },
    buttonDiv: {
        padding: 30,
        textAlign: 'center',
    },
});


class ShoppingDrawer extends Component {

    constructor() {
        super();

        this.state = {
            drawerOpen: false
        };
    }

    toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({drawerOpen: open});
    };

    removeFromCart = (id) => {
        this.props.removeFromCart(id);
    }

    showShoppingCart = (totalItem) => {
        const anchor = 'bottom';
        const {classes, theme} = this.props;


        return (
            <div className={classes.root}>
                {this.renderCartHeader(totalItem)}
                <Divider/>
                {this.renderCartItem()}
                <Divider/>
                {this.renderCartFooter()}
            </div>

        )
    }


    renderCartHeader = (totalItem) => {
        return (
            <div>
                <Button onClick={this.toggleDrawer(false)}>X</Button>
                <Badge badgeContent={totalItem} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
                <Typography variant={"h5"}>Cart </Typography>
            </div>
        );
    }

    renderCartItem = () => {
        const {classes} = this.props;

        return (
            <div>
                {this.props.cartItems.length === 0 ?
                    (
                        <div className={classes.buttonDiv}>
                            <Typography variant={"h6"}>Your Cart is empty</Typography>
                        </div>) :
                    (<div
                        role="presentation"
                    >
                        {this.props.cartItems.map(item => {
                            return (
                                <CartItem item={item}
                                          removeFromCart={this.removeFromCart}
                                />
                            )
                        })}
                    </div>)
                }
            </div>
        )
    }

    renderCartFooter = () => {
        const {classes} = this.props;

        return (
            <div className={classes.buttonDiv}>
                {this.props.cartItems.length > 0 &&
                <Button className={classes.checkoutButton}
                        variant="contained"
                        color="secondary"
                        startIcon={<PaymentIcon/>}
                >
                    Checkout
                </Button>}
            </div>)
    }

    render() {
        const totalItem = this.props.cartItems.length > 0 ?
            this.props.cartItems.map(item => item.count).reduce((a, b) => a + b)
            : 0
        ;
        return (
            <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.toggleDrawer(true)}
                    disableRipple={true}
                >
                    <Badge badgeContent={totalItem} color="secondary">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>

                <Drawer
                    anchor={'right'}
                    open={this.state.drawerOpen}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    {this.showShoppingCart(totalItem)}
                </Drawer>
            </div>
        );
    }
}

export default withStyles(useStyles)

(
    ShoppingDrawer
)
;
;

