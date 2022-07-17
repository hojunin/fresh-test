/** @jsx h */
import { h } from "preact";
import Layout from "../components/Layout/Layout.tsx";
import Header from "../components/Layout/Header.tsx";
import Counter from "../islands/Counter.tsx";
import DarkMode from "../islands/DarkMode.tsx";
import { tw } from "@twind";
import { css, theme } from "twind/css";

const globalStyles = css({
  ":global": {
    h3: {
      color: theme("colors.light.text"),
      textDecoration: "underline",
    },
  },
});

export default function Home() {
  return (
    <div className={tw(globalStyles)}>
      <Header />
      <Layout>
        <h1 className={tw`text-5xl`}>엄</h1>
        <h2>거꾸로해도우영우기러기스윙스</h2>
        <h3>거꾸로해도우영우기러기스윙스</h3>
      </Layout>
    </div>
  );
}
