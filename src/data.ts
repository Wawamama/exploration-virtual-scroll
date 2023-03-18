import { v4 as uuid } from "uuid";
import { getRandomString } from "./utils";

export interface Subtitle {
  id: string;
  text: string;
  height: number;
}

const data = Array.from(
  { length: 25000 },
  (_el, idx) =>
    ({
      id: uuid(),
      text: `Some text ${idx}`,
    } as Subtitle)
);

// const data = Array.from(
//   { length: 20 },
//   (_el, idx) =>
//     ({
//       id: uuid(),
//       text: getRandomString() + ` ${idx}`,
//       height: 0,
//     } as Subtitle)
// );

export default data;
