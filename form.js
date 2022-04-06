function chgDisplay() {
  let x = document.getElementById("sForm").style.display;
  if (x === "none")
  {
    console.log("Inside function");
    document.getElementById("logForm").style.display = "none";
    document.getElementById("sForm").style.display = "block";
    document.getElementById("btn").innerHTML = "Return to registration";
  }
  else {
      document.getElementById("sForm").style.display = "none";
      document.getElementById("logForm").style.display = "block";
      document.getElementById("btn").innerHTML = "Already registered?";

}

}
function getInput() {
  const username = document.getElementById("Uname").value;
  const pass = document.getElementById("passW").value;
  const mail = document.getElementById("eMail").value;
  console.log(username, pass, mail);
}
