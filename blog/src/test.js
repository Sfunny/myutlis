function inspectionTime(time1, time2) {
  var oldTime = new Date(time1);
  var newTime = new Date(time2);
  var diff = (newTime - oldTime) / 1000/60/60/24;
  console.log(diff);
}
inspectionTime("2019-8-5 15:32:37", "2019/9/5 15:32:37");
