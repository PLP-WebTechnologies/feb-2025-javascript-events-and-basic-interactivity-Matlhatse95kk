// Color-changing Button
document.getElementById('colorBtn').addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.getElementById('colorBtn').style.backgroundColor = randomColor;
  });
  
  // Image Gallery
  const images = ['pexels-googledeepmind-18069239.jpg', 'image2.jpg', 'image3.jpg'];
  let currentIndex = 0;
  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('galleryImg').src = images[currentIndex];
  });
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImg.src = images[currentIndex];
  });
  
  // Tabs
  document.querySelectorAll('.tabBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tabContent').forEach(content => {
        content.style.display = 'none';
      });
      document.getElementById(btn.dataset.tab).style.display = 'block';
    });
  });