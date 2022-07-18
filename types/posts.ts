import { ID, URL } from './index.ts';

interface POST {
    id: ID;
    title: string;
    description: string;
    thumbnail: URL;
}

const isPost = (post: unknown): post is POST => {
    return (post as POST).id > 0;
};

const isPosts = (posts: unknown[]): posts is POST[] => {
    return (posts as POST[]).every(isPost);
};

export type { POST };

export { isPost, isPosts };
