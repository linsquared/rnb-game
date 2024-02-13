import FormInput from "../components/FormInput/FormInput"
import FormLabel from "../components/FormLabel/FormLabel"
import Button from "../components/Button/Button"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Add() {
    // use navigate 
    const navigate = useNavigate()

    // new song quiz state
    const [songQuiz, setSongQuiz] = useState({
        question: '',
        answer: '',
        song_name: '',
        artist_name: '',
    })

    // form control
    const formControl = (e) => {
        const { name, value } = e.target
        setSongQuiz(prev => ({
            ...prev, [name]: value
        }))
    }

    // seave new quiz btn
    const saveInfo = async (e) => {
        e.preventDefault()


        try {
            // // capture new info
            console.log(songQuiz)
            setSongQuiz(songQuiz)

            // send new info
            axios.post('http://localhost:8080/add', songQuiz)
            setSongQuiz({
                question: '',
                answer: '',
                song_name: '',
                artist_name: '',
            })
            navigate('/viewall')

        } catch (error) {
            console.log('errrr', error)
        }

    }

    return (
        <main className="add">
            <h1 className="add__title">Add a New Card</h1>
            <div className="add__item">
                {/* question */}
                <FormLabel forfield={"question"} text={'Question'} />
                <FormInput
                    name={"question"}
                    type={"text"}
                    palceholder={"Write your song question"}
                    value={songQuiz.question}
                    onchange={formControl}
                />
            </div>

            <div className="add__item">
                {/* answer */}
                <FormLabel forfield={"answer"} text={'Answer'} />
                <FormInput
                    name={"answer"}
                    type={"text"}
                    palceholder={"Write your answer"}
                    value={songQuiz.answer}
                    onchange={formControl}
                />
            </div>

            <div className="add__item">
                {/* hint */}
                <FormLabel forfield={"SongHint"} text={'Song name'} />
                <FormInput
                    name={"song_name"}
                    type={"text"}
                    palceholder={"What song is your question from"}
                    value={songQuiz.song_name}
                    onchange={formControl}
                />
            </div>

            <div className="add__item">
                <FormLabel forfield={"artistHint"} text={'Artist name'} />
                <FormInput
                    name={"artist_name"}
                    type={"text"}
                    palceholder={"Who is the artist"}
                    value={songQuiz.artist_name}
                    onchange={formControl}
                />
            </div>

            <div className="add__btn">
                <Button value={'save'} btnfunc={(e) => saveInfo(e)} />
                {/* <Buttons value={'Add Activity'} name={'buttons'} btnfunc={(e) => addActivity(e, activity)} /> */}
            </div>


        </main>
    )
}