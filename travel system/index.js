var swiper = new Swiper(".mySwiper", {

    loop: true,
    autoplay: true,
    autoplayTimeout: 100,
    autoplayHoverPause: true,
  
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 10,
      modifier: 2,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  let cityValue1 = ["Greece", "italy", "france", "paris", "mumbai", "london", "tokyo", "rome"];
  const slider = document.getElementById("slider");
  
  let getWeather = () => {
    for (let i = 0; i < 8; i++) {
      let cityValue = cityValue1[i];
      if (cityValue.length == 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
      } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
  
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => {
            // console.log(data);
            // console.log(data.weather[0].icon);
            // console.log(data.weather[0].main);
            // console.log(data.weather[0].description);
            // console.log(data.name);
            // console.log(data.main.temp_min);
            // console.log(data.main.temp_max);
            const card = document.createElement("div");
            card.classList = "card-body";
            const content = `
            <div class="card swiper-slide">
              <div class="container">
                <h2 id="H2">${data.name}</h2>
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
                <h1>${data.main.temp} &#176;</h1>
                <div class="temp-container">
                  <div class="min">
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}&#176;</h4>
                  </div>
                  <div class="max">
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}&#176;</h4>
                  </div>
                </div>
              </div>
            </div>`;
            slider.innerHTML += content;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  document.getElementById("submit1").addEventListener('click', (event)=>{
    //event.preventDefault();
    var element = document.getElementById(" form_id ");
    element.reset()
  })
 
  
  window.addEventListener("load", getWeather);
  