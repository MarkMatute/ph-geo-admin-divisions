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
export { AdminRegion };

// search regions
export function searchRegion(params: SearchParams): AdminRegion[] {
  const { name = null, regionId = null } = params;
  return regions.filter((region: AdminRegion) => {
    const nameMatch = name
      ? region.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const regionMatch = regionId ? region.regionId === regionId : true;
    return nameMatch && regionMatch;
  });
}

// search provinces
export function searchProvince(params: SearchParams): AdminRegion[] {
  const { name = null, regionId = null, provinceId = null } = params;
  return provinces.filter((province: AdminRegion) => {
    const nameMatch = name
      ? province.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const regionIdMatch = regionId ? province.regionId === regionId : true;
    const provinceIdMatch = provinceId
      ? province.provinceId === provinceId
      : true;
    return nameMatch && regionIdMatch && provinceIdMatch;
  });
}

// search municipality
export function searchMunicipality(params: SearchParams): AdminRegion[] {
  const {
    name = null,
    regionId = null,
    provinceId = null,
    municipalityId = null
  } = params;

  // special handling for metro manila
  const adjustedRegionId = provinceId === '000' ? '13' : regionId;
  const adjustedProvinceId = provinceId === '000' ? null : provinceId;

  return municipalities.filter((municipality: AdminRegion) => {
    const nameMatch = name
      ? municipality.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const regionIdMatch = adjustedRegionId
      ? municipality.regionId === adjustedRegionId
      : true;
    const provinceIdMatch = adjustedProvinceId
      ? municipality.provinceId === adjustedProvinceId
      : true;
    const municipalityIdMatch = municipalityId
      ? municipality.municipalityId === municipalityId
      : true;
    return nameMatch && regionIdMatch && provinceIdMatch && municipalityIdMatch;
  });
}

// search baranggay
export function searchBaranggay(params: SearchParams): AdminRegion[] {
  const {
    name = null,
    regionId = null,
    provinceId = null,
    municipalityId = null,
    baranggayId = null
  } = params;

  // special handling for metro manila
  const adjustedRegionId = provinceId === '000' ? '13' : regionId;
  const adjustedProvinceId = provinceId === '000' ? null : provinceId;

  return baranggays.filter((baranggay: AdminRegion) => {
    const nameMatch = name
      ? baranggay.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const regionIdMatch = adjustedRegionId
      ? baranggay.regionId === adjustedRegionId
      : true;
    const provinceIdMatch = adjustedProvinceId
      ? baranggay.provinceId === adjustedProvinceId
      : true;
    const municipalityIdMatch = municipalityId
      ? baranggay.municipalityId === municipalityId
      : true;
    const baranggayIdMatch = baranggayId
      ? baranggay.baranggayId === baranggayId
      : true;
    return (
      nameMatch &&
      regionIdMatch &&
      provinceIdMatch &&
      municipalityIdMatch &&
      baranggayIdMatch
    );
  });
}
