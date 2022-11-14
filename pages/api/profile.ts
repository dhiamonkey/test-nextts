import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";
import { ProfileDataTypes } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileDataTypes>
) {
  res.status(200).json({
    img: faker.image.avatar() || "",
    full_name: faker.name.fullName() || "",
    bio: faker.lorem.lines(2) || "",
    following: faker.datatype.number({ min: 0, max: 10000 }),
    followers: faker.datatype.number({ min: 0, max: 10000 }),
  });
}
