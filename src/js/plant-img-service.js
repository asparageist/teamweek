export default class PlantImgService {
  static getPlantByImage(plantImage) {
    return fetch (`https://my-api.plantnet.org/v2/identify/all?images=${plantImage}&organs=leaf&include-related-images=true&no-reject=true&lang=en&type=kt&api-key=${process.env.API_KEY_3}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    });
  }
}