// import logo from './logo.svg';
import React from "react";
import './App.css';
import MainPage from "./page/MainPage";
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (<Provider store={store}>
    <div className="App">
      
      <MainPage />
    </div>
  </Provider>

  );
}

export default App;
