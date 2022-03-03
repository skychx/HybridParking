import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const plugins = [
  nodeResolve(),
  typescript({
    compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
    outputToFilesystem: true,
  }),
  terser(),
];

export default [
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "dist/perf-monitor.js",
    },
    plugins: plugins,
  },
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      file: "dist/perf-monitor.umd.js",
      name: 'perf_monitor',
      extend: true,
    },
    plugins: plugins,
  },
  {
    input: "src/index.ts",
    output: {
      format: "iife",
      file: "dist/perf-monitor.iife.js",
      name: 'perf_monitor',
      extend: true,
    },
    plugins: plugins,
  },
];
