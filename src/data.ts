import { v4 as uuid } from "uuid";

const data = Array.from(
  { length: 25000 },
  (_el, idx) =>
    ({
      id: uuid(),
      text: `Some text ${idx}`,
    } as Subtitle)
);

export interface Subtitle {
  id: string;
  text: string;
}

export default data;
