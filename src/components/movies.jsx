import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/Listgroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTables";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handlelike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handleListSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

getPagedData = () => {

  const {
    pageSize,
    currentPage,
    selectedGenre,
    sortColumn,
    movies: allMovies
  } = this.state;


  const filtered =
  selectedGenre && selectedGenre._id
    ? allMovies.filter(m => m.genre._id === selectedGenre._id)
    : allMovies;
const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

const movies = paginate(sorted, currentPage, pageSize);

return {totalCount: filtered.length ,data: movies }
};


  render() {
    //renaming length to count.
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,

    } = this.state;
    const {  totalCount, data:movies } = this.getPagedData();
    if (count === 0)
   
      return (
        <p>
          {" "}
          Am Sorry. Its Our Fault! No more movies left in the store,try again in
          a few minutes!
        </p>
      );

     return (
       
        <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onListSelect={this.handleListSelect}
          />
        </div>

        <div className="col">
          <p>
            There are <strong> {totalCount} </strong>movies
            remaining.Please Pick One{" "}
          </p>

          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handlelike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />

          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(c => c._id !== movie._id); //display the ones not equal to the deleted movie
    this.setState({ movies });
  };
}

export default Movies;
