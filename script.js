function showContent(food) {
  
    var title = document.getElementById('section-title');
    var content = document.getElementById('section-content');
    var gallery = document.querySelector('.image-gallery');
    
  switch (food) {
      case 'SuS':
          title.textContent = 'Suppen und Salaten';
          content.textContent = 'Indulge in our exquisite selection of soups and salads, where every spoonful and bite is a celebration of natures finest ingredients. Our soups are lovingly simmered to perfection, offering warmth and comfort in every bowl, from the rich, velvety textures of our creamy creations to the hearty embrace of rustic broths filled with garden-fresh vegetables';
          gallery.innerHTML = `
                <div class="image-item"><img src="image/phobo.jpg" alt="Image1"></div>
                <div class="image-item"><img src="image/banhdacua.jpg" alt="Image2"></div>
                <div class="image-item"><img src="image/images.jpg" alt="Image3"></div>
                <div class="image-item"><img src="image/images1.jpg" als="Image4"></div>
            `;    

          break;
      case 'Nigiri':
          title.textContent = 'Nigiri';
          content.textContent = 'A delicate harmony of hand-pressed sushi rice and the freshest cuts of fish, crafted to melt in your mouth with every perfect bite.';
          gallery.innerHTML = `
                <div class="image-item"><img src="image/nigi2.jpg" alt="Nigiri Image 2"></div>
                <div class="image-item"><img src="image/nigi3.jpg" alt="Nigiri Image 3"></div>
                <div class="image-item"><img src="image/nigi4.jpg" alt="Nigiri Image 4"></div>
                <div class="image-item"><img src="image/nigi5.jpg" alt="Nigiri Image 5"></div>
                <div class="image-item"><img src="image/nigi1.jpg" alt="Nigiri Image 1"></div>
            `;
          break;
      case 'Sashimi':
          title.textContent = 'Sashimi';
          content.textContent = 'A sublime presentation of meticulously sliced, pristine fish, celebrating the pure, unadulterated essence of ocean freshness in every elegant, mouthwatering bite.';
          gallery.innerHTML = `
                <div class="image-item"><img src="image/sashi2.jpg" alt="Sashimi Image 2"></div>
                <div class="image-item"><img src="image/sashi3.jpg" alt="Sashimi Image 3"></div>
                <div class="image-item"><img src="image/sashi4.jpg" alt="Sashimi Image 4"></div>
                <div class="image-item"><img src="image/sashimi1.jpg" alt="Sashimi Image 5"></div>
            `;
          break;
      case 'Makis':
          title.textContent = 'Makis';
          content.textContent = 'Artfully rolled sushi featuring vibrant, fresh ingredients wrapped in seaweed and seasoned rice, offering a delightful burst of flavors and textures in each meticulously crafted bite.'
          
          gallery.innerHTML = `
                <div class="image-item"><img src="image/makis.jpg" alt="Maki Image 2"></div>
                <div class="image-item"><img src="image/makis2.jpg" alt="Maki Image 3"></div>
           `;

          break;
      case 'SR':
          title.textContent = 'special Roll';
          content.textContent = 'An imaginative fusion of premium ingredients and creative flair, where each bite reveals layers of bold flavors and exquisite textures, beautifully rolled and artfully presented to elevate your sushi experience.';
         
          gallery.innerHTML = `
                <div class="image-item"><img src="image/sr1.jpg" alt="SR Image 2"></div>
                <div class="image-item"><img src="image/sr2.jpg" alt="SR Image 3"></div>
           `;
        
          break;
      case 'IOR':
          title.textContent = 'Inside out Rolls';
          content.textContent = 'A delectable twist on traditional sushi, where the creamy, flavorful fillings are encased in a soft, seasoned rice exterior, offering a delightful contrast of textures and a visually stunning presentation with every bite';
         
          gallery.innerHTML = `
                <div class="image-item"><img src="image/ior1.jpg" alt="IOR Image 2"></div>
                <div class="image-item"><img src="image/ior2.jpg" alt="IOR Image 3"></div>
           `;
        
          break;
      case 'Komposition':
          title.textContent = 'Komposition';
          content.textContent = 'An intricate culinary masterpiece where each element is thoughtfully combined to create a harmonious symphony of flavors, textures, and colors, beautifully arranged to offer a balanced and refined dining experience.';
       
         gallery.innerHTML = `
                <div class="image-item"><img src="image/d1.jpg" alt="IOR Image 2"></div>
                <div class="image-item"><img src="image/d2.jpg" alt="IOR Image 3"></div>
           `;
      
          break;
      default:
          title.textContent = 'Food not found';
          content.textContent = 'The content for the selected food is not available.';
       
          gallery.innerHTML = `
              <div class=image-item><img src="..." alt="..."></div>
           `;
        
          break;
  }
}
