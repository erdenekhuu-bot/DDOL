export default {
  routes: [
    {
      method: "POST",
      path: "/articles/:articleId/comments",
      handler: "article.customAction",
      config: {
        auth: false,
      },
    },
  ],
};
