// login
const loginBtn = document.querySelector(".btn-login");

loginBtn.addEventListener("click", function(e){
  e.preventDefault();
  const errorMsg = document.querySelector(".msg");
  let userId = document.getElementById("userId");
  let userPw = document.getElementById("userPw");

  if(userId.value.trim() == "" || userPw.value.trim() == ""){
    userId.style.borderColor = "#FF5F5D";
    userPw.style.borderColor = "#FF5F5D";

    errorMsg.innerHTML = "<p class='error-msg'>아이디와 비밀번호를 입력하세요.</p>";
    return false;
  }

});