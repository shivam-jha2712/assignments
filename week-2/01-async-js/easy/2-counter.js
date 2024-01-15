function currentTimePrint() {
  console.log(
    new Date().getHours() +
      " : " +
      new Date().getMinutes() +
      " : " +
      new Date().getSeconds()
  );
}

for (let i = 1; i <= 60; i++) {
  setTimeout(currentTimePrint, i*1000);
}
