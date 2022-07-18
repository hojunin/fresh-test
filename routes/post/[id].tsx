/** @jsx h */
import { h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { POST } from '../../types/posts.ts';
import Layout from '../../components/Layout/index.tsx';

export const handler: Handlers<POST | null> = {
    async GET(_, ctx) {
        const { id } = ctx.params;
        const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (resp.status === 404) {
            return ctx.render(null);
        }
        const post: POST = await resp.json();
        return ctx.render(post);
    },
};

export default function Post(props: PageProps) {
    const { data } = props;

    const { title } = data;

    return <Layout>Hello {title}</Layout>;
}
