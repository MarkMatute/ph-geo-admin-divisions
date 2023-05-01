import {
  searchBaranggays,
  searchMunicipalities,
  searchProvince,
  searchRegion
} from '.';

describe('PH Geo Admin Divisions Search Test', () => {
  describe('when searching regions', () => {
    it('should return region when searched by name', async () => {
      const ilocosRegion = await searchRegion({
        name: 'iLocos'
      });
      expect(ilocosRegion).not.toBeNull();
    });
  });
  describe('when searching provinces', () => {
    it('should return provinces under given region id', async () => {
      const region1Provinces = await searchProvince({
        regionId: '01'
      });
      expect(region1Provinces.length === 7);
    });
    it('should return province when searched using name', async () => {
      const laUnionProvince = await searchProvince({
        name: 'La U'
      });
      expect(laUnionProvince[0].name === 'La Union');
    });
    it('should return provinces when searched by name and with given region id', async () => {
      const ilocosSur = await searchProvince({
        name: 'sur',
        regionId: '01'
      });
      expect(ilocosSur.length > 0);
    });
  });
  describe('when searching municipalities', () => {
    it('should return municipalities under given province id', async () => {
      const centralLuzonMunicipalities = await searchMunicipalities({
        provinceId: '014'
      });
      expect(centralLuzonMunicipalities.length).toEqual(24);
    });
    it('should return municipalities when searched using name', async () => {
      const malolos = await searchMunicipalities({
        name: 'malolo'
      });
      expect(malolos[0].name === 'La City of Malolos (Capital)');
    });
    it('should return municipalities when searched by name and with given province id', async () => {
      const plaridel = await searchMunicipalities({
        name: 'Plarid',
        provinceId: '014'
      });
      expect(plaridel[0].name === 'Plaridel');
    });
  });
  describe('when searching baranggays', () => {
    it('should return baranggays under given municipality id', async () => {
      const allBaranggays = await searchBaranggays({
        municipalityId: '10'
      });
      expect(allBaranggays.length).toEqual(1603);
    });
    it('should return baranggays when searched using name', async () => {
      const allBalayong = await searchBaranggays({
        name: 'balayong'
      });
      expect(allBalayong.length).toEqual(8);
    });
    it('should return baranggays when searched by name and with given municipality id', async () => {
      const balayong = await searchBaranggays({
        name: 'balayong',
        municipalityId: '10'
      });
      expect(balayong.length).toEqual(1);
    });
  });
});
