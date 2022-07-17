/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import useDarkMode from "../utils/hooks/useDarkmode.ts";

export default function DarkMode() {
  const [currentTheme, toggle] = useDarkMode();
  return (
    <div
      onClick={toggle}
      class={tw`cursor-pointer rounded-1/2 bg-blue-600 p-1.5`}
    >
      {currentTheme === "light" ? (
        <img src="/svgs/sun.svg" width={24} height={24} />
      ) : (
        <img src="/svgs/dark.svg" width={24} height={24} />
      )}
    </div>
  );
}
