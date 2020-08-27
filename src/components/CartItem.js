import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Grid, Paper, Typography, Button, IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = (theme) => ({
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
});

class CartItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: this.props.item.count
        }
    }

    handleAdd = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    handleDeduct = () => {
        if (this.state.count === 1) {
            this.props.removeFromCart(this.props.item.id);
        } else {
            this.setState(prevState => ({
                count: prevState.count - 1
            }));
        }
    }
    handleRemove = () => {
        this.props.removeFromCart(this.props.item.id);
    }

    render() {
        const {classes, theme} = this.props;

        return (
            <div>
                <Paper variant={"outlined"}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Grid container className={classes.content}>
                                <Grid item xs={12}>
                                    <Typography component="h5" variant="h5">
                                        {this.props.item.id}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {this.props.item.author}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <IconButton onClick={this.handleAdd}>
                                        <AddCircleIcon/>
                                    </IconButton>
                                    {this.state.count}
                                    <IconButton onClick={this.handleDeduct}>
                                        <RemoveCircleIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button size={"small"} variant={"outlined"} onClick={this.handleRemove}>Remove</Button>
                                </Grid>

                                </Grid>
                            </Grid>
                        <Grid item xs={4}>
                            <img className={classes.cover} alt={this.props.item.author}
                                 src={this.props.item.downloadUrl}/>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(useStyles)(CartItem);
