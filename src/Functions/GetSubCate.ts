export const getUniqueSubCates = (data: Array<any>) => {
  const subCatesSet = new Set();

  for (let item of data) {
    subCatesSet.add(item.subCate);
  }

  return Array.from(subCatesSet);
};
