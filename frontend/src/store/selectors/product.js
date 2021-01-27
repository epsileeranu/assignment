export const getSelectedProducts = (products, productFilters) => {
  const {
    text = '',
    subcategoryId = '',
    sellerId = '',
    lowPrice = 0,
    highPrice = Infinity,
    ratings = [],
    tags = [],
    sortByPrice = 'priceDesc',
    sortByTitle = ''
  } = productFilters;

  return products.filter(product => {
    const productPrice = product.sale.saleEndAt >= new Date() ? product.sale.price : product.price;

    const textMatch = product.title.toLowerCase().includes(text.toLowerCase())
    const subcategoryIdMatch = product.subcategoryId.toLowerCase().includes(subcategoryId.toLowerCase());
    const sellerIdMatch = product.sellerId.toLowerCase().includes(sellerId.toLowerCase());
    const priceMatch = (typeof lowPrice !== 'number' && typeof highPrice !== 'number' ) || (productPrice >= lowPrice && productPrice <= highPrice);
    let ratingsMatch = true;
    let tagsMatch = true;

    if(ratings.length !== 0){
      ratingsMatch = ratings.some(rating => rating === product.rating.avgRating);
    }
    if(tags.length !== 0){
      tagsMatch = tags.some(tag => product.tags.includes(tag));
    }
    console.log(
      sellerIdMatch, lowPrice,productPrice>=lowPrice, highPrice, productPrice<=highPrice, priceMatch, ratingsMatch,
      tagsMatch, productFilters
    );
    return textMatch && subcategoryIdMatch &&
      sellerIdMatch && priceMatch && ratingsMatch &&
      tagsMatch;
  }).sort((a,b) => {
    const aProductPrice = a.sale.saleEndAt >= new Date() ? a.sale.price : a.price;
    const bProductPrice = b.sale.saleEndAt >= new Date() ? b.sale.price : b.price;

    if(sortByPrice === 'priceDesc'){
      return aProductPrice < bProductPrice ? 1 : -1;
    }
    else if(sortByPrice === 'priceAsc'){
      return aProductPrice > bProductPrice ? 1 : -1;
    }

    if(sortByTitle === 'titleAsc'){
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    }
    else if(sortByTitle === 'titleDesc'){
      return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
    }

    return 0;
  });
};
