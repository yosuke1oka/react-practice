import { type NextRequest } from "next/server"
import { sql } from "@vercel/postgres";

// localhost:3000/api/salinity にPOSTリクエストが来たとき
export async function POST(request: NextRequest) {
  // リクエストのボディをJSONとして取得
  const body = await request.json();
  // 現在時刻を文字列で取得
  const now = new Date().toISOString();

  try {
    // SQLを実行してデータベースにデータを挿入
    await sql`INSERT INTO salinities (sensor_val, recorded_at, ikesu_id) VALUES (${body.sensor_val}, ${now}, ${body.ikesu_id});`;

    return new Response('ok', {
      status: 200,
    });

  } catch (e) {
    return new Response('bad request', {
      status: 400,
    });
  }
}
