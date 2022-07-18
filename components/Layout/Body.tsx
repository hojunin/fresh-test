/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { css, theme } from 'twind/css';

export default function Body({ children }) {
    return <div className={tw`min-h-screen ml-auto mr-auto pt-20 max-w-3xl border-1`}>{children}</div>;
}
