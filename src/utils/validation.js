export function validateStep(stepId, formData) {
  const errors = {};
  const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

  const requireField = (field, message = "Заполните поле") => {
    const value = formData[field];
    if (Array.isArray(value) ? value.length === 0 : !value) {
      errors[field] = message;
    }
  };

  if (stepId === "stoneModel") {
    requireField("stoneModel", "Выберите модель бордюрного камня");
  }

  if (stepId === "color") {
    requireField("color", "Выберите цвет камня");
  }

  if (stepId === "quantity") {
    if (!formData.poolLength && !formData.poolWidth && !formData.poolPerimeter) {
      errors.poolLength = "Укажите длину/ширину или периметр бассейна";
    }
  }



  if (stepId === "contact") {
    requireField("lastName", "Укажите фамилию");
    requireField("firstName", "Укажите имя");
    requireField("deliveryCity", "Укажите город поставки");
    requireField("phone", "Укажите контактный телефон");
    requireField("email", "Укажите email для получения расчета");

    if (formData.phone && formData.phone.replace(/\D/g, "").length !== 11) {
      errors.phone = "Укажите номер телефона полностью";
    }

    if (formData.email && !emailPattern.test(formData.email)) {
      errors.email = "Проверьте формат email";
    }
  }

  return errors;
}

export function isStepValid(stepId, formData) {
  return Object.keys(validateStep(stepId, formData)).length === 0;
}
