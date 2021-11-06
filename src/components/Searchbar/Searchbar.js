import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    inputData: "",
  };
  changeValue = (event) => {
    this.setState({ inputData: event.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ inputData: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeValue}
            value={this.state.inputData}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
