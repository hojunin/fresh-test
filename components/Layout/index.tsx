/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { css, theme } from 'twind/css';
import Header from './Header.tsx';
import Body from './Body.tsx';
import Footer from './Footer.tsx';
const globalStyles = css({
    ':global': {
        h3: {
            color: theme('colors.light.text'),
            textDecoration: 'underline',
        },
    },
});
export default function Layout({ children }: { children: Element }) {
    return (
        <div className={tw(globalStyles)}>
            <Header />
            <Body>{children}</Body>
            <Footer />
        </div>
    );
}
