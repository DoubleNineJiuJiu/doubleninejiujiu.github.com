var map = new BMap.Map("myMap"); 
//注意在调用此构造函数时应确保容器元素myMap已经添加到地图上。
  var point = new BMap.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);   
//地图必须经过初始化才可以执行其他操作。
window.setTimeout(function() {
  map.panTo(new BMap.Point(100.409, 3.918));
}, 2000);
//panTo()方法将让地图平移至新中心点,如果移动距离超过了当前地图区域大小，则地图会直跳到该点。