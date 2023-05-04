import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const initialState = {
  movie: {
    data: {
      movies: [
        {
          id: 1,
          medium_cover_image: "",
        },
      ],
    },
  },
  banner: {
    back: "https://images.wallpaperscraft.ru/image/single/fon_piatna_temnyj_91678_300x168.jpg",
    title: "ApnaTV",
    subTitle: "movies and series",
    discription: "The best movies app",
    rating: "click on the slide",
    url: "",
    clicked: false,
  },
  movies: {
    data: {
      movies: [
        {
          id: 1,
          medium_cover_image: "",
        },
      ],
    },
  },
  favorites: [],
  cardDate: {
    title: "Movie",
    discription: "Nothing",
    rating: "0",
    type: "Movie",
    year: "0",
    runtime: "0",
    genres: ["Nothing"],
    banner:
      "https://collider.com/wp-content/uploads/gangster-squad-poster-banner.jpg",
    mainImage: "https://www.williams.edu/files/poster-005-700x1024.jpeg",
    comments: [],
  },
  loader: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "list/movies":
      return {
        ...state,
        movie: action.payload,
        loader: false,
      };
    case "list/moviesMain":
      return {
        ...state,
        movies: action.payload,
        loader: false,
      };
    case "favorites/movies":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "favorites/delete":
      return { ...state, favorites: action.payload };
    case "banner":
      return { ...state, banner: action.payload };
    case "card/movie":
      return { ...state, cardDate: action.payload };
    case "comment":
      return {
        ...state,
        cardDate: {
          ...state.cardDate,
          comments: [...state.cardDate.comments, action.payload],
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
