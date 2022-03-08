import { createMocks } from "node-mocks-http";
import { ResponseExperienceOffers } from "~/modules/offers/types/response";
import handler from ".";
import fs from "fs";

describe("/api/offers", () => {
  it("API 호출 성공", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    const fakeOffers = {
      recent_offers: [],
      popular_offers: [],
    };

    jest
      .spyOn(fs, "readFileSync")
      .mockReturnValueOnce(JSON.stringify(fakeOffers));

    await handler(req, res);

    const status: number = res._getStatusCode();

    expect(status).toBe(200);

    const data: ResponseExperienceOffers = res._getJSONData();

    expect(data).toEqual(fakeOffers);
  });
});
