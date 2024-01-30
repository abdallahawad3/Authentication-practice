let email = document.getElementById("email");
let password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  Register(email.value, password.value)
});

function Register(mail, pass) {
  axios.post("https://reqres.in/api/register", {
    "email": `${mail}`,
    "password": `${pass}`,
  })
    .then((response) => {
      let token = response.data.token;
      window.localStorage.setItem("token", token);
      window.location.assign("main.html")
      console.log(response.data);
    }).catch((error) => {
      alert(error.response.data.error);
    })
}