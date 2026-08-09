import React from "react";

// Child Component
function MovieCard(props) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          <strong>Genre:</strong> {props.genre}
        </p>
        <p className="card-text">
          <strong>Year:</strong> {props.year}
        </p>
        <p className="card-text">
          <strong>Rating:</strong> {props.rating}
        </p>
      </div>
    </div>
  );
}

export default function PropsUsingCard() {
  const movies = [
    {
      title: "3 Idiots",
      genre: "Comedy / Drama",
      year: 2009,
      rating: 8.4,
    },
    {
      title: "KGF: Chapter 2",
      genre: "Action",
      year: 2022,
      rating: 8.2,
    },
    {
      title: "Dangal",
      genre: "Sports / Drama",
      year: 2016,
      rating: 8.3,
    },
  ];

  const cards = [];

  for (let i = 0; i < movies.length; i++) {
    cards.push(
      <MovieCard
        key={i}
        title={movies[i].title}
        genre={movies[i].genre}
        year={movies[i].year}
        rating={movies[i].rating}
      />
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lab-02 Props Demo Using Cards</h2>

      <div className="d-flex flex-wrap justify-content-center">
        {cards}
      </div>
    </div>
  );
}