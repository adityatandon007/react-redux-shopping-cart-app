import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';


import App from './components/App';
import SingleProduct from './containers/SingleProduct';
import Cart from './containers/Cart';

import reducers from './reducers';
import { loadState, saveState } from './localstorage';

const persistentState = loadState();

const store = createStore(
    reducers,
    persistentState,
    applyMiddleware()
);
store.subscribe(()=>{
    saveState({
        cartProducts:store.getState().cartProducts
    });
});



ReactDOM.render(
<Provider store={store}>
    <div>
        <HashRouter >
            <div>
            <Route exact path='/' component={App} />
            <Route exact path='/product/:id' component={SingleProduct} />
            <Route exact path='/cart' component={Cart} />
            </div>
        </HashRouter>
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar/>
    </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
