const items = ["item1", "item2", "item3", "item4"];

export const getList = (url: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 4000);
  });
