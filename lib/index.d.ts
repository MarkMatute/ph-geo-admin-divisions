interface SearchParams {
    name?: string;
    regionId?: string;
    provinceId?: string;
    municipalityId?: string;
    baranggayId?: string;
}
export declare const searchRegion: (params?: SearchParams) => Promise<any[]>;
export declare const searchProvince: (params?: SearchParams) => Promise<any[]>;
export declare const searchMunicipalities: (params?: SearchParams) => Promise<any[]>;
export declare const searchBaranggays: (params?: SearchParams) => Promise<any[]>;
export {};
