const formatPhone = (value) => {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  }

  if (digits && !digits.startsWith("7")) {
    digits = `7${digits}`;
  }

  digits = digits.slice(0, 11);

  if (!digits) {
    return "";
  }

  const local = digits.startsWith("7") ? digits.slice(1) : digits;
  const area = local.slice(0, 3);
  const first = local.slice(3, 6);
  const second = local.slice(6, 8);
  const third = local.slice(8, 10);

  let formatted = "+7";
  if (area) formatted += ` ${area}`;
  if (first) formatted += ` ${first}`;
  if (second) formatted += `-${second}`;
  if (third) formatted += `-${third}`;

  return formatted;
};

const isPhoneKeyAllowed = (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return true;
  }

  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Home",
    "End",
    "Tab",
    "Enter",
  ];

  return allowedKeys.includes(event.key) || /^\d$/.test(event.key);
};

export default function ContactStep({ formData, onFieldChange, errors }) {
  return (
    <section className="step step--contact">
      <div className="step__header">
        <p className="eyebrow">Финальный шаг</p>
        <h2>Персональные данные для нашего ответа</h2>
        <p>Пожалуйста, заполните контактную информацию. Специалист подготовит расчет и свяжется с вами.</p>
      </div>
      <div className="contact-form">
        <div className="form-grid form-grid--contact">
          <label className="field">
            <span>Фамилия <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={formData.lastName || ""}
              onChange={(event) => onFieldChange("lastName", event.target.value)}
              placeholder="Введите фамилию"
            />
            {errors.lastName ? <span className="field-error">{errors.lastName}</span> : null}
          </label>

          <label className="field">
            <span>Имя <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={formData.firstName || ""}
              onChange={(event) => onFieldChange("firstName", event.target.value)}
              placeholder="Введите имя"
            />
            {errors.firstName ? <span className="field-error">{errors.firstName}</span> : null}
          </label>

          <label className="field">
            <span>Отчество</span>
            <input
              type="text"
              value={formData.middleName || ""}
              onChange={(event) => onFieldChange("middleName", event.target.value)}
              placeholder="Введите отчество (необязательно)"
            />
            {errors.middleName ? <span className="field-error">{errors.middleName}</span> : null}
          </label>

          <label className="field">
            <span>Населенный пункт (город) поставки <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={formData.deliveryCity || ""}
              onChange={(event) => onFieldChange("deliveryCity", event.target.value)}
              placeholder="Например, Москва"
            />
            {errors.deliveryCity ? <span className="field-error">{errors.deliveryCity}</span> : null}
          </label>

          <label className="field">
            <span>Электронная почта <span style={{ color: "red" }}>*</span></span>
            <input
              type="email"
              value={formData.email || ""}
              onChange={(event) => onFieldChange("email", event.target.value)}
              placeholder="name@example.ru"
            />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>

          <label className="field">
            <span>Контактный телефон <span style={{ color: "red" }}>*</span></span>
            <input
              type="tel"
              value={formData.phone || ""}
              onChange={(event) => onFieldChange("phone", formatPhone(event.target.value))}
              onKeyDown={(event) => {
                if (!isPhoneKeyAllowed(event)) {
                  event.preventDefault();
                }
              }}
              inputMode="numeric"
              placeholder="+7 900 000-00-00"
            />
            {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
          </label>
        </div>
      </div>
    </section>
  );
}
