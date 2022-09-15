const nameContainer = document.querySelector(".js-name");//HTML불러오기

function paintName(name) {//이름 출력
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `Hello ${name}`;
  nameContainer.appendChild(title); //HTML 에 추가
}

function handleSubmit(event) {//확인 눌렀을 때 기억하기 위해
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");//인풋값 불러오기
  const value = input.value; //인풋값 저장
  localStorage.setItem("username", value); //로컬저장소에 저장한다
  paintName(value);
}

function paintInput() { //입력하는거 받아들이면서 출력하기
  const input = document.createElement("input");
  input.placeholder = "Type your name here";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() { //로컬에서 이름 가져오기  (새로고침했을때 용도)
  const name = localStorage.getItem("username");
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {//실행
  loadName();
} //이 모든걸 init으로 실행하고 function 으로 기능을 나눔으로써 굳이 hidden을 사용하지 않아도 된다. 그저 세이브값의 유무로만 알고 출력하면 되기 때문

init();
