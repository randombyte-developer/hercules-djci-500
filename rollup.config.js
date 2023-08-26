import rollupPluginTypeScript from "rollup-plugin-typescript2";

export default {
  input: "./src/hercules-djci500.ts",
  output: {
    file: "./dist/hercules-djci500.js",
    format: "iife",
    name: "HerculesDjci500",
  },
  plugins: [
    rollupPluginTypeScript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
  ],
};
