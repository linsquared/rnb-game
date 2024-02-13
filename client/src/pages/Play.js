
import Button from "../components/Button/Button";
import { useState, useEffect } from "react";

export default function Play({ allQuestions }) {
    const [pickedList, setPickedList] = useState([]);
    const [randomSong, setRandomSong] = useState(null);

    // Set a random song on page load
    useEffect(() => {
        if (allQuestions.length > 0 && !randomSong) {
            const randomNum = Math.floor(Math.random() * allQuestions.length);
            const initialRandomSong = allQuestions[randomNum];
            setRandomSong(initialRandomSong);
            setPickedList([initialRandomSong]);
        }
    }, [allQuestions, randomSong]);

    const nextSong = () => {
        console.log('clicked');
        if (pickedList.length === allQuestions.length) {
            // need to add a function with this 
            console.log('End of deck');
            setPickedList([])
            return;
        }

        let newRandomSong;
        // Keep picking until a non-repeating random song is found
        do {
            const newRandomNum = Math.floor(Math.random() * allQuestions.length);
            newRandomSong = allQuestions[newRandomNum];
        } while (pickedList.find(song => song._id === newRandomSong._id));

        // Add the non-repeating random song to pickedList
        setPickedList(prev => [...prev, newRandomSong]);
        setRandomSong(newRandomSong);
    };

    console.log(pickedList);

    if (!randomSong) {
        // You can show a loading message or return null, depending on your UI requirements
        return <p>Hold up, wait a minute...</p>;
    }

    return (
        <main className="playingcard">
            <div className="playingcard__container" key={randomSong._id}>
                <li className="playingcard__ques">{randomSong.question}</li>
                <li className="playingcard__answer">{randomSong.answer}</li>
                <div className="playingcard__hint">
                    <span className="playingcard__title">Hint:</span>
                    <li className="playingcard__artist">Artist: {randomSong.artist_name}</li>
                    <li className="playingcard__song">Song: {randomSong.song_name}</li>
                </div>
            </div>

            <Button value={pickedList.length === allQuestions.length ? 'Replay' : 'Draw'} btnfunc={nextSong} />
        </main>
    );
}
