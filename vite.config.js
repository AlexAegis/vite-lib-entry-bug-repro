import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.js"],
      formats: ["es"],
    },
  },
  plugins: [
    {
      config: (_config) => {
        // _config.build.lib.entry = {}; // Mutating the config object fixes it but is this something we can rely on?
        return {
          build: {
            lib: { entry: { named: "src/index.js" } },
          },
        };
      },
    },
  ],
});
