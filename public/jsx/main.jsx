function dodo (info)
{
  if (app.documents.length === 0) {
    alert('no active document')
    return 
  }
  var activeDom = app.activeDocument
  return activeDom
  // var layers = []
  // return layers
}

function getFontsJson()
{
  debugger
    var fontlist = new Object(); // 创建一个要传递的对象

    //----这个例子是获得 PhotoShop 的可用字体列表
    fontlist.length = app.fonts.length; 
    fontlist.list = [{}];
    for (var i=0; i < app.fonts.length; i++)
    {
        fontlist.list[fontlist.list.length]=
        {
            name:app.fonts[i].name,
            style:app.fonts[i].style,
            typename:fonts[i].typename,
            postScriptName:fonts[i].postScriptName,
            family:fonts[i].family
        }
    }
   //---------
    return JSON.stringify(fontlist); // 把对象转化成 JSON 字符串并返回
}

function getDocumentInfoJson_byActive(lessInfo) {
  // Build Action Descriptor
  var af = new ActionReference();
  var ad = new ActionDescriptor();
  af.putProperty(charIDToTypeID('Prpr'), stringIDToTypeID("json"));
  af.putEnumerated(stringIDToTypeID("document"), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
  ad.putReference(charIDToTypeID('null'), af);


  if (lessInfo != true)
  {
      // ad.putBoolean(stringIDToTypeID("expandSmartObjects"), true);
      // ad.putBoolean(stringIDToTypeID("selectedLayers"), true);
      // ad.putBoolean(stringIDToTypeID("getTextStyles"), true);
      // ad.putBoolean(stringIDToTypeID("getFullTextStyles"), true);
      // ad.putBoolean(stringIDToTypeID("getDefaultLayerFX"), true);
      // ad.putBoolean(stringIDToTypeID("getPathData"), true);
      // ad.putBoolean(stringIDToTypeID("getAnnotations"), true);
      // ad.putBoolean(stringIDToTypeID("compInfo"), true);
      // ad.putBoolean(stringIDToTypeID( "getCompLayerSettings" ), true);
      ad.putBoolean(stringIDToTypeID("getNotes"), true);
  }

  return executeAction(charIDToTypeID("getd"), ad, DialogModes.NO).getString(stringIDToTypeID("json"));
}
function resizeCanvas_byActive(width, height) {
  var _width = UnitValue(width + ' px')
  var _height = UnitValue(height + ' px')
  app.activeDocument.resizeCanvas(_width,_height,AnchorPosition.TOPLEFT)
}