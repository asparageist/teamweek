// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Plant from './js/seed-catalog.js';
import WeatherService from './js/weather-service';
import PlantService from "./js/plant-finder.js";
import PlantImgService from './js/plant-img-service.js';

//Business logic for plant-finder

function getPlant(plantName) {
  PlantService.getPlant(plantName).then(function (response) {
    if (response.data) {
      plantInfo(response, plantName);
    } else {
      printError(response);
    }
  });
}

function getDisease(diseaseName) {
  PlantService.getDisease(diseaseName)
    .then(function (response) {
      if (response.data) {
        diseaseInfo(response, diseaseName);
      } else {
        printError(response);
      }
    });
}

//Business logic for plant-img-service

function getPlantByImage(plantImage) {
  PlantImgService.getPlantByImage(plantImage).then(function (response) {
    if (response.results) {
      plantImgInfo(response);
    } else {
      printError(response);
    }
  });
}

// UI logic for plant-finder

function plantInfo(response, plantName) {
  const container = document.getElementById("result-area");
  response.data.forEach((entry) => {
    container.innerHTML += `Results for "${plantName}":
    </br>
    Common name: "${entry.common_name}"
    </br>
    Scientific name: "${entry.scientific_name}"
    </br>
    Other Names: "${entry.other_name}
    </br>
    <img src="${entry.default_image.small_url}">
    Cycle: ${entry.cycle}
    </br>
    Lighting Preference: ${entry.sunlight}
    </br>
    Watering Preference: ${entry.watering}`;
  });
}

function diseaseInfo(response, diseaseName) {
  document.getElementById("result-area").innerText = `Here's a little about ${diseaseName}: ${response.data[0].description[0].description}`;
}

function printError(error) {
  document.getElementById("result-area").innerText = `There was an error accessing data: ${error}`;
}

function handleForm(event) {
  event.preventDefault();
  const plantName = document.getElementById("plant-name").value;
  document.getElementById("plant-name").value = null;
  getPlant(plantName);
}

function handleDiseaseForm(event) {
  event.preventDefault();
  const diseaseName = document.getElementById("disease-name").value;
  document.getElementById("disease-name").value = null;
  getDisease(diseaseName);
}

window.addEventListener("load", function () {
  document.getElementById("diseaseForm").addEventListener("submit", handleDiseaseForm);
});

window.addEventListener("load", function () {
  document.getElementById("textForm").addEventListener("submit", handleForm);
});

//Form Handling for Image-Generated Plantinfo

function imgGenHandleForm(event) {
  event.preventDefault();
  const plantName = document.getElementById("img-gen-plant-name").innerText;
  getPlant(plantName);
}

// function showImgGenForm() {
//   document.getElementById("img-gen").removeAttribute("class", "hidden");
// }

window.addEventListener("load", function () {
  document.getElementById("img-gen").addEventListener("submit", imgGenHandleForm);
});



//UI for plant-img-service

function plantImgInfo(response) {
  const container = document.getElementById("result-area");
  container.innerHTML = `This plant might be: ${response.results[0].species.scientificNameWithoutAuthor}
  </br>`;
  response.results[0].images.forEach((image) => {
    container.innerHTML += `<img src="${image.url.s}">`
  });
  document.getElementById("img-gen-plant-name").innerText += ` ${response.results[0].species.scientificNameWithoutAuthor}`;
  // document.getElementById("img-gen").removeAttribute("class");
}


function handleImageForm(event) {
  event.preventDefault();
  const plantImage = document.getElementById("image-input").value;
  document.getElementById("image-input").value = null;
  getPlantByImage(plantImage);
}

window.addEventListener("load", function () {
  document.getElementById("imageForm").addEventListener("submit", handleImageForm);
});

// UI logic for seed-catalog

document.addEventListener("DOMContentLoaded", function () {

  function calculateTax(cost) {
    const taxRate = 0.18;
    return cost * taxRate;
  }

  function updateCost() {
    const selectedTypes = Array.from(document.querySelectorAll('input[name="plant-type"]:checked'));
    let totalCost = 0;

    selectedTypes.forEach(typeInput => {
      const type = typeInput.value;
      const quantityInput = document.querySelector(`input[name="quantity-${type}"]`);
      const quantity = parseFloat(quantityInput.value);

      if (quantity > 0) {
        const plant = new Plant(type, quantity);
        totalCost += plant.calculateCost();
      }
    });

    const costDisplay = document.getElementById('total-cost');
    costDisplay.textContent = "Total Cost: $" + totalCost.toFixed(2);

    return totalCost;
  }

  function updateReceipt(totalCost) {
    const totalCostDisplay = document.getElementById('total-cost');
    const taxAmountDisplay = document.getElementById('tax-amount');
    const totalWithTaxDisplay = document.getElementById('total-with-tax');

    const tax = calculateTax(totalCost);
    const totalWithTax = totalCost + tax;

    totalCostDisplay.innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;
    taxAmountDisplay.innerHTML = `Tax: $${tax.toFixed(2)}`;
    totalWithTaxDisplay.innerHTML = `Total with Tax: $${totalWithTax.toFixed(2)}`;
  }

  function showReceipt() {
    const receipt = document.getElementById('receipt');
    receipt.classList.remove('hidden');
  }

  const placeOrderButton = document.getElementById('place-order-btn');
  placeOrderButton.addEventListener('click', () => {
    const totalCost = updateCost();
    updateReceipt(totalCost);
    showReceipt();
  });

  const shoppingButton = document.getElementById('shopping-btn');
  shoppingButton.addEventListener('click', () => {
    const orderForm = document.getElementById('order-form');
    orderForm.classList.remove('hidden');
  });
});

// Ui for weatherservice

function getWeather(city) {
  let promise = WeatherService.getWeather(city);
  promise.then(function(weatherDataArray) {
    weatherElements(weatherDataArray);
  }, function(errorArray) {
    weatherError(errorArray);
  });
}

function weatherElements(data) {
  document.getElementById('autoWeather').innerHTML = `Weather: \n${Math.round(1.8 *(data[0].main.temp - 273.15) + 32)}\u00B0F </br> ${data[0].main.humidity}% Humidity 
  <img src="https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png">`;
}

function weatherError(error) {
  document.getElementById('autoWeather').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function weatherFormSubmission(event) {
  event.preventDefault();
  getWeather();
}

window.addEventListener("load", function() {  
  weatherFormSubmission(event);
});