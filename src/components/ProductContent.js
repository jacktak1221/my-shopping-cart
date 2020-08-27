import React, {Component} from 'react';
import ProductCard from "./ProductCard";
import {Grid, Paper} from "@material-ui/core"
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
        padding: theme.spacing(2),
    }
});


class ProductContent extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid item container spacing={2}>
                    {
                        this.props.dataList.map(image => {
                            return (
                                <Grid item sm={12} md={4}>
                                    <ProductCard
                                        image={image}
                                        addToCart={this.props.addToCart}
                                    />
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
