import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.3.1";

async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
        "marker",
    );
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 32.8456699, lng: 13.2007328 },
        mapId: "DEMO_MAP_ID",
    });
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const pinGlyph = new google.maps.marker.PinElement({
            glyph: label,
            glyphColor: "white",
        });
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position,
            content: pinGlyph.element,
        });

        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        marker.addListener("click", () => {
            infoWindow.setContent(position.lat + ", " + position.lng);
            infoWindow.open(map, marker);
        });
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map });
}

// Random locations for demonstration within Tripoli, Libya.
const locations = [
    { lat: 32.881986, lng: 13.180263 },
    { lat: 32.889576, lng: 13.188085 },
    { lat: 32.884702, lng: 13.176026 },
    { lat: 32.884977, lng: 13.182554 },
    { lat: 32.889397, lng: 13.186042 },
    { lat: 32.887502, lng: 13.180736 },
    { lat: 32.888053, lng: 13.180372 },
    { lat: 32.887512, lng: 13.179556 },
    { lat: 32.891344, lng: 13.187450 },
    { lat: 32.889733, lng: 13.183756 },
    { lat: 32.890176, lng: 13.184255 },
    { lat: 32.885180, lng: 13.181995 },
    { lat: 32.887910, lng: 13.182763 },
    { lat: 32.886074, lng: 13.185254 },
    { lat: 32.884970, lng: 13.182197 },
    { lat: 32.882575, lng: 13.180749 },
    { lat: 32.886925, lng: 13.179750 },
    { lat: 32.890315, lng: 13.186629 },
    { lat: 32.887110, lng: 13.182613 },
    { lat: 32.882787, lng: 13.183590 },
    { lat: 32.886323, lng: 13.183215 },
    { lat: 32.890325, lng: 13.186335 },
    { lat: 32.889258, lng: 13.182208 },
    { lat: 32.892765, lng: 13.186168 },
    { lat: 32.887862, lng: 13.182111 },
    { lat: 32.886629, lng: 13.183994 },
    { lat: 32.887987, lng: 13.182966 },
    { lat: 32.888600, lng: 13.182739 },
    { lat: 32.886825, lng: 13.179370 },
    { lat: 32.887730, lng: 13.180198 },
    { lat: 32.887297, lng: 13.179177 }
];

initMap();