const shrines = [
  {
    name: "京都伏見稻荷大社",
    fortunes: [
      {
        type: "大吉",
        jp: "あなたの近い未来には、驚くべき出会いが訪れます。これまでの努力が実を結ぶ時です。",
        zh: "近期會遇到意想不到的好緣分，你一直累積的努力將開始開花結果。"
      },
      {
        type: "中吉",
        jp: "焦らず歩めば、願いは静かに近づきます。",
        zh: "只要不急躁地前進，願望會穩穩地靠近你。"
      }
    ]
  },
  {
    name: "東京淺草寺",
    fortunes: [
      {
        type: "中吉",
        jp: "恋愛運気が高まっています。素直な気持ちで新しい関係を築いてみてください。",
        zh: "感情運正在上升，坦率表達自己，會帶來新的好關係。"
      },
      {
        type: "小吉",
        jp: "言葉を選べば、人との縁が深まります。",
        zh: "說話多一分體貼，人際關係會更順更深。"
      }
    ]
  },
  {
    name: "明治神宮",
    fortunes: [
      {
        type: "大吉",
        jp: "大きなチャンスが訪れます。直感を信じて進むと、良い結果を得られます。",
        zh: "大機會正在靠近你，相信直覺行動，會拿到漂亮成果。"
      },
      {
        type: "中吉",
        jp: "今は準備が福を呼ぶ時。土台を整えるほど運が強まります。",
        zh: "現在是打底的好時機，準備越扎實，運勢越穩。"
      }
    ]
  },
  {
    name: "大阪住吉大社",
    fortunes: [
      {
        type: "小吉",
        jp: "ゆっくりと進むことが最善です。急がずに自分のペースを守ってください。",
        zh: "慢慢走反而最好，照自己的節奏前進就會越走越順。"
      },
      {
        type: "吉",
        jp: "遠回りに見える道こそ、後に最短になります。",
        zh: "看似繞路的選擇，最後往往是最省力的正解。"
      }
    ]
  },
  {
    name: "神田明神",
    fortunes: [
      {
        type: "中吉",
        jp: "チャンスをつかむ準備が整っています。自信を持って一歩を踏み出してください。",
        zh: "你已經準備好了，帶著信心跨出一步，就會看見轉機。"
      },
      {
        type: "大吉",
        jp: "学びと挑戦が財となり、仕事運は大きく開けます。",
        zh: "學習與嘗試都會變成你的資產，事業運將明顯打開。"
      }
    ]
  }
];

const shrineSelect = document.getElementById("shrineSelect");
const drawButton = document.getElementById("drawButton");
const newDrawButton = document.getElementById("newDraw");
const resultEl = document.getElementById("result");

function initShrineSelector() {
  shrines.forEach((shrine) => {
    const option = document.createElement("option");
    option.value = shrine.name;
    option.textContent = shrine.name;
    shrineSelect.appendChild(option);
  });
}

function drawFortune() {
  const selectedShrineName = shrineSelect.value;
  if (!selectedShrineName) {
    alert("請先選擇神社，再抽籤。");
    return;
  }

  const shrine = shrines.find((s) => s.name === selectedShrineName);
  if (!shrine || !Array.isArray(shrine.fortunes) || shrine.fortunes.length === 0) {
    alert("目前此神社尚無可用籤詩，請稍後再試。");
    return;
  }

  const random = Math.floor(Math.random() * shrine.fortunes.length);
  const fortune = shrine.fortunes[random];

  resultEl.classList.remove("hidden");
  resultEl.classList.add("show");

  document.querySelector(".shrine-name").innerText = `⛩️ ${shrine.name}`;
  document.querySelector(".fortune-type").innerText = `御神籤：${fortune.type}`;
  document.querySelector(".fortune-text").innerText = `日文原文：${fortune.jp}`;
  document.querySelector(".fortune-translation").innerText = `中文翻譯：${fortune.zh}`;

  // 抽完就隱藏主按鈕，只留再抽一次
  drawButton.classList.add("hidden");
}

initShrineSelector();
drawButton.addEventListener("click", drawFortune);
newDrawButton.addEventListener("click", drawFortune);
