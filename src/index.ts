import * as _ from 'lodash';
import { AdminRegion, SearchParams } from './dtos';
import { regions } from './regions';
import { provinces } from './provinces';
import { municipalities } from './combined-municipalities';
import { baranggays } from './baranggays';

export { regions } from './regions';
export { provinces } from './provinces';
export { municipalities } from './combined-municipalities';
export { baranggays } from './baranggays';

// search regions
export function searchRegion(params: SearchParams) {
  const { name = null, regionId = null } = params;
  return _.filter(regions, (region: AdminRegion) => {
    let nameMatch = true;
    let regionMatch = true;
    if (name) {
       nameMatch = _.includes(_.toLower(region.name), _.toLower(name));
    }
    if (regionId) {
      regionMatch = region.regionId === regionId;
    }
    return nameMatch && regionMatch;
  });
}

// search provinces
export function searchProvince(params: SearchParams) {
  const { name = null, regionId = null, provinceId = null } = params;
  return _.filter(provinces, (province: AdminRegion) => {
    let nameMatch = true;
    let regionIdMatch = true;
    let provinceIdMatch = true;
    if (name) {
       nameMatch = _.includes(_.toLower(province.name), _.toLower(name));
    }
    if (regionId) {
      regionIdMatch = province.regionId === regionId;
    }
    if (provinceId) {
      provinceIdMatch = province.provinceId === provinceId;
    }
    return nameMatch && regionIdMatch && provinceIdMatch;
  });
}

// search municipality
export function searchMunicipality(params: SearchParams) {
  let { name = null, regionId = null, provinceId = null, municipalityId = null } = params;

  // special handling for metro manila
  if (provinceId === '000') {
    provinceId = null;
    regionId = '13';
  }

  return _.filter(municipalities, (municipality: AdminRegion) => {
    let nameMatch = true;
    let regionIdMatch = true;
    let provinceIdMatch = true;
    let municipalityIdMatch = true;
    if (name) {
       nameMatch = _.includes(_.toLower(municipality.name), _.toLower(name));
    }
    if (regionId) {
      regionIdMatch = municipality.regionId === regionId;
    }
    if (provinceId) {
      provinceIdMatch = municipality.provinceId === provinceId;
    }
    if (municipalityId) {
      municipalityIdMatch = municipality.municipalityId === municipalityId;
    }
    return nameMatch && regionIdMatch && provinceIdMatch && municipalityIdMatch
    ;
  });
}

// search baranggay
export function searchBaranggay(params: SearchParams) {
  let { name = null, regionId = null, provinceId = null, municipalityId = null, baranggayId = null } = params;
  // special handling for metro manila

  if (provinceId === '000') {
    provinceId = null;
    regionId = '13';
  }

  return _.filter(baranggays, (baranggay: AdminRegion) => {
    let nameMatch = true;
    let regionIdMatch = true;
    let provinceIdMatch = true;
    let municipalityIdMatch = true;
    let baranggayIdMatch = true;
    if (name) {
       nameMatch = _.includes(_.toLower(baranggay.name), _.toLower(name));
    }
    if (regionId) {
      regionIdMatch = baranggay.regionId === regionId;
    }
    if (provinceId) {
      provinceIdMatch = baranggay.provinceId === provinceId;
    }
    if (municipalityId) {
      municipalityIdMatch = baranggay.municipalityId === municipalityId;
    }
    if (baranggayId) {
      baranggayIdMatch = baranggay.baranggayId === baranggayId;
    }
    return nameMatch && regionIdMatch && provinceIdMatch && municipalityIdMatch && baranggayIdMatch;
    ;
  });
}
