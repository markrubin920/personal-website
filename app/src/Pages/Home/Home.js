import "./Home.css";
import Navigation from "../../Components/Navigation/Navigation";

const Home = () =>
{
    return (
        <div className="parent-container">
            <ul className="elements">
                <li className="navigation">
                    <Navigation />
                </li>
                <li className="navigation2">
                    <Navigation />
                </li>
            </ul>
        </div>
    )
}

export default Home;