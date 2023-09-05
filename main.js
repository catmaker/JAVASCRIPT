let target = document.querySelector("#dynamic"); //#dynamic 선택

function randomString() {
  let stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to Javascript",
    "Learn to Python",
    "Learn to Ruby",
  ]; //만들 글자의 배열
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split(""); // ""단위로 쪼개지는 배열
  return selectStringArr;
}
//타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}
//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift(); //배열의 앞의 값부터 빼내서 출력
    setTimeout(function () {
      dynamic(randomArr); //0.08초 간격으로 함수를 다시 실행 >0 일때
    }, 80);
  } else {
    setTimeout(resetTyping, 3000); //resetTyping 함수를 3초 뒤 실행
  }
}
dynamic(randomString());

//커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
