import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup, apply, tw } from "twind";
import * as colors from "twind/colors";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  preflight: {
    body: apply`bg-gray-100 dark:bg-gray-800 dark:text-white`,
    h1: apply`text-gray-600`,
    h2: apply`text-blue-600`,
    "@font-face": [
      {
        fontFamily: "SpoqaHanSans",
        src: 'url(./src/static/fonts/SpoqaHanSansNeo-Medium.woff2) format("woff2")',
      },
    ],
  },
  theme: {
    fontFamily: {
      spoqa: ["SpoqaHanSans"],
    },
    extend: {
      // 뭐 어떻게쓰는거야
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      colors: {
        ...colors,
        light: {
          background: colors.white,
          text: colors.black,
        },
        black: {
          background: "#0038ff",
          text: colors.white,
        },
      },
    },
  },
};
if (IS_BROWSER) setup(config);
