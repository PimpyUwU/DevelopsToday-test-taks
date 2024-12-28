"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const axios_1 = __importDefault(require("axios"));
exports.CountryService = {
    getCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get("https://date.nager.at/api/v3/AvailableCountries");
                return response.data;
            }
            catch (error) {
                console.error("Error fetching countries:", error);
                return null;
            }
        });
    },
    getCountryData(countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch border countries
                const borderResponse = yield axios_1.default.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
                const countryData = borderResponse.data;
                const borderCountries = countryData.borders;
                // Fetch population data
                const populationResponse = yield axios_1.default.post('https://countriesnow.space/api/v0.1/countries/population', {
                    country: countryData.commonName
                });
                const populationData = populationResponse.data.data.populationCounts.map((pop) => ({
                    year: pop.year,
                    value: pop.value
                }));
                // Fetch flag URL
                const flagResponse = yield axios_1.default.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
                    country: countryData.commonName
                });
                const flagURL = flagResponse.data.data.flag;
                // Return the complete CountryViewModel object
                return {
                    commonName: countryData.commonName,
                    officialName: countryData.officialName || "",
                    countryCode: countryData.countryCode || countryCode,
                    region: countryData.region || "Unknown",
                    borderCountries,
                    population: populationData,
                    imageURL: flagURL
                };
            }
            catch (error) {
                console.error("Error fetching country data:", error);
                return null;
            }
        });
    }
};
