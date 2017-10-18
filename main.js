$(document).ready(function (){
    "use strict";
    let ajaxResult = "";
    let counter = 0;
    //API call
    let URL = "https://pixabay.com/api/?key=6746448-134d21a799f0124eb887bf023&q=cats&per_page=5&image_type=all";
    $.getJSON(URL, function(xyz){
        if(xyz.hasOwnProperty("hits")){
            ajaxResult = xyz["hits"];
        }
        // Displays a default image once page finish loading
        $(".message").html(`<img class="thumbnail" src="${ajaxResult[counter].previewURL}">`);
    });

    //allows the user to click to see more cat images one at a time.
    $("#nextImage").on("click", function () {
        counter++;
        if(counter <= 4){
            $(".message").html(`<img class="thumbnail" src="${ajaxResult[counter].previewURL}">`);
        } else{
            // reset counter once the default per_page count is exhausted.
            counter = 0;
            $(".message").html(`<img class="thumbnail" src="${ajaxResult[counter].previewURL}">`);
        }
    });

    //Get the user Location via the Geolocation API calls
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            $("#getMessage").html("Your Latitude: "+position.coords.latitude+"<br>Your Longitude: "+position.coords.longitude);
        });
    }
});