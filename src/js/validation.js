export const validateDay = (input) => {
  const inputs = input.closest(".date");

  const dayInput = inputs.querySelector("[name='day']");
  const monthInput = inputs.querySelector("[name='month']");
  const yearInput = inputs.querySelector("[name='year']");

  const dayValue = Number(dayInput.value);
  const monthValue = Number(monthInput.value);
  const yearValue = Number(yearInput.value);

  if (!dayValue || !monthValue || !yearValue) {
    dayInput.classList.remove("valid", "invalid");
    return;
  }

  const datesInMonth = new Date(yearValue, monthValue, 0).getDate();

  if (dayValue >= 1 && dayValue <= datesInMonth) {
    dayInput.classList.remove("invalid");
    dayInput.classList.add("valid");
  } else {
    dayInput.classList.remove("valid");
    dayInput.classList.add("invalid");
  }
};
