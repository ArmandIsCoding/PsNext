window.editorInterop = {
    instance: null,

    init: function (elementId, initialValue) {
        const createEditor = () => {
            const container = document.getElementById(elementId);
            if (!container) {
                return;
            }

            if (window.editorInterop.instance) {
                window.editorInterop.instance.dispose();
            }

            window.editorInterop.instance = monaco.editor.create(container, {
                value: initialValue || "",
                language: "plaintext",
                theme: "vs-dark",
                automaticLayout: true,
                minimap: { enabled: false }
            });
        };

        if (typeof window.require === "undefined") {
            console.error("Monaco loader no esta disponible.");
            return;
        }

        window.require.config({
            paths: {
                vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
            }
        });

        window.require(["vs/editor/editor.main"], createEditor);
    },

    getValue: function () {
        if (!window.editorInterop.instance) {
            return "";
        }

        return window.editorInterop.instance.getValue();
    },

    dispose: function () {
        if (!window.editorInterop.instance) {
            return;
        }

        window.editorInterop.instance.dispose();
        window.editorInterop.instance = null;
    }
};

