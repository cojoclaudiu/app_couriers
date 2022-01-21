function useRowDelimiter(className: any) {
  const selectedItems = (selected: Array<number>, rowIndex: number) => {
    if (
      selected.find((nr) => nr === rowIndex) !== rowIndex &&
      selected.find((nr) => nr === rowIndex + 1) !== rowIndex + 1
    ) {
      return <hr className={className} />;
    }
  };

  return {
    selectedItems,
  };
}

export default useRowDelimiter;
