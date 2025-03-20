import React, { Component, createContext } from 'react';
import logo from '../theme/logo.svg';
import '../theme/App.css';
import axios from 'axios';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {store, } from '../store/configureStore';
import {Main,  } from '../components/site/main';
import {Scrum, } from '../components/site/scrum';
import {Blog, } from '../components/site/blog';
import {ChatBot, } from '../components/site/chatbot';
import {RegExp, } from '../components/site/regexp';
import {Trainer, } from '../components/site/templates/trainer';
import {Post, } from '../components/site/templates/post';
import {Auth, } from '../components/site/templates/auth';
import {Manual, } from '../components/site/manual';
import {getCookie, } from '../api/csrf-token.js';
import {apiService, } from'../api/api.js';

import {fetchProducts, } from '../actions/fetchData';

var arr = []

async function getUser() {

    const response = await axios.get('http://127.0.0.1:8000/blog/requests/');

    for (let i=0; i<response.data.length; i++){
        arr.push(response.data[i].title)
    }


}
getUser()

export const globalContext = createContext({counter: 1})

class App extends Component {

  render() {

    return (
      <div className="App">
      <globalContext.Provider value={{counter: 1}}>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main />} />
                <Route path="auth" element={<Auth />} />
                <Route path="blog" element={<Blog />} />
                    <Route path="article/:id" element={<Post />} />
                <Route path="regexp" element={<RegExp />} />
                    <Route path="task/:id" element={<Trainer store={store} />} />

                    <Route path="manual/:id" element={<Manual />} />
                <Route path="chatbot" element={<ChatBot />} />
                <Route path="scrum" element={<Scrum />} />

            </Routes>
        </BrowserRouter>
        </globalContext.Provider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    item: state.products.item,
    loading: state.products.loading,
});

const mapDispatchToProps = (dispatch) => {

    return {getDataAction: () => dispatch()}
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(App);
//export default App;
