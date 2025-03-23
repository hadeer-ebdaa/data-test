ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([33.626022, 18.557042, 50.518806, 32.955589]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_region_1 = new ol.format.GeoJSON();
var features_region_1 = format_region_1.readFeatures(json_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_1.addFeatures(features_region_1);
var lyr_region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_1, 
                style: style_region_1,
                popuplayertitle: 'region',
                interactive: false,
                title: '<img src="styles/legend/region_1.png" /> region'
            });
var format_POINTS_2 = new ol.format.GeoJSON();
var features_POINTS_2 = format_POINTS_2.readFeatures(json_POINTS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POINTS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTS_2.addFeatures(features_POINTS_2);
cluster_POINTS_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POINTS_2
});
var lyr_POINTS_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POINTS_2, 
                style: style_POINTS_2,
                popuplayertitle: 'POINTS',
                interactive: true,
    title: 'POINTS<br />\
    <img src="styles/legend/POINTS_2_0.png" /> الباحة<br />\
    <img src="styles/legend/POINTS_2_1.png" /> الجوف<br />\
    <img src="styles/legend/POINTS_2_2.png" /> الحدود الشمالية<br />\
    <img src="styles/legend/POINTS_2_3.png" /> الرياض<br />\
    <img src="styles/legend/POINTS_2_4.png" /> القصيم<br />\
    <img src="styles/legend/POINTS_2_5.png" /> المدينة المنورة<br />\
    <img src="styles/legend/POINTS_2_6.png" /> المنطقة الشرقية<br />\
    <img src="styles/legend/POINTS_2_7.png" /> تبوك<br />\
    <img src="styles/legend/POINTS_2_8.png" /> جازان<br />\
    <img src="styles/legend/POINTS_2_9.png" /> حائل<br />\
    <img src="styles/legend/POINTS_2_10.png" /> عسير<br />\
    <img src="styles/legend/POINTS_2_11.png" /> مكة المكرمة<br />\
    <img src="styles/legend/POINTS_2_12.png" /> نجران<br />\
    <img src="styles/legend/POINTS_2_13.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_region_1.setVisible(true);lyr_POINTS_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_region_1,lyr_POINTS_2];
lyr_region_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'EMIRATE_ID': 'EMIRATE_ID', 'A_NAME': 'A_NAME', 'E_NAME': 'E_NAME', 'CAPITAL_ID': 'CAPITAL_ID', 'CLASS': 'CLASS', 'POPULATION': 'POPULATION', 'SHAPE_Leng': 'SHAPE_Leng', 'الاسم': 'الاسم', 'عددال': 'عددال', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_POINTS_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المشروع': 'اسم المشروع', 'المنطقة': 'اسم المنطقة', 'المحافظة': 'المحافظة', 'طبيعة_الأعمال': 'طبيعة الأعمال', 'اسم_الموقع': 'اسم الموقع', 'مشروع_اللوحات': 'مشروع_اللوحات', 'مشروع_الأصول_الثقافية': 'مشروع_الأصول_الثقافية', 'ترميم_وتأهيل_130_مسجد': 'ترميم_وتأهيل_130_مسجد', 'مشروع_البلدات_التراثية': 'مشروع_البلدات_التراثية', 'مشروع_حصر_المواقع_والمباني': 'مشروع_حصر_المواقع_والمباني', 'مشروع_أطلس_المساجد_التاريخية': 'مشروع_أطلس_المساجد_التاريخية', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'مشروع_الأتفاقية_الاتفاقية_الاط', 'مشروع_أصول_الدرعية_التاريخية': 'مشروع_أصول_الدرعية_التاريخية', 'مشروع_قصر_ثريان': 'مشروع_قصر_ثريان', 'مشروع_مباني_سمحان': 'مشروع_مباني_سمحان', 'مشروع_قصر_بن_رقوش': 'مشروع_قصر_بن_رقوش', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_region_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'EMIRATE_ID': 'Range', 'A_NAME': 'TextEdit', 'E_NAME': 'TextEdit', 'CAPITAL_ID': 'Range', 'CLASS': 'TextEdit', 'POPULATION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'الاسم': 'TextEdit', 'عددال': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_POINTS_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_المشروع': 'TextEdit', 'المنطقة': 'TextEdit', 'المحافظة': 'TextEdit', 'طبيعة_الأعمال': 'TextEdit', 'اسم_الموقع': 'TextEdit', 'مشروع_اللوحات': 'Hidden', 'مشروع_الأصول_الثقافية': 'TextEdit', 'ترميم_وتأهيل_130_مسجد': 'Hidden', 'مشروع_البلدات_التراثية': 'Hidden', 'مشروع_حصر_المواقع_والمباني': 'Range', 'مشروع_أطلس_المساجد_التاريخية': 'Range', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'TextEdit', 'مشروع_أصول_الدرعية_التاريخية': 'TextEdit', 'مشروع_قصر_ثريان': 'TextEdit', 'مشروع_مباني_سمحان': 'TextEdit', 'مشروع_قصر_بن_رقوش': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', });
lyr_region_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'EMIRATE_ID': 'no label', 'A_NAME': 'no label', 'E_NAME': 'no label', 'CAPITAL_ID': 'no label', 'CLASS': 'no label', 'POPULATION': 'no label', 'SHAPE_Leng': 'no label', 'الاسم': 'no label', 'عددال': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_POINTS_2.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_المشروع': 'inline label - always visible', 'المنطقة': 'inline label - always visible', 'المحافظة': 'inline label - always visible', 'طبيعة_الأعمال': 'inline label - always visible', 'اسم_الموقع': 'inline label - always visible', 'مشروع_الأصول_الثقافية': 'no label', 'مشروع_حصر_المواقع_والمباني': 'no label', 'مشروع_أطلس_المساجد_التاريخية': 'no label', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'no label', 'مشروع_أصول_الدرعية_التاريخية': 'no label', 'مشروع_قصر_ثريان': 'no label', 'مشروع_مباني_سمحان': 'no label', 'مشروع_قصر_بن_رقوش': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_POINTS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});