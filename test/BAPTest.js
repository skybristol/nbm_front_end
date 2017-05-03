var assert = chai.assert;

var mockConfig = {"id":"580ff6e4e4b0f497e7960b53","featureValue":"44","jsonUrl":"https://my-beta.usgs.gov/bcb/bap/get/580ff6e4e4b0f497e7960b53?featureValue=44&layerLevel=0&levelName=NVCS+Class","type":null,"title":"NVCS Summary within Ecoregion III Area","description":"The level of hierarchy displayed in this summary table is based on the classification level selected in the BioScape.","url":"https://www.sciencebase.gov/catalog/item/580ff6e4e4b0f497e7960b53","data":{"description":"The level of hierarchy displayed in this summary table is based on the classification level selected in the BioScape.","lastUpdated":"2016-11-29T18:22:53Z"},"openByDefault":true,"charts":[{"id":"580ff6e4e4b0f497e7960b53","title":"NVCS Class","description":"The data displayed in this summary table is based on the NVCS Class hierarchy level, as selected in the Bioscape.","type":"hierarchyTable","config":{"areaColumn":{"column":"acres","text":"Acres"},"associatedTable":false,"hierarchyCodes":["class_code","sbclss_code","form_code","div_code","mac_code","grp_code","l3_code"],"hierarchyColumn":"nvcs_code","lookupColumn":"us_l3code","lookupInfo":{"column":"l3_code","table":"nvcs_lookup"},"predefinedFields":[{"column":"level","value":"ecosys_lu"}],"returnedHierarchy":["class_desc","sbclss_desc","form_desc","div_desc","mac_desc","grp_desc","l3_desc"],"returnedValueText":"Land Cover Name","schema":"nvcs","table":"eco_l3_nvc_summ","title":"NVCS Hierarchy","type":"hierarchyTable"},"levels":1,"data":{"Agricultural & Developed Vegetation 0":{"id":"580ff6e4e4b0f497e7960b53Table0","parent":null,"level":0,"area":"1035065.63"},"Desert & Semi-Desert 1":{"id":"580ff6e4e4b0f497e7960b53Table1","parent":null,"level":0,"area":"2.22"},"Developed & Other Human Use 2":{"id":"580ff6e4e4b0f497e7960b53Table2","parent":null,"level":0,"area":"133962.87"},"Forest & Woodland 3":{"id":"580ff6e4e4b0f497e7960b53Table3","parent":null,"level":0,"area":"217328.24"},"Introduced & Semi Natural Vegetation 4":{"id":"580ff6e4e4b0f497e7960b53Table4","parent":null,"level":0,"area":"7956.4"},"Open Water 5":{"id":"580ff6e4e4b0f497e7960b53Table5","parent":null,"level":0,"area":"176543.03"},"Recently Disturbed or Modified 6":{"id":"580ff6e4e4b0f497e7960b53Table6","parent":null,"level":0,"area":"7428.21"},"Shrub & Herb Vegetation 7":{"id":"580ff6e4e4b0f497e7960b53Table7","parent":null,"level":0,"area":"13031362.15"}}}]};

var bap = new BAP(mockConfig, false);
var widgetHelper = new WidgetHelper();

describe('BAP', function() {
    describe('created', function() {
        it('BAP successfully created', function() {
            assert (bap !== undefined);
        });
    });

    describe('initializeWidgets', function() {
        it('initialize widget from mock config', function() {
            bap.initializeWidgets();
            assert(bap.widgets.length == 1)
        });
    });
});