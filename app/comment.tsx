"use client";

import { useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState("");

  // ひとことを取得するボタンを押したとき
  async function handleClick() {
    // localhost:3000/api/comment にGET
    const res = await fetch("/api/comment", {
      method: "GET"
    });
    // サーバーから返ってきたJSONを取得
    const json = await res.json();
    // ひとことをセット
    setComment(json.comment);
  }

  // ひとことが空の場合、取得ボタンを表示
  if (comment === "") {
    return (
      <button
        className="mt-10 px-10 py-2 text-white bg-blue-500 rounded-xl"
        onClick={handleClick}
      >
        今日のひとことを取得する
      </button>
    );
  }

  // ひとことがある場合、表示
  return (
    <div className="mt-10 p-3 w-full border-4 border-gray-200 rounded-xl">
      今日のひとこと：{comment}
    </div>
  );
}
