"use client";

import { ChangeEvent, useState } from "react";

export default function Register() {
  const [salinity, setSalinity] = useState(3.5);

  // 塩分濃度の入力値が変更されたとき
  function handleChangeSalinity(e: ChangeEvent<HTMLInputElement>) {
    setSalinity(Number(e.target.value));
  }

  // 登録ボタンがクリックされたとき
  function handleClickRegister() {
    fetch("/api/salinity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // センサー値に入力された塩分濃度を設定
        sensor_val: salinity,
        // いけす1のIDを設定
        ikesu_id: 1,
      }),
    });
  }

  return (
    <div className="p-5 mt-10 w-full border-4 border-gray-200 rounded-xl">
      <h2 className="font-bold">
        いけす1の塩分濃度を手動入力
      </h2>

      <input
        type="number"
        value={salinity}
        onChange={handleChangeSalinity}
        className="px-5 py-1 bg-gray-300 rounded-xl"
      />

      <button
        onClick={handleClickRegister}
        className="px-2 py-1 ml-10 text-white bg-blue-500 rounded-xl"
      >
        登録
      </button>
    </div>
  )
}
