import axios from "axios";

const ncNewsApi = axios.create({ baseURL: "https://nc-news-5aio.onrender.com/api" })

export const getArticles = () => {
    return ncNewsApi.get(`/articles`)
        .then(({data}) => {
            return data.articles;
        })
}