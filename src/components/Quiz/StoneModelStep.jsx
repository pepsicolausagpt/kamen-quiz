import { stoneModelOptions } from "../../data/quizOptions";

export default function StoneModelStep({ formData, onFieldChange, error }) {
  return (
    <section className="step">
      <div className="step__header">
        <p className="eyebrow font-serif text-aqua-dark">Выбор модели</p>
        <h2>Модель бортового камня</h2>
        <p>Выберите подходящую форму и ширину бортового камня для вашего бассейна</p>
      </div>

      <div className="card-grid card-grid--types">
        {stoneModelOptions.map((option) => {
          const isSelected = formData.stoneModel === option.value;
          return (
            <button
              key={option.value}
              className={`option-card ${isSelected ? "is-selected" : ""}`}
              type="button"
              onClick={() => onFieldChange("stoneModel", option.value)}
            >
              {isSelected && <div className="option-card__check" />}
              <div className="option-card__image">
                <img src={option.image} alt={option.label} />
              </div>
              <div className="option-card__content">
                <h3 className="option-card__title">{option.label}</h3>
                {option.subtitle && <p className="option-card__subtitle">{option.subtitle}</p>}
              </div>
            </button>
          );
        })}
      </div>
      {error ? <p className="field-error">{error}</p> : null}
    </section>
  );
}
