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

  /* validating day inputs */

  if (!dayInput.value) {
    //checks if the input is empty if so removes warnings

    dayInput.classList.remove("valid", "invalid");
    dayMessage.classList.remove("visible");
  } else {
    //to prevent ealry caculation of number of days in the month
    const datesInMonth = new Date(yearValue, monthValue, 0).getDate();

    if (!dayRaw.includes(".") && dayValue >= 1 && dayValue <= datesInMonth) {
      //vlaidate if the input does not  has "." & value >= than 1 & <= the dates in the month

      dayInput.classList.remove("invalid");
      dayInput.classList.add("valid");
      dayMessage.classList.remove("visible");
    } else {
      //inavildating the rest cases

      dayInput.classList.remove("valid");
      dayInput.classList.add("invalid");
      dayMessage.classList.add("visible");
    }
  }

  /* validating month inputs */
  if (!monthInput.value) {
    monthInput.classList.remove("valid", "invalid");
    monthMessage.classList.remove("visible");
  } else if (!monthRaw.includes(".") && monthValue >= 1 && monthValue <= 12) {
    monthInput.classList.remove("invalid");
    monthInput.classList.add("valid");
    monthMessage.classList.remove("visible");
  } else {
    monthInput.classList.remove("valid");
    monthInput.classList.add("invalid");
    monthMessage.classList.add("visible");
  }

  /* validating year inputs */

  //years can be 0 or 1 or more only and can't be decimal or lower than 0
  if (!yearInput.value) {
    yearInput.classList.remove("valid", "invalid");
    yearMessage.classList.remove("visible");
  } else if (yearValue === 0) {
    yearInput.classList.remove("invalid", "valid");
    yearInput.classList.add("warn");
    yearMessage.classList.remove("visible");
  } else if (yearValue < 0 || yearRaw.includes(".")) {
    yearInput.classList.remove("valid", "warn");
    yearInput.classList.add("invalid");
    yearMessage.classList.add("visible");
  } else if (yearValue >= 1) {
    yearInput.classList.remove("invalid", "warn");
    yearInput.classList.add("valid");
    yearMessage.classList.remove("visible");
  }
};
