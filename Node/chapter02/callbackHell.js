function callbackHellFunc(cb) {
  cb();
}

callbackHellFunc(function () {
  console.log(`1 번째 콜백 호출`);
  callbackHellFunc(function () {
    console.log(`2 번째 콜백 호출`);
    callbackHellFunc(function () {
      console.log(`3 번째 콜백 호출`);
      callbackHellFunc(() => {
        console.log(`4 번째 콜백 호출`);
        callbackHellFunc(() => {
          console.log(`5 번째 콜백 호출`);
          callbackHellFunc(() => {
            console.log(`6 번째 콜백 호출`);
            callbackHellFunc(() => {
              console.log('그만해.... 제발....');
            });
          });
        });
      });
    });
  });
});
