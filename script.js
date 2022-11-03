const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFeh = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fehToCel = (fehr) => {
    let celsius = Math.round(((fehr - 32) * 5) / 9);
    return celsius;
  };

  let Result;

  if (valueTemp == "cel") {
    Result = celToFeh(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = ` = ${Result}Fahrenheit`;
  } else {
    Result = fehToCel(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = ` = ${Result}Celsius`;
  }
};
