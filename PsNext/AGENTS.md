# PsNext - Agents & Context Guide

## 🚀 Project Vision
`PsNext` (Pseudocode Next) is a modern, high-performance pseudocode interpreter designed for the next generation of students. It evolves the classic PSeInt experience into a web-first, visual, and highly interactive environment.

## 🛠 Tech Stack
- **Framework:** .NET 10.0 (LTS) - Blazor WebAssembly (Standalone).
- **Runtime:** Browser-WASM (No Server-side dependency).
- **IDE:** JetBrains Rider (macOS / Apple Silicon optimized).
- **Key Patterns:** AST-based Interpreter, Span-based Lexing, Reactive UI.

## 📂 Project Structure & Architecture
- `PsNext/`: Root of the Blazor project.
    - `Program.cs`: Dependency injection and WASM startup.
    - `Pages/`: Main route components (Editor, Dashboard, Settings).
    - `Layout/`: App shell (`MainLayout.razor`) and Navigation.
    - `Core/`: (TO BE CREATED) The heart of the interpreter.
        - `Lexer/`: Tokenization logic using `ReadOnlySpan<char>` for performance.
        - `Parser/`: AST construction from tokens.
        - `Evaluator/`: Interpreter logic and state management.
    - `wwwroot/`: Static assets and JS Interop (Monaco Editor).

## 🧩 Development Conventions
- **Performance:** Use `Span<T>` and `Memory<T>` where possible to minimize allocations during code parsing.
- **Async Execution:** The Interpreter must run in a way that doesn't block the Blazor UI thread (consider `Task.Yield()` or worker patterns).
- **UI/UX:** Focus on "Mobile-First" (iPad/DeX support). Clean, dark-mode aesthetic (NeXT/Jobs inspired).
- **Naming:** Follow standard C# PascalCase for methods/classes. Pseudocode keywords should be configurable (Spanish-first).

## 🤖 Agent Instructions (GitHub Copilot / AI Assistant)
1. **Context Awareness:** This is a standalone WASM app. Do not suggest `Microsoft.AspNetCore.Mvc` or server-side SQL Server integrations unless via Web API.
2. **Component Pattern:** When creating new components, use CSS isolation (`.razor.css`) and keep logic in the `@code` block or partial classes.
3. **Interpreter Design:** When assisting with the `Core` logic, prioritize clear error messages for students. If the user writes bad pseudocode, the `Parser` should return human-readable diagnostic errors.
4. **JS Interop:** All Monaco Editor interactions should reside in `wwwroot/js/editorInterop.js` and be called via `IJSRuntime`.

## 📍 Current Status & Roadmap
- [x] Initial Blazor WASM (.NET 10) project structure.
- [ ] Integration of Monaco Editor.
- [ ] Foundation of `PsNext.Core` (Lexer & Token types).
- [ ] Implementation of `OutputConsole.razor`.
- [ ] Visual Variable Watcher (State visualization).

---
**Author:** Armando Andres Meabe
**License:** MIT
**Location:** Santa Fe, Argentina 🇦🇷