import React, {Component} from 'react';
import imageData from "../imageData";
import ProductCard from "./ProductCard";
import {Grid , Paper} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles";


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing(4),
    }
});


class ProductContent extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container>
                    {
                        imageData.map(image => {
                            return (
                                <Grid>
                                    <Paper className={classes.control}
                                    square boarder={0}>
                                        <ProductCard
                                            id={image.id}
                                            author={image.author}
                                            width={image.width}
                                            height={image.id}
                                            url={image.url}
                                            downloadUrl={image.download_url}
                                        />
                                    </Paper>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>

        );
    }
}

export default withStyles(useStyles)(ProductContent);