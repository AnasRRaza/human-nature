const COUNTRIES = [
  {
    label: 'United States',
    value: 'United States',
  },
  {
    label: 'Canada',
    value: 'Canada',
  },
  {
    label: 'United Kingdom',
    value: 'United Kingdom',
  },
  {
    label: 'Australia',
    value: 'Australia',
  },
  {
    label: 'New Zealand',
    value: 'New Zealand',
  },
  {
    label: 'India',
    value: 'India',
  },
  {
    label: 'Pakistan',
    value: 'Pakistan',
  },
  {
    label: 'Bangladesh',
    value: 'Bangladesh',
  },
  {
    label: 'Sri Lanka',
    value: 'Sri Lanka',
  },
  {
    label: 'Malaysia',
    value: 'Malaysia',
  },
  {
    label: 'Philippines',
    value: 'Philippines',
  },
  {
    label: 'Thailand',
    value: 'Thailand',
  },
  {
    label: 'Vietnam',
    value: 'Vietnam',
  },
  {
    label: 'Indonesia',
    value: 'Indonesia',
  },
];

const LANGUAGES = [
  {
    label: 'English',
    value: 'English',
  },
  {
    label: 'Spanish',
    value: 'Spanish',
  },
  {
    label: 'French',
    value: 'French',
  },
  {
    label: 'German',
    value: 'German',
  },
  {
    label: 'Italian',
    value: 'Italian',
  },
];

export const PROFILE_FORM_FIELDS = [
  {
    name: 'fullName',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    leftIcon: 'person-outline',
  },
  {
    name: 'age',
    label: 'Age',
    placeholder: 'Enter your age',
    leftIcon: 'calendar-outline',
  },
  {
    name: 'country',
    label: 'Country',
    placeholder: 'Select your country name',
    leftIcon: 'globe-outline',
    isDropdown: true,
    data: COUNTRIES,
  },
  {
    name: 'language',
    label: 'Language',
    placeholder: 'Select language',
    leftIcon: 'language-outline',
    isDropdown: true,
    data: LANGUAGES,
  },
];
