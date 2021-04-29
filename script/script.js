// Modal

$(document).ready(function () {
  if (window.innerWidth > 990) {
    $(".modal").modal("show");
  } else {
    $(".modal").modal("hide");
  }
});

// About - Read More

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Google Map

function initMap() {
  var skinfinery = { lat: 23.001526, lng: 72.54767 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: skinfinery,
  });
  var marker = new google.maps.Marker({
    position: skinfinery,
    map: map,
  });
}
