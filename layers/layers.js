var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AguasmartimasObraslineales_1 = new ol.format.GeoJSON();
var features_AguasmartimasObraslineales_1 = format_AguasmartimasObraslineales_1.readFeatures(json_AguasmartimasObraslineales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguasmartimasObraslineales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguasmartimasObraslineales_1.addFeatures(features_AguasmartimasObraslineales_1);
var lyr_AguasmartimasObraslineales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguasmartimasObraslineales_1, 
                style: style_AguasmartimasObraslineales_1,
                popuplayertitle: "Aguas marítimas - Obras lineales",
                interactive: true,
    title: 'Aguas marítimas - Obras lineales<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_0.png" /> Contrafoso<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_1.png" /> Cramsa - Acueductos<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_2.png" /> Emisario<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_3.png" /> Emisario Terrestre<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_4.png" /> Inmisario Subterráneo<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_5.png" /> Inmisario Terrestre<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_6.png" /> Líneas Eléctricas Aéreas<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_7.png" /> Líneas Eléctricas Soterradas<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_8.png" /> Torre de Captación<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_9.png" /> Tramo Difusor<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_10.png" /> Tubería Inmisario<br />\
    <img src="styles/legend/AguasmartimasObraslineales_1_11.png" /> <br />'
        });
var format_AguasMartimasObrasareales_2 = new ol.format.GeoJSON();
var features_AguasMartimasObrasareales_2 = format_AguasMartimasObrasareales_2.readFeatures(json_AguasMartimasObrasareales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguasMartimasObrasareales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguasMartimasObrasareales_2.addFeatures(features_AguasMartimasObrasareales_2);
var lyr_AguasMartimasObrasareales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguasMartimasObrasareales_2, 
                style: style_AguasMartimasObrasareales_2,
                popuplayertitle: "Aguas Marítimas - Obras areales",
                interactive: true,
    title: 'Aguas Marítimas - Obras areales<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_0.png" /> Acopio Excedentes<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_1.png" /> Campamento<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_2.png" /> Captación y descarga<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_3.png" /> Estación de Bombeo<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_4.png" /> Estanque Intermedio<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_5.png" /> Estanques de distribución de agua<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_6.png" /> ET15<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_7.png" /> Instalación de Faenas<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_8.png" /> Patio de Mufas<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_9.png" /> Piscina de Emergencia<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_10.png" /> Planta desaladora<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_11.png" /> Seccionamiento<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_12.png" /> Subestación Eléctrica<br />\
    <img src="styles/legend/AguasMartimasObrasareales_2_13.png" /> <br />'
        });
var format_readeintervencindelproyecto_3 = new ol.format.GeoJSON();
var features_readeintervencindelproyecto_3 = format_readeintervencindelproyecto_3.readFeatures(json_readeintervencindelproyecto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeintervencindelproyecto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeintervencindelproyecto_3.addFeatures(features_readeintervencindelproyecto_3);
var lyr_readeintervencindelproyecto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeintervencindelproyecto_3, 
                style: style_readeintervencindelproyecto_3,
                popuplayertitle: "Área de intervención del proyecto",
                interactive: true,
    title: 'Área de intervención del proyecto<br />\
    <img src="styles/legend/readeintervencindelproyecto_3_0.png" /> Sector Antofagasta-La Negra<br />\
    <img src="styles/legend/readeintervencindelproyecto_3_1.png" /> Sector Baquedano-Sierra Gorda<br />\
    <img src="styles/legend/readeintervencindelproyecto_3_2.png" /> Sector Domeyko<br />\
    <img src="styles/legend/readeintervencindelproyecto_3_3.png" /> Sector Sierra Gorda-Calama<br />\
    <img src="styles/legend/readeintervencindelproyecto_3_4.png" /> <br />'
        });
var format_ConcesinMartima_4 = new ol.format.GeoJSON();
var features_ConcesinMartima_4 = format_ConcesinMartima_4.readFeatures(json_ConcesinMartima_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcesinMartima_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConcesinMartima_4.addFeatures(features_ConcesinMartima_4);
var lyr_ConcesinMartima_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConcesinMartima_4, 
                style: style_ConcesinMartima_4,
                popuplayertitle: "Concesión Marítima",
                interactive: true,
                    title: '<img src="styles/legend/ConcesinMartima_4.png" /> Concesión Marítima'
                });
var format_AMERBCaletaBolfin_5 = new ol.format.GeoJSON();
var features_AMERBCaletaBolfin_5 = format_AMERBCaletaBolfin_5.readFeatures(json_AMERBCaletaBolfin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMERBCaletaBolfin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMERBCaletaBolfin_5.addFeatures(features_AMERBCaletaBolfin_5);
var lyr_AMERBCaletaBolfin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMERBCaletaBolfin_5, 
                style: style_AMERBCaletaBolfin_5,
                popuplayertitle: "AMERB Caleta Bolfin",
                interactive: true,
                    title: '<img src="styles/legend/AMERBCaletaBolfin_5.png" /> AMERB Caleta Bolfin'
                });
var group_TerrenosyConcesiones = new ol.layer.Group({
                                layers: [lyr_ConcesinMartima_4,lyr_AMERBCaletaBolfin_5,],
                                fold: "open",
                                title: "Terrenos y Concesiones"});
var group_ProyectoAguasMartimas = new ol.layer.Group({
                                layers: [lyr_AguasmartimasObraslineales_1,lyr_AguasMartimasObrasareales_2,lyr_readeintervencindelproyecto_3,],
                                fold: "open",
                                title: "Proyecto Aguas Marítimas"});
var group_ProyectoExtensinDomeyko = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Proyecto Extensión Domeyko"});

lyr_GoogleHybrid_0.setVisible(true);lyr_AguasmartimasObraslineales_1.setVisible(true);lyr_AguasMartimasObrasareales_2.setVisible(true);lyr_readeintervencindelproyecto_3.setVisible(false);lyr_ConcesinMartima_4.setVisible(true);lyr_AMERBCaletaBolfin_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_ProyectoAguasMartimas,group_TerrenosyConcesiones];
lyr_AguasmartimasObraslineales_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Fuente': 'Fuente', 'Sistemas': 'Sistemas', 'Long_m': 'Long_m', 'Long_km': 'Long_km', 'Tipo': 'Tipo', 'Tipo_Obra': 'Tipo_Obra', 'DURACION': 'DURACION', 'COMUNA': 'COMUNA', 'Shape_Leng': 'Shape_Leng', });
lyr_AguasMartimasObrasareales_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'SECTOR': 'SECTOR', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Sup_ha': 'Sup_ha', 'Sup_m2': 'Sup_m2', 'FUENTE': 'FUENTE', 'ID': 'ID', 'Tipo_de_IF': 'Tipo_de_IF', 'Tipo_Obras': 'Tipo_Obras', 'Lugar': 'Lugar', 'Lugar_2': 'Lugar_2', 'T': 'T', 'DURACION': 'DURACION', 'COMUNA': 'COMUNA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_readeintervencindelproyecto_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'SECTOR': 'SECTOR', 'FUENTE': 'FUENTE', 'Sup_ha': 'Sup_ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ConcesinMartima_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AMERBCaletaBolfin_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area': 'Area', });
lyr_AguasmartimasObraslineales_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nombre': 'TextEdit', 'Fuente': 'TextEdit', 'Sistemas': 'TextEdit', 'Long_m': 'TextEdit', 'Long_km': 'TextEdit', 'Tipo': 'TextEdit', 'Tipo_Obra': 'TextEdit', 'DURACION': 'TextEdit', 'COMUNA': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AguasMartimasObrasareales_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'SECTOR': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'Sup_ha': 'TextEdit', 'Sup_m2': 'TextEdit', 'FUENTE': 'TextEdit', 'ID': 'TextEdit', 'Tipo_de_IF': 'TextEdit', 'Tipo_Obras': 'TextEdit', 'Lugar': 'TextEdit', 'Lugar_2': 'TextEdit', 'T': 'TextEdit', 'DURACION': 'TextEdit', 'COMUNA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_readeintervencindelproyecto_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'SECTOR': 'TextEdit', 'FUENTE': 'TextEdit', 'Sup_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ConcesinMartima_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AMERBCaletaBolfin_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area': 'TextEdit', });
lyr_AguasmartimasObraslineales_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nombre': 'no label', 'Fuente': 'no label', 'Sistemas': 'no label', 'Long_m': 'no label', 'Long_km': 'no label', 'Tipo': 'no label', 'Tipo_Obra': 'no label', 'DURACION': 'no label', 'COMUNA': 'no label', 'Shape_Leng': 'no label', });
lyr_AguasMartimasObrasareales_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'SECTOR': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'Sup_ha': 'no label', 'Sup_m2': 'no label', 'FUENTE': 'no label', 'ID': 'no label', 'Tipo_de_IF': 'no label', 'Tipo_Obras': 'no label', 'Lugar': 'no label', 'Lugar_2': 'no label', 'T': 'no label', 'DURACION': 'no label', 'COMUNA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_readeintervencindelproyecto_3.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'SECTOR': 'no label', 'FUENTE': 'no label', 'Sup_ha': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ConcesinMartima_4.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AMERBCaletaBolfin_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area': 'no label', });
lyr_AMERBCaletaBolfin_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});