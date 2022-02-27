import html from "@rollup/plugin-html";
import serve from "rollup-plugin-serve";
import typescript from "@rollup/plugin-typescript";
import livereload from "rollup-plugin-livereload";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const isDev = process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [
    nodeResolve(),
    isDev &&
      html({
        meta: [
          {
            name: "viewport",
            content:
              "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
          },
        ],
      }),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
    }),
    isDev && serve("dist"),
    isDev && livereload(),
    !isDev && terser(),
  ],
};
