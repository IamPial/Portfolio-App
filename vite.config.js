import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        theme: {
          extends: {
            fontFamily: {
              poppins: ["Poppins", "sans-serif"],
            },
          },
        },
      },
    }),
    react(),
  ],
});
