"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountriesRouter = void 0;
const express_1 = __importDefault(require("express"));
const countryController_1 = require("../controllers/countryController");
const getCountriesRouter = () => {
    const router = express_1.default.Router();
    router.get("/", countryController_1.CountryController.allCountriesGet);
    router.get("/:countryCode", countryController_1.CountryController.concreteCountryGet);
    return router;
};
exports.getCountriesRouter = getCountriesRouter;
