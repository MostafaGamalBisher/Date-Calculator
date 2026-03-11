export const validateDay = (input) => {
  const inputs = input.closest(".date");

  const dayInput = inputs.querySelector("[name='day']");
  const monthInput = inputs.querySelector("[name='month']");
  const yearInput = inputs.querySelector("[name='year']");

  const dayRaw = dayInput.value;
  const dayValue = Number(dayRaw);

  const monthRaw = monthInput.value;
  const monthValue = Number(monthRaw);

  const yearRaw = yearInput.value;
  const yearValue = Number(yearRaw);

  const dayMessage = dayInput.nextElementSibling;
  const monthMessage = monthInput.nextElementSibling;
  const yearMessage = yearInput.nextElementSibling;

  if (!dayInput.value || !monthInput.value) {
    dayInput.classList.remove("valid", "invalid");
    monthInput.classList.remove("valid", "invalid");
    return;
  }

  const datesInMonth = new Date(yearValue, monthValue, 0).getDate();

  if (dayRaw.includes(".")) {
    dayInput.classList.remove("valid", "warn");
    dayInput.classList.add("invalid");
    dayMessage.classList.add("visible");
  }

  if (monthRaw.includes(".")) {
    monthInput.classList.remove("valid", "warn");
    monthInput.classList.add("invalid");
    monthMessage.classList.add("visible");
  }

  if (yearRaw.includes(".")) {
    yearInput.classList.remove("valid", "warn");
    yearInput.classList.add("invalid");
    yearMessage.classList.add("visible");
    return;
  }

  if (dayValue >= 1 && dayValue <= datesInMonth) {
    dayInput.classList.remove("invalid");
    dayInput.classList.add("valid");
    dayMessage.classList.remove("visible");
  } else {
    dayInput.classList.remove("valid");
    dayInput.classList.add("invalid");
    dayMessage.classList.add("visible");
  }

  if (monthValue >= 1 && monthValue <= 12) {
    monthInput.classList.remove("invalid");
    monthInput.classList.add("valid");
    monthMessage.classList.remove("visible");
  } else {
    monthInput.classList.remove("valid");
    monthInput.classList.add("invalid");
    monthMessage.classList.add("visible");
  }

  if (yearValue === 0) {
    yearInput.classList.remove("invalid", "valid");
    yearInput.classList.add("warn");
    yearMessage.classList.remove("visible");
  } else if (yearValue < 0) {
    yearInput.classList.remove("valid", "warn");
    yearInput.classList.add("invalid");
    yearMessage.classList.add("visible");
  } else if (yearValue >= 1) {
    yearInput.classList.remove("invalid", "warn");
    yearInput.classList.add("valid");
    yearMessage.classList.remove("visible");
  } else {
    yearInput.classList.remove("valid", "warn");
    yearInput.classList.add("invalid");
    yearMessage.classList.add("visible");
  }
};
