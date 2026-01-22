function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const loading = document.getElementById('loading');
  const bmiEl = document.getElementById('bmi');

  if (!height || !weight) return;

  bmiEl.innerText = '';
  loading.style.opacity = 1;

  setTimeout(() => {
    const h = height / 100;
    const bmi = weight / (h * h);

    loading.style.opacity = 0;
    bmiEl.innerText = 'BMI = ' + bmi.toFixed(2);
  }, 800); // 計算動畫延遲
}
