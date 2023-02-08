import axios from "axios";

const ncNewsApi = axios.create({ baseURL: "https://nc-news-5aio.onrender.com/api" })

export const getArticles = () => {
    return ncNewsApi.get(`/articles`)
        .then(({data}) => {
            return data.articles;
        })
}

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments;
    })
}

export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
        .then(({data}) => {
            return data.requestedArticle;
        })
}

export const getUserByUsername = (username) => {
    return ncNewsApi.get(`/users/${username}`)
        .then(({data}) => {
            return data.user;
        })
}

export const updateVotes = (article_id, number) => {
    const voteUpdate = {
        "inc_votes": number
    }
    return ncNewsApi.patch(`/articles/${article_id}`, voteUpdate)
        .then(({data}) => {
            return data.updatedArticle;
        })
}