import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Movies.module.css';

function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                setMovies(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nella richiesta:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Caricamento...</div>;
    }

    return (
        <div className="movies-list p-5">
            <h1 className={styles.title}>Lista dei Film</h1>
            <div className={styles.container}>
                {movies.map((movie) => (
                    <div key={movie.id} className={styles.card} style={{ width: '18rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                        <img src={movie.poster_url} alt={movie.title} className="movie-image" style={{ width: '100%', height: 'auto' }} />
                        <div className="card-body" style={{ padding: '1rem' }}>
                            <h5 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{movie.title}</h5>
                            <p className="card-text" style={{ fontSize: '1rem', color: '#666' }}>{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesList;