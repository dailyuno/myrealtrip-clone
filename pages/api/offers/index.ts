import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { ResponseExperienceOffers } from "~/modules/offers/types/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseExperienceOffers>
) {
  const response = fs.readFileSync("data/offers.json", "utf-8");
  const data: ResponseExperienceOffers = JSON.parse(response);
  res.status(200).json(data);
}
