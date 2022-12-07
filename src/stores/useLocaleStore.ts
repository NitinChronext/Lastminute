import create from 'zustand';

declare type MessageIds = FormatjsIntl.Message extends {
  ids: string;
}
  ? FormatjsIntl.Message['ids']
  : string;

export const Locales: {
  [key: string]: string;
} = {
  en: 'English',
  de: 'German',
};

export const messages: {
  [key: string]: Record<MessageIds, string>;
} = {
  en: {
    Hotels: 'Hotels',
    hotelProfile: 'Hotel Profile',
    settings: 'Settings',
    name: 'Name',
    address: 'Address',
    information: 'Information',
    language: 'Language',
  },
  de: {
    Hotels: 'Hotels',
    hotelProfile: 'Hotelprofil',
    settings: 'Einstellungen',
    name: 'Name',
    address: 'Adresse',
    information: 'Information',
    language: 'Sprache',
  },
};

const initialLocale = {
  language: 'de',
};

export const useLocaleStore = create((set: any) => ({
  ...initialLocale,
  setLanguage: (language: string) => {
    //eslint-disable-next-line @typescript-eslint/no-unsafe-call
    set({ language });
  },
}));
