import { optionLabels } from "../data/quizOptions";

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.length ? value.map((item) => optionLabels[item] || item).join(", ") : "Не выбрано";
  }

  if (value === null || value === undefined || value === "") {
    return "Не указано";
  }

  return optionLabels[value] || String(value);
};

const formatDate = (isoDate) =>
  new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(isoDate));

export function formatLeadEmail(leadData) {
  const contact = leadData.contact;
  const fullName = [contact.lastName, contact.firstName, contact.middleName]
    .filter(Boolean)
    .join(" ");

  return [
    "Новая заявка на расчет бортового камня для бассейна",
    "",
    "Контакты клиента:",
    `ФИО: ${fullName || "Не указано"}`,
    `Город поставки: ${formatValue(contact.deliveryCity)}`,
    `Телефон: ${formatValue(contact.phone)}`,
    `Email: ${formatValue(contact.email)}`,
    "",
    "Параметры бортового камня:",
    `Модель камня: ${formatValue(leadData.stoneModel)}`,
    `Цвет камня: ${formatValue(leadData.color)}`,
    "",
    "Размеры бассейна:",
    `Длина: ${leadData.poolLength ? `${leadData.poolLength} м` : "Не указано"}`,
    `Ширина: ${leadData.poolWidth ? `${leadData.poolWidth} м` : "Не указано"}`,
    `Периметр (для сложной формы): ${leadData.poolPerimeter ? `${leadData.poolPerimeter} м` : "Не указано"}`,
    "",
    `Источник: ${leadData.source}`,
    `Дата заявки: ${formatDate(leadData.createdAt)}`,
  ].join("\n");
}
