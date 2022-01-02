// Initialize and add the map
async function initMap() {
  // The map, centered at HSB
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "ecbcd65fa615b453", // Map styles at https://snazzymaps.com/
    zoom: 4,
    center: { lat: 30.546675, lng: -98.349126 },
    disableDefaultUI: true,
    minZoom: 3,
    restriction: {
      latLngBounds: { north: 83.8, south: -57, west: -180, east: 180 }
    },
  });

  // Grab json data for videos
  videos = await fetch('video-management/videos.json');
  videos = await videos.json();

  for (const [name, video] of Object.entries(videos)) {
    const marker = new google.maps.Marker({
      position: { lat: video['lat'] , lng: video['lng'] },
      map: map,
      title: video['title'],
    });
    
    const infoWindow = new google.maps.InfoWindow({
      content: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + video['code'] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    });
  
    // Callback when Horseshoe Bay is clicked
    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
}