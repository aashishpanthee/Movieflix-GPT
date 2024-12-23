export const HEADER_LOGO = '/assets/header_logo.png';
export const USER_ICON = '/assets/user-icon.jpg';
export const LOGIN_BG = '/assets/login_background.jpg';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export enum LoginButtonText {
  LOGIN = 'Sign In',
  SIGNUP = 'Sign up',
}

export enum HeaderComponentText {
  LOGOUT_TEXT = 'Logout',
  GPT_PAGE_BUTTON_TEXT = 'GPT Search',
  BROWSE_PAGE_BUTTON_TEXT = 'Browse',
}

type SUPPORTED_LANGUAGES = {
  identifier: string;
  value: string;
};

export const SUPPORTED_LANGUAGES: SUPPORTED_LANGUAGES[] = [
  {
    identifier: 'en',
    value: 'English',
  },
  {
    identifier: 'nep',
    value: 'Nepali',
  },
  {
    identifier: 'hindi',
    value: 'Hindi',
  },
];

type Language_Identifiier = string;
type Language_Info = {
  search: string;
  searchPlaceholder: string;
};
export const GPT_SEARCH_BAR_TEXT: Record<Language_Identifiier, Language_Info> =
  {
    en: {
      search: 'Search',
      searchPlaceholder: 'What would you like to watch today?',
    },
    nep: {
      search: 'खोज्नुहोस्',
      searchPlaceholder: 'तपाईं आज के हेर्न चाहनुहुन्छ?',
    },
    hindi: {
      search: 'खोज',
      searchPlaceholder: 'आज आप क्या देखना चाहेंगे?',
    },
  };
