export const getSelectedCategories = (categories, categoryFilters) => {
  const {
    text = '',
    sortByTitle = 'titleAsc'
  } = categoryFilters;

  return categories.filter(category => {
    const textMatch = category.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a,b) => {
    if(sortByTitle === 'titleAsc'){
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    }
    else if(sortByTitle === 'titleDesc'){
      return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
    }

    return 0;
  });
};
