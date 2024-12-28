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
exports.CountryController = void 0;
const HTTP_CODES_1 = __importDefault(require("../HTTP_CODES"));
const countryService_1 = require("../services/countryService");
exports.CountryController = {
    allCountriesGet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield countryService_1.CountryService.getCountries();
            if (!result || !result.length) {
                res.status(HTTP_CODES_1.default.NO_CONTENT_204).send();
            }
            else {
                res.status(HTTP_CODES_1.default.OK_200).json(result);
            }
        });
    },
    concreteCountryGet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield countryService_1.CountryService.getCountryData(req.params.countryCode);
            if (!result) {
                res.status(HTTP_CODES_1.default.NO_CONTENT_204).send();
            }
            else {
                res.status(HTTP_CODES_1.default.OK_200).json(result);
            }
        });
    }
};
