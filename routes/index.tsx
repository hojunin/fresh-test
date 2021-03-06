/** @jsx h */
import { h } from 'preact';
import Layout from '../components/Layout/index.tsx';
import { tw } from '@twind';
import { css, theme } from 'twind/css';
import PostCards from '../components/Post/PostCards.tsx';

const globalStyles = css({
    ':global': {
        h3: {
            color: theme('colors.light.text'),
            textDecoration: 'underline',
        },
    },
});

export default function Home() {
    return (
        <div className={tw(globalStyles)}>
            <Layout>
                <PostCards posts={dummyPost} />
            </Layout>
        </div>
    );
}

const dummyPost = [
    {
        id: 1,
        title: '나는 포스트다',
        description: ' 나는 설명글이다',
        thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5muH6piXfKA2yUyMkJwm0mJq6O4lU-1mFA&usqp=CAU',
    },

    {
        id: 2,
        title: '나는 포스트다',
        description: ' 나는 설명글이다',
        thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5muH6piXfKA2yUyMkJwm0mJq6O4lU-1mFA&usqp=CAU',
    },
    {
        id: 3,
        title: '나는 포스트다',
        description: ' 나는 설명글이다',
        thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5muH6piXfKA2yUyMkJwm0mJq6O4lU-1mFA&usqp=CAU',
    },
];
