const currentTime =function () {
  let d = new Date();
  return d.getHours() + ":" + d.getMinutes() + ":" +
    d.getSeconds() + ":" + d.getMilliseconds();
}
module.exports = currentTime;
