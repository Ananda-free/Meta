window.onload = function () {


let tabParents = document.querySelectorAll("[data-parent-tabs]");

console.log("tabParents: ", tabParents);

tabParents.forEach(function (tabParent) {
  console.log("tabParent: ", tabParent);
  let tabNavs = tabParent.querySelectorAll("[data-tab]");
  let tabPanes = tabParent.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      console.log("e: " + e);
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute("data-tab");

      for (let j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      }
    });
  }
});

};



let artistSlider = new Swiper('.artist', {
  loop: true,
  spaceBetween: 500,
  slidesPerView: 3,

  speed: 6000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
}
});


let teamSlider = new Swiper('.team', {
  loop: true,
  spaceBetween: 500,
  slidesPerView: 4,

  speed: 6000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
}
});


