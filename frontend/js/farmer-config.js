
/*
 * FarmWise AI configuration.
 * Do not store dealer, inventory, or store records here.
 */
window.FARMWISE_CONFIG = Object.freeze({
    apiBaseUrl: "https://farmwise-backend-3yha.onrender.com",

    lowStockThresholdKg: 100,
    earthRadiusKm: 6371,
    maxVoiceResults: 5,

    geolocation: Object.freeze({
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000
    })
});
