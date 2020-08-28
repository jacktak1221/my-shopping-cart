import React, {Component} from 'react';
import {Divider, Grid, Button, Container} from "@material-ui/core";
import './App.css';
import DenseAppBar from "./components/DenseAppBar";
import ProductContent from "./components/ProductContent";
import Filter from "./components/Filter";
import imageData from "./data/imageData";

class App extends Component {

    constructor() {
        super();

        this.state = {
            filteredImagesData: imageData,
            size: imageData.length,
            sort: 'asc',
            cartItems: [],
            cartOpen: false
        }
    }


    filterAuthor = (event, value) => {

        let filterData = imageData;

        if (!this.isEmptyArray(value)) {
            filterData = imageData.filter((item) => {
                return value.some(selectedItem => {
                    return selectedItem.author === item.author;
                })
            });
        }

        this.setState({
            filteredImagesData: filterData,
            size: filterData.length
        });
    }

    sortImages = (event) => {
        const sorting = event.target.value;

        let sortedImageData = this.state.filteredImagesData;

        if (sorting === 'asc') {
            sortedImageData.sort((a, b) => (a.author > b.author) ? 1 : -1)
        } else {
            sortedImageData.sort((a, b) => (a.author < b.author) ? 1 : -1)
        }

        this.setState({
            sort: event.target.value,
            filteredImagesData: sortedImageData
        });
    }

    resetFilter = () => {
        this.setState({
            filteredImagesData: imageData,
            size: imageData.length,
            defaultSelected: ''
        });
    }

    isEmptyArray = (value) => {
        return (value === null || value.length === 0);
    }

    addToCart = (newItem) => {
        const cartItems = this.state.cartItems

        let alreadyInCart = false;

        cartItems.forEach((item) => {
            if (item.id === newItem.id) {
                item.count++;
                alreadyInCart = true;
            }
        });

        if (!alreadyInCart) {
            cartItems.push({...newItem, count: 1});
        }

        this.setState({
            cartItems: cartItems
        });
    }

    removeFromCart = (id) => {
        const cartItems =  this.state.cartItems;

        this.setState({
            cartItems: cartItems.filter(item => item.id !== id)
        })
    }


    render() {
        return (
            <div className="App">

                <DenseAppBar
                    cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                />

                <Container container component="main">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Filter
                                dataList={imageData}
                                filterDataSize={this.state.size}
                                changeAuthorFilter={this.filterAuthor}
                                resetFilter={this.resetFilter}
                                defaultSelected={this.state.defaultSelected}
                                sortingValue={this.state.sort}
                                changeSorting={this.sortImages}
                            />
                        </Grid>
                        <Divider/>

                        <Grid item md={12}>
                            <ProductContent
                                dataList={this.state.filteredImagesData}
                                addToCart={this.addToCart}
                            />
                        </Grid>
                    </Grid>

                </Container>
            </div>
        );
    }
}

export default App;
