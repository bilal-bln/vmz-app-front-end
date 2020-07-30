const state = {
    leafletMapProperties: {
        // "l-map" data
        zoom: 13,
        center: [52.520008, 13.404954],
        // https://docs.mapbox.com/mapbox-gl-js/example/restrict-bounds/
        // https://vue2-leaflet.netlify.app/examples/set-bounds.html
        // Set bounds to Berlin, Berlin
        maxBounds: [
            [52.3, 13.0], // Southwest coordinates
            [52.7, 13.8] // Northeast coordinates
        ],
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        currentZoom: 11.5,
        currentCenter: [47.41322, -1.219482],
        showParagraph: false,
        mapOptions: {
            zoomControl: false,
            zoomSnap: 0.5
        },
        showMap: true,
        zIndex: 'z-index: 0;'
    }
};

const getters = {
    leafletMapProperties: (state) => state.leafletMapProperties
};

export default {
    state,
    getters
}