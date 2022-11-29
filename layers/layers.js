var wms_layers = [];

var format_TPHaNoi_0 = new ol.format.GeoJSON();
var features_TPHaNoi_0 = format_TPHaNoi_0.readFeatures(json_TPHaNoi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPHaNoi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPHaNoi_0.addFeatures(features_TPHaNoi_0);
var lyr_TPHaNoi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPHaNoi_0, 
                style: style_TPHaNoi_0,
                interactive: true,
    title: 'TPHaNoi<br />\
    <img src="styles/legend/TPHaNoi_0_0.png" /> 555<br />\
    <img src="styles/legend/TPHaNoi_0_1.png" /> 684<br />\
    <img src="styles/legend/TPHaNoi_0_2.png" /> 873<br />\
    <img src="styles/legend/TPHaNoi_0_3.png" /> 1122<br />\
    <img src="styles/legend/TPHaNoi_0_4.png" /> 1236<br />\
    <img src="styles/legend/TPHaNoi_0_5.png" /> 1237<br />\
    <img src="styles/legend/TPHaNoi_0_6.png" /> 1430<br />\
    <img src="styles/legend/TPHaNoi_0_7.png" /> 1435<br />\
    <img src="styles/legend/TPHaNoi_0_8.png" /> 1546<br />\
    <img src="styles/legend/TPHaNoi_0_9.png" /> 1581<br />\
    <img src="styles/legend/TPHaNoi_0_10.png" /> 1587<br />\
    <img src="styles/legend/TPHaNoi_0_11.png" /> 1944<br />\
    <img src="styles/legend/TPHaNoi_0_12.png" /> 2181<br />\
    <img src="styles/legend/TPHaNoi_0_13.png" /> 2237<br />\
    <img src="styles/legend/TPHaNoi_0_14.png" /> 2310<br />\
    <img src="styles/legend/TPHaNoi_0_15.png" /> 2445<br />\
    <img src="styles/legend/TPHaNoi_0_16.png" /> 2890<br />\
    <img src="styles/legend/TPHaNoi_0_17.png" /> 3251<br />\
    <img src="styles/legend/TPHaNoi_0_18.png" /> 4352<br />\
    <img src="styles/legend/TPHaNoi_0_19.png" /> 4377<br />\
    <img src="styles/legend/TPHaNoi_0_20.png" /> 5376<br />\
    <img src="styles/legend/TPHaNoi_0_21.png" /> 6687<br />\
    <img src="styles/legend/TPHaNoi_0_22.png" /> 11702<br />\
    <img src="styles/legend/TPHaNoi_0_23.png" /> 12659<br />\
    <img src="styles/legend/TPHaNoi_0_24.png" /> 22189<br />\
    <img src="styles/legend/TPHaNoi_0_25.png" /> 24378<br />\
    <img src="styles/legend/TPHaNoi_0_26.png" /> 27124<br />\
    <img src="styles/legend/TPHaNoi_0_27.png" /> 30359<br />\
    <img src="styles/legend/TPHaNoi_0_28.png" /> 32614<br />\
    <img src="styles/legend/TPHaNoi_0_29.png" /> 37161<br />\
    <img src="styles/legend/TPHaNoi_0_30.png" /> <br />\
    <img src="styles/legend/TPHaNoi_0_31.png" /> Ba Đình<br />\
    <img src="styles/legend/TPHaNoi_0_32.png" /> Ba Vi<br />\
    <img src="styles/legend/TPHaNoi_0_33.png" /> Cầu Giấy<br />\
    <img src="styles/legend/TPHaNoi_0_34.png" /> Chương Mỹ<br />\
    <img src="styles/legend/TPHaNoi_0_35.png" /> Đan Phượng<br />\
    <img src="styles/legend/TPHaNoi_0_36.png" /> Đông Anh<br />\
    <img src="styles/legend/TPHaNoi_0_37.png" /> Đống Đa<br />\
    <img src="styles/legend/TPHaNoi_0_38.png" /> Gia Lâm<br />\
    <img src="styles/legend/TPHaNoi_0_39.png" /> Hà Đông<br />\
    <img src="styles/legend/TPHaNoi_0_40.png" /> Hai Bà Trưng<br />\
    <img src="styles/legend/TPHaNoi_0_41.png" /> Hoài Đức<br />\
    <img src="styles/legend/TPHaNoi_0_42.png" /> Hoàn Kiếm<br />\
    <img src="styles/legend/TPHaNoi_0_43.png" /> Hoàng Mai<br />\
    <img src="styles/legend/TPHaNoi_0_44.png" /> Kim Bôi<br />\
    <img src="styles/legend/TPHaNoi_0_45.png" /> Long Biên<br />\
    <img src="styles/legend/TPHaNoi_0_46.png" /> Lương Sơn<br />\
    <img src="styles/legend/TPHaNoi_0_47.png" /> Mê Linh<br />\
    <img src="styles/legend/TPHaNoi_0_48.png" /> Mỹ Đức<br />\
    <img src="styles/legend/TPHaNoi_0_49.png" /> Phú Xuyên<br />\
    <img src="styles/legend/TPHaNoi_0_50.png" /> Phúc Thọ<br />\
    <img src="styles/legend/TPHaNoi_0_51.png" /> Quốc Oai<br />\
    <img src="styles/legend/TPHaNoi_0_52.png" /> Sóc Sơn<br />\
    <img src="styles/legend/TPHaNoi_0_53.png" /> Sơn Tây<br />\
    <img src="styles/legend/TPHaNoi_0_54.png" /> Tây Hồ<br />\
    <img src="styles/legend/TPHaNoi_0_55.png" /> Thạch Thất<br />\
    <img src="styles/legend/TPHaNoi_0_56.png" /> Thanh Oai<br />\
    <img src="styles/legend/TPHaNoi_0_57.png" /> Thanh Trì<br />\
    <img src="styles/legend/TPHaNoi_0_58.png" /> Thanh Xuân<br />\
    <img src="styles/legend/TPHaNoi_0_59.png" /> Thường Tín<br />\
    <img src="styles/legend/TPHaNoi_0_60.png" /> Từ Liêm<br />\
    <img src="styles/legend/TPHaNoi_0_61.png" /> Ứng Hoà<br />\
    <img src="styles/legend/TPHaNoi_0_62.png" /> Hà Nội<br />'
        });

lyr_TPHaNoi_0.setVisible(true);
var layersList = [lyr_TPHaNoi_0];
lyr_TPHaNoi_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Dan_So': 'Dan_So', 'Dien_Tich': 'Dien_Tich', 'MatDo_DS': 'MatDo_DS', });
lyr_TPHaNoi_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Dan_So': 'TextEdit', 'Dien_Tich': 'TextEdit', 'MatDo_DS': 'TextEdit', });
lyr_TPHaNoi_0.set('fieldLabels', {'ID_0': 'inline label', 'ISO': 'inline label', 'NAME_0': 'inline label', 'ID_1': 'inline label', 'NAME_1': 'inline label', 'ID_2': 'inline label', 'NAME_2': 'inline label', 'TYPE_2': 'inline label', 'ENGTYPE_2': 'inline label', 'NL_NAME_2': 'inline label', 'VARNAME_2': 'inline label', 'Dan_So': 'inline label', 'Dien_Tich': 'inline label', 'MatDo_DS': 'inline label', });
lyr_TPHaNoi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});