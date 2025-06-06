axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    let ary = response.data;
    console.log(ary[0].name);
    const title = document.querySelector(".title");
    title.innerHTML = ary[0].name;
  });

let obj = {
  email: "rijijw1123@gmail.com",
  password: "123456789",
};

axios
  .post("https://escape-room.hexschool.io/api/user/signup", obj)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
