// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import vikingYaml from "../../vikings.yaml";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(vikingYaml);
  res.status(200).json({ vikings: vikingYaml });
}
