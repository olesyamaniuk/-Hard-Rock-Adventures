$(function () {
  $(".q-h-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-h-gallery-list-left",
    nextArrow: ".q-h-gallery-list-right",
  });
});

$(function () {
  $(".q-h-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-h-reviews-list-left",
    nextArrow: ".q-h-reviews-list-right",
  });
});
