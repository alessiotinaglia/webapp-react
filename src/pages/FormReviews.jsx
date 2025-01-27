import { useState } from 'react';

function ReviewForm() {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const reviewData = {
            name,
            text,
            vote,
            date,
        };

        console.log(reviewData);

        setName('');
        setText('');
        setVote(1);
        setDate('');
    };

    return (
        <div className="mb-4">
            <h4 className='d-flex justify-content-center'style={{ color: 'black' }}> <strong>Aggiungi la tua recensione</strong></h4>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="date" className="form-label" style={{ color: 'black' }}> <strong>Data di Pubblicazione</strong></label>
                    <input
                        type="date"
                        id="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
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
                <div className='d-flex justify-content-center p-2 pb-5'>
                    <button type="submit" className="btn btn-primary">
                        Invia Recensione
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;
