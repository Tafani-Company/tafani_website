// Check the documentation: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-html
// I've placed the API key within this script file instead of the main document
// API KEY
(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
    ({ key: "AIzaSyBr3qgdjcS5wapFu3v86f0uhM0PPAcVbRo", v: "beta" });

// Initialize and add the map
let map;

async function initMap() {
    // The location of Tafani
    const position = { lat: 32.9055595, lng: 13.2557411 };
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Tafani
    map = new Map(document.getElementById("map"), {
        zoom: 17,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Tafani
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "شركة التفاني",
    });
}

initMap();

// for contact us page we'll be adding a new feature that will allow us to mitigate the risk of not having any new customers in the near future by forcing them to enter their credit cards info to our system then we'll be stealing 