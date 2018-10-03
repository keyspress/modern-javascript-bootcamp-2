const getDataCallback = callback => {
  setTimeout(() => {
    callback('error', undefined);
    callback('error', undefined);
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const getDataPromise = data =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`success: ${data}`);
      // reject('error as promised');
      // reject('error as promised');
    }, 2000);
  });

const myPromise = getDataPromise(123);

myPromise.then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);
