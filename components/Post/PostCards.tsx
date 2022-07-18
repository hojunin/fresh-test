/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { isPosts, POST } from '../../types/posts.ts';
import PostCard from './PostCard.tsx';

interface PostCardsProps {
    posts: POST[];
}

export default function PostCards({ posts }: PostCardsProps) {
    if (!isPosts(posts)) {
        return <div></div>;
    }
    return (
        <div className={tw`flex flex-row mr-5 ml-5`}>
            {posts.map((post) => (
                <PostCard post={post} />
            ))}
        </div>
    );
}
