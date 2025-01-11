document.addEventListener('DOMContentLoaded', function() {
    
    let images = [
        './media/images/banner/gallery.png',
        './media/images/gallery/california.png',
        './media/images/gallery/downtown.png',
        './media/images/gallery/hollywood.png',
        './media/images/gallery/krustyland.png',
        './media/images/gallery/skyline.png',
        './media/images/gallery/universal.png',
        './media/images/gallery/griffith.png',
        './media/images/gallery/gettymuseum.png',
        './media/images/gallery/venicebeach.png',
        './media/images/gallery/cryptocom.png',
        './media/images/gallery/petersenAutomotiveMuseum.png',
        './media/images/gallery/walkOfFame.png',
        './media/images/gallery/WDconcerthall.png',
        './media/images/gallery/beach.png'
    ];
    let index = 0;  

    
    const prevImg = document.getElementById('prevImg');
    const currImg = document.getElementById('currImg');
     const nextImg = document.getElementById('nextImg');

    
    function updateImages() {
        
        const prevImgElement = document.createElement('img');
        const currImgElement = document.createElement('img');
        const nextImgElement = document.createElement('img');
        
        
        prevImgElement.src = images[(index - 1 + images.length) % images.length]; 
        currImgElement.src = images[index];  
        nextImgElement.src = images[(index + 1) % images.length];  

        // clear stuff
        prevImg.innerHTML = '';  
        currImg.innerHTML = '';  
        nextImg.innerHTML = '';  
        
        prevImg.appendChild(prevImgElement);
        currImg.appendChild(currImgElement);
        nextImg.appendChild(nextImgElement);
    }

    
    updateImages();

    
    document.getElementById('bwdButton').addEventListener('click', function () {
        index = (index + 1) % images.length;  
        updateImages();  
    });
    
        document.getElementById('fwdButton').addEventListener('click', function () {
        index = (index - 1 + images.length) % images.length;  
        updateImages();  
    });
});
