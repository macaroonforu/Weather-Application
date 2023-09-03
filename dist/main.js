/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/current.js":
/*!************************!*\
  !*** ./src/current.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction current(mainData, location){\n    console.log(\"currentData\", mainData);\n    console.log(\"Location\", location); \n\n    const countrycode = countrycodes[location.country]; \n    \n    if(countrycode===undefined){\n        document.getElementById(\"country-icon-container\").innerHTML = `<img id=\"country-icon\" style=\"vertical-align:middle; padding:10px;\">`; \n\n    }\n    else{\n        document.getElementById(\"country-icon\").src  = `https://flagsapi.com/${countrycode}/flat/32.png`; \n\n    }\n\n\n    document.getElementById(\"city-title\").textContent = location.name; \n    document.getElementById(\"country\").textContent = location.country; \n    document.getElementById(\"date\").textContent = location.localtime; \n\n    document.getElementById(\"current_condition_text\").textContent = mainData.condition.text; \n    document.getElementById(\"current_condition_img\").src = mainData.condition.icon; \n    document.getElementById(\"current_temp\").textContent = mainData.temp_c; \n    document.getElementById(\"feels_like\").textContent = mainData.feelslike_c; \n    document.getElementById(\"uv-index\").textContent = mainData.uv; \n    document.getElementById(\"wind\").textContent = mainData.wind_kph; \n\n\n    \n}\n\nconst countrycodes = {'Afghanistan': 'AF',\n'Albania': 'AL',\n'Algeria': 'DZ',\n'American Samoa': 'AS',\n'Andorra': 'AD',\n'Angola': 'AO',\n'Anguilla': 'AI',\n'Antarctica': 'AQ',\n'Antigua and Barbuda': 'AG',\n'Argentina': 'AR',\n'Armenia': 'AM',\n'Aruba': 'AW',\n'Australia': 'AU',\n'Austria': 'AT',\n'Azerbaijan': 'AZ',\n'Bahamas': 'BS',\n'Bahrain': 'BH',\n'Bangladesh': 'BD',\n'Barbados': 'BB',\n'Belarus': 'BY',\n'Belgium': 'BE',\n'Belize': 'BZ',\n'Benin': 'BJ',\n'Bermuda': 'BM',\n'Bhutan': 'BT',\n'Bolivia, Plurinational State of': 'BO',\n'Bonaire, Sint Eustatius and Saba': 'BQ',\n'Bosnia and Herzegovina': 'BA',\n'Botswana': 'BW',\n'Bouvet Island': 'BV',\n'Brazil': 'BR',\n'British Indian Ocean Territory': 'IO',\n'Brunei Darussalam': 'BN',\n'Bulgaria': 'BG',\n'Burkina Faso': 'BF',\n'Burundi': 'BI',\n'Cambodia': 'KH',\n'Cameroon': 'CM',\n'Canada': 'CA',\n'Cape Verde': 'CV',\n'Cayman Islands': 'KY',\n'Central African Republic': 'CF',\n'Chad': 'TD',\n'Chile': 'CL',\n'China': 'CN',\n'Christmas Island': 'CX',\n'Cocos (Keeling) Islands': 'CC',\n'Colombia': 'CO',\n'Comoros': 'KM',\n'Congo': 'CG',\n'Congo, the Democratic Republic of the': 'CD',\n'Cook Islands': 'CK',\n'Costa Rica': 'CR',\n'Croatia': 'HR',\n'Cuba': 'CU',\n'Curaçao': 'CW',\n'Cyprus': 'CY',\n'Czech Republic': 'CZ',\n\"Côte d'Ivoire\": 'CI',\n'Denmark': 'DK',\n'Djibouti': 'DJ',\n'Dominica': 'DM',\n'Dominican Republic': 'DO',\n'Ecuador': 'EC',\n'Egypt': 'EG',\n'El Salvador': 'SV',\n'Equatorial Guinea': 'GQ',\n'Eritrea': 'ER',\n'Estonia': 'EE',\n'Ethiopia': 'ET',\n'Falkland Islands (Malvinas)': 'FK',\n'Faroe Islands': 'FO',\n'Fiji': 'FJ',\n'Finland': 'FI',\n'France': 'FR',\n'French Guiana': 'GF',\n'French Polynesia': 'PF',\n'French Southern Territories': 'TF',\n'Gabon': 'GA',\n'Gambia': 'GM',\n'Georgia': 'GE',\n'Germany': 'DE',\n'Ghana': 'GH',\n'Gibraltar': 'GI',\n'Greece': 'GR',\n'Greenland': 'GL',\n'Grenada': 'GD',\n'Guadeloupe': 'GP',\n'Guam': 'GU',\n'Guatemala': 'GT',\n'Guernsey': 'GG',\n'Guinea': 'GN',\n'Guinea-Bissau': 'GW',\n'Guyana': 'GY',\n'Haiti': 'HT',\n'Heard Island and McDonald Islands': 'HM',\n'Holy See (Vatican City State)': 'VA',\n'Honduras': 'HN',\n'Hong Kong': 'HK',\n'Hungary': 'HU',\n'Iceland': 'IS',\n'India': 'IN',\n'Indonesia': 'ID',\n'Iran, Islamic Republic of': 'IR',\n'Iraq': 'IQ',\n'Ireland': 'IE',\n'Isle of Man': 'IM',\n'Israel': 'IL',\n'Italy': 'IT',\n'Jamaica': 'JM',\n'Japan': 'JP',\n'Jersey': 'JE',\n'Jordan': 'JO',\n'Kazakhstan': 'KZ',\n'Kenya': 'KE',\n'Kiribati': 'KI',\n\"Korea, Democratic People's Republic of\": 'KP',\n'Korea, Republic of': 'KR',\n'Kuwait': 'KW',\n'Kyrgyzstan': 'KG',\n\"Lao People's Democratic Republic\": 'LA',\n'Latvia': 'LV',\n'Lebanon': 'LB',\n'Lesotho': 'LS',\n'Liberia': 'LR',\n'Libya': 'LY',\n'Liechtenstein': 'LI',\n'Lithuania': 'LT',\n'Luxembourg': 'LU',\n'Macao': 'MO',\n'Macedonia, the former Yugoslav Republic of': 'MK',\n'Madagascar': 'MG',\n'Malawi': 'MW',\n'Malaysia': 'MY',\n'Maldives': 'MV',\n'Mali': 'ML',\n'Malta': 'MT',\n'Marshall Islands': 'MH',\n'Martinique': 'MQ',\n'Mauritania': 'MR',\n'Mauritius': 'MU',\n'Mayotte': 'YT',\n'Mexico': 'MX',\n'Micronesia, Federated States of': 'FM',\n'Moldova, Republic of': 'MD',\n'Monaco': 'MC',\n'Mongolia': 'MN',\n'Montenegro': 'ME',\n'Montserrat': 'MS',\n'Morocco': 'MA',\n'Mozambique': 'MZ',\n'Myanmar': 'MM',\n'Namibia': 'NA',\n'Nauru': 'NR',\n'Nepal': 'NP',\n'Netherlands': 'NL',\n'New Caledonia': 'NC',\n'New Zealand': 'NZ',\n'Nicaragua': 'NI',\n'Niger': 'NE',\n'Nigeria': 'NG',\n'Niue': 'NU',\n'Norfolk Island': 'NF',\n'Northern Mariana Islands': 'MP',\n'Norway': 'NO',\n'Oman': 'OM',\n'Pakistan': 'PK',\n'Palau': 'PW',\n'Palestine, State of': 'PS',\n'Panama': 'PA',\n'Papua New Guinea': 'PG',\n'Paraguay': 'PY',\n'Peru': 'PE',\n'Philippines': 'PH',\n'Pitcairn': 'PN',\n'Poland': 'PL',\n'Portugal': 'PT',\n'Puerto Rico': 'PR',\n'Qatar': 'QA',\n'Romania': 'RO',\n'Russia': 'RU',\n'Rwanda': 'RW',\n'Réunion': 'RE',\n'Saint Barthélemy': 'BL',\n'Saint Helena, Ascension and Tristan da Cunha': 'SH',\n'Saint Kitts and Nevis': 'KN',\n'Saint Lucia': 'LC',\n'Saint Martin (French part)': 'MF',\n'Saint Pierre and Miquelon': 'PM',\n'Saint Vincent and the Grenadines': 'VC',\n'Samoa': 'WS',\n'San Marino': 'SM',\n'Sao Tome and Principe': 'ST',\n'Saudi Arabia': 'SA',\n'Senegal': 'SN',\n'Serbia': 'RS',\n'Seychelles': 'SC',\n'Sierra Leone': 'SL',\n'Singapore': 'SG',\n'Sint Maarten (Dutch part)': 'SX',\n'Slovakia': 'SK',\n'Slovenia': 'SI',\n'Solomon Islands': 'SB',\n'Somalia': 'SO',\n'South Africa': 'ZA',\n'South Georgia and the South Sandwich Islands': 'GS',\n'South Sudan': 'SS',\n'Spain': 'ES',\n'Sri Lanka': 'LK',\n'Sudan': 'SD',\n'Suriname': 'SR',\n'Svalbard and Jan Mayen': 'SJ',\n'Swaziland': 'SZ',\n'Sweden': 'SE',\n'Switzerland': 'CH',\n'Syrian Arab Republic': 'SY',\n'Taiwan, Province of China': 'TW',\n'Tajikistan': 'TJ',\n'Tanzania, United Republic of': 'TZ',\n'Thailand': 'TH',\n'Timor-Leste': 'TL',\n'Togo': 'TG',\n'Tokelau': 'TK',\n'Tonga': 'TO',\n'Trinidad and Tobago': 'TT',\n'Tunisia': 'TN',\n'Turkey': 'TR',\n'Turkmenistan': 'TM',\n'Turks and Caicos Islands': 'TC',\n'Tuvalu': 'TV',\n'Uganda': 'UG',\n'Ukraine': 'UA',\n'United Arab Emirates': 'AE',\n'United Kingdom': 'GB',\n'United States of America': 'US',\n'United States Minor Outlying Islands': 'UM',\n'Uruguay': 'UY',\n'Uzbekistan': 'UZ',\n'Vanuatu': 'VU',\n'Venezuela, Bolivarian Republic of': 'VE',\n'Vietnam': 'VN',\n'Virgin Islands, British': 'VG',\n'Virgin Islands, U.S.': 'VI',\n'Wallis and Futuna': 'WF',\n'Western Sahara': 'EH',\n'Yemen': 'YE',\n'Zambia': 'ZM',\n'Zimbabwe': 'ZW',\n'Åland Islands': 'AX'}; \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (current); \n\n//# sourceURL=webpack://weather-application/./src/current.js?");

/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction forecast(data){\n    console.log(\"Three Day Forecast\", data); \n\n    const three_day_grid = document.getElementById(\"three-day-grid\"); \n    three_day_grid.innerHTML=''; \n    for(const day of data){\n        const daydiv = document.createElement('div'); \n        daydiv.innerHTML = \n                    `<p>${day.date} </p>\n                    <p>Average Temperature: ${day.day.avgtemp_c} &#176; C</p>\n                    <p>${day.day.condition.text}</p>\n                    <img src=${day.day.condition.icon}>\n                    <p>Daily Maximum: ${day.day.maxtemp_c} &#176; C</p>\n                    <p>Daily Minimum: ${day.day.mintemp_c} &#176; C</p>`\n        three_day_grid.appendChild(daydiv); \n    }\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forecast); \n\n//# sourceURL=webpack://weather-application/./src/forecast.js?");

/***/ }),

/***/ "./src/hourly.js":
/*!***********************!*\
  !*** ./src/hourly.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hourly(data){\n    console.log(\"Hourly Data\", data); \n\n    const hourly_grid = document.getElementById(\"hourly-grid\"); \n    hourly_grid.innerHTML=''; \n    for(const hour of data){\n        const hourdiv = document.createElement('div'); \n        hourdiv.innerHTML = \n                    `<p>${hour.time} </p>\n                    <p>${hour.temp_c} &#176; C</p>\n                    <p>${hour.condition.text}</p>\n                    <img src=${hour.condition.icon}>\n                    `\n        hourly_grid.appendChild(hourdiv); \n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hourly); \n\n//# sourceURL=webpack://weather-application/./src/hourly.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.js */ \"./src/forecast.js\");\n/* harmony import */ var _hourly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourly.js */ \"./src/hourly.js\");\n/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.js */ \"./src/current.js\");\n \n \n \n\nconst button = document.getElementById(\"searchButton\"); \nbutton.addEventListener(\"click\", search); \nfunction search(){\n    console.log(\"hi\"); \n    const searchTerm = document.getElementById(\"citySearch\").value.trim().toLowerCase(); \n    fetch(`http://api.weatherapi.com/v1/forecast.json?key=2172c71e82df4422b4e143223230209&q=${searchTerm}&days=3&aqi=no&alerts=no`, {mode: 'cors'})\n    .then(response => {\n        if (!response.ok) {\n        throw new Error('Server returned ' + response.status);\n        }\n        return response.json();\n    })\n    .then(data => {\n        document.getElementById(\"fail\").style.display=\"none\"; \n        document.getElementById(\"success\").style.display=\"initial\";\n        console.log(data); \n        (0,_forecast_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.forecast.forecastday);\n        (0,_hourly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.forecast.forecastday[0].hour); \n        (0,_current_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.current, data.location); \n    })\n    .catch(error => {\n        const infodiv = document.getElementById(\"success\");\n        infodiv.style.display=\"none\";  \n        document.getElementById(\"fail\").style.display=\"initial\"; \n        console.error('There was a problem with the Fetch operation:', error);\n    });\n}\n\nfunction pageLoad(){\n    fetch(`http://api.weatherapi.com/v1/forecast.json?key=2172c71e82df4422b4e143223230209&q=toronto&days=3&aqi=no&alerts=no`, {mode: 'cors'})\n    .then(response => {\n        if (!response.ok) {\n        throw new Error('Server returned ' + response.status);\n        }\n        return response.json();\n    })\n    .then(data => {\n        document.getElementById(\"fail\").style.display=\"none\"; \n        document.getElementById(\"success\").style.display=\"initial\";\n        console.log(data); \n        (0,_forecast_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.forecast.forecastday);\n        (0,_hourly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.forecast.forecastday[0].hour); \n        (0,_current_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.current, data.location); \n    })\n    .catch(error => {\n        const infodiv = document.getElementById(\"success\");\n        infodiv.style.display=\"none\";  \n        document.getElementById(\"fail\").style.display=\"initial\"; \n        console.error('There was a problem with the Fetch operation:', error);\n    });\n}\n\npageLoad(); \n\n\n\n//# sourceURL=webpack://weather-application/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;