import { LEAD_SOURCE } from "../config/constants";

export function buildLeadData(formData) {
  const createdAt = new Date().toISOString();
  const contact = {
    lastName: formData.lastName?.trim() || "",
    firstName: formData.firstName?.trim() || "",
    middleName: formData.middleName?.trim() || "",
    deliveryCity: formData.deliveryCity?.trim() || "",
    phone: formData.phone?.trim() || "",
    email: formData.email?.trim() || "",
  };

  return {
    source: LEAD_SOURCE,
    stoneModel: formData.stoneModel,
    color: formData.color,
    poolLength: formData.poolLength,
    poolWidth: formData.poolWidth,
    poolPerimeter: formData.poolPerimeter,
    contact,
    createdAt,
  };
}
