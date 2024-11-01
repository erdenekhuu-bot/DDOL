export default {
  routes: [
    {
      method: "POST",
      path: "/articles/:id/comments",
      handler: "article.customAction",
      config: {
        auth: false,
      },
    },
  ],
};
