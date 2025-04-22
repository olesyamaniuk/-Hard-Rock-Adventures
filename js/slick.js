$(function () {
  $(".q-g-gallery-list").slick({
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
    prevArrow: ".q-g-gallery-list-left",
    nextArrow: ".q-g-gallery-list-right",
  });
});
$(function () {
  $(".q-g-gallery-lists").slick({
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
  });
});
$(function () {
  $(".q-g-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-g-reviews-list-left",
    nextArrow: ".q-g-reviews-list-right",
  });
});
