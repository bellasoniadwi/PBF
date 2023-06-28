import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = (props) => {
    const router = useRouter();
    const [content, setContent] = useState({
        title: 'tes',
        body: 'tes',
    });
    
    useEffect(async () => {
        const { id } = router.query;
        if(id){
            const res = await axios.get(`/api/berita/${id}`);
            const {title, body} = res.data;
            setContent({
                title,
                body
            })
        }
    }, []);

    return(
        <div>
            <h1>{content.title}</h1>
            <h1>{content.created}</h1>
            <h1>{content.body}</h1>
        </div>
    )
}