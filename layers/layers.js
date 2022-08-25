var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Screenshot20220818at125809PM_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Screenshot 2022-08-18 at 12.58.09 PM_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Screenshot20220818at125809PM_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8550724.406051, 3280051.868128, 8551095.540481, 3280293.633362]
                            })
                        });
var format_GISClass_2 = new ol.format.GeoJSON();
var features_GISClass_2 = format_GISClass_2.readFeatures(json_GISClass_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISClass_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISClass_2.addFeatures(features_GISClass_2);
var lyr_GISClass_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GISClass_2, 
                style: style_GISClass_2,
                interactive: true,
                title: '<img src="styles/legend/GISClass_2.png" /> GIS Class'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                interactive: true,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });
var format_assemblypoints_4 = new ol.format.GeoJSON();
var features_assemblypoints_4 = format_assemblypoints_4.readFeatures(json_assemblypoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assemblypoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assemblypoints_4.addFeatures(features_assemblypoints_4);
var lyr_assemblypoints_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_assemblypoints_4, 
                style: style_assemblypoints_4,
                interactive: true,
                title: '<img src="styles/legend/assemblypoints_4.png" /> assembly points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Screenshot20220818at125809PM_modified_1.setVisible(true);lyr_GISClass_2.setVisible(true);lyr_roads_3.setVisible(true);lyr_assemblypoints_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Screenshot20220818at125809PM_modified_1,lyr_GISClass_2,lyr_roads_3,lyr_assemblypoints_4];
lyr_GISClass_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_roads_3.set('fieldAliases', {'id': 'id', 'lanes': 'lanes', });
lyr_assemblypoints_4.set('fieldAliases', {'id': 'id', 'assembly': 'assembly', });
lyr_GISClass_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_roads_3.set('fieldImages', {'id': '', 'lanes': '', });
lyr_assemblypoints_4.set('fieldImages', {'id': 'TextEdit', 'assembly': 'TextEdit', });
lyr_GISClass_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_roads_3.set('fieldLabels', {'id': 'no label', 'lanes': 'no label', });
lyr_assemblypoints_4.set('fieldLabels', {'id': 'no label', 'assembly': 'no label', });
lyr_assemblypoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});