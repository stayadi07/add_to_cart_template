function toggleBox(id) {
  const allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach((box) => {
    box.classList.remove("active");

    // Uncheck all radio buttons
    const radioButton = box.querySelector('input[type="radio"]');
    if (radioButton) {
      radioButton.checked = false;
    }
  });

  // Activate the clicked box
  const box = document.getElementById(`content${id}`).parentElement;
  box.classList.add("active");

  // Check the relevant radio button
  const radioButton = box.querySelector('input[type="radio"]');
  if (radioButton) {
    radioButton.checked = true;
  }

  const prices = ["$10.00 USD", "$18.00 USD", "$24.00 USD"];
  document.getElementById("total").innerText = prices[id - 1];
}
