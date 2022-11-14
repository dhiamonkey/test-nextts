import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";
import { LivestreamDataTypes } from "../../types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dummyArr: LivestreamDataTypes[] = [];

  for (let index = 0; index < 15; index++) {
    const each: LivestreamDataTypes = {
      total_live: faker.datatype.number({ min: 0, max: 10000 }),
      title: faker.lorem.sentence(Math.floor(Math.random() * 10) + 7),
      img: faker.image.imageUrl(480, 640, "bear", true),
      category: faker.lorem.word(),
    };

    dummyArr.push(each);
  }

  res.status(200).json({
    data: dummyArr,
  });
}
