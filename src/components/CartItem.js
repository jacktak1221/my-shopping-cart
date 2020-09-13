import React from 'react';
import {useDispatch} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper, Typography, Button, IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {decrementItem, incrementItem, removeItemFromCart} from "../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: '100%',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const CartItem = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <Paper variant={"outlined"}>
                <Grid container>
                    <Grid item xs={8}>
                        <Grid container className={classes.content}>
                            <Grid item xs={12}>
                                <Typography component="h5" variant="h5">
                                    {props.item._id}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {props.item.author}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <IconButton onClick={() => dispatch(incrementItem(props.item))}>
                                    <AddCircleIcon/>
                                </IconButton>
                                {props.item.count}
                                <IconButton onClick={() => dispatch(decrementItem(props.item))}>
                                    <RemoveCircleIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <Button size={"small"} variant={"outlined"}
                                        onClick={() => dispatch(removeItemFromCart(props.item))}>
                                    Remove
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <img className={classes.cover} alt={props.item.author}
                             src={props.item.downloadUrl}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

}

export default CartItem;

