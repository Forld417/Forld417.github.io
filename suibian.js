app.get('/pingfen', (req, res) => {  
  const imagesDir = '/pingfen';  
  const images = fs.readdirSync(imagesDir)  
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));  
  
  // 确保索引不越界  
  currentImageIndex = (currentImageIndex + 1) % images.length;  
    
  const file = images[currentImageIndex];  
  const imageUrl = `http://forld417.github.io/${path.basename(imagesDir)}/${file}`;  
    
  res.json({ url: imageUrl }); // 返回下一张图片的URL  
});
