import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";
import { NewsDataTypes } from "../../types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dummyArr: NewsDataTypes[] = [];

  for (let index = 0; index < 13; index++) {
    const each: NewsDataTypes = {
      date: faker.date.past(),
      id: JSON.stringify(index),
      title: faker.lorem.words(Math.floor(Math.random() * 1) + 7),
      paragraph: faker.lorem.paragraphs(2) || "",
      img: faker.image.imageUrl(640, 480, "news", true),
      category: faker.lorem.word(),
      author: faker.name.lastName(),
    };

    dummyArr.push(each);
  }

  res.status(200).json({ data: dummyArr });
}
