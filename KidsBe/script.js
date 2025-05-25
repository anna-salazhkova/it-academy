
    let buttonNext = document.querySelector('.slider-next');
    let buttonPrev = document.querySelector('.slider-prev');
    let sliderLine = document.querySelector('.slider-line');
    let slider = document.querySelector('.slider');

    let offset = 0;

    buttonNext.onclick = function() {
      let maxWidth = parseInt(getComputedStyle(slider).maxWidth);
      let gap = parseInt(getComputedStyle(sliderLine).gap);
      let cardWidth = maxWidth - gap;

      offset = offset - cardWidth;

      if (offset < -2160){
        offset = 0;
        sliderLine.style.left = offset + "px";
      }
      else {
        sliderLine.style.left = offset + "px";
      }
    }

    buttonPrev.onclick = function() {
      let maxWidth = parseInt(getComputedStyle(slider).maxWidth);
      let gap = parseInt(getComputedStyle(sliderLine).gap);
      let cardWidth = maxWidth - gap;

      offset = offset + cardWidth;
      if (offset > 0){
        offset = -2160;
        sliderLine.style.left = offset + "px";
      }
      else {
        sliderLine.style.left = offset + "px";
      }
    }
