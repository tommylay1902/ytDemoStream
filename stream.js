const passcode = "1234";
function verifyPasscode() {
  const p = document.getElementById("passcode").value;
  if (p === passcode) {
    window.location.href = "http://127.0.0.1:5500/hidden.html";
  } else {
    alert("wrong!");
  }
}
