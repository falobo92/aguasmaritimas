var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Puntoscopiar_1 = new ol.format.GeoJSON();
var features_Puntoscopiar_1 = format_Puntoscopiar_1.readFeatures(json_Puntoscopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntoscopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntoscopiar_1.addFeatures(features_Puntoscopiar_1);cluster_Puntoscopiar_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Puntoscopiar_1
});
var lyr_Puntoscopiar_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Puntoscopiar_1, 
                style: style_Puntoscopiar_1,
                popuplayertitle: "Puntos copiar",
                interactive: false,
                title: '<img src="styles/legend/Puntoscopiar_1.png" /> Puntos copiar'
            });
var format_Acueductosexistentes_2 = new ol.format.GeoJSON();
var features_Acueductosexistentes_2 = format_Acueductosexistentes_2.readFeatures(json_Acueductosexistentes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acueductosexistentes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acueductosexistentes_2.addFeatures(features_Acueductosexistentes_2);
var lyr_Acueductosexistentes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acueductosexistentes_2, 
                style: style_Acueductosexistentes_2,
                popuplayertitle: "Acueductos existentes",
                interactive: false,
                title: '<img src="styles/legend/Acueductosexistentes_2.png" /> Acueductos existentes'
            });
var format_RoLoa_3 = new ol.format.GeoJSON();
var features_RoLoa_3 = format_RoLoa_3.readFeatures(json_RoLoa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoLoa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoLoa_3.addFeatures(features_RoLoa_3);
var lyr_RoLoa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoLoa_3, 
                style: style_RoLoa_3,
                popuplayertitle: "Río Loa",
                interactive: false,
                title: '<img src="styles/legend/RoLoa_3.png" /> Río Loa'
            });
var format_ExtensinDomeyko_4 = new ol.format.GeoJSON();
var features_ExtensinDomeyko_4 = format_ExtensinDomeyko_4.readFeatures(json_ExtensinDomeyko_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExtensinDomeyko_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExtensinDomeyko_4.addFeatures(features_ExtensinDomeyko_4);
var lyr_ExtensinDomeyko_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExtensinDomeyko_4, 
                style: style_ExtensinDomeyko_4,
                popuplayertitle: "Extensión Domeyko",
                interactive: false,
                title: '<img src="styles/legend/ExtensinDomeyko_4.png" /> Extensión Domeyko'
            });
var format_PuntosDomeyko_5 = new ol.format.GeoJSON();
var features_PuntosDomeyko_5 = format_PuntosDomeyko_5.readFeatures(json_PuntosDomeyko_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosDomeyko_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosDomeyko_5.addFeatures(features_PuntosDomeyko_5);cluster_PuntosDomeyko_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PuntosDomeyko_5
});
var lyr_PuntosDomeyko_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PuntosDomeyko_5, 
                style: style_PuntosDomeyko_5,
                popuplayertitle: "Puntos Domeyko",
                interactive: false,
                title: '<img src="styles/legend/PuntosDomeyko_5.png" /> Puntos Domeyko'
            });
var format_Territoriosoperacionales_6 = new ol.format.GeoJSON();
var features_Territoriosoperacionales_6 = format_Territoriosoperacionales_6.readFeatures(json_Territoriosoperacionales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territoriosoperacionales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Territoriosoperacionales_6.addFeatures(features_Territoriosoperacionales_6);
var lyr_Territoriosoperacionales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Territoriosoperacionales_6, 
                style: style_Territoriosoperacionales_6,
                popuplayertitle: "Territorios operacionales",
                interactive: false,
                title: '<img src="styles/legend/Territoriosoperacionales_6.png" /> Territorios operacionales'
            });
var format_Sistemadeimpulsinyconduccindeaguadesalinizada_7 = new ol.format.GeoJSON();
var features_Sistemadeimpulsinyconduccindeaguadesalinizada_7 = format_Sistemadeimpulsinyconduccindeaguadesalinizada_7.readFeatures(json_Sistemadeimpulsinyconduccindeaguadesalinizada_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistemadeimpulsinyconduccindeaguadesalinizada_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemadeimpulsinyconduccindeaguadesalinizada_7.addFeatures(features_Sistemadeimpulsinyconduccindeaguadesalinizada_7);
var lyr_Sistemadeimpulsinyconduccindeaguadesalinizada_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistemadeimpulsinyconduccindeaguadesalinizada_7, 
                style: style_Sistemadeimpulsinyconduccindeaguadesalinizada_7,
                popuplayertitle: "Sistema de impulsión y conducción de agua desalinizada",
                interactive: false,
                title: '<img src="styles/legend/Sistemadeimpulsinyconduccindeaguadesalinizada_7.png" /> Sistema de impulsión y conducción de agua desalinizada'
            });
var format_Clientes_8 = new ol.format.GeoJSON();
var features_Clientes_8 = format_Clientes_8.readFeatures(json_Clientes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clientes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clientes_8.addFeatures(features_Clientes_8);cluster_Clientes_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Clientes_8
});
var lyr_Clientes_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Clientes_8, 
                style: style_Clientes_8,
                popuplayertitle: "Clientes",
                interactive: false,
                title: '<img src="styles/legend/Clientes_8.png" /> Clientes'
            });
var format_Puntos_9 = new ol.format.GeoJSON();
var features_Puntos_9 = format_Puntos_9.readFeatures(json_Puntos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_9.addFeatures(features_Puntos_9);
var lyr_Puntos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_9, 
                style: style_Puntos_9,
                popuplayertitle: "Puntos",
                interactive: false,
    title: 'Puntos<br />\
    <img src="styles/legend/Puntos_9_0.png" /> Estación de bombeo<br />\
    <img src="styles/legend/Puntos_9_1.png" /> Estanque intermedio<br />\
    <img src="styles/legend/Puntos_9_2.png" /> Estanques de distribución de agua<br />\
    <img src="styles/legend/Puntos_9_3.png" /> Piscina de Emergencia<br />\
    <img src="styles/legend/Puntos_9_4.png" /> Planta desalinizadora<br />'
        });
var group_ProyectoAguasMartimas = new ol.layer.Group({
                                layers: [lyr_Territoriosoperacionales_6,lyr_Sistemadeimpulsinyconduccindeaguadesalinizada_7,lyr_Clientes_8,lyr_Puntos_9,],
                                fold: "open",
                                title: "Proyecto Aguas Marítimas"});
var group_ExtensinDomeyko = new ol.layer.Group({
                                layers: [lyr_ExtensinDomeyko_4,lyr_PuntosDomeyko_5,],
                                fold: "open",
                                title: "Extensión Domeyko"});
var group_Existente = new ol.layer.Group({
                                layers: [lyr_Acueductosexistentes_2,lyr_RoLoa_3,],
                                fold: "open",
                                title: "Existente"});

lyr_GoogleRoad_0.setVisible(true);lyr_Puntoscopiar_1.setVisible(true);lyr_Acueductosexistentes_2.setVisible(true);lyr_RoLoa_3.setVisible(true);lyr_ExtensinDomeyko_4.setVisible(true);lyr_PuntosDomeyko_5.setVisible(true);lyr_Territoriosoperacionales_6.setVisible(true);lyr_Sistemadeimpulsinyconduccindeaguadesalinizada_7.setVisible(true);lyr_Clientes_8.setVisible(true);lyr_Puntos_9.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Puntoscopiar_1,group_Existente,group_ExtensinDomeyko,group_ProyectoAguasMartimas];
lyr_Puntoscopiar_1.set('fieldAliases', {'TIPO': 'TIPO', 'Lugar': 'Lugar', 'Lugar_2': 'Lugar_2', });
lyr_Acueductosexistentes_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_RoLoa_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ExtensinDomeyko_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_PuntosDomeyko_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_Territoriosoperacionales_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sistemadeimpulsinyconduccindeaguadesalinizada_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Clientes_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Puntos_9.set('fieldAliases', {'TIPO': 'TIPO', 'Lugar': 'Lugar', 'Lugar_2': 'Lugar_2', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_Puntoscopiar_1.set('fieldImages', {'TIPO': 'TextEdit', 'Lugar': 'TextEdit', 'Lugar_2': 'TextEdit', });
lyr_Acueductosexistentes_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_RoLoa_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ExtensinDomeyko_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': '', 'path': '', });
lyr_PuntosDomeyko_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': '', });
lyr_Territoriosoperacionales_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Sistemadeimpulsinyconduccindeaguadesalinizada_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Clientes_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Puntos_9.set('fieldImages', {'TIPO': 'TextEdit', 'Lugar': 'TextEdit', 'Lugar_2': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_Puntoscopiar_1.set('fieldLabels', {'TIPO': 'no label', 'Lugar': 'header label - always visible', 'Lugar_2': 'no label', });
lyr_Acueductosexistentes_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_RoLoa_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ExtensinDomeyko_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PuntosDomeyko_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_Territoriosoperacionales_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Sistemadeimpulsinyconduccindeaguadesalinizada_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Clientes_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Puntos_9.set('fieldLabels', {'TIPO': 'no label', 'Lugar': 'header label - always visible', 'Lugar_2': 'no label', });
lyr_Puntos_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});