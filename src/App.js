import React, { Component } from "react";
import "./App.css";
import scott from "./images/scott.JPG";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

class App extends React.Component {
  state = {
    open: false,
    vertical: "top",
    horizontal: "center"
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    const scottClick = () => {
      alert(
        "You really spotted scott!!!!!!!!!#%#$^#%&^@$!!@$$!$@%!#%#@$^@$^@$^"
      );
    };
    return (
      <div className="App">
        <img
          src={scott}
          className="App-logo"
          alt="logo"
          onClick={() => scottClick()}
        />
        <h1 className="App-title">You spotted Scott!!</h1>
        <p className="App-intro">Congrats!</p>
        <Button
          onClick={this.handleClick({ vertical: "top", horizontal: "left" })}
        >
          Top-Left
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Scott's here?</span>}
        />
      </div>
    );
  }
}

export default App;
