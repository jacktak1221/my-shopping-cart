import React from 'react';
import ProductCard from "./ProductCard";
import {Grid} from "@material-ui/core"
import {useSelector} from "react-redux";

const ProductContent = () => {

    const productsInfo = useSelector(state => state.productsInfo);

    return (
        <div>
            <Grid item container spacing={2}>
                {productsInfo.filteredProductList != null &&
                    productsInfo.filteredProductList.map(product => {
                        return (
                                <Grid item sm={12} md={4} key={product._id}>
                                    <ProductCard
                                        product={product}
                                    />
                                </Grid>
                        );
                    })
                }
            </Grid>
        </div>

    );
}

export default ProductContent;
