const categories = [...Array(24)].map((_, index) => ({
  id: index,
  name: 'Funny',
  creationDate: '15/07/021',
  subcategories: 5,
  actions: 'delete',
}));

export default categories;
