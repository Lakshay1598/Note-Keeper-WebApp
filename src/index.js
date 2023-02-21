import React from "react";
import reactDom from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

const App = () => {
  return (
    <>
      <Header />
      <Note />
      <Footer />
    </>
  );
};

reactDom.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
