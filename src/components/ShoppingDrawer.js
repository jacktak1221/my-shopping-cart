import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import {Drawer, Button, Typography, Badge, Divider, IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import CartItem from "./CartItem";
import {isEmptyArray} from "../utilities";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
    buttonDiv: {
        padding: 30,
        textAlign: 'center',
    },
}));

const ShoppingDrawer = () => {
    const classes = useStyles();

    const [cartStatus, setCartStatus] = useState(false);
    const cart = useSelector(state => state.cart);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setCartStatus(open);
    };

    const showShoppingCart = (totalItem) => {

        return (
            <div className={classes.root}>
                {renderCartHeader(totalItem)}
                <Divider/>
                {renderCartItem()}
                <Divider/>
                {renderCartFooter()}
            </div>

        )
    }

    const renderCartHeader = (totalItem) => {
        return (
            <div>
                <Button onClick={toggleDrawer(false)}>X</Button>
                <Badge badgeContent={totalItem} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
                <Typography variant={"h5"}>Cart </Typography>
            </div>
        );
    }

    function renderCartItem() {
    console.log('renderCartItem in ShoppingDrawer');
        return (
            <div>
                {isEmptyArray(cart.cartItemList) ?
                    (
                        <div className={classes.buttonDiv}>
                            <Typography variant={"h6"}>Your Cart is empty</Typography>
                        </div>) :
                    (
                        <div
                            role="presentation"
                        >
                            {cart.cartItemList.map(item => {
                                return (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                    />
                                )
                            })}
                        </div>)
                }
            </div>
        )
    }

    const renderCartFooter = () => {

        return (
            <div className={classes.buttonDiv}>
                {cart.cartItemList.length > 0 &&
                <Button className={classes.checkoutButton}
                        variant="contained"
                        color="secondary"
                        startIcon={<PaymentIcon/>}
                >
                    Checkout
                </Button>}
            </div>)
    }


    const totalItem = cart.cartItemList && cart.cartItemList.length > 0 ?
        cart.cartItemList.map(item => item.count).reduce((a, b) => a + b)
        : 0
    ;
    return (
        <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={toggleDrawer(true)}
                disableRipple={true}
            >
                <Badge badgeContent={totalItem} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>

            <Drawer
                anchor={'right'}
                open={cartStatus}
                onClose={toggleDrawer(false)}
            >
                {showShoppingCart(totalItem)}
            </Drawer>
        </div>
    );
}

export default ShoppingDrawer;


