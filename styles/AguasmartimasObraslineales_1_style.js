var size = 0;
var placement = 'point';
function categories_AguasmartimasObraslineales_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Contrafoso':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,178,218,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cramsa - Acueductos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Emisario':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,195,200,1.0)', lineDash: [8.36,4.18], lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Emisario Terrestre':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,195,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inmisario Subterráneo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,195,200,1.0)', lineDash: [8.36,4.18], lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inmisario Terrestre':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,195,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Líneas Eléctricas Aéreas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,255,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Líneas Eléctricas Soterradas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,255,1,1.0)', lineDash: [2.09,4.18], lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Torre de Captación':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,195,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tramo Difusor':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,195,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tubería Inmisario':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,195,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.09}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(145,96,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AguasmartimasObraslineales_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nombre");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_AguasmartimasObraslineales_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
