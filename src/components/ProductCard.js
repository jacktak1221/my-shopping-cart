import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Card , Button} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {addItemToCart} from "../redux/actions/actions";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {},
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ProductCard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {props.product.id}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={props.product.author}
                    subheader={`Width:` + props.product.width + `px Height:` + props.product.height + `px`}
                />
                <CardMedia
                    className={classes.media}
                    image={props.product.downloadUrl}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Download link: ` + props.product.url}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <Button size="small" color="primary" onClick={() => dispatch(addItemToCart(props.product))}>
                        Add To Cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
