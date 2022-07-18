/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { POST } from '../../types/posts.ts';

interface PostCardProps {
    post: POST;
}

export default function PostCard({ post }: PostCardProps) {
    const { title, thumbnail, description } = post;
    const onClickPost = () => {};
    return (
        <div className={tw`w-64 h-64 rounded-3xl bg-gray-200 mr-5 p-3 cursor-pointer`} onClick={onClickPost}>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <img className={tw`object-contain`} src={thumbnail} alt="카드" />
        </div>
    );
}
