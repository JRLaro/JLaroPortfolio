import React, { useState, useEffect } from "react";


console.clear();

const slides = [
  {
    title: "¿ Dondé ?",
    tech: "",
    description: "A Travel Application ",
    image: "https://picsum.photos/seed/picsum/350/450",
  },
  {
    title: "LeftOver | HangOver",
    tech: "",
    description: " Meal Application ",
    image: "https://picsum.photos/seed/picsum/350/450",
  },
  {
    title: "Oh My Gift",
    tech: "",
    description: " Gift Application ",
    image: "https://picsum.photos/seed/picsum/350/450",
  },
  {
    title: "Workout Tracker",
    tech: "",
    description: " An application that monitors and tracks your workout",
    image: "https://picsum.photos/seed/picsum/350/450",
  },
  {
    title: "This",
    subtitle: "",
    description: " Travel Application ",
    image: "https://picsum.photos/seed/picsum/350/450",
  },
  {
    title: "That",
    subtitle: "",
    description: " Travel Application ",
    image: "https://picsum.photos/seed/picsum/350/450",
  },
];

function useTilt(active) {
  const ref = React.useRef(null)
  
  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current
  
    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseX - state.rect.top) / state.rect.width;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

    const slideReducer = (state, event) => {
      if (event.type === "NEXT") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length,
        };
      }
      if (event.type === "PREV") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
        };
      }
    };

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
    const ref = useTilt();
  
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : (offset > 0 ? 1 : -1),
      }}
    >
      <div
        className="slideBackground"
        // style={{
        //   backgroundImage: `url('${slide.image}')`
        // }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
  }

  function Projects() {
    const [state, dispatch] = React.useReducer(slideReducer, initialState);

    return (
      <div className="slides" id="projects">
        <h1> Projects </h1>
        <button
          className="btn btn-danger proj-button"
          onClick={() => dispatch({ type: "PREV" })}
        >
          Previous
      </button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}

        <button
          className="btn btn-success proj-button"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          Next
      </button>
      </div>
    );
  }


export default Projects;
