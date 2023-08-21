API_KEY_1 will be for: https://perenual.com/user/developer
URL: 
---- species detail - https://perenual.com/api/species-list?key=[YOUR_KEY]&page=1
---- plant disease list - https://perenual.com/api/pest-disease-list?key=[YOUR_KEY]&page=1
---- plant guides - https://perenual.com/api/species-care-guide-list?key=[YOUR_KEY]&species_id=1&page=1
---- hardiness maps - https://perenual.com/api/hardiness-map?key=[YOUR_KEY]&species_id=1
---- plant faq - https://perenual.com/api/article-faq-list?key=[YOUR_KEY]&page=1
Description: Plant Identification, species, care guide, disease, hardiness maps. URL changes depending on what the API will need to return.

API_KEY_2 will be for: https://home.openweathermap.org
URL: http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}
Description: Weather conditions and forecast information based on location

API_KEY_3 will be for: 
URL: 
Description: 