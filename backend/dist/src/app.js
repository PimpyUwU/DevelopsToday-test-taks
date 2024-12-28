"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const CountryRouter_1 = require("./routes/CountryRouter");
const cors = require('cors');
exports.app = (0, express_1.default)();
//middleware
exports.app.use(cors());
exports.app.use(express_1.default.json());
exports.app.use("/", (0, CountryRouter_1.getCountriesRouter)());
