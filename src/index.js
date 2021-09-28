$(function () {
  callApis();
  setTimeout(callApis, 300);
});
function callApis() {
  callApi();
  callApi();
  callApi();
  callApi();
}
var lastCallId = 0;
function callApi() {
  lastCallId = lastCallId + 1;
  var callId = lastCallId;
  var system = {
    type: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/1",
  };
  $.ajax(system)
    .fail(function (err) {
      err.request = system;
      console.error(err);
    })
    .done(function (data) {
      if (callId >= lastCallId) {
        console.log("worked callId and global", callId, lastCallId);
      } else console.log("ignored callId and global", callId, lastCallId);
    });
}
