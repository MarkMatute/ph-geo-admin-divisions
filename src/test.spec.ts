import {
  searchProvince,
  searchRegion,
  searchBaranggay,
  searchMunicipality
} from '.';

describe('PH Geo Admin Divisions Search Test', () => {
  describe('when searching regions', () => {
    it('should return region when search by regionId', async () => {
      const ilocosRegion =  searchRegion({
        regionId: '01'
      });
      expect(ilocosRegion).not.toBeNull();
    });
    it('should return region when searched by name', async () => {
      const ilocosRegion =  searchRegion({
        name: 'iLocos'
      });
      expect(ilocosRegion).not.toBeNull();
    });
  });
  describe('when searching provinces', () => {
    it('should return province when search by provinceId', async () => {
      const leyte = searchProvince({
        provinceId: '037'
      });
      expect((leyte as any)[0].name).toEqual('Leyte');
    });
    it('should return provinces under given region id', async () => {
      const region1Provinces = searchProvince({
        regionId: '01'
      });
      expect((region1Provinces as any).length === 7);
    });
    it('should return province when searched using name', async () => {
      const laUnionProvince = searchProvince({
        name: 'La U'
      });
      expect(laUnionProvince[0].name === 'La Union');
    });
    it('should return provinces when searched by name and with given region id', async () => {
      const ilocosSur = searchProvince({
        name: 'sur',
        regionId: '01'
      });
      expect((ilocosSur as any).length > 0);
    });
  });
  describe('when searching municipalities', () => {
    it('should return municipalities under given province id', async () => {
      const centralLuzonMunicipalities =  searchMunicipality({
        provinceId: '014'
      });
      expect((centralLuzonMunicipalities as any).length).toEqual(24);
    });
    it('should return municipalities when searched using name', async () => {
      const malolos =  searchMunicipality({
        name: 'malolo'
      });
      expect(malolos[0].name === 'La City of Malolos (Capital)');
    });
    it('should return municipalities when searched by name and with given province id', async () => {
      const plaridel =  searchMunicipality({
        name: 'Plarid',
        provinceId: '014'
      });
      expect(plaridel[0].name === 'Plaridel');
    });
  });
  describe('when searching baranggays', () => {
    it('should return baranggays under given municipality id', async () => {
      const allBaranggays =  searchBaranggay({
        provinceId: '014',
        municipalityId: '10'
      });
      expect((allBaranggays as any).length).toEqual(51);
    });
    it('should return baranggays when searched using name', async () => {
      const allBalayong =  searchBaranggay({
        name: 'balayong'
      });
      expect((allBalayong as any).length).toEqual(8);
    });
    it('should return baranggays when searched by name and with given municipality id', async () => {
      const balayong =  searchBaranggay({
        name: 'balayong',
        municipalityId: '10'
      });
      expect((balayong as any).length).toEqual(1);
    });
  });
});
