const data = Array.from({ length: 25000 }, (v, k) => ({
  id: k,
  text: `Some text ${k}`,
}));

export default data;
