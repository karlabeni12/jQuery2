$(document).ready(function() {
  $('#sky').jQlouds();
});
$('#sky').jQlouds({
  minClouds: 3, // minimum amount of clouds
  maxClouds: 5, // maximum amount of clouds
});
$('#sky').jQlouds({
  wind: true
});
