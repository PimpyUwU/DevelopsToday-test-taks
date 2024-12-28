import axios from "axios";

// Base API URL
const BASE_URL = "http://localhost:3005";

// Fetch all countries data
export const getCountries = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data.map((country) => ({
            name: country.name,
            flag: `https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_${country.name}.svg`,
            code: country.countryCode,
        }));
    } catch (error) {
        console.error("Error fetching countries:", error);
        return [];
    }
};

// Fetch detailed country information
export const getCountryInfo = async (countryCode) => {
    try {
        const response = await axios.get(`${BASE_URL}/${countryCode}`);
        const country = response.data;

        if (!country) {
            throw new Error("Country data not found");
        }

        return {
            name: country.commonName,
            officialName: country.officialName,
            countryCode: country.countryCode,
            flag: country.imageURL,
            borders: country.borderCountries || [],
            populationData: country.population || [],
        };
    } catch (error) {
        console.error("Error fetching country info:", error);
        return null;
    }
};
