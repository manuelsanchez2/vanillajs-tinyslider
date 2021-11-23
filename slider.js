export const initSlider = () => {
  var slider = tns({
    container: ".my-slider",
    items: 3,
    gutter: 8,
    slideBy: 1,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: "#custom-control",
    responsive: {
      100: {
        items: 1,
      },
      1200: {
        items: 3,
        nav: false,
      },
    },
    // mode: 'gallery',
    // speed: 2000,
    // animateIn: "scale",
    // controls: false,
    // nav: false,
    // edgePadding: 20,
    // loop: false,
  });
};
