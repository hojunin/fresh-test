/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Layout = ({ children }: { children: Element }) => {
  return (
    <div className={tw`h-screen ml-auto mr-auto pt-20 max-w-3xl border-1`}>
      {children}
    </div>
  );
};

export default Layout;
