const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbtn = document.getElementById("qr-button");

console.log(qrinput, qrimg, qrbtn);

qrbtn.addEventListener("click", () => {
  const inputValue = qrinput.value;
  console.log(inputValue);
  if (!inputValue) {
    alert("please enter the valid url ");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.alt = `Qr code for that ${inputValue}`;
  }
});
