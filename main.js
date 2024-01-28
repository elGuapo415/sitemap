
window.onload = function () {
  const long = -118.24338;
  const lat = 34.05224;
  const centerLocation = [long, lat];
  const complete = true;
  const issue = true;

  const currentDate = new Date().toDateString();
  const dateElement = (document.querySelector("#dateInput").value =
    currentDate);
  const completeInput = (document.querySelector("#completeInput").value =
    "null");
  const incompleteInput = (document.querySelector("#incompleteInput").value =
    "null");
  const batteryStock = (document.querySelector("#batteryStockInput").value =
    "null");

  //load new map:
  const map = tt.map({
    key: "FyQCpDQwZOz9VR6TwyObdJb18QzA2LXE",
    container: "map",
    center: centerLocation,
    zoom: 7,
  });

  map.addControl(new tt.FullscreenControl());
  map.addControl(new tt.NavigationControl());

  function createMarker(position, popupText, status) {
    const markerElement = document.createElement("div");
    markerElement.className = "marker";

    const markerContentElement = document.createElement("div");
    markerContentElement.className = "marker-content";

    markerElement.appendChild(markerContentElement);

    const iconElement = document.createElement("i");
    iconElement.className = "fa-solid fa-map-pin fa-2xl";
    const completed = status == true ? "#117317" : "#ff0722";

    iconElement.style.color = `${completed}`;
    markerContentElement.appendChild(iconElement);

    const popup = new tt.Popup({ offset: 30, closeOnClick: false }).setText(
      popupText
    );
    // add marker to map
    new tt.Marker({ element: markerElement, anchor: "bottom" })
      .setLngLat(position)
      .setPopup(popup)
      .addTo(map);
  }

  createMarker([-117.1625, 32.71202], "Columbia Tower");
  createMarker([-117.160737, 32.713359], "Market Street Square");
  createMarker([-117.17995, 32.812691], "Genesee Park");
  createMarker([-116.958947, 32.794793], "El Cajon Senior Towers");
  createMarker([-117.070604, 32.573787], "Otay Park");
  createMarker([-118.485013, 34.006599], "Ocean Park Villa");
  createMarker([-118.4812408, 33.9972385], "Neilson Villa");
  // createMarker([-118.0858374, 33.9567948], "Placita Park", complete);
  // createMarker([-118.3610985, 34.0922666], "Fairfax Towers", complete);
  // createMarker([-118.3431881, 34.0996679], "The Pines", complete);
  // createMarker([-118.3271383, 34.1008992], "Hollywood Plaza", complete);
  // createMarker([-118.4538428, 33.9787705], "Monte Carlo", complete);
  // createMarker([-118.4535842, 33.9792736], "Capri", issue);
  // createMarker([-117.95608, 33.920798], "Las Lomas Garden", complete);
  // createMarker([-118.4290052, 34.0024286], "Grandview Terrace", complete);
  // createMarker([-118.4428234, 34.3168028], "Bonita Rach", complete);
  // createMarker([-118.2397707, 34.0470953], "Miyako Gardens", complete);
  // createMarker([-117.9620396, 34.0912592], "Clark Terrace", complete);
  createMarker([-118.3875299, 34.2093602], "SFairvalley Villa");
  createMarker([-117.9044357, 34.099638], "Las Palmas Apartment Homes");
  createMarker([-117.9531458, 34.0342135], "Nantes Manor");
  createMarker([-118.0022191, 34.1451002], "Oak Park (South Bldg)");
  createMarker([-117.940127, 34.0664553], "Citrus Gardens");
  createMarker([-117.8844331, 34.0153355], "Walnut Ridge Management");
  createMarker([-117.9303719, 33.8720913], "Amerige Villa");
  createMarker([-117.9918524, 33.656781], "Surfside Villas");
  createMarker([-117.9918524, 33.7122902], "Fairview Green");
  createMarker([-117.1567063, 34.0567533], "Citrus Arms");
  createMarker([-117.832611, 33.733306], "Tustin Gardens");
  createMarker([-118.2513943, 34.0535747], "255 Grand");
  createMarker([-118.2496866, 34.0531863], "Museum Tower");
  createMarker([-118.2130262, 34.0902917], "Parkview Terrace");
  createMarker([-118.2528154, 34.0573944], "Promenade Towers");
  createMarker([-118.3110165, 34.0321151], "St Andrews Gardens");
  createMarker([-118.2860103, 34.0902429], "Willowbrook Villa");
  createMarker([-118.603067, 34.2326731], "Villa Topanga");
  createMarker([-118.5222586, 34.1703444], "Encino Crest");
  createMarker([-118.5363455, 34.1874724], "Park Terrace");
  createMarker([-118.5355335, 34.1783106], "Tarzana Courtyard");
  createMarker([-118.5364188, 34.1764136], "Tarzana Springs");
  createMarker([118.5364515, 34.1781179], "Tarzana Terrace");
  createMarker([-118.590173, 34.1909704], "Independence Park");
  createMarker([-118.5948523, 34.2279552], "Parthenia Townhouses");
  createMarker([-118.3840029, 34.1838142], "Beck Park");
  createMarker([-118.3875299, 34.2093602], "Lankershim Arms");
  // createMarker([-1, 34], "SITE");
};
