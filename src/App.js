import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

const INITIAL_STATE = { page: 1, gallery: [] };
// const KEY = "23417274-c745cca46d265f1806e9566e8";
const apiKey = "a92e1c28ff5839246667e5b68c28f141";
const baseUrl = "https://api.themoviedb.org/3/trending/movie/day";
class App extends Component {
  state = {
    ...INITIAL_STATE,
    query: "",
  };
  componentDidMount() {
    // fetch(`${baseUrl}?api_key=${apiKey}&page=${this.state.page}`)
    //   .then((res) => res.json())
    //   .then((pictures) => this.setState({ gallery: pictures }));

    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((pictures) => this.setState({ gallery: pictures }));
  }
  changeInputData = (data) => {
    this.setState({ query: data.inputData });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.changeInputData} />
        <ImageGallery gallery={this.gallery} />
      </>
    );
  }
}

export default App;
