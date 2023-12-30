import "./Experience.css"
import { NavLink } from "react-router-dom";

const ExperienceContainer = ( { experience, image, date, company, description} ) =>
    {
        const url = "/experience/" + experience;

        return (
            <div className="column">
                <section className="pic"><NavLink to = {url} className="fi-image"><img src = {image} alt = "Fiserv" className="fi-image"/></NavLink></section>
                <section className="date"><h3>{date}</h3></section>
                <section className="company"><h2>{company}</h2></section>
                <section className="desc"><p>{description}</p></section>
                <section className="learn"><a href={url} className="link">Learn More</a></section>
            </div>
        )
}

export default ExperienceContainer;