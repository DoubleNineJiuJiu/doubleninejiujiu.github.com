var map = new BMap.Map("myMap");

//注意在调用此构造函数时应确保容器元素myMap已经添加到地图上。
  var point = new BMap.Point(120.1517,30.245054);
  map.centerAndZoom(point, 15);   
//地图必须经过初始化才可以执行其他操作。
var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    autoViewport: true
  }
});
local.searchNearby("宾馆", point);

var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "map"
  }
});
transit.search("杭州师范大学仓前校区","杭州大华饭店");


var HZNUmap = new BMap.Map("HZNUmap");
var HZNUpoint = new BMap.Point(120.01573,30.29655);
 HZNUmap.centerAndZoom(HZNUpoint, 17); 
var marker = new BMap.Marker(HZNUpoint);// 创建标注    
HZNUmap.addOverlay(marker);