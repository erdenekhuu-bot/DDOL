/**
 * article controller
 */
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::article.article",
  ({ strapi }) => ({
    async customAction(ctx) {
      try {
        const { id } = ctx.params;
        const { name, comment } = ctx.request.body;

        const entry = await strapi.entityService.create(
          "api::comment.comment",
          {
            data: {
              article: id,
              name,
              comment,
            },
          }
        );
        ctx.created({ status: "Comment created successfully.", data: entry });
      } catch (error) {
        return;
      }
    },
  })
);
