(function () {

  var carousel = {
    currentPage: 0,
    isActive: false,
    items: [
      { id: 0, imageUrl: "/slider-img-0.jpg" },
      { id: 1, imageUrl: "/slider-img-1.jpg" },
      { id: 2, imageUrl: "/slider-img-2.jpg" },
      { id: 3, imageUrl: "/slider-img-3.jpg" }
    ]
  }

  var carouselContainer = document.querySelector(".carousel-container");

  // Create carousel item as many as the amount of items
  for(var i = 0; i < carousel.items.length; i++){
    var carouselItem = document.createElement("div");
    var carouselItemInner = document.createElement("div");
    var carouselImage = document.createElement("div");
    var image = document.createElement("img");

    var currentItem = carousel.items.find(item => item.id === i);
    image.src = currentItem.imageUrl;
  
    carouselItem.classList.add("carousel-item");
    carouselItemInner.classList.add("carousel-item-inner");
    carouselImage.classList.add("carousel-image");
  
    carouselImage.appendChild(image);
    carouselItemInner.appendChild(carouselImage);
    carouselItem.appendChild(carouselItemInner);
    carouselContainer.appendChild(carouselItem);
  }
  
  var prevPageBtn = carouselContainer.querySelector(".carousel-control-prev");  
  prevPageBtn.addEventListener("mousedown", prevPage);

  var nextPageBtn = carouselContainer.querySelector(".carousel-control-next");
  nextPageBtn.addEventListener("mousedown", nextPage);

  function prevPage(){    
    if(carousel.currentPage === 0){
      return false;
    }else{
      carousel.currentPage--;
    }
    console.log("currentPage",carousel.currentPage);
  }

  function nextPage(){    
    if(carousel.currentPage === carousel.items.length - 1){
      return false;
    }else{
      carousel.currentPage++;
    }
    console.log("currentPage",carousel.currentPage);
  }
}());
