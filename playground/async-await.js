const doWork = async () => {
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await add(sum2, -1);
  return sum3;
};

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("numbers must be non negative");
      }

      resolve(a + b);
    }, 2000);
  });
};

doWork().then(res => console.log(res)).catch(e => console.log("Error:", e));
