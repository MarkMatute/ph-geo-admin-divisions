"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBaranggays = exports.searchMunicipalities = exports.searchProvince = exports.searchRegion = void 0;
const fs = require("fs");
const _ = require("lodash");
const appRootPath = require("app-root-path");
let regions = [];
let provinces = [];
let municipalities = [];
let baranggays = [];
const searchRegion = async (params) => {
    const name = _.get(params, 'name', '');
    regions = await readJsonFile('regions');
    const filteredRegions = _.filter(regions, (region) => {
        let nameMatch = true;
        if (name) {
            nameMatch = _.includes(_.toLower(region.name), _.toLower(name));
        }
        return nameMatch;
    });
    return filteredRegions;
};
exports.searchRegion = searchRegion;
const searchProvince = async (params) => {
    const name = _.get(params, 'name', '');
    const regionId = _.get(params, 'regionId', '');
    provinces = await readJsonFile('provinces');
    const filteredProvinces = _.filter(provinces, (province) => {
        let nameMatch = true;
        if (name) {
            nameMatch = _.includes(_.toLower(province.name), _.toLower(name));
        }
        let regionIdMatch = true;
        if (regionId) {
            regionIdMatch = province.regionId === regionId;
        }
        return nameMatch && regionIdMatch;
    });
    return filteredProvinces;
};
exports.searchProvince = searchProvince;
const searchMunicipalities = async (params) => {
    const name = _.get(params, 'name', '');
    const provinceId = _.get(params, 'provinceId', '');
    municipalities = await readJsonFile('combined-municipalities');
    const filteredMunicipalities = _.filter(municipalities, (municipality) => {
        let nameMatch = true;
        if (name) {
            nameMatch = _.includes(_.toLower(municipality.name), _.toLower(name));
        }
        let provinceIdMatch = true;
        if (provinceId) {
            provinceIdMatch = municipality.provinceId === provinceId;
        }
        return nameMatch && provinceIdMatch;
    });
    return filteredMunicipalities;
};
exports.searchMunicipalities = searchMunicipalities;
const searchBaranggays = async (params) => {
    const name = _.get(params, 'name', '');
    const municipalityId = _.get(params, 'municipalityId', '');
    baranggays = await readJsonFile('baranggays');
    const filteredBaranggays = _.filter(baranggays, (baranggay) => {
        let nameMatch = true;
        if (name) {
            nameMatch = _.includes(_.toLower(baranggay.name), _.toLower(name));
        }
        let municipalityIdMatch = true;
        if (municipalityId) {
            municipalityIdMatch = baranggay.municipalityId === municipalityId;
        }
        return nameMatch && municipalityIdMatch;
    });
    return filteredBaranggays;
};
exports.searchBaranggays = searchBaranggays;
const readJsonFile = async (name) => {
    try {
        const data = await fs.readFileSync(`${appRootPath}/data/${name}.json`, 'utf8');
        return JSON.parse(data);
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=index.js.map