import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "How high is the share of high-tech exports in the EU?",
  "subtitle": "The share of high-tech exports to non-EU states in 2022 is 17.3%",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo\nBelgium,BE,0.1505\nBulgaria,BG,0.0548\nCzechia,CZ,0.1919\nDenmark,DK,0.1144\nGermany,DE,0.1452\nEstonia,EE,0.1079\nIreland,IE,0.4246\nGreece,EL,0.0497\nSpain,ES,0.0846\nFrance,FR,0.1717\nCroatia,HR,0.0685\nItaly,IT,0.0800\nCyprus,CY,0.0502\nLatvia,LV,0.0870\nLithuania,LT,0.0779\nLuxembourg,LU,0.0550\nHungary,HU,0.1477\nMalta,MT,0.3110\nNetherlands,NL,0.1935\nAustria,AT,0.1333\nPoland,PL,0.0914\nPortugal,PT,0.0518\nRomania,RO,0.0889\nSlovenia,SI,0.0670\nSlovakia,SK,0.0744\nFinland,FI,0.0627\nSweden,SE,0.1196",
  "parsedData": [
    {
      "country": "Belgium",
      "id": "BE",
      "value": 0.1505,
      "extraInfo": false
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 0.0548,
      "extraInfo": false
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 0.1919,
      "extraInfo": false
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 0.1144,
      "extraInfo": false
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 0.1452,
      "extraInfo": false
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 0.1079,
      "extraInfo": false
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 0.4246,
      "extraInfo": false
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 0.0497,
      "extraInfo": false
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 0.0846,
      "extraInfo": false
    },
    {
      "country": "France",
      "id": "FR",
      "value": 0.1717,
      "extraInfo": false
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 0.0685,
      "extraInfo": false
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 0.08,
      "extraInfo": false
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 0.0502,
      "extraInfo": false
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 0.087,
      "extraInfo": false
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 0.0779,
      "extraInfo": false
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 0.055,
      "extraInfo": false
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 0.1477,
      "extraInfo": false
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 0.311,
      "extraInfo": false
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 0.1935,
      "extraInfo": false
    },
    {
      "country": "Austria",
      "id": "AT",
      "value": 0.1333,
      "extraInfo": false
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 0.0914,
      "extraInfo": false
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 0.0518,
      "extraInfo": false
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 0.0889,
      "extraInfo": false
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 0.067,
      "extraInfo": false
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 0.0744,
      "extraInfo": false
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 0.0627,
      "extraInfo": false
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 0.1196,
      "extraInfo": false
    }
  ],
  "datasetType": "values",
  "datasetUnit": "percent",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "blue",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": false,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "Eurostat (2026)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "Share of exports (in %) of all high technology products (defined according to SITC Rev.4 as the sum of products relating to Aerospace, Computers-office machines, Electronics-telecommunications, Pharmacy, Scientific instruments, Electrical machinery, Chemistry, Non-electrical machinery, Armament) in total exports. The EU aggregate does not include intra-EU trade.",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://ec.europa.eu/eurostat/databrowser/view/htec_si_exp4/default/table?lang=en",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "customUnitLabelAvailable": false,
  "customUnitLabel": "",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "How high is the share of high-tech exports in the EU?",
    "subtitle": "The share of high-tech exports to non-EU states in 2022 is 17.3%",
    "textNoteDescription": "Note",
    "textNote": "Share of exports (in %) of all high technology products (defined according to SITC Rev.4 as the sum of products relating to Aerospace, Computers-office machines, Electronics-telecommunications, Pharmacy, Scientific instruments, Electrical machinery, Chemistry, Non-electrical machinery, Armament) in total exports. The EU aggregate does not include intra-EU trade.",
    "textSourceDescription": "Source",
    "textSource": "Eurostat (2026)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here"
  },
  "clusters": [],
  "colorScale": null
});