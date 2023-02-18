export const getPagesCount = (resultCount, totalCount) => {
  return Math.ceil(resultCount / totalCount);
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
}