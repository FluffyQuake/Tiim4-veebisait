function initMap() {
    const kure = { lat: 58.25638064606457, lng: 22.482334396019926 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: kure,
    });
    const marker = new google.maps.Marker({
      position: kure,
      map: map,
    });
  }
  window.initMap = initMap;