export function LanguageNav({ selected, updatedLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button className="btn-clear nav-link" onClick={() => updatedLanguage(language)} style={language === selected ? { color: "red" } : null}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}
