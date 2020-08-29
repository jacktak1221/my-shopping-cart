import React from 'react';
import ProductCard from "./ProductCard";
import {Grid} from "@material-ui/core"
import {useSelector} from "react-redux";

const ProductContent = () => {

    const filterInfo = useSelector(state => state.filterInfo);

    return (
        <div>
            <Grid item container spacing={2}>
                {
                    filterInfo.filteredProductList.map(product => {
                        return (
                                <Grid item sm={12} md={4} key={product.id}>
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
