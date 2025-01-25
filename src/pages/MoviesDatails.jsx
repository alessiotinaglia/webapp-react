import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nella richiesta:', error);
                setError('Film non trovato');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center">Caricamento...</div>;
    }

    if (error) {
        return <div className="text-center text-danger">{error}</div>;
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">{movie.title}</h1>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center bg-dark">
                    <img src={`/${movie.image}`} alt={movie.title} className="movie-image" style={{ width: 'auto', height: '500px' }} />
                </div>
                <div className="col-md-6">
                    <h3 className='mt-5'>Recensione :</h3>
                    <p>{movie.abstract}</p>
                    <h3 className="mt-4 mb-4">Recensioni:</h3>
                    <div className="list-group">
                        {movie.reviews.length > 0 ? (
                            movie.reviews.map((review) => (
                                <div key={review.id} className="list-group-item bg-light">
                                    <strong>{review.name}</strong>: {review.text}
                                    <h6><strong>Data di Pubblicazione : </strong>{review.created_at}</h6>
                                    <h6><strong>Voto : </strong>{review.vote}</h6>
                                </div>

                            ))
                        ) : (
                            <p>Non ci sono recensioni per questo film.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;