# PsNext 🚀
> **Pseudocode Next** | La evolución del pseudocódigo para la próxima generación.

<p align="center">
  <img src="logo.png" alt="PsNext Logo" width="250">
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![.NET 10](https://img.shields.io/badge/.NET-10.0_LTS-512bd4.svg)
![Blazor WASM](https://img.shields.io/badge/UI-Blazor_WASM-512bd4.svg)

**PsNext** es un intérprete de pseudocódigo moderno, diseñado desde cero para estudiantes de programación. Inspirado por la simplicidad de PSeInt pero construido con tecnologías de 2026, ofrece una experiencia web fluida, visual y multiplataforma.

---

## ✨ ¿Por qué PsNext?

PSeInt cumplió una misión histórica, pero las nuevas generaciones necesitan herramientas que se sientan como el software que usan a diario. **PsNext** nace para llenar ese vacío:

-   **Web-First:** Sin instaladores. Funciona en el navegador, iPad, tablets y modo DeX.
-   **Editor Profesional:** Basado en **Monaco Editor** (el motor de VS Code).
-   **Visualización en Vivo:** Observá cómo cambian tus variables en tiempo real mientras el código se ejecuta.
-   **Performance Senior:** Motor de interpretación construido en **.NET 10 (LTS)** con un Lexer de alto rendimiento.
-   **Estética NeXT:** Un diseño minimalista y oscuro inspirado en el legado de Steve Jobs.

## 🛠 Arquitectura Técnica

PsNext no es solo una cara bonita; por debajo corre una arquitectura pensada por y para desarrolladores Senior:

-   **Frontend:** Blazor WebAssembly (Standalone).
-   **Motor Core:** Lexer basado en `ReadOnlySpan<char>` para reducir asignaciones de memoria.
-   **Interpretación:** Parser de descenso recursivo que genera un AST (Abstract Syntax Tree) ejecutable.
-   **Offline Ready:** Funcionamiento offline garantizado mediante capacidades de PWA.

## 🚀 Instalación y Desarrollo (Local)

Si querés colaborar o probar PsNext en tu máquina:

1. **Requisitos:**
   - [.NET 10 SDK](https://dotnet.microsoft.com/download)
   - JetBrains Rider (Recomendado) o VS Code.

2. **Clonar y Correr:**
   ```bash
   git clone [https://github.com/tu-usuario/PsNext.git](https://github.com/tu-usuario/PsNext.git)
   cd PsNext
   dotnet watch run --project PsNext
   ```

3. **Abrir:** Navegá a `https://localhost:7047`

## 🗺 Hoja de Ruta (Roadmap)

- [ ] **Fase 1:** Integración de Monaco Editor y resaltado de sintaxis.
- [ ] **Fase 2:** Implementación del Lexer y Parser base (variables, condicionales, bucles).
- [ ] **Fase 3:** Consola de salida interactiva y depurador paso a paso.
- [ ] **Fase 4:** Exportación de pseudocódigo a código real (C#, Python, JavaScript).

## 🤝 Contribuir

¡Las pull requests son bienvenidas! Como proyecto de código abierto, PsNext busca ser una herramienta comunitaria. Si sos de Santa Fe y querés invitar un liso para discutir el código, ¡mucho mejor! 🍻

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que podés usarlo, modificarlo y distribuirlo libremente.

Hecho con ❤️ en **Santa Fe, Argentina**.

*“Stay hungry, stay foolish.”*
