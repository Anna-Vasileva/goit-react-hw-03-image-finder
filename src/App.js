import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import "./App.css";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

const INITIAL_STATE = { page: 1, gallery: null };
const KEY = "23417274-c745cca46d265f1806e9566e8";
// const apiKey = "a92e1c28ff5839246667e5b68c28f141";
// const baseUrl = "https://api.themoviedb.org/3/trending/movie/day";
class App extends Component {
  state = {
    ...INITIAL_STATE,
    isLoading: false,
    query: "",
    // showModal: false,
    showModal: true,
  };
  componentDidMount() {
    // fetch(`${baseUrl}?api_key=${apiKey}&page=${this.state.page}`)
    //   .then((res) => res.json())
    //   .then((pictures) => this.setState({ gallery: pictures }));
    // this.getImages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      // this.setState({ page: 1 });
      this.setState({ ...INITIAL_STATE, query: this.state.query });
      this.getImages();
    }
    if (prevState.page !== this.state.page) {
      this.getImages();
    }
  }
  changeInputData = (data) => {
    this.setState({ query: data.inputData });
  };
  getImages = () => {
    // if (!this.state.query) return;
    this.setState({ isLoading: true });
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((pictures) => {
        this.setState((prevState) => {
          return !prevState.gallery
            ? { gallery: pictures.hits }
            : { gallery: [...prevState.gallery, ...pictures.hits] };
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  incrementPage = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  };
  toggleModal = () => {
    this.setState((showModal) => ({ showModal: !showModal }));
  };
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  render() {
    const { isLoading, gallery, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeInputData} />

        {gallery && <ImageGallery gallery={gallery} />}
        {gallery && <Button onClick={this.incrementPage} />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://image.tmdb.org/t/p/w400/zZMebBIsNipjFhJFv0zjm0KQaBF.jpg"
              alt="изображение pixabay"
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
