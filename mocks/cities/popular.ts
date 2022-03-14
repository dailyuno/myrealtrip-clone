import { DefaultRequestBody, PathParams, rest } from "msw";
import { ResponsePopularCities } from "~/modules/cities/types/response";

export default rest.get<DefaultRequestBody, PathParams, ResponsePopularCities>(
  "/api/cities/popular",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        popularCities: [
          {
            type: "city",
            key: "Las Vegas",
            name: "라스베가스",
            image:
              "https://d2ur7st6jjikze.cloudfront.net/landscapes/4654_large_square_1535621335.jpg?1535621335",
            begin: null,
            city_intro: "",
            active_product_count: 240,
          },
          {
            type: "city",
            key: "Paris",
            name: "파리",
            image:
              "https://d2ur7st6jjikze.cloudfront.net/landscapes/4747_large_square_1536047752.jpg?1536047752",
            begin: null,
            city_intro: "",
            active_product_count: 670,
          },
          {
            type: "city",
            key: "Jeju",
            name: "제주도",
            image:
              "https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304",
            begin: null,
            city_intro:
              "https://d2ur7st6jjikze.cloudfront.net/intros/50/Jeju_intro.mp4",
            active_product_count: 3150,
          },
        ],
      })
    );
  }
);
