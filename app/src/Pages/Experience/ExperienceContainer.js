import "./Experience.css";

const ExperienceContainer = ({
  onClickFunction,
  image,
  date,
  company,
  description,
}) => {
  // const url = "/experience/" + experience;

  return (
    <div className="column">
      <section className="pic">
        <img src={image} alt="Fiserv" className="fi-image" />
      </section>
      <section className="date">
        <h3>{date}</h3>
      </section>
      <section className="company">
        <h2>{company}</h2>
      </section>
      <section className="desc">
        <p>{description}</p>
      </section>
      <section className="learn">
        <button onClick={onClickFunction} className="link">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default ExperienceContainer;
