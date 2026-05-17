import { networkInterfaces } from "node:os";
import { defineConfig } from "@apps-in-toss/web-framework/config";

/** Mac LAN IP — 샌드박스/실기기 WebView는 localhost 대신 이 주소로 Vite에 접속합니다. */
function getLanIPv4(): string {
  const prefer = ["en0", "en1"];
  for (const name of prefer) {
    const addr = networkInterfaces()[name]?.find(
      (n) => n.family === "IPv4" || n.family === 4,
    )?.address;
    if (addr && !addr.startsWith("169.254.")) return addr;
  }
  for (const nets of Object.values(networkInterfaces())) {
    const addr = nets?.find(
      (n) => (n.family === "IPv4" || n.family === 4) && !n.internal,
    )?.address;
    if (addr && !addr.startsWith("169.254.")) return addr;
  }
  return "localhost";
}

export default defineConfig({
  appName: "happycat",
  brand: {
    displayName: "행복하다냥",
    primaryColor: "#FFD1DC",
    icon: "",
  },
  web: {
    // granite dev는 시작 시점의 host를 RN 번들에 박아 둡니다. IP가 바뀌면 granite dev를 재시작하세요.
    host: getLanIPv4(),
    port: 5173,
    commands: {
      dev: "vite --host",
      build: "tsc -b && vite build",
    },
  },
  permissions: [],
  outdir: "dist",
});
