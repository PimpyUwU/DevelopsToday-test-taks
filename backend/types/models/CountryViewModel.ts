export type BorderCountry = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null | BorderCountry[]; // Вкладені країни
};

export type PopulationCount = {
    year: number;
    value: number;
};

export type CountryViewModel = {
    commonName: string; // Загальна назва країни
    officialName: string; // Офіційна назва країни
    countryCode: string; // Код країни
    region: string; // Регіон країни
    borderCountries: BorderCountry[]; // Список сусідніх країн
    population: PopulationCount[]; // Дані про населення
    imageURL: string; // URL зображення для країни
};
