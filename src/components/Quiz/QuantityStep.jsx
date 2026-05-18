export default function QuantityStep({ formData, onFieldChange, errors }) {
  return (
    <section className="step step--dimensions">
      <div className="step__header">
        <p className="eyebrow">Размеры</p>
        <h2>Размеры бассейна</h2>
        <p>Укажите длину, ширину или периметр бассейна для расчета необходимого количества камня</p>
      </div>

      <div className="dimensions-form">
        <label className="field">
          <span>Длина (м)</span>
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="Например, 6"
            value={formData.poolLength || ""}
            onChange={(e) => onFieldChange("poolLength", e.target.value)}
          />
          {errors?.poolLength ? <p className="field-error">{errors.poolLength}</p> : null}
        </label>

        <label className="field">
          <span>Ширина (м)</span>
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="Например, 3"
            value={formData.poolWidth || ""}
            onChange={(e) => onFieldChange("poolWidth", e.target.value)}
          />
          {errors?.poolWidth ? <p className="field-error">{errors.poolWidth}</p> : null}
        </label>

        <label className="field">
          <span>Периметр (м) — для бассейнов сложной формы</span>
          <input
            type="number"
            min="0"
            step="0.1"
            placeholder="Например, 18"
            value={formData.poolPerimeter || ""}
            onChange={(e) => onFieldChange("poolPerimeter", e.target.value)}
          />
          {errors?.poolPerimeter ? <p className="field-error">{errors.poolPerimeter}</p> : null}
        </label>
      </div>
    </section>
  );
}
