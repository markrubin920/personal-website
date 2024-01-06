import "./Experience.css";

const ExperienceContainer = ({
  onClickFunction,
  image,
  date,
  company,
  description,
}) => {
  return (
    <div className="column">
      <section className="pic">
        <button onClick={onClickFunction} className="image">
          <img src={image} alt="Company" className="image" />
        </button>
      </section>
      <section className="date">
        <h3 className="date-h3">{date}</h3>
      </section>
      <section className="company">
        <h2 className="company-h2">{company}</h2>
      </section>
      <section className="desc">
        <p className="position-p">{description}</p>
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
