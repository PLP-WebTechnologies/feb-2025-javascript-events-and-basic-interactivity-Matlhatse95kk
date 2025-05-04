// Button Click
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  // Hover Effects
  const hoverDiv = document.getElementById('hoverDiv');
  hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.backgroundColor = 'lightblue';
  });
  hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.style.backgroundColor = '';
  });
  
  // Keypress Detection
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Bonus: Double-click & Long Press
  const secretDiv = document.getElementById('secretDiv');
  let pressTimer;
  
  secretDiv.addEventListener('dblclick', () => {
    alert('Double-click detected! 🎉');
  });
  
  secretDiv.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      alert('Long press detected! ⏳');
    }, 2000);
  });
  
  secretDiv.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
  });