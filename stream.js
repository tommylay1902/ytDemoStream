const passcode = "1234";
function verifyPasscode() {
  const p = document.getElementById("passcode").value;
  if (p === passcode) {
    window.location.href = "https://tommylay1902.github.io/hidden.html";
  } else {
    alert("wrong!");
  }
}
