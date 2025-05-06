function calculateTotal() {
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) total += value;
  });

  const ansElement = document.getElementById("ans");
  ansElement.textContent = total;
}
