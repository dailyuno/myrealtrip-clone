import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { ResponsePopularCities } from "~/modules/cities/types/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponsePopularCities>
) {
  const response = fs.readFileSync("data/cities/popular.json", "utf-8");
  const data: ResponsePopularCities = JSON.parse(response);
  res.status(200).json(data);
}
