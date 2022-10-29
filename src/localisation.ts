import { useEffect, useState } from "react";
import english from "./languages/english";
import russian from "./languages/russian";
import unlocalised from "./languages/unlocalised";
import { setCookie, getCookieValue } from "cookies-utils";

export type Language = { [key: string]: string };

const languages: { [key: string]: Language } = {
  unlocalised,
  english,
  russian,
};

export let language = "english";
export function changeLanguage(str: string) {
  language = str;
}
export function useLanguage(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [_language, setLanguage] = useState<string>(language);
  useEffect(() => {
    changeLanguage(getCookieValue("language") || "english");
    setLanguage(language);
  }, []);
  return [
    _language,
    (str) => {
      changeLanguage(str.valueOf() as string);
      setLanguage(language);
      setCookie({
        name: "language",
        value: language,
        maxAge: 60 * 60 * 24 * 30,
      });
    },
  ];
}
export function translate(
  key: string,
  lang: string | undefined | null = null
): string {
  return (
    languages[lang || language][key] ||
    languages.english[key] ||
    languages.unlocalised[key]
  );
}
export default languages;
