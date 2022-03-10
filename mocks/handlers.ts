import {
  DefaultRequestBody,
  MockedRequest,
  PathParams,
  rest,
  RestHandler,
} from "msw";
import { Offer } from "~/modules/offers/types";

const handlers: RestHandler<MockedRequest<DefaultRequestBody>>[] = [
  rest.get<DefaultRequestBody>("/api/fetcher/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json([{ id }]));
  }),

  rest.get<DefaultRequestBody, PathParams, Offer>(
    "/api/offer/:id",
    (req, res, ctx) => {
      const { id } = req.params;

      return res(
        ctx.json({
          id: Number(id),
          isMRT2: true,
          title:
            "페어필드 바이 메리어트 부산 송도비치(3/9까지 판매, 5/31까지 숙박가능)",
          image:
            "https://d2ur7st6jjikze.cloudfront.net/offer_photos/113284/610264_medium_1646194709.jpg?1646194709",
          review: { count: null, type: "istanbul", star: null },
          type: "ETicket",
          category: "티켓/패스",
          rawCategory: "ticket",
          tags: ["맛집/카페", "이색 체험"],
          multiCity: false,
          cityCount: 1,
          duration: { size: 0, unit: "hour" },
          isGuarantee: true,
          nowUse: true,
          price: {
            main: 99000.0,
            origin: 385000.0,
            includeDiscount: false,
          },
          guide: {
            id: 17658,
            name: "페어필드 바이 메리어트 부산 송도비치",
            isRealGuide: false,
          },
          city: {
            key: "Busan",
            name: "부산",
            image:
              "https://d2ur7st6jjikze.cloudfront.net/landscapes/401_medium_square_1435713499.jpg?1435713499",
          },
          country: { key: "Korea, Republic of", name: "대한민국" },
          period: null,
        })
      );
    }
  ),
];

export default handlers;
