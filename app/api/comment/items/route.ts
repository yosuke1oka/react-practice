import { type NextRequest } from "next/server"

// 商品データ
const items = [
  {
    id: 1,
    name: "りんご",
    price: 100
  },
  {
    id: 2,
    name: "みかん",
    price: 50
  },
  {
    id: 3,
    name: "バナナ",
    price: 80
  }
];

// localhost:3000/api/items?id=* にGETリクエストが来たとき
export async function GET(request: NextRequest) {
  // クエリパラメータを取得
  const searchParams = request.nextUrl.searchParams;
  // idを取得 (値が数値でも文字列型として取得される)
  const idString = searchParams.get("id")!;
  // idを数値型に変換
  const id = parseInt(idString);

  // アイテムの分だけループ
  for (const item of items) {
    // idに対応する商品データがある場合、その商品データを返す
    if (item.id === id) {
      return Response.json(item);
    }
  }

  // idに対応する商品データがない場合、404エラーを返す
  return new Response('this item is not found', {
    status: 404,
  })
}
