let nameArr = ['김연지', '최호진', '김이수', '정지희', '최현준', '문준일'];

console.log('첫번째 줄에 앉으신 분은', nameArr[0], '입니다');
console.log('첫번째 줄에 앉으신 분은', nameArr[1], '입니다');
console.log('첫번째 줄에 앉으신 분은', nameArr[2], '입니다');
console.log('첫번째 줄에 앉으신 분은', nameArr[3], '입니다');
console.log('첫번째 줄에 앉으신 분은', nameArr[4], '입니다');
console.log('첫번째 줄에 앉으신 분은', nameArr[5], '입니다');

for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i + 1} 번째 이름은 ${nameArr[i]} 입니다`);
}

const fruits = ['사과', '바나나', '수박', '망고', '딸기'];
function conLog(...rest) {
  console.log(rest);
  rest.forEach((element) => {
    console.log(element);
  });
}

conLog(...fruits);
