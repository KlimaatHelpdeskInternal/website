
function TestReadCarbonCalculatorConfig() {
  const dat0 = JSON.parse("[{\"model\": \"cms.carbonemissioncategory\", \"pk\": 2, \"fields\": {\"name\": \"cheeseburgers\", \"conversion_to_kg_CO2\": 3.0, \"description\": \"The CO2 emission for a cheeseburger\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/3075/3075977.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 7, \"fields\": {\"name\": \"dagen computer gebruiken\", \"conversion_to_kg_CO2\": 0.48, \"description\": \"The CO2 emission for the use of a computer for a day\", \"image_url\": \"https://img.freepik.com/premium-vector/desktop-computer-icon-vector-design-template-simple-clean_1309366-1987.jpg\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 8, \"fields\": {\"name\": \"dagen huis verwarmen (gas)\", \"conversion_to_kg_CO2\": 5.22, \"description\": \"heating your house with gas for a day\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/9879/9879880.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 9, \"fields\": {\"name\": \"dagen huis verwarmen (warmtepomp)\", \"conversion_to_kg_CO2\": 3.13, \"description\": \"heating your house with a heatpump for a day\", \"image_url\": \"https://us.123rf.com/450wm/vectorwin/vectorwin2401/vectorwin240100503/221481784-heat-recovery-system-geothermal-color-icon-vector-illustration.jpg?ver=6\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 6, \"fields\": {\"name\": \"keer 10 min. douchen\", \"conversion_to_kg_CO2\": 0.6, \"description\": \"A 10 minute shower\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/760/760637.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 1, \"fields\": {\"name\": \"kg CO2\", \"conversion_to_kg_CO2\": 1.0, \"description\": \"The base amount\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/3492/3492640.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 4, \"fields\": {\"name\": \"uur autorijden\", \"conversion_to_kg_CO2\": 7.0, \"description\": \"The CO2 emission for a one hour car drive\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/8308/8308414.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 5, \"fields\": {\"name\": \"uur vliegen\", \"conversion_to_kg_CO2\": 400.0, \"description\": \"The CO2 emission for a one hour passenger-flight for one person\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/7893/7893979.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 3, \"fields\": {\"name\": \"vegaburgers\", \"conversion_to_kg_CO2\": 0.4, \"description\": \"The CO2 emission for a vegaburger\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/1687/1687009.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}]");
  const data = JSON.parse("[{\"model\": \"cms.carbonemissioncategory\", \"pk\": 2, \"fields\": {\"name\": \"cheeseburgers\", \"conversion_to_kg_CO2\": 3.0, \"description\": \"The CO2 emission for a cheeseburger\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/3075/3075977.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 7, \"fields\": {\"name\": \"dagen computer gebruiken\", \"conversion_to_kg_CO2\": 0.48, \"description\": \"The CO2 emission for the use of a computer for a day\", \"image_url\": \"https://img.freepik.com/premium-vector/desktop-computer-icon-vector-design-template-simple-clean_1309366-1987.jpg\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 8, \"fields\": {\"name\": \"dagen huis verwarmen (gas)\", \"conversion_to_kg_CO2\": 5.22, \"description\": \"heating your house with gas for a day\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/9879/9879880.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 9, \"fields\": {\"name\": \"dagen huis verwarmen (warmtepomp)\", \"conversion_to_kg_CO2\": 3.13, \"description\": \"heating your house with a heatpump for a day\", \"image_url\": \"https://us.123rf.com/450wm/vectorwin/vectorwin2401/vectorwin240100503/221481784-heat-recovery-system-geothermal-color-icon-vector-illustration.jpg?ver=6\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 6, \"fields\": {\"name\": \"keer 10 min. douchen\", \"conversion_to_kg_CO2\": 0.6, \"description\": \"A 10 minute shower\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/760/760637.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 1, \"fields\": {\"name\": \"kg CO2\", \"conversion_to_kg_CO2\": 1.0, \"description\": \"The base amount\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/3492/3492640.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 4, \"fields\": {\"name\": \"uur autorijden\", \"conversion_to_kg_CO2\": 7.0, \"description\": \"The CO2 emission for a one hour car drive\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/8308/8308414.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 5, \"fields\": {\"name\": \"uur vliegen\", \"conversion_to_kg_CO2\": 400.0, \"description\": \"The CO2 emission for a one hour passenger-flight for one person\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/7893/7893979.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}, {\"model\": \"cms.carbonemissioncategory\", \"pk\": 3, \"fields\": {\"name\": \"vegaburgers\", \"conversion_to_kg_CO2\": 0.4, \"description\": \"The CO2 emission for a vegaburger\", \"image_url\": \"https://cdn-icons-png.flaticon.com/512/1687/1687009.png\", \"source_description\": null, \"source_url\": null, \"is_emission\": true}}]");
  return ReadCarbonCalculatorConfig(data);
}

function ReadCategoryNamesFromConfig(co2categories) {
  var categorynames = [];

  for (var i = 0; i < co2categories.length; i++) {
      categorynames.push(co2categories[i].fields["name"]);
  }
  return categorynames;
}
function ReadCO2CategoriesFromJSONFormat(jsondata) {
  var co2categories = [];

  for (var i = 0; i < jsondata.length; i++) {
      co2categories.push(jsondata[i].fields);
  }
  return co2categories;
}
function ReadCarbonCalculatorConfig(json_data) {

  console.log("read data: " + json_data);
  co2categories = json_data;
  return co2categories;

}
QUnit.module('CarbonCalculator', (hooks) => {
  QUnit.test('TestReadCarbonCalculatorConfig', (assert) => {
    co2categoriesinwagtailformat = TestReadCarbonCalculatorConfig();
    assert.notEqual(co2categoriesinwagtailformat,null);

    categorynames = ReadCategoryNamesFromConfig(co2categoriesinwagtailformat);
    assert.notEqual(categorynames,null,"categoryNames should not be null");
    assert.equal(categorynames.length,9,"expected 9 names");

    co2categories = ReadCO2CategoriesFromJSONFormat(co2categoriesinwagtailformat);
    assert.notEqual(co2categories,null,"co2categories should not be null");
    assert.equal(co2categories.length,9,"expected 9 co2categories");

  });
});

