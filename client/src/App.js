import React, { Component } from "react";
import AppNavbar from "./components/APPNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div
          className="App"
          style={{
            backgroundColor: "#00020f",
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")',
          }}
        >
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>{" "}
        </div>{" "}
      </Provider>
    );
  }
}

export default App;
