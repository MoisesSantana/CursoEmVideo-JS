const submitButton = document.querySelector('#submit');

const testAceptValue = (value) => {
  if (value <= 100 || value >= 1) return value;
  if (value > 100) 
}

submitButton.addEventListener('click', () => {
  const inputValue = document.querySelector('#current-number').value;
  testAceptValue(inputValue);
});