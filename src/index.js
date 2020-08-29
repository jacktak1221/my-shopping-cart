import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import store from "./redux/store";
import {Provider} from "react-redux";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff6f61"
        }
    }
})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
