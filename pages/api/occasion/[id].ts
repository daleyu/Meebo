import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/prisma";
import { OccasionFrontendModel } from "../../../types/frontendModels";
import { OccasionRequestBody } from "../../../types/requestBodies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OccasionFrontendModel>
) {
  if (req.method === "PATCH") {
    const id = req.query.id as string;
    const body = req.body as OccasionRequestBody;

    const occasion = await prisma.occasion.update({
      where: { id },
      data: {
        message: body.message,
      },
    });

    res.status(200).json({
      id: occasion.id,
      label: occasion.label,
      date: occasion.date.toISOString(),
      message: occasion.message,
    });
    return;
  }

  res.status(400).end();
}
