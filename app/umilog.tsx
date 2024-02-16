// うみログAPIのトークン(APIを利用するためのパスワード)を取得
async function fetchToken() {
    const res = await fetch(
      "https://umilog.cloud/web/api/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": process.env.NEXT_PUBLIC_UMILOG_USERNAME!,
          "password": process.env.NEXT_PUBLIC_UMILOG_PASSWORD!
        })
      }
    );
  
    return (await res.json())["token"];
  }
  
  // 答志に設置してあるデバイスから、12日～14日の表層の水温を取得
  async function fetchTemperature() {
    // トークン (APIを利用するためのパスワード)
    const token = await fetchToken();
  
    // デバイスID (答志に設置してあるデバイスのIDを指定)
    const deviceId = 3053;
  
    // データの開始時刻 (世界標準時)
    // 範囲を広げ過ぎると、データ取得に時間がかかるので注意
    const sinceTime = "2024-02-12 09:00";
    const untilTime = "2024-02-14 09:00";
  
    const res = await fetch(
      `https://umilog.cloud/web/api/sensor_logs?device_id=${deviceId}&sensor_grp=water&sensor_key=top&arrived_at[EQGREAT]=${sinceTime}&arrived_at[EQSMALL]=${untilTime}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
  
    // @ts-ignore
    return (await res.json())["json"];
  }
  
  export default async function Umilog() {
    // 2日分の表層の水温を取得
    const temperatures = await fetchTemperature();
  
    return (
      <>
        {/* 最新の水温 */}
        {temperatures[temperatures.length - 1]["sensor_val"]}℃
      </>
    );
  }
  