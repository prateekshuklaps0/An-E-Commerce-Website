const initState = {
  isLoading: false,
  isError: false,
  totalPages: 0,
  products: [],
  categories: [],
  addProduct: [],
};

export const reducer = (state = initState, { type }: any) => {
  switch (type) {
    case "TESTING": {
      return {
        ...state,
      };
    }
    default: {
      return initState;
    }
  }
};
