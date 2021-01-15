export const selectInternalFilter = (option, arr) => {
  let tempArr = [...arr];

  const isExist = !!tempArr.find(item => item.id === option.id);

  if (isExist) {
    tempArr = tempArr.filter(item => item.id !== option.id);
  } else {
    tempArr = [...tempArr, option];
  }

  return tempArr;
};
