/* caclulation */

import {
  getInputValues,
  calculateDifference,
  calculateDates,
  result,
  displayResult,
} from "../../src/js/script.js";
import { validateDay } from "../../src/js/validation.js";

const calculateDuration = () => {
  const dates = getInputValues();

  const diffrances = calculateDifference(dates);

  const days = calculateDates(diffrances);

  const getResult = result(days);

  displayResult(getResult);
};

const button = document.querySelector(".button");

button.addEventListener("click", calculateDuration);

/* validation days */

const inputs = document.querySelectorAll(".date-input");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    validateDay(e.target);
  });
});
