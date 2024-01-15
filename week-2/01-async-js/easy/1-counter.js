function currentTimePrint() {
  console.log(
    new Date().getHours() +
      " : " +
      new Date().getMinutes() +
      " : " +
      new Date().getSeconds()
  );
}

setInterval(currentTimePrint, 1000);
