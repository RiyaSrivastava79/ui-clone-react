import Button from './Button';

function Card({ image, title, subtitle, description, buttonText, onButtonClick }) {
  return (
    <article className="ui-card">
      <div className="card-head">
        <div className="card-avatar-wrap">
          <img src={image} alt={title} className="card-avatar" />
          <span className="card-badge" aria-hidden="true">
            +
          </span>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      {description ? <p className="card-description">{description}</p> : null}
      {buttonText ? (
        <Button variant="secondary" onClick={onButtonClick} className="card-btn">
          {buttonText}
        </Button>
      ) : null}
    </article>
  );
}

export default Card;
