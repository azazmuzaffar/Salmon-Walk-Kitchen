let heroBanner = document.querySelector(".hero");
let exploreKitchen = document.querySelector(".explore-our-kitchen");

if (heroBanner) {
  /* Hero -> Fish Image Grow Animation */
  const growTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero__images--fish",
      scrub: 0.75,
      start: "top center",
      end: "100% center",
    },
  });

  // From
  growTl.from(".hero__images--fish", {
    duration: 1,
    scale: 1,
    transformOrigin: "50% 50%",
  });

  // TO
  growTl.to(".hero__images--fish", {
    duration: 1,
    scale: 1.6,
    transformOrigin: "50% 50%",
  });

  /* Hero -> Sub Heading Letter Spacing */
  const subHaading = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero__images--fish",
      scrub: 0.75,
      start: "top center",
      end: "100% center",
    },
  });

  // From
  subHaading.from(".hero__content--sub-heading h3", {
    duration: 1,
    letterSpacing: 0.227 + "vw",
    autoAlpha: 1,
  });

  // TO
  subHaading.to(".hero__content--sub-heading h3", {
    duration: 1,
    letterSpacing: 2.969 + "vw",
    autoRound: false,
  });
}

if (exploreKitchen) {
  /* Explore Our Kitchen -> Cards */
  const Cards = gsap.timeline({
    scrollTrigger: {
      trigger: ".explore-our-kitchen",
      scrub: 0.75,
      start: "-40% center",
      end: "60% center",
    },
  });

  // From
  Cards.from(".explore-our-kitchen__why", {
    duration: 1.5,
    rotationY: 13.2,
    scale: 0.9,
    transformOrigin: "50% 50%",
  });

  // TO
  Cards.to(".explore-our-kitchen__why", {
    rotationY: 0,
    duration: 1.5,
    scale: 1,
    transformOrigin: "50% 50%",
  });
}

// Location Click and Opening Popup
jQuery(".locations__each").on("click", function (event) {
  var items = [];
  jQuery(".locations__each").each(function () {
    console.log(jQuery(this).attr("href"));
    items.push({
      src: jQuery(this).attr("href"),
    });
  });
  console.log(items);

  // Get the index of the current selected item
  var index = jQuery(this).index() - 1;

  jQuery.magnificPopup.open(
    {
      type: "image",

      items: items,
      image: {
        titleSrc: function (item) {
          return item.data.titleSrc;
        },
      },
    },
    index
  );
});

// Getting Hero height and set to CSS root
let sectionHero = document.querySelector(".hero");

function setHeroHeight() {
  let sectionHeight = sectionHero.offsetHeight;
  document.documentElement.style.setProperty("--hero-height", `${sectionHeight}px`);
}

if (sectionHero) {
  // Set the Hero height as a CSS variable
  window.addEventListener("resize", setHeroHeight);
  window.addEventListener("load", setHeroHeight);
}
