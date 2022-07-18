/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

const Footer = () => {
    return (
        <div
            className={tw`
        w-full bg-gray-700 p-5 flex-row flex
    `}
        >
            <h1>여긴 푸터입니다. </h1>
        </div>
    );
};

export default Footer;
