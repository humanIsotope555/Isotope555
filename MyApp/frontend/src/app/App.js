import React, { Component } from 'react';
import logo from '../theme/logo.svg';
import '../theme/App.css';
import axios from 'axios';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Main,  } from '../components/site/main';
import {Scrum, } from '../components/site/scrum';
import {Blog, } from '../components/site/blog';
import {ChatBot, } from '../components/site/chatbot';
import {RegExp, } from '../components/site/regexp';
import {Trainer, } from '../components/site/templates/trainer';
import {Post, } from '../components/site/templates/post';
import {Manual, } from '../components/site/manual';

var arr = []

async function getUser() {

    const response = await axios.get('http://127.0.0.1:8000/blog/requests/');

    for (let i=0; i<response.data.length; i++){
        arr.push(response.data[i].title)
    }


}
getUser()
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main />} />
                <Route path="blog" element={<Blog />} />
                    <Route path="article/:id" element={<Post />} />
                <Route path="regexp" element={<RegExp />} />
                    <Route path="task/:id" element={<Trainer />} />

                    <Route path="manual/:id" element={<Manual />} />
                <Route path="chatbot" element={<ChatBot />} />
                <Route path="scrum" element={<Scrum />} />

            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
