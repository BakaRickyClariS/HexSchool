const test = document.querySelector("nav");
console.log(test);
let link = "https://www.notion.so/";
test.innerHTML = `<a href="${link}">test!!!!!</a>`;

const testA = document.querySelector(".ttt");
testA.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("取消了連結預設的觸發行為，有被點擊到");
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.target.innerHTML);
  console.log(e.target.nodeName);
});

let arr = [1, 4, 50, 710];

arr.forEach(function (value, i, arr) {
  console.log(value, i, arr);
});
