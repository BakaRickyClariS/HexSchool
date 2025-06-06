const apiUrl = `https://todoo.5xcamp.us`;
// let token = "";

// function signUp(email, nickname, pwd) {
//   axios
//     .post(`${apiUrl}/users`, {
//       user: {
//         email: email,
//         nickname: nickname,
//         password: pwd,
//       },
//     })
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error.response));
// }

// function login(email, pwd) {
//   axios
//     .post(`${apiUrl}/users/sign_in`, {
//       user: {
//         email: email,
//         password: pwd,
//       },
//     })
//     .then((res) => {
//       console.log(res);
//       token = res.headers.authorization;
//     })
//     .catch((error) => console.log(error.response));
// }

// function getTodo() {
//   axios
//     .get(`${apiUrl}/todos`, {
//       headers: {
//         Authorization: token,
//       },
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => console.log(error.response));
// }

// function addTodo(todo) {
//   axios
//     .post(
//       `${apiUrl}/todos`,
//       {
//         todo: {
//           content: todo,
//         },
//       },
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     )
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => console.log(error.response));
// }

// function updateTodo(todo, todoId) {
//   axios
//     .put(
//       `${apiUrl}/todos/${todoId}`,
//       {
//         todo: {
//           content: todo,
//         },
//       },
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     )
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => console.log(error.response));
// }

// function deleteTodo(todoId) {
//   axios
//     .delete(`${apiUrl}/todos/${todoId}`, {
//       headers: {
//         Authorization: token,
//       },
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => console.log(error.response));
// }

// function toggleTodo(todoId) {
//   axios
//     .patch(
//       `${apiUrl}/todos/${todoId}/toggle`,
//       {},
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     )
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => console.log(error.response));
// }

//以下為精簡token帶入的方法，使用axios的"axios.defaults.headers.common['Authorization']"

function signUp(email, nickname, pwd) {
  axios
    .post(`${apiUrl}/users`, {
      user: {
        email: email,
        nickname: nickname,
        password: pwd,
      },
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error.response));
}

function login(email, pwd) {
  axios
    .post(`${apiUrl}/users/sign_in`, {
      user: {
        email: email,
        password: pwd,
      },
    })
    .then((res) => {
      console.log(res);
      axios.defaults.headers.common["Authorization"] =
        res.headers.authorization;
    })
    .catch((error) => console.log(error.response));
}

function getTodo() {
  axios
    .get(`${apiUrl}/todos`, {})
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error.response));
}

function addTodo(todo) {
  axios
    .post(`${apiUrl}/todos`, {
      todo: {
        content: todo,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error.response));
}

function updateTodo(todo, todoId) {
  axios
    .put(`${apiUrl}/todos/${todoId}`, {
      todo: {
        content: todo,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error.response));
}

function deleteTodo(todoId) {
  axios
    .delete(`${apiUrl}/todos/${todoId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error.response));
}

function toggleTodo(todoId) {
  axios
    .patch(`${apiUrl}/todos/${todoId}/toggle`, {})
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error.response));
}

// console.log(email.value, nickname.value, password.value);
let email = document.getElementById("email");
let nickname = document.getElementById("nickname");
let password = document.getElementById("password");

let signUpBtn = document.querySelector(".signUp");
let loginBtn = document.querySelector(".login");
let getTodoBtn = document.querySelector(".getTodo");
let addTodoBtn = document.querySelector(".addTodo");

function signUpSubmit(value) {
  let emailStr = "";
  let nicknameStr = "";
  let passwordStr = "";
  emailStr = email.value;
  nicknameStr = nickname.value;
  passwordStr = password.value;
  signUp(emailStr, nicknameStr, passwordStr);
  alert("SUBMIT SUCCESS!!!!");
}

signUpBtn.addEventListener("click", signUpSubmit);
