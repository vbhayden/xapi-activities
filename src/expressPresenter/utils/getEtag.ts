export default (etagHeader: string|undefined) => {
  if (etagHeader === undefined) {
    return undefined;
  }
  console.log(etagHeader);
  return etagHeader.replace(/\"/g, '');
};
