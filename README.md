# _Plant Freak_

#### By _**Joseph Murray, Kari Vigna, Mac Granger, Greg Stillwell, Will Jolley**_

#### _This application provides information on various plants and diseases, has an order form to purchase seeds and starts, and identifies plants by image._

## Technologies Used

- _JavaScript_
- _HTML_
- _CSS_
- _Node.js_
- _Webpack_
- _NPM_
- _Babel_
- _ESLint_
- _JSON_
- _DotEnv_
- _Github_
- _Visual Studio Code_

## Description

_This Application "Plant Freak" is a plant recognition application that uses multiple API calls to identify plants by: common name, scientific name, and image URL. Additionally you can identify and research common plant diseases and receive information back about what afflicts your leafy friends! Included in the application is a current forecast for planting conditions and a seed catalog for all of your seed purchasing needs. Found at the bottom of the page tree you will find some information about the authors of the page and links to our separate Github profiles. Happy growing!_

## Setup/Installation Requirements

- Have VS Code installed
- Clone this repository to your desktop.
- Open the repository in VS Code.
- Navigate to the .gitignore file and enter .env on a new line.
- Navigate to the root directory and run the following commands in your terminal:
  - To create a .env file to store your API key: touch .env
  - To install dotenv plugin: npm install dotenv-webpack@2.0.0 --save-dev
- Navigate to webpack.config.js
  - Add the following on line 5: const Dotenv = require('dotenv-webpack');
  - Add the following to the plugins array: new Dotenv();
    - Make sure to add a comma at the end of the previous plugin.
- Generate API keys by creating accounts at:
  - https://perenual.com/login
    - After creating account, navigate to the API Docs page, click "GET API KEY & ACCESS", then click the "Generate New Key" button.
  - https://openweathermap.org/
  - https://my.plantnet.org/
    - For this key to work on a live server, you'll have to click "expose my API key" at https://my.plantnet.org/account/settings, and list your server domain in the "Authorized domains" box (e.g. http://localhost:8080)
- Insert your API keys in the .env file using the following syntax:
  - API_Key_1=(Your https://perenual.com/login Key Here) - without the parentheses.
  - API_Key_2=(Your https://openweathermap.org/ Key Here) - without the parentheses.
  - API_Key_3=(Your https://my.plantnet.org/ Key Here) - without the parentheses.
- From the root directory, run the following commands in your terminal:
  - to install dependencies: npm install
  - to run the application: npm run build
  - to open the application in a browser window: npm start

## Known Bugs

- _No known bugs._

## License

Copyright (c) _2023_ _Joseph Murray, Kari Vigna, Mac Granger, Greg Stillwell, Will Jolley_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
