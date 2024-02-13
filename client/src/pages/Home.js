import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import '../style/global.scss'

const Home = () => {
    return (
        <main className="home">
            <Link to={'/play'}><Button value={'Play'} /></Link>
            <Link to={'/add'}><Button value={'Add'} /></Link>
            <Link to={'/viewall'}><Button value={'View'} /></Link>
        </main>
    )
}

export default Home