/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';

export default function Greet(props: PageProps) {
    console.log('🚀 ~ file: [name].tsx ~ line 6 ~ Greet ~ props', props);
    return <div>Hello {props.params.name}</div>;
}
