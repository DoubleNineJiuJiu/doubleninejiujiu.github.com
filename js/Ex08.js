$(init)
  function init(){
    $("#building1").hide();
    $("#building2").hide();
    $("#building3").hide();
    $("#building4").hide();
    $("#building5").hide();
    
  }
var map = new BMap.Map("myMap");

//注意在调用此构造函数时应确保容器元素myMap已经添加到地图上。
  var point = new BMap.Point(120.1517,30.245054);
  map.centerAndZoom(point, 15);   
//地图必须经过初始化才可以执行其他操作。
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    autoViewport: true
  }
});
local.searchNearby("宾馆", point);
/*------------------2------------------------*/
var map = new BMap.Map("busMap");
var point = new BMap.Point(120.016214,30.294786);
  map.centerAndZoom(point, 15);   
//地图必须经过初始化才可以执行其他操作。
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "map"
  }
});
transit.search("杭州师范大学仓前校区","宾馆");

/*---------------------------3-----------------------------*/
var HZNUmap = new BMap.Map("HZNUmap");
var HZNUpoint = new BMap.Point(120.020472,30.295659);
HZNUmap.centerAndZoom(HZNUpoint, 17); 
HZNUmap.addControl(new BMap.NavigationControl());   
HZNUmap.addControl(new BMap.ScaleControl());    
HZNUmap.addControl(new BMap.OverviewMapControl());    
HZNUmap.addControl(new BMap.MapTypeControl());   
var marker = new BMap.Marker(HZNUpoint);// 创建标注    
HZNUmap.addOverlay(marker);

var opts=document.getElementById('building1');
var infoWindow = new BMap.InfoWindow(opts); // 创建信息窗口对象    
// var infoWindow = new BMap.InfoWindow("<img src='../img/1.jpg'/>",opts);
marker.addEventListener("click", function(){ 
 $("#building1").show();   
HZNUmap.openInfoWindow(infoWindow, HZNUpoint); // 打开信息窗口
});

var HZNUpoint2 = new BMap.Point(120.016214,30.294786);
 HZNUmap.centerAndZoom(HZNUpoint2, 17); 
var marker2 = new BMap.Marker(HZNUpoint2);// 创建标注    
HZNUmap.addOverlay(marker2);
var opts=document.getElementById('building2');
var infoWindow2 = new BMap.InfoWindow(opts); // 创建信息窗口对象    
marker2.addEventListener("click", function(){ 
 $("#building2").show();      
HZNUmap.openInfoWindow(infoWindow2, HZNUpoint2); // 打开信息窗口
});

var HZNUpoint3 = new BMap.Point(120.012306,30.296291);
HZNUmap.centerAndZoom(HZNUpoint3, 17); 
var marker3 = new BMap.Marker(HZNUpoint3);// 创建标注    
HZNUmap.addOverlay(marker3);
var opts=document.getElementById('building3');
var infoWindow3 = new BMap.InfoWindow(opts); // 创建信息窗口对象    
marker3.addEventListener("click", function(){ 
 $("#building3").show();      
HZNUmap.openInfoWindow(infoWindow3, HZNUpoint3); // 打开信息窗口
});

var HZNUpoint4 = new BMap.Point(120.022188,30.298754);
HZNUmap.centerAndZoom(HZNUpoint4, 17); 
var marker4 = new BMap.Marker(HZNUpoint4);// 创建标注    
HZNUmap.addOverlay(marker4);
var opts=document.getElementById('building4');
var infoWindow4 = new BMap.InfoWindow(opts); // 创建信息窗口对象    
marker4.addEventListener("click", function(){ 
 $("#building4").show();      
HZNUmap.openInfoWindow(infoWindow4, HZNUpoint4); // 打开信息窗口
});

var HZNUpoint5 = new BMap.Point(120.018289,30.297413);
HZNUmap.centerAndZoom(HZNUpoint5, 17); 
var marker5 = new BMap.Marker(HZNUpoint5);// 创建标注    
HZNUmap.addOverlay(marker5);
var opts=document.getElementById('building5');
var infoWindow5 = new BMap.InfoWindow(opts); // 创建信息窗口对象    
marker5.addEventListener("click", function(){ 
 $("#building5").show();      
HZNUmap.openInfoWindow(infoWindow5, HZNUpoint5); // 打开信息窗口
});
