import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ReviewForm({ fetchMovie }) {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const reviewData = {
            name,
            text,
            vote,
        };

        axios.post(`http://localhost:3000/movies/${id}/reviews`, reviewData)
            .then(() => {
                fetchMovie();
                setName('');
                setText('');
                setVote(1);
            })
            .catch((error) => {
                console.error("Errore durante l'invio della recensione:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center' style={{color: 'black'}}>
                <h2><strong>Aggiungi la tua recensione</strong></h2>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label my-2" style={{ color: 'black' }}> <strong>Nome</strong></label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label" style={{ color: 'black' }}> <strong>Recensione</strong></label>
                <textarea
                    id="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="vote" className="form-label" style={{ color: 'black' }}> <strong>Voto (1-5)</strong></label>
                <input
                    type="number"
                    id="vote"
                    className="form-control"
                    value={vote}
                    onChange={(e) => setVote(e.target.value)}
                    min="1"
                    max="5"
                    required
                />
            </div>
            <div className="d-flex justify-content-center p-2 pb-5">
                <button type="submit" className="btn btn-primary">
                    Invia Recensione
                </button>
            </div>
        </form>
    );
}

export default ReviewForm;
