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

function hideAllContainers() {
    $('.pageContainerCommon').hide();
}