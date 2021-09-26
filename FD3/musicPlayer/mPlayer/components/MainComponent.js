import React from 'react';
import PropTypes, { func } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


//import Track from '../components/track';

import PagesRouter from '../pages/PagesRouter';
import PagesLinks from '../pages/PagesLinks';
import combinedReducer from '../redux/reducers'

import { allSongsLoadingAC, allSongsErrorAC, allSongsSetAC } from "../redux/allSongsAC";

let store = createStore(combinedReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//

class MainComponent extends React.PureComponent {

    componentDidMount() {

        this.props.dispatch(allSongsLoadingAC()); // переводим раздел countries стора в состояние "загружается"

        isoFetch("http://localhost:3000/playlist", {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err = new Error("fetch error " + response.status);
                    Err.userMessage = "Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then((data) => {
                this.props.dispatch(allSongsSetAC(data.rows)); // переводим раздел countries стора в состояние "ошибка"
            })
            .catch((error) => {
                console.error(error);
                this.props.dispatch(allSongsErrorAC()); // переводим раздел countries стора в состояние "ошибка"
            })
            ;

    }
    render() {
        console.log("MainComponent is render");
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <PagesLinks />
                        <PagesRouter />
                    </div>
                </BrowserRouter>
            </Provider>
        );

    }

}

// const mapStateToProps = function (state) {
//     console.log(state)
//     return {
//         state
//     };
// };

export default MainComponent;
