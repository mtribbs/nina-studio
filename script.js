// panels
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();

    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

console.log("Hello");

// map

// const localMap = document.querySelector("map");

// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const studioLocation = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: studioLocation,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: studioLocation,
//     map: map,
//   });
// }
