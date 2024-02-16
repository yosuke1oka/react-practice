"use client";

import { useState } from "react";

export default function Page() {
// 相手のじゃんけんの手
//   値を参照するときは、 hand 変数を使う
//   値を変更するときは、 setHand 関数を使う
const [hand, setHand] = useState("未選択");

// グーのボタンを押したとき
function handleClickRock() {
  setHand("チョキ");
}

// チョキのボタンを押したとき
function handleClickScissor() {
  setHand("パー");
}

// パーのボタンを押したとき
function handleClickPaper() {
  setHand("グー");

  return (
    // 中央揃えで表示
    <div className="p-5 pb-32 flex flex-col items-center">
      <h1 className="mb-10 text-cyan-600 text-3xl font-bold">
        じゃんけん
      </h1>

      <p className="mb-10">
        運試し！？じゃんけんに挑戦しよう
      </p>
      <h2 className="mb-5 font-bold">
        なんの手を出す？
      </h2>
      

      <div className="flex flex-row gap-5">
  <button
    className="w-20 h-20 bg-gray-200 rounded-full"
    onClick={handleClickRock}
  >
    グー
  </button>

  <button
    className="w-20 h-20 bg-gray-200 rounded-full"
    onClick={handleClickScissor}
  >
    チョキ
  </button>

  <button
    className="w-20 h-20 bg-gray-200 rounded-full"
    onClick={handleClickPaper}
  >
    パー
  </button>
</div>


{hand !== "未選択" ? (
  // 条件を満たしているとき
  <div className="mt-10 text-xl text-blue-600">
    相手は{hand}を出しました！
  </div>
) : (
  // 条件を満たしていないとき
  <div className="mt-10 text-xl text-gray-500">
    相手は待っているよ！
  </div>
)}

    </div>
  );
}
}