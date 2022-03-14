import citiesHandlers from "mocks/cities";
import { DefaultRequestBody, MockedRequest, RestHandler } from "msw";
import fetcherHandlers from "./fetcher";
import offerHandlers from "./offer";

const handlers: RestHandler<MockedRequest<DefaultRequestBody>>[] = [
  ...fetcherHandlers,
  ...offerHandlers,
  ...citiesHandlers,
];

export default handlers;
