import Note from "./note";

export default function Page() {
  return (
    // 中央揃えで表示
    <div className="p-5 flex flex-col items-center">
      <h1 className="mb-10 text-cyan-600 text-3xl font-bold">
        日記
      </h1>

      <p className="mb-10">
        一日の記録を書きましょう
      </p>

      <div className="w-full">
        <Note
          title="今日はバレンタイン"
          year={2024}
          month={2}
          day={14}
          content="気になるあの子からチョコ貰えなかった... 残念..."
        />

        <Note
          title="チョコをもらう予行練習をした"
          year={2024}
          month={2}
          day={13}
          content="明日はきっとあの子からチョコを貰えるはず！かっこよく貰うために練習したよ！"
        />

        <Note
          title="ハッカソンのアイデア出しをした"
          year={2024}
          month={2}
          day={12}
          content="ハッカソンに出ることになった！アイデアを出し合って、みんなで楽しめるものにしよう！"
        />
      </div>
    </div>
  );
}
