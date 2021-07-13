const State = {
  mylist: [],
  recommendations: []
};

const listReducer = (state = State, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        mylist: action.data[0].mylist,
        recommendations: action.data[0].recommendations
      };
    case "ADD":
      const add_id = action.id;
      const add_obj = state.recommendations.filter(
        (movie) => movie.id === add_id
      );
      return {
        ...state,
        recommendations: state.recommendations.filter(
          (movie) => movie.id !== add_id
        ),
        mylist: [...state.mylist, ...add_obj]
      };
    case "REMOVE":
      const remove_id = action.id;
      const remove_obj = state.mylist.filter((movie) => movie.id === remove_id);
      return {
        ...state,
        mylist: state.mylist.filter((movie) => movie.id !== remove_id),
        recommendations: [...state.recommendations, ...remove_obj]
      };
    default:
      return state;
  }
};

export default listReducer;
