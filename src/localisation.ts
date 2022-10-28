import english from "./languages/english";
import russian from "./languages/russian";
import unlocalised from "./languages/unlocalised";

export type Language = { [key: string]: string };

const languages: { [key: string]: Language } = {
  unlocalised,
  english,
  russian,
};

export let language = 'english'
export function translate(key: string): string {
  return languages[language][key] || languages.english[key] || languages.unlocalised[key]
}
export default languages;
