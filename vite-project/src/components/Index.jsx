import React from "react";
import { useState, useReducer } from "react";
import Modal from "./Modal";
import { dataObj } from "../data";
import { reducer } from "./reducer";

export default function index() {
  // const reducer = (state, action) => {
  //   if (action.type === "REMOVE_PERSON") {
  //     const newList = state.people.filter(
  //       person => person.id !== action.payload
  //     );
  //     return {
  //       ...state,
  //       people: newList,
  //       showModal: true,
  //       modalContent: "person removed",
  //     };
  //   }
  //   if (action.type === "CLOSE_MODAL") {
  //     return {
  //       ...state,
  //       showModal: false,
  //     };
  //   }
  //   if (action.type === "ADD_ITEM") {
  //     const newPeople = [...state.people, action.payload];
  //     return {
  //       ...state,
  //       people: newPeople,
  //       showModal: true,
  //       modalContent: "item added",
  //     };
  //   }
  //   if (action.type === "NO_VALUE") {
  //     return {
  //       ...state,
  //       people: state.people,
  //       showModal: true,
  //       modalContent: "please enter a valid name",
  //     };
  //   }
  //   throw new Error("no matching action type");
  // };
  const defaultState = {
    people: [],
    showModal: false,
    modalContent: "modal content",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const handleRemove = e => {
    const toBeRemoved = e.target.parentElement.id;
    console.log(toBeRemoved);
    dispatch({ type: "REMOVE_PERSON", payload: toBeRemoved });
  };
  return (
    <div>
      {state.showModal && (
        <Modal content={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button type="submit">submit</button>
      </form>
      {state.people.map(person => {
        return (
          <div key={person.id} id={person.id}>
            <h4>{person.name}</h4>
            <button onClick={handleRemove}>remove item</button>
          </div>
        );
      })}
    </div>
  );
}
