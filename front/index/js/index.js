
var HOME_PATH = window.HOME_PATH || '.';
var position = new naver.maps.LatLng(37.552758094502494, 126.98732600494576);

var map = new naver.maps.Map('map', {
    center: position,
    zoom: 15
});

var markerOptions = {
    position: position.destinationPoint(90, 15),
    map: map,
    icon: {
        url: '../../../common/image/new_red_point.png',
        size: new naver.maps.Size(60, 100),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
    }
};

var markerOptions2 = {
    position: position.destinationPoint(100, -1500),
    map: map,
    icon: {
        url: '../../../common/image/new_blue_point.png',
        size: new naver.maps.Size(60, 100),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
    }
};

var markerOptions3 = {
    position: position.destinationPoint(594, -1390),
    map: map,
    icon: {
        url: '../../../common/image/marker_mint.png',
        size: new naver.maps.Size(60, 100),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
    }
};

var markerOptions4 = {
    position: position.destinationPoint(313, 1100),
    map: map,
    icon: {
        url: '../../../common/image/new_yellow_point.png',
        size: new naver.maps.Size(60, 100),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
    }
};

var marker = new naver.maps.Marker(markerOptions);
var marker = new naver.maps.Marker(markerOptions2);
var marker = new naver.maps.Marker(markerOptions3);
var marker = new naver.maps.Marker(markerOptions4);