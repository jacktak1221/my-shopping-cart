import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
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


const useStyles = (theme) => ({
    root: {
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class ProductCard extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {this.props.image.id}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={this.props.image.author}
                        subheader={`Width:` + this.props.image.width + `px Height:` + this.props.image.height + `px`}
                    />
                    <CardMedia
                        className={classes.media}
                        image={this.props.image.downloadUrl}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`Download link: ` + this.props.image.url}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                        <Button size="small" color="primary" onClick={() => this.props.addToCart(this.props.image)}>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(useStyles)(ProductCard);
