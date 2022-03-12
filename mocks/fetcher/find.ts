import { DefaultRequestBody, rest } from "msw";

export default rest.get<DefaultRequestBody>(
  "/api/fetcher/:id",
  (req, res, ctx) => {
    const { id } = req.params;
    if (id === "404") {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json([{ id }]));
  }
);
