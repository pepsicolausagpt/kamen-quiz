export const stoneModelOptions = [
  { value: "elba", label: "Эльба", subtitle: "Цена за 1 м/п - 4200 руб.", image: "/kamen-quiz/images/elba.jpg" },
  { value: "sicily", label: "Сицилия", subtitle: "Цена за 1 м/п - 4950 руб.", image: "/kamen-quiz/images/sicily.jpg" },
  { value: "tavola", label: "Тавола", subtitle: "Цена за 1 м/п - 4700 руб.", image: "/kamen-quiz/images/tavola.jpg" },
  { value: "corsica", label: "Корсика", subtitle: "Цена за 1 м/п - 5000 руб.", image: "/kamen-quiz/images/corsica.jpg" },
];

export const colorOptions = [
  { value: "color_1", label: "Голубой (№1)", image: "/kamen-quiz/images/colors/color_1.png" },
  { value: "color_2", label: "Песочный (№2)", image: "/kamen-quiz/images/colors/color_2.png" },
  { value: "color_3", label: "Коричневый (№3)", image: "/kamen-quiz/images/colors/color_3.png" },
  { value: "color_4", label: "Терракотовый (№4)", image: "/kamen-quiz/images/colors/color_4.png" },
  { value: "color_5", label: "Белый (№5)", image: "/kamen-quiz/images/colors/color_5.png" },
  { value: "color_6", label: "Серый (№6)", image: "/kamen-quiz/images/colors/color_6.png" },
  { value: "color_7", label: "Гранитный (№7)", image: "/kamen-quiz/images/colors/color_7.png" },
  { value: "color_8", label: "Золотистый (№8)", image: "/kamen-quiz/images/colors/color_8.png" },
  { value: "color_9", label: "Слоновая кость (№9)", image: "/kamen-quiz/images/colors/color_9.png" },
  { value: "color_10", label: "Антрацит (№10)", image: "/kamen-quiz/images/colors/color_10.png" },
  { value: "color_11", label: "Темно-коричневый (№11)", image: "/kamen-quiz/images/colors/color_11.png" },
  { value: "color_12", label: "Мятный (№12)", image: "/kamen-quiz/images/colors/color_12.png" },
];

export const sizeOptions = [
  { value: "straight", label: "Прямые элементы" },
  { value: "radial", label: "Радиусные элементы" },
  { value: "corner", label: "Угловые элементы" },
];

export const additionalItemOptions = [
  { value: "special_glue", label: "Специальный клей" },
  { value: "protective_impregnation", label: "Защитная пропитка" },
  { value: "seam_grout", label: "Затирка для швов" },
];

export const implementationTimeOptions = [
  { value: "this_month", label: "В этом месяце" },
  { value: "next_month", label: "В следующем месяце" },
  { value: "researching", label: "Изучаю рынок" },
];

export const budgetOptions = [
  { value: "up_to_100k", label: "До 100 000 рублей" },
  { value: "up_to_200k", label: "До 200 000 рублей" },
  { value: "up_to_300k", label: "До 300 000 рублей" },
  { value: "over_300k", label: "Более 300 000 рублей" },
];

/* ═══════════════════════════════════════
   Словарь value → label для email
   ═══════════════════════════════════════ */
export const optionLabels = Object.fromEntries(
  [
    ...stoneModelOptions,
    ...colorOptions,
    ...sizeOptions,
    ...additionalItemOptions,
    ...implementationTimeOptions,
    ...budgetOptions,
  ].map((option) => [option.value, option.label])
);
