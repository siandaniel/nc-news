import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById } from "../utils/api";

function SingleArticle() {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    
    useEffect(() => {
        getArticleById(article_id).then((articleFromApi) => {
            setSingleArticle(articleFromApi)
            console.log(articleFromApi)
        })
    }, [article_id])

    return (
        <section>
            <p>{singleArticle.title}</p>
            <img src={singleArticle.article_img_url} alt={singleArticle.title} />
        </section>
    )
}

export default SingleArticle;