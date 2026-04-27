import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "ONYX Seguridad Privada y Estratégica - Vigilancia profesional en Puebla, México";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Borde dorado superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "linear-gradient(90deg, #c9a86a 0%, #e8c785 50%, #c9a86a 100%)",
          }}
        />

        {/* Logo / Marca */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #c9a86a 0%, #e8c785 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
              fontWeight: 800,
              color: "#0a0a0a",
              boxShadow: "0 0 40px rgba(201, 168, 106, 0.4)",
            }}
          >
            O
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "84px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              ONYX
            </span>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 500,
                color: "#c9a86a",
                letterSpacing: "8px",
                marginTop: "8px",
              }}
            >
              SEGURIDAD
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: "44px",
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "1000px",
            marginBottom: "24px",
          }}
        >
          Seguridad Privada y Estratégica
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            color: "#a3a3a3",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Vigilantes profesionales · Monitoreo 24/7 · Tecnología de última generación
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            color: "#c9a86a",
            fontWeight: 500,
          }}
        >
          <span>📍 Puebla, México</span>
          <span style={{ color: "#404040" }}>·</span>
          <span>onyxseguridad.com</span>
        </div>

        {/* Borde dorado inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "linear-gradient(90deg, #c9a86a 0%, #e8c785 50%, #c9a86a 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
