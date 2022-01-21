import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

let imgPath = 'https://picsum.photos/seed/';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'The Godfather', Description: 'The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.', ImageURL: imgPath + '1//200/300' },
        { _id: 2, Title: 'Inception', Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', ImageURL: imgPath + '2//200/300' },
        { _id: 3, Title: 'The Matrix', Description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.', ImageURL: imgPath + '3//200/300' }
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
    //if (selectedMovie) return <MovieView movie={selectedMovie} />;
    if (movies.length === 0)
      return <div className="main-view">Movies are missing!</div>;

    return (
      <div className='main-view'>
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (<MovieCard key={movie._id} movieData={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />))}

      </div>
    );
  }
}
