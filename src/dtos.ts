export interface AdminRegion {
  psgcId: string;
  name: string;
  geoLevel: string;
  regionId: string;
  provinceId: string;
  municipalityId: string;
  baranggayId: string;
}

export interface SearchParams {
  name?: string;
  regionId?: string;
  provinceId?: string;
  municipalityId?: string;
  baranggayId?: string;
}

