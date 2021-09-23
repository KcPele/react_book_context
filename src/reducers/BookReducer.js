export const bookReducer = (state, action) => {
  const ranId = Math.floor(Math.random() * 100000);
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: ranId
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
