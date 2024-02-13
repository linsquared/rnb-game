

export default function View({ allQuestions }) {
    if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
        // You can show a loading message or return null, depending on your UI requirements
        return <p>Hold up, wait a minute...</p>;
    }

    return (


        <>
            <h1> All questions</h1>

            {allQuestions.map(song => {
                return (<>
                    <div key={song._id}>
                        <li>{song.question}</li>
                        <li>{song.answer}</li>
                        <li>{song.artist_name}</li>
                        <li>{song.song_name}</li>
                    </div>
                </>
                )
            })}
        </>
    )

}