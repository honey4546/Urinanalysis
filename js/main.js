// Functionality for the "Upload Photo" button

document.getElementById("uploadButton").addEventListener("click", function () {
    const fileInput = document.getElementById("photoInput");
    const placeholderText = document.getElementById("placeholderText");
    const uploadedImage = document.getElementById("uploadedImage");
    const actionButtons = document.getElementById("actionButtons");

    if (fileInput.files && fileInput.files[0]) {
        placeholderText.style.display = "none";

        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block";

            actionButtons.style.display = "flex";
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert("Please select a file to upload.");
    }
});

// Functionality for the "Analyze" button
document.getElementById("analyzeButton").addEventListener("click", async function () {
    const fileInput = document.getElementById("photoInput");
    const fetchDataContainer = document.getElementById("fetchDataContainer");
    const fetchedDataText = document.getElementById("fetchedDataText");

    if (fileInput.files && fileInput.files[0]) {
        const formData = new FormData();
        formData.append("image", fileInput.files[0]);

        try {
            // Make sure Axios is loaded in your HTML file
            const response = await axios.post("http://localhost:8000/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

           
            fetchedDataText.textContent = JSON.stringify(response.data);
            fetchDataContainer.style.display = "block";
        } catch (error) {
            const errorMessage = error.response 
                ? error.response.data.message || error.response.data 
                : error.message;
            alert(`Error: ${errorMessage}`);
        }
    } else {
        alert("No file uploaded for analysis.");
    }
});

// Functionality for the "Remove Photo" button
document.getElementById("removeButton").addEventListener("click", function () {
    const placeholderText = document.getElementById("placeholderText");
    const uploadedImage = document.getElementById("uploadedImage");
    const actionButtons = document.getElementById("actionButtons");
    const fetchDataContainer = document.getElementById("fetchDataContainer");
    const fetchedDataText = document.getElementById("fetchedDataText");

    // Reset the uploaded photo and action buttons
    uploadedImage.src = "";
    uploadedImage.style.display = "none";
    placeholderText.style.display = "block";
    actionButtons.style.display = "none";

    // Hide and clear fetched data
    fetchDataContainer.style.display = "none";
    fetchedDataText.textContent = "No data available.";
});













(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

