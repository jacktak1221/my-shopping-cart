import React, {Component} from 'react';
import './App.css';
import DenseAppBar from "./components/DenseAppBar";
import ProductContent from "./components/ProductContent";
import Filter from "./components/Filter";
import Container from "@material-ui/core/Container";
import imageData from "./data/imageData";

class App extends Component {

    constructor() {
        super();

        this.state = {
            filteredImagesData: imageData,
            size: imageData.length,
            sort: 'asc'
        }
    }


    filterAuthor = (event, value) => {

        let filterData = imageData;

        if (!this.isEmptyArray(value)) {
            console.log('filter is not empty');
            console.log(value);
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

    render() {
        return (<div className="App">
                <DenseAppBar/>
                <Container maxWidth="lg" component="main">
                    <Filter
                        dataList={imageData}
                        filterDataSize={this.state.size}
                        changeAuthorFilter={this.filterAuthor}
                        resetFilter={this.resetFilter}
                        defaultSelected={this.state.defaultSelected}
                        sortingValue={this.state.sort}
                        changeSorting={this.sortImages}
                    />
                    <ProductContent
                        dataList={this.state.filteredImagesData}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
