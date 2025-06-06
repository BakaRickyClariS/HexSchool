const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");

let data = [];

function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li>${item.content}<input class="delete" type="button" data-num=${index} value="刪除代辦"></li>`;
  });
  const list = document.querySelector(".list");
  list.innerHTML = str;
}

save.addEventListener("click", function (e) {
  if (txt.value == "") {
    alert("請輸入內容");
    return;
  }
  let obj = {};
  obj.content = txt.value;
  data.push(obj);
  renderData();
});

list.addEventListener("click", function (e) {
  console.log(e.target);
  console.dir(e.target);
  if (e.target.getAttribute("class") !== "delete") {
    return;
  }
  let num = e.target.getAttribute("data-num");
  console.log(num);
  data.splice(num, 1);
  renderData();
});
