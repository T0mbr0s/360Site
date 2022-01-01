// Initialize and add the map
function initMap() {
  // The location of HSB and CO
  const HSB = { lat: 30.546675, lng: -98.349126 };
  const CO  = { lat: 37.480139, lng: -122.15124 };

  // The map, centered at HSB
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "ecbcd65fa615b453", // Map styles at https://snazzymaps.com/
    zoom: 4,
    center: HSB,
    disableDefaultUI: true,
  });

  // The marker, positioned at HSB
  const HSBmarker = new google.maps.Marker({
    position: HSB,
    map: map,
    title: "At the Lake Summer'13",
  });
  
  var HSBinfoWindow = new google.maps.InfoWindow({
    content: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KrBxOAvSD30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  });

  // Callback when Horseshoe Bay is clicked
  HSBmarker.addListener("click", () => {
    HSBinfoWindow.open({
      anchor: HSBmarker,
      map,
      shouldFocus: false,
    });
  });
}