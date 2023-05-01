import * as _ from 'lodash';

import { regions } from './regions';
import { provinces } from './provinces';
import { municipalities } from './combined-municipalities';
import { baranggays } from './baranggays';

interface SearchParams {
  name?: string;
  regionId?: string;
  provinceId?: string;
  municipalityId?: string;
  baranggayId?: string;
}

export const searchRegion = async (params?: SearchParams) => {
  const name = _.get(params, 'name', '');
  const filteredRegions = _.filter(regions, (region) => {
    let nameMatch = true;
    if (name) {
      nameMatch = _.includes(_.toLower(region.name), _.toLower(name));
    }
    return nameMatch;
  });
  return filteredRegions;
};

export const searchProvince = async (params?: SearchParams) => {
  const name = _.get(params, 'name', '');
  const regionId = _.get(params, 'regionId', '');
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

export const searchMunicipalities = async (params?: SearchParams) => {
  const name = _.get(params, 'name', '');
  const provinceId = _.get(params, 'provinceId', '');
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

export const searchBaranggays = async (params?: SearchParams) => {
  const name = _.get(params, 'name', '');
  const municipalityId = _.get(params, 'municipalityId', '');
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
