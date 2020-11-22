export function insertItemBetween<T>(list: T[], itemToInsert: T) {
  return list.flatMap((listItem, index, array) =>
    array.length - 1 > index ? [listItem, itemToInsert] : listItem
  );
}

export function insertJsxItemBetween<T>(list: T[], creator: (index: number) => T) {
  return list.flatMap((listItem, index, array) =>
    array.length - 1 > index ? [listItem, creator(index)] : listItem
  );
}
