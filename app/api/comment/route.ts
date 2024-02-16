import { type NextRequest } from "next/server"

// localhost:3000/api/comment にGETリクエストが来たとき
export async function GET(request: NextRequest) {
  // クライアントに返すJSON
  return Response.json({
    comment: "今日は金曜日です！2月もあと半分ですね。"
  });
}