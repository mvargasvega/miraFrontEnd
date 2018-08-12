$(function () {
    $("#home").on('click', function (e) {
        $("#home").addClass('active');

        $("#partnersAndAllies").removeClass('active');
        $("#newsfeed").removeClass('active');
        $("#knowYourRights").removeClass('active');
        $("#helpAndSupport").removeClass('active');

        hideAllContainers();
        $('#homeContent').show();
    });

    $("#newsfeed").on('click', function (e) {
        $("#newsfeed").addClass('active');

        $("#partnersAndAllies").removeClass('active');
        $("#home").removeClass('active');
        $("#knowYourRights").removeClass('active');
        $("#helpAndSupport").removeClass('active');

        hideAllContainers();
        $('#newsfeedContent').show();
    });

    $("#knowYourRights").on('click', function (e) {
        $("#knowYourRights").addClass('active');

        $("#partnersAndAllies").removeClass('active');
        $("#home").removeClass('active');
        $("#newsfeed").removeClass('active');
        $("#helpAndSupport").removeClass('active');

        hideAllContainers();
        $('#knowYourRightsContent').show();
    });

    $("#partnersAndAllies").on('click', function (e) {
        $("#partnersAndAllies").addClass('active');

        $("#home").removeClass('active');
        $("#newsfeed").removeClass('active');
        $("#knowYourRights").removeClass('active');
        $("#helpAndSupport").removeClass('active');

        hideAllContainers();
        $('#partnersAndAlliesContent').show();
    });

    $("#helpAndSupport").on('click', function (e) {
        $("#helpAndSupport").addClass('active');

        $("#home").removeClass('active');
        $("#newsfeed").removeClass('active');
        $("#knowYourRights").removeClass('active');
        $("#partnersAndAllies").removeClass('active');

        hideAllContainers();
        $('#helpAndSupportContent').show();
    });
});

$(document).ready(function () {
    var reportedAreas = {
        chicago: {
            center: {lat: 41.878, lng: -87.629},
            multipler: 10
        },
        newyork: {
            center: {lat: 40.714, lng: -74.005},
            multipler: 10
        },
        losangeles: {
            center: {lat: 34.052, lng: -118.243},
            multipler: 10
        },
        vancouver: {
            center: {lat: 49.25, lng: -123.1},
            multipler: 10
        }
    };

    var map = new google.maps.Map(document.getElementById('mainMap'), {
        zoom: 4,
        center: {lat: 37.090, lng: -95.712},
        mapTypeId: 'terrain'
    });

    for (var reportedArea in reportedAreas) {
        var areaCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: reportedAreas[reportedArea].center,
            radius: Math.sqrt(reportedAreas[reportedArea].multipler) * 100000
        });
    }
});

function hideAllContainers() {
    $('.pageContainerCommon').hide();
}