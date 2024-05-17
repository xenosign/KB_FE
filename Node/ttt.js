const shoudIBuyLotto = new Promise((res, rej) => {
  console.log('나 로또 사도 될까!?');
  setTimeout(() => {
    const rand = parseInt(Math.random() * 10);
    console.log(`나온 숫자는 ${rand}`);

    if (rand >= 5) {
      res('아싸! 로또 사자!');
    } else {
      rej('아... 망했어요');
    }
  }, 3000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
