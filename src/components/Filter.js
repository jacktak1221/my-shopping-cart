import React, {Component} from 'react';
import {Typography, Grid, Button, Select, MenuItem} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Filter extends Component {

    onAuthorInputChanged = (event, value) => {
        this.props.changeAuthorFilter(event, value);
    }

    render() {

        const dataList = this.props.dataList;

        return (
            <div>
                <Grid container
                      direction="row"
                      alignItems="center"
                      spacing={2}
                >

                    <Grid item xs={12} md={5}>
                        <Autocomplete
                            multiple
                            id="free-solo-2-demo"
                            disableClearable
                            options={dataList}
                            getOptionLabel={(dataList) => dataList.author}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search input"
                                    margin="normal"
                                    variant="outlined"
                                    InputProps={{...params.InputProps, type: 'search'}}
                                />
                            )}
                            value={this.props.defaultSelected}
                            onChange={this.onAuthorInputChanged}
                        />
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.props.sortingValue}
                            onChange={this.props.changeSorting}
                            label="Sorting"
                        >
                            <MenuItem value={'asc'}>Sort By Author Ascending</MenuItem>
                            <MenuItem value={'dsc'}>Sort By Author Descending</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography>
                            Filter Result: {this.props.filterDataSize}
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={1}>
                        <Button color={"primary"} variant={"outlined"}
                                onClick={this.props.resetFilter}>
                            Reset
                        </Button>
                    </Grid>

                </Grid>

            </div>
        );
    }
}

export default Filter;
