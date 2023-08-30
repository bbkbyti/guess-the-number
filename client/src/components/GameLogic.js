import React, { useState } from 'react';


export default function GameLogic() {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [points, setPoints] = useState(20);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');


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

        if (guessedNumber === randomNumber) {
            setMessage(`Congratulations! You guessed the hidden number ${randomNumber}`);
        }
        else if (guessedNumber > randomNumber) {
            setMessage(`Your guess was too high! Try again`);
            setPoints(points - 1);
            setMessage(`Your new score is ${points - 1}`)
        }
        else if (guessedNumber < randomNumber) {
            setMessage(`Your guess was too low! Try again`);
            setPoints(points - 1);
            setMessage(`Your new score is ${points - 1}`)
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
        </div>
    )
}
