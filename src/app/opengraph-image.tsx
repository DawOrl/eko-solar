import { ImageResponse } from "next/og";

export const alt = "EkoSolar — rachunki za prąd niższe nawet o 90%";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#faf5e9",
          color: "#16291a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#ffc93c",
              border: "4px solid #16291a",
            }}
          />
          <div style={{ fontSize: 44, fontWeight: 800 }}>EkoSolar</div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Rachunki za prąd</span>
          <span style={{ display: "flex" }}>
            niższe{" "}
            <span style={{ background: "#ffc93c", padding: "0 12px" }}>
              nawet o 90%
            </span>
          </span>
        </div>
        <div style={{ marginTop: 40, fontSize: 32, color: "#16291aB3" }}>
          Fotowoltaika i pompy ciepła · Kraków i Małopolska · Wycena w 24 h
        </div>
      </div>
    ),
    size,
  );
}
