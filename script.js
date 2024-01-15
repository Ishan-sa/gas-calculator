document
  .getElementById("gasCalculatorForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const gasCost = document.getElementById("gasCost").value;
    const distanceDriven = document.getElementById("distanceDriven").value;
    const carAverage = document.getElementById("carAverage").value;

    if (gasCost && distanceDriven && carAverage) {
      const totalCost = (distanceDriven / 100) * carAverage * gasCost;
      document.getElementById(
        "result"
      ).innerText = `Total Gas Cost: $${totalCost.toFixed(2)}`;
    } else {
      document.getElementById("result").innerText =
        "Please fill all the fields.";
    }
  });

console.log("Hello World");
