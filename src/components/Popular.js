import { useState } from "react";
import "../index.css";
import { LanguageNav } from "./LanguageNav";

export function Popular(props) {
  const [languageCurrent, setLanguage] = useState("All");

  function updateLanguage(selectedLanguage) {
    setLanguage(selectedLanguage);
  }

  return (
    <>
      <LanguageNav selected={languageCurrent} updatedLanguage={updateLanguage} />
    </>
  );
}
