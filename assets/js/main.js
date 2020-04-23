var carteInteractive = {};
// var slider = {};


var config = {
  api      : "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon",
  leaflet  : "pk.eyJ1IjoicmFmYTE4NyIsImEiOiJjazBlejByNTUwazBqM290aTR6ZTl1NHZsIn0.uen14wB6LPlL_450lJOynA",
  tokenJCD : "7ace2945195aee91101f2aac7bc8bd926e097e9c",
  lat      : 45.756645,
  long     : 4.835673,
  zoom     : 13
}

new DataManager("carteInteractive");
new Slider(document.querySelector('.slideshow'), document.querySelector('.container'), "slider");
new Carte(document.getElementsByTagName("main")[0]);
carteInteractive.carte.initMap(`${config.api}&apiKey=${config.tokenJCD}`);
new Reservation(document.getElementsByTagName("main")[0]);