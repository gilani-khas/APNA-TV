export const movies = () => {
  return function (dispatch) {
    dispatch({ type: "loader", payload: true });
    fetch("https://yts.mx/api/v2/list_movies.json?limit=10&page=5")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "list/movies",
          payload: data,
        });
      });
  };
};
export const moviesMain = () => {
  return function (dispatch) {
    dispatch({ type: "loader", payload: true });
    fetch("https://yts.mx/api/v2/list_movies.json?limit=8&page=7")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "list/moviesMain",
          payload: data,
        });
      });
  };
};
