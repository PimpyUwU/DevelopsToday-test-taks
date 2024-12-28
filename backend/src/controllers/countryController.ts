import {Request, Response} from "express";
import {RequestWithURIParam} from "../../types/RequestTypes";
import {AllCountriesResponse} from "../../types/models/AllCountriesResponse";
import HTTP_CODES from "../HTTP_CODES";
import {CountryViewModel} from "../../types/models/CountryViewModel";
import {CountryService} from "../services/countryService";



export const CountryController = {
    async allCountriesGet(req : Request,
                          res : Response<AllCountriesResponse>){
        const result : AllCountriesResponse | null = await CountryService.getCountries()

        if(!result || !result.length){
            res.status(HTTP_CODES.NO_CONTENT_204).send()
        }
        else {
            res.status(HTTP_CODES.OK_200).json(result)
        }
    },

    async concreteCountryGet(req : RequestWithURIParam<{countryCode : string}>,
                            res : Response<CountryViewModel>){
        const result : CountryViewModel | null = await CountryService.getCountryData(req.params.countryCode)

        if(!result){
            res.status(HTTP_CODES.NO_CONTENT_204).send()
        }
        else {
            res.status(HTTP_CODES.OK_200).json(result)
        }
    }
}