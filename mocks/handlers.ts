import { DefaultRequestBody, MockedRequest, rest, RestHandler } from "msw";

const handlers: RestHandler<MockedRequest<DefaultRequestBody>>[] = [
  rest.get<DefaultRequestBody>("/api/fetcher/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json([{ id }]));
  }),
];

export default handlers;
