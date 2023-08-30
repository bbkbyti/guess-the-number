import React, { useState } from 'react';


export default function GameLogic() {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [points, setPoints] = useState(20);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [guessTracker, setGuessTracker] = useState([]);
    const [guessTrackerOn, setGuessTrackerOn] = useState(false);


    function generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

    const handleGuessChange = (e) => {
        setGuess(e.target.value);
    }

    const handleGuessSubmit = (e) => {
        e.preventDefault();
        console.log(randomNumber);

        const guessedNumber = parseInt(guess, 10);
        setGuessTracker(guessedNumber);
        setGuessTrackerOn(true);

        if (guessedNumber === randomNumber) {
            setMessage(`Congratulations! You guessed the hidden number ${randomNumber}`);
        }
        else if (guessedNumber > randomNumber) {
            setMessage(`Hint: Your guess was too high! Try again`);
            setPoints(points - 1);
            setGuessTracker(guess)
        }
        else if (guessedNumber < randomNumber) {
            setMessage(`Hint: Your guess was too low! Try again`);
            setPoints(points - 1);
            setGuessTracker(guess)
        }
        setGuess('');
    }

    return (
        <div>
            <p>Your score: {points}</p>
            <p>{message}</p>
            <form onSubmit={handleGuessSubmit}>
                <input
                    type='number'
                    value={guess}
                    onChange={handleGuessChange}
                    min='1'
                    max='20'
                />
                <button type='submit'>submit</button>
            </form>
            {guessTrackerOn ? <p>Your guess: {guessTracker}</p> : ''}
        </div>
    )
}
