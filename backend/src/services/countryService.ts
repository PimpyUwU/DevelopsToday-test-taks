import axios from "axios";
import { AllCountriesResponse } from "../../types/models/AllCountriesResponse";
import { BorderCountry, CountryViewModel, PopulationCount } from "../../types/models/CountryViewModel";

export const CountryService = {
    async getCountries(): Promise<AllCountriesResponse | null> {
        try {
            const response = await axios.get<AllCountriesResponse>("https://date.nager.at/api/v3/AvailableCountries");
            return response.data;
        } catch (error) {
            console.error("Error fetching countries:", error);
            return null;
        }
    },

    async getCountryData(countryCode: string): Promise<CountryViewModel | null> {
        try {
            // Fetch border countries
            const borderResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
            const countryData = borderResponse.data;

            const borderCountries: BorderCountry[] = countryData.borders

            // Fetch population data
            const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
                country: countryData.commonName
            });
            const populationData: PopulationCount[] = populationResponse.data.data.populationCounts.map((pop: any) => ({
                year: pop.year,
                value: pop.value
            }));

            // Fetch flag URL
            const flagResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
                country: countryData.commonName
            });
            const flagURL: string = flagResponse.data.data.flag;

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
        } catch (error) {
            console.error("Error fetching country data:", error);
            return null;
        }
    }
};
