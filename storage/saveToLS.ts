import react from "react";

const handleFormSubmit = () => {
  const { cookies, level, required } = this.state;
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("level", level);
  localStorage.setItem("toNextLevel", required);
};
