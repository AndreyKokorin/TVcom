const sliderLenta1 = document.querySelector(".sliderLenta1");
const sliders1 = Array.from(sliderLenta1.children);
const slider1 = document.querySelector(".slider1");
const leftMove = document.querySelector(".leftMove");
const sliderLenta2 = document.querySelector(".sliderLenta2");
const sliders2 = Array.from(sliderLenta2.children);
const slider2 = document.querySelector(".slider2");
const rightmove = document.querySelector(".rightmove");

let countSlide1;

function handleSlider1MouseDown(event) {
  let startCoordinate = event.clientX;
  

  const mouseMoveListener = (event) => {
    const moveCoordinate = event.clientX;

    
    if (moveCoordinate < startCoordinate && countSlide1 !== 3 ) {
        if(countSlide1 != undefined){
            countSlide1++
        }
        else{
            countSlide1 = 0
        }
        leftMove.classList.add("leftMoveAnim");
      sliders1.forEach((item) => item.classList.remove("focusSlide"));
      sliders1[countSlide1].classList.add("focusSlide");
      switch (countSlide1) {
        case 0:
          {
            sliderLenta1.classList.add("slide0");
            for (let i = 0; i < 4; i++) {
              if (i !== 0) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
        case 1:
          {
            sliderLenta1.classList.add("slide1");
            for (let i = 0; i < 4; i++) {
              if (i !== 1) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
        case 2:
          {
            sliderLenta1.classList.add("slide2");
            for (let i = 0; i < 4; i++) {
              if (i !== 2) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
        case 3:
          {
            sliderLenta1.classList.add("slide3");
            for (let i = 0; i < 4; i++) {
              if (i !== 3) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
      }
      console.log(countSlide1)
    } else if (moveCoordinate > startCoordinate && countSlide1 !== 0 && countSlide1 != undefined) {
      --countSlide1;
      console.log(countSlide1)
      sliders1.forEach((item) => item.classList.remove("focusSlide"));
      sliders1[countSlide1].classList.add("focusSlide");

      switch (countSlide1) {
        case 0:
          {
            sliderLenta1.classList.add("slide0");
            for (let i = 0; i < 4; i++) {
              if (i !== 0) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
        case 1:
          {
            sliderLenta1.classList.add("slide1");
            for (let i = 0; i < 4; i++) {
              if (i !== 1) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
        case 2:
          {
            sliderLenta1.classList.add("slide2");
            for (let i = 0; i < 4; i++) {
              if (i !== 2) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
        case 3:
          {
            sliderLenta1.classList.add("slide3");
            for (let i = 0; i < 4; i++) {
              if (i !== 3) {
                sliderLenta1.classList.remove(`slide${i}`);
              }
            }
          }
          break;
      }
      
    }

    slider1.removeEventListener("mousemove", mouseMoveListener);
  };

  slider1.addEventListener("mousemove", mouseMoveListener);

  
  slider1.addEventListener("mouseup", () => {
    slider1.removeEventListener("mousemove", mouseMoveListener);
  });
}

let countSlide2;

function handleSlider2MouseDown(event) {
  let startCoordinate = event.clientX;

  const mouseMoveListener = (event) => {
    const moveCoordinate = event.clientX;

    if (startCoordinate < moveCoordinate && countSlide2 != 0) {
        if(countSlide2 == undefined){
            countSlide2 = 3
        }
        else{
            countSlide2--;  
        }
      rightmove.classList.add("rightmoveAnim");
      sliders2.forEach((item) => item.classList.remove("focusSlide"));
      sliders2[countSlide2].classList.add("focusSlide");

      switch (countSlide2) {
        case 0:
          {
            sliderLenta2.classList.add("slide20");
            for (let i = 0; i < 4; i++) {
              if (i !== 0) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
        case 1:
          {
            sliderLenta2.classList.add("slide21");
            for (let i = 0; i < 4; i++) {
              if (i !== 1) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
        case 2:
          {
            sliderLenta2.classList.add("slide22");
            for (let i = 0; i < 4; i++) {
              if (i !== 2) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
        case 3:
          {
            sliderLenta2.classList.add("slide23");
            for (let i = 0; i < 4; i++) {
              if (i !== 3) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
      }
      slider2.removeEventListener("mousemove", mouseMoveListener);
    }
    if (startCoordinate > moveCoordinate && countSlide2 != 3 && countSlide2!=undefined) {
      if (countSlide2 !== 3) {
        countSlide2++;
      }

      sliders2.forEach((item) => item.classList.remove("focusSlide"));
      sliders2[countSlide2].classList.add("focusSlide");

      switch (countSlide2) {
        case 0:
          {
            sliderLenta2.classList.add("slide20");
            for (let i = 0; i < 4; i++) {
              if (i !== 0) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
        case 1:
          {
            sliderLenta2.classList.add("slide21");
            for (let i = 0; i < 4; i++) {
              if (i !== 1) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
        case 2:
          {
            sliderLenta2.classList.add("slide22");
            for (let i = 0; i < 4; i++) {
              if (i !== 2) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
        case 3:
          {
            sliderLenta2.classList.add("slide23");
            for (let i = 0; i < 4; i++) {
              if (i !== 3) {
                sliderLenta2.classList.remove(`slide2${i}`);
              }
            }
          }
          break;
      }
      slider2.removeEventListener("mousemove", mouseMoveListener);
    }
  };

  slider2.addEventListener("mousemove", mouseMoveListener);

  slider2.addEventListener("mouseup", () => {
    slider2.removeEventListener("mousemove", mouseMoveListener);
  });
}

slider1.addEventListener("mousedown", handleSlider1MouseDown);
slider2.addEventListener("mousedown", handleSlider2MouseDown);