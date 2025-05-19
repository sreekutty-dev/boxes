// script.js
const boxes = document.querySelectorAll('.box');
const total = document.getElementById('total');
const priceMap = {
  1: 10,
  2: 18,
  3: 24
};

boxes.forEach(box => {
  const input = box.querySelector('input[type="radio"]');
  input.addEventListener('change', () => {
    boxes.forEach(b => {
      b.classList.remove('active');
      const dd = b.querySelector('.dropdowns');
      if (dd) dd.classList.add('hidden');
    });

    box.classList.add('active');
    const selectedVal = parseInt(input.value);
    total.textContent = `$${priceMap[selectedVal].toFixed(2)} USD`;

    const dropdowns = box.querySelector('.dropdowns');
    if (dropdowns) dropdowns.classList.remove('hidden');
  });
});
