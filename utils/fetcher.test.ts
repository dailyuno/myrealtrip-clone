import { debug } from "console";
import fetcher from "./fetcher";

describe("fetcher", () => {
  it("fetcher 성공", async () => {
    const id = "20220310";
    const data = await fetcher(`/api/fetcher/${id}`);
    expect(data).toEqual([{ id }]);
  });

  it("fetcher 실패", async () => {
    try {
      await fetcher("/api/fetcher/404");
    } catch (e: any) {
      expect(e.response.status).toBe(404);
    }
  });
});
