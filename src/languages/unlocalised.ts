import { Language } from "../localisation";

const unlocalised: Language = new Proxy(
  {},
  new (class implements ProxyHandler<Language> {
    get(target: Language, p: string | symbol, receiver: any) {
      return p as string;
    }
  })()
);

export default unlocalised;
