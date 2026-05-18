import { colorOptions } from "../../data/quizOptions";

export default function ColorStep({ formData, onFieldChange, error }) {
  return (
    <section className="step">
      <div className="step__header">
        <p className="eyebrow">Цветовое решение</p>
        <h2>Цвет бордюрного камня</h2>
        <p>Выберите цвет бордюрного камня, который будет лучше всего гармонировать с дизайном Вашей зоны отдыха</p>
      </div>

      <div className="card-grid card-grid--types">
        {colorOptions.map((option) => {
          const isSelected = formData.color === option.value;
          return (
            <button
              key={option.value}
              className={`option-card ${isSelected ? "is-selected" : ""}`}
              type="button"
              onClick={() => onFieldChange("color", option.value)}
            >
              {isSelected && <div className="option-card__check" />}
              <div className="option-card__image">
                <img src={option.image} alt={option.label} />
              </div>

            </button>
          );
        })}
      </div>
      {error ? <p className="field-error">{error}</p> : null}
    </section>
  );
}
