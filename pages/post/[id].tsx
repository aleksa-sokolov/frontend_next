import {http} from "../../src/http";
import FullPost from "../../src/components/FullPost/FullPost";


export async function getServerSideProps({params}: any) {
    const {data} = await http.get(`/posts/${params.id}`);
    return {
        props: {
            post: data
        }
    }
}

export type ISinglePost = {
    id: number,
    name: string,
    mainImg: string,
    text: string
}

export default function PostPage(props: { post: ISinglePost }) {
    return <FullPost {...props}/>
}

