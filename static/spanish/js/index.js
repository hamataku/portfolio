//global
let storage = localStorage;
let inputs = [];

//初期化処理
(function () {
  // ボタンの設定読み出し
  for (let i = 0; i < 6; i++) {
    inputs[i] = document.getElementById(String(i));
    let value = storage.getItem("q" + i);
    if (value != null) {
      inputs[i].checked = !toBoolean(value);
    }
  }
  console.log("Hell");
  storage.setItem("qid", "1");
  storage.setItem("correct", "0");
})();

function toBoolean(data) {
  return data.toLowerCase() === "true";
}

function learnMode() {
  for (let i = 0; i < 6; i++) {
    storage.setItem("q" + i, String(!inputs[i].checked));
  }
  window.location.href = "./learn.html";
}

function testMode() {
  for (let i = 0; i < 6; i++) {
    storage.setItem("q" + i, String(!inputs[i].checked));
  }
  window.location.href = "./test.html";
}
