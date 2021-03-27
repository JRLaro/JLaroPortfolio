import React, { useState, useEffect } from "react";

console.clear();

const slides = [
  {
    title: "¿ Dondé ?",
    tech: "",
    description: "A Travel Application ",
    image: "",
  },
  {
    title: "LeftOver | HangOver",
    tech: "",
    description: " Meal Application ",
    image: "",
  },
  {
    title: "Oh My Gift",
    tech: "",
    description: " Gift Application ",
    image: "",
  },
  {
    title: "Workout Tracker",
    tech: "",
    description: " An application that monitors and tracks your workout",
    image: "",
  },
  {
    title: "¿ Dondé ?",
    subtitle: "",
    description: " Travel Application ",
    image: "",
  },
  {
    title: "¿ Dondé ?",
    subtitle: "",
    description: " Travel Application ",
    image: "",
  },
];

const initialState = {
  slideIndex: 0,
};

const slideReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: state.slideIndex === 0
        ? slides.length - 1
        : state.slideIndex - 1
    };
  }
};


function Slide({ slide, offset }) {
  const active = offset === 0;
  return <div className="slide" data-active={active} style={{ '--offset': offset }}>
    {slide.title} {offset}
  </div>
}



function Projects() {
  const [state, dispatch] = React.useReducer(slideReducer, initialState);
  return (
    <div className="slides" id="projects">
      <h1> Projects {state.slideIndex} </h1>
      {slides.map((slide, i) => {
        return <Slide slide={slide} offset={state.slideIndex - i} />
      })}
      <button className="btn btn-danger" onClick={() => dispatch({type:"PREV"})}>
        Previous
      </button>
      <button className="btn btn-success" onClick={() => dispatch({type: "NEXT"})}>
        Next
      </button>
    </div>
  );
}

export default Projects;
