<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">ph-geo-admin-divisions</h3>

  <p align="center">
  focuses on the geographic and administrative divisions of the Philippines up to barranggay level
    <br />
    <a href="https://github.com/MarkMatute/ph-geo-admin-divisions"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>

<!-- GETTING STARTED -->
## Getting Started

A library that enables search using an updated collection of Philippines Geo Administrative divisions.

### Data Models
**Region**
```
{
  "psgcId": "0100000000",
  "name": "Region I (Ilocos Region)",
  "geoLevel": "Reg",
  "regionId": "01",
  "provinceId": "000",
  "municipalityId": "00",
  "baranggayId": "000"
}
```
***
**Province**
```
{
  "psgcId": "0102800000",
  "name": "Ilocos Norte",
  "geoLevel": "Prov",
  "regionId": "01",
  "provinceId": "028",
  "municipalityId": "00",
  "baranggayId": "000"
}
```
***
**Municipality**

```
{
  "psgcId": "0102801000",
  "name": "Adams",
  "geoLevel": "Mun",
  "regionId": "01",
  "provinceId": "028",
  "municipalityId": "01",
  "baranggayId": "000"
}
```
***
**Baranggay**
```
{
  "psgcId": "0102801001",
  "name": "Adams (Pob.)",
  "geoLevel": "Bgy",
  "regionId": "01",
  "provinceId": "028",
  "municipalityId": "01",
  "baranggayId": "001"
}
```

***
## Usage
**Listing Records**
```
const allRegions = await searchRegion();
const allProvinces = await searchProvince();
const allMunicipalities = await searchMunicipalities();
const allBaranggays = await searchBaranggays();
```
**Listing Parameters**
```
interface SearchParams {
  name?: string;
  regionId?: string;
  provinceId?: string;
  municipalityId?: string;
  baranggayId?: string;
}
```
check `test.spec.ts` for more usage.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Mark Ernest R. Matute- [linkedin](https://www.linkedin.com/in/mark-matute/) - markernest.matute@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
