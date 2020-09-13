import React, {useEffect} from 'react';
import {Divider, Grid, Container} from "@material-ui/core";
import './App.css';
import DenseAppBar from "./components/DenseAppBar";
import ProductContent from "./components/ProductContent";
import FilterPanel from "./components/FilterPanel";
import {useDispatch} from "react-redux";
import {fetchProductList} from "./redux/actions/actions";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductList())
    }, []);

    return (
        <div>
            <DenseAppBar/>

            <Container container component="main">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <FilterPanel/>
                    </Grid>
                    <Divider/>

                    <Grid item md={12}>
                        <ProductContent/>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}

export default App;
