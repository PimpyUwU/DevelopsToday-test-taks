import express from "express";
import {CountryController} from "../controllers/countryController";

export const getCountriesRouter = () => {
    const router = express.Router()

    router.get("/", CountryController.allCountriesGet)

    router.get("/:countryCode", CountryController.concreteCountryGet)

    return router
}