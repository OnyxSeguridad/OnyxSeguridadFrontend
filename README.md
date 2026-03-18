# 🛡️ ONYX Seguridad — Sitio Web Oficial

<p align="center">
  <strong>ONYX Seguridad Privada y Estratégica S.A. de C.V.</strong><br/>
  <em>Registro SSP/SUBCOP/DGSP/033-25/530 · Puebla, México</em>
</p>

---

## 📋 Descripción

Sitio web oficial de **ONYX Seguridad Privada y Estratégica**, diseñado como una plataforma de visibilidad digital y generación de contactos. Desarrollado con tecnologías de última generación, ofrece una experiencia premium con un diseño **negro y dorado** que refleja la identidad corporativa de la empresa.

El sitio presenta todos los servicios de seguridad de ONYX, su tecnología, capacitación, certificaciones y datos de contacto, con un flujo de usuario optimizado para la conversión vía **WhatsApp**.

## 🚀 Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 16 | Framework React, SSR/SSG, SEO-friendly |
| **React** | 19 | Componentes modernos con hooks |
| **TypeScript** | 5+ | Tipado estático, robustez y mantenimiento |
| **Tailwind CSS** | 4 | Diseño responsive y limpio |
| **Framer Motion** | — | Animaciones fluidas scroll-triggered |
| **react-icons** | — | Biblioteca de iconos (Font Awesome, Game Icons) |

## 🏗️ Arquitectura

Sitio **single-page scroll** con 7 secciones principales:

```
📄 page.tsx
 ├── 🧭 Navbar (sticky, scroll-aware, hamburger móvil)
 ├── 🏠 Hero (banner, stats, CTAs)
 ├── 📋 Nuestros Servicios (8 tarjetas interactivas)
 ├── 👤 Vigilante de Seguridad (uniforme + equipamiento)
 ├── 🎓 Capacitación y Turnos (4 capacidades + 4 turnos)
 ├── ✅ Reclutamiento y Selección (ISO 9001, CUIP, requisitos)
 ├── 📘 Manual Operativo y Protocolos (3 pilares + supervisiones)
 ├── 💡 Tecnología + Experiencias (6 techs + 9 clientes + sectores)
 ├── 📞 Contacto (formulario → WhatsApp + datos completos)
 └── 💬 WhatsApp Float (botón flotante permanente)
```

## 📁 Estructura del Proyecto

```
onyxseguridad/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServiciosSection.tsx
│   │   ├── VigilanteSection.tsx
│   │   ├── CapacitacionSection.tsx
│   │   ├── ReclutamientoSection.tsx
│   │   ├── ProtocolosSection.tsx
│   │   ├── TecnologiaSection.tsx
│   │   └── ContactoSection.tsx
│   ├── globals.css          # Design system (paleta negro-dorado)
│   ├── layout.tsx           # SEO metadata + fuente Outfit
│   └── page.tsx             # Composición de todas las secciones
├── public/
│   └── images/
│       ├── hero-banner.png  # Centro de monitoreo
│       ├── vigilante.png    # Guardia con uniforme
│       └── tecnologia.png   # Dashboard de geolocalización
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## ⚡ Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/OnyxSeguridad/OnyxSeguridadFrontend.git
cd OnyxSeguridadFrontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

El servidor de desarrollo ejecuta en `http://localhost:3000`.

## 🎨 Diseño

- **Paleta**: Negro (`#0a0a0a`) y Dorado (`#c8a84e`) — transmite autoridad, confianza y profesionalismo
- **Tipografía**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
- **Animaciones**: Entrada por scroll con Framer Motion
- **Efectos**: Glassmorphism, gradientes dorados, hover interactivos
- **Responsive**: Mobile-first, optimizado para todos los dispositivos

## 📱 Flujo de Usuario

```
Usuario llega → Hero (banner + CTA WhatsApp)
    ↓
Navega por menú (scroll suave entre secciones)
    ↓
Cada sección tiene botones "Más información por WhatsApp"
    ↓
Formulario de contacto → envía directo a WhatsApp
    ↓
Botón flotante WhatsApp siempre visible
```

## 🔍 SEO

- Meta tags optimizados (título, descripción, keywords)
- OpenGraph tags para redes sociales
- Estructura semántica HTML5
- `lang="es"` configurado
- Prerendered como contenido estático
- Optimización Core Web Vitals

## 📞 Contacto ONYX

- **Oficina**: 222 503 3916
- **WhatsApp**: 221 147 6154
- **Correo**: contacto@onyxseguridad.com / enlace@onyxseguridad.com
- **Web**: [onyxseguridad.com](https://www.onyxseguridad.com)

## 📄 Licencia

Propiedad de **ONYX Seguridad Privada y Estratégica S.A. de C.V.** Todos los derechos reservados.

---

<p align="center">
  Desarrollado con ❤️ por <strong>Juan Angel Colorado Pacheco</strong>
</p>
