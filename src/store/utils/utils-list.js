/* eslint-disable import/prefer-default-export */
export const mockItems = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({ id: `${i}`, foo: "bar" });
  }
  return items;
};