const bfj = require('bfj');
const path = "/config.json";

bfj
  .read(path)
  .then((config) => {
    console.log(config);
  })
  .catch((error) => {
    console.log(error);
  });    //结束

