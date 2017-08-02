export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY = (id) => `{
  article(id: "${id}") {
    author
    content
    published
    tags
    title
  }
}`;

export const CREATE_ARTICLE_QUERY = ({ author, content, published, title, excerpt, tags }) => (
  `mutation createArticle {
    createArticle (author: "${author}", content: "${content}", published: "${published}", tags: "${tags}", title: "${title}", excerpt: "${excerpt}") {
      id
      author
      content
      published
      tags
      title
      excerpt
    }
  }`
);

export const UPDATE_ARTICLE_QUERY = ({ id, author, content, published, title, excerpt, tags }) => (
  `mutation updateArticle {
    updateArticle (id: "${id}" author: "${author}" content: "${content}" published: "${published}" tags: "${tags}" title: "${title}" excerpt: "${excerpt}") {
      author
      content
      published
      tags
      title
      excerpt
    }
  }`
);

export const DELETE_ARTICLE_QUERY = (id) => (
  `mutation deleteArticle {
    deleteArticle(id: "${id}") {
      id
      author
      content
      published
      tags
      title
      excerpt
    }
  }`
);