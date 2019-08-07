import React  from "react";
const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>{`MovieForm = ${match.params.id}`}</h1>
      <button
        onClick={() => history.push("/movies")}
        className="badge badge-info"
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
