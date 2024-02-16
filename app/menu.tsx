import Link from 'next/link';

export default function Menu() {
  return (
    // 横並びのメニュー
    // 画面下に固定
    <ul className="
      w-full h-16 bg-cyan-100
      flex flex-row items-center justify-evenly
      fixed bottom-0 z-10
    ">
      <li>
        <Link href="/">
          ホーム
        </Link>
      </li>

      <li>
        <Link href="/diary">
          日記
        </Link>
      </li>
      <li>
  <Link href="/janken">
    じゃんけん
  </Link>
</li>
    </ul>
  );
};
