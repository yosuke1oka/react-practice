"use client";

import { useCallback, useState, memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function Map() {
  // 初期設定
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    language: "ja"
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  // 読み込まれたときの処理
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  // ページから離れるときの処理
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Google Maps がロードされていない場合は、何も表示しない
  if (!isLoaded) {
    return <></>
  };

  // Google Maps がロードされた場合は、地図を表示する
  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%"
      }}
      center={{
        lat: 34.482266,
        lng: 136.824832
      }}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        // roadmap: 道路地図、satellite: 航空写真、hybrid: 航空写真と道路地図、terrain: 地形図
        mapTypeId: "roadmap"
      }}
    >
      <Marker
        position={{
          lat: 34.482531,
          lng: 136.825251
        }}
        label="1号館"
      />

      <Marker
        position={{
          lat: 34.482266,
          lng: 136.824832
        }}
        label="2号館"
      />

      <Marker
        position={{
          lat: 34.482801,
          lng: 136.825492
        }}
        label="3号館"
      />

      <Marker
        position={{
          lat: 34.482549,
          lng: 136.824661
        }}
        label="4号館"
      />
       <Marker
        position={{
          lat: 34.482549,
          lng: 150.824661
        }}
        label="5号館"
      />
    </GoogleMap>
  );
}

// おまじない
export default memo(Map);
