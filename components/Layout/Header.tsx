/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import DarkMode from "../../islands/DarkMode.tsx";

const Header = () => {
  return (
    <div
      className={tw`
        w-full bg-red-300 fixed p-5 flex-row flex justify-between
    `}
    >
      <h1>호준이의 기술블로그</h1>
      <DarkMode />
    </div>
  );
};

export default Header;
