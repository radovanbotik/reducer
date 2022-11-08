const reducer = (state, action) => {
  if (action.type === "REMOVE_PERSON") {
    const newList = state.people.filter(person => person.id !== action.payload);
    return {
      ...state,
      people: newList,
      showModal: true,
      modalContent: "person removed",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
  }
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      people: state.people,
      showModal: true,
      modalContent: "please enter a valid name",
    };
  }
  throw new Error("no matching action type");
};

export { reducer };
