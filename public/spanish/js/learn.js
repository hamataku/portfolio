let storage = localStorage;
let qType = [];
let qid = "1";
let correct = 0;
let labels = [];
let verbs = [];
let question, qNumber, subject, answer;
let count = 0;
let ans = "";

//初期化処理
(function () {
  // 設定読み出し
  for (let i = 0; i < 6; i++) {
    if (storage.getItem("q" + i) == "true") {
      qType[count] = i;
      count++;
    }
  }
  qid = storage.getItem("qid");
  if (qid == null) {
    qid = "1";
    storage.setItem("qid", "1");
  }
  // labelの格納
  for (let i = 0; i < 4; i++) {
    labels[i] = document.getElementById("q" + String(i));
  }
  // 問題番号、問題,主語の格納
  qNumber = document.getElementById("qid");
  question = document.getElementById("question");
  subject = document.getElementById("subject");
  answer = document.getElementById("answer");
  verbs = getCSV();
  drawQuestion();
})();

function getCSV() {
  let csvData = [];
  let data = new XMLHttpRequest();
  data.open("GET", "static/verbs.csv", false); //true:非同期,false:同期
  data.send(null);

  let LF = String.fromCharCode(10); //改行ｺｰﾄﾞ
  let lines = data.responseText.split(LF);
  for (let i = 0; i < lines.length; i++) {
    var cells = lines[i].split(",");
    if (cells.length !== 1) {
      cells.pop();
      csvData.push(cells);
    }
  }
  return csvData;
}

function buttonClick(value) {
  qid++;
  storage.setItem("qid", qid);

  drawQuestion();
}

function drawQuestion() {
  qNumber.innerText = qid;
  let randsub = Math.floor(Math.random() * 6);
  let randnum = Math.floor(Math.random() * verbs.length);

  questionText(randsub, randnum);
}

function questionText(randsub, randnum) {
  //どの時制から出題するか決める
  let qnum = qType[Math.floor(Math.random() * count)];
  let jExp = [
    "1人称単数",
    "2人称単数",
    "3人称単数",
    "1人称複数",
    "2人称複数",
    "3人称複数",
  ];
  let subjects = [
    "Yo",
    "Tú",
    "Él/Ella\nUsted",
    "Nosotros/\nNosotras",
    "Vosotros/\nVosotras",
    "Ellos/Ellas\nUstedes",
  ];
  let qText, sText, skip;
  switch (qnum) {
    case 0: //現在形
      qText = verbs[randnum][0] + "の現在形、" + jExp[randsub] + "は？";
      sText = subjects[randsub];
      skip = 2;
      break;
    case 1: //現在分詞
      qText = verbs[randnum][0] + "の現在分詞は？";
      sText = "現在分詞";
      randsub = 0;
      skip = 8;
      break;
    case 2: //過去分詞
      qText = verbs[randnum][0] + "の過去分詞は？";
      sText = "過去分詞";
      randsub = 0;
      skip = 9;
      break;
    case 3: //点過去
      qText = verbs[randnum][0] + "の点過去形、" + jExp[randsub] + "は？";
      sText = subjects[randsub];
      skip = 10;
      break;
    case 4: //線過去
      qText = verbs[randnum][0] + "の線過去形、" + jExp[randsub] + "は？";
      sText = subjects[randsub];
      skip = 16;
      break;
    default:
      //未来形
      qText = verbs[randnum][0] + "の未来形、" + jExp[randsub] + "は？";
      sText = subjects[randsub];
      skip = 22;
      break;
  }
  question.innerText = qText;
  subject.innerText = sText;

  //選択肢の作成
  ans = verbs[randnum][randsub + skip];
  answer.innerText = ans;

  let ansPosition = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++) {
    if (i == ansPosition) {
      labels[i].innerText = ans;
    } else if (i == 0) {
      let flag = "true";
      while (flag == "true") {
        let verbChoice =
          verbs[randnum][Math.floor(Math.random() * (verbs[0].length - 2)) + 2];
        if (verbChoice != ans) {
          labels[i].innerText = verbChoice;
          flag = "false";
        }
      }
    } else {
      let flag = "true";
      while (flag == "true") {
        let verbChoice =
          verbs[randnum][Math.floor(Math.random() * (verbs[0].length - 2)) + 2];
        for (let j = 0; j < i; j++) {
          if (verbChoice != ans) {
            if (verbChoice != labels[j].innerText) {
              labels[i].innerText = verbChoice;
              flag = "false";
            }
          }
        }
      }
    }
  }
}
