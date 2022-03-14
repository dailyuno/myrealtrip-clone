import fs from "fs";
import { createMocks } from "node-mocks-http";
import { ResponsePopularCities } from "~/modules/cities/types/response";
import handler from "./popular";

describe("api/cities/popular", () => {
  it("API는 성공적으로 호출되는가?", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    const popularCities: ResponsePopularCities = {
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
      ],
    };

    jest
      .spyOn(fs, "readFileSync")
      .mockReturnValueOnce(JSON.stringify(popularCities));

    await handler(req, res);

    const status: number = res._getStatusCode();

    expect(status).toBe(200);

    const data: ResponsePopularCities = res._getJSONData();

    expect(data).toEqual(popularCities);
  });
});
