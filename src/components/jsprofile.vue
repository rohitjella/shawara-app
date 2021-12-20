<template>
  <v-col cols="12" md="8">
    <v-card-text class="mt-12">
      <h1 class="text-center teal--text text--accent-3">
        Create your profile as a Job Seeker
      </h1>
      <h4 class="text-center mt-4">Ensure your details are correct</h4>
      <v-form ref="form" v-model="valid" lazy-validation method="post">
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Profile Picture"
          required
        ></v-file-input>
        <v-autocomplete
          v-model="country"
          :rules="fieldRules"
          :items="countries"
          prepend-icon="mdi-flag"
          label="Country"
          placeholder="Select your country"
          required
        ></v-autocomplete>
        <v-text-field
          label="Date of Birth"
          name="DOB"
          prepend-icon="mdi-calendar-month"
          type="text"
          color="teal accent-3"
          v-model="DOB"
          required
          :rules="fieldRules"
        />
        <v-text-field
          label="Highest Education"
          name="education"
          prepend-icon="fa fa-user-graduate"
          type="text"
          color="teal accent-3"
          v-model="education"
          :rules="fieldRules"
          required
        />
        <v-text-field
          label="Skills"
          name="skills"
          prepend-icon="fas fa-users-cog"
          type="text"
          color="teal accent-3"
          v-model="skill"
          :rules="fieldRules"
          required
        />
        <v-text-field
          label="Interest"
          name="interest"
          prepend-icon="fas fa-smile"
          type="text"
          color="teal accent-3"
          v-model="interst"
          :rules="fieldRules"
          required
        />
        <v-combobox
          v-model="language"
          :rules="[() => !!language || 'This field is required']"
          :items="languages"
          label="Languages known"
          prepend-icon="fas fa-language"
          multiple
          chips
          required
        ></v-combobox>
      </v-form>
    </v-card-text>
    <div class="text-center my-3">
      <v-btn
        rounded
        color="teal accent-3"
        dark
        :disabled="!valid"
        class="mr-4"
        @click="validate"
        to="/profile"
      >
        Done
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  valid: true,
  fieldRules: [(v) => !!v || "This field is required"],
  language: "",
  languages: [
    "Abkhaz",
    "Afar",
    "Afrikaans",
    "Akan",
    "Albanian",
    "Amharic",
    "Arabic",
    "Aragonese",
    "Armenian",
    "Assamese",
    "Avaric",
    "Avestan",
    "Aymara",
    "Azerbaijani",
    "Bambara",
    "Bashkir",
    "Basque",
    "Belarusian",
    "Bengali",
    "Bislama",
    "Bosnian",
    "Breton",
    "Bulgarian",
    "Burmese",
    "Catalan; Valencian",
    "Chamorro",
    "Chechen",
    "Chichewa; Chewa; Nyanja",
    "Chinese",
    "Chuvash",
    "Cornish",
    "Corsican",
    "Cree",
    "Croatian",
    "Czech",
    "Danish",
    "Divehi; Dhivehi; Maldivian;",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Ewe",
    "Faroese",
    "Fijian",
    "Finnish",
    "French",
    "Fula; Fulah; Pulaar; Pular",
    "Galician",
    "Georgian",
    "German",
    "Greek, Modern",
    "Guaraní",
    "Gujarati",
    "Haitian; Haitian Creole",
    "Hausa",
    "Hebrew",
    "Hebrew",
    "Herero",
    "Hindi",
    "Hiri Motu",
    "Hungarian",
    "Interlingua",
    "Indonesian",
    "Interlingue",
    "Irish",
    "Igbo",
    "Inupiaq",
    "Ido",
    "Icelandic",
    "Italian",
    "Inuktitut",
    "Japanese",
    "Javanese",
    "Kalaallisut, Greenlandic",
    "Kannada",
    "Kanuri",
    "Kashmiri",
    "Kazakh",
    "Khmer",
    "Kikuyu, Gikuyu",
    "Kinyarwanda",
    "Kirghiz, Kyrgyz",
    "Komi",
    "Kongo",
    "Korean",
    "Kurdish",
    "Kwanyama, Kuanyama",
    "Latin",
    "Luxembourgish, Letzeburgesch",
    "Luganda",
    "Limburgish, Limburgan, Limburger",
    "Lingala",
    "Lao",
    "Lithuanian",
    "Luba-Katanga",
    "Latvian",
    "Manx",
    "Macedonian",
    "Malagasy",
    "Malay",
    "Malayalam",
    "Maltese",
    "Māori",
    "Marathi (Marāṭhī)",
    "Marshallese",
    "Mongolian",
    "Nauru",
    "Navajo, Navaho",
    "Norwegian Bokmål",
    "North Ndebele",
    "Nepali",
    "Ndonga",
    "Norwegian Nynorsk",
    "Norwegian",
    "Nuosu",
    "South Ndebele",
    "Occitan",
    "Ojibwe, Ojibwa",
    "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    "Oromo",
    "Oriya",
    "Ossetian, Ossetic",
    "Panjabi, Punjabi",
    "Pāli",
    "Persian",
    "Polish",
    "Pashto, Pushto",
    "Portuguese",
    "Quechua",
    "Romansh",
    "Kirundi",
    "Romanian, Moldavian, Moldovan",
    "Russian",
    "Sanskrit (Saṁskṛta)",
    "Sardinian",
    "Sindhi",
    "Northern Sami",
    "Samoan",
    "Sango",
    "Serbian",
    "Scottish Gaelic; Gaelic",
    "Shona",
    "Sinhala, Sinhalese",
    "Slovak",
    "Slovene",
    "Somali",
    "Southern Sotho",
    "Spanish; Castilian",
    "Sundanese",
    "Swahili",
    "Swati",
    "Swedish",
    "Tamil",
    "Telugu",
    "Tajik",
    "Thai",
    "Tigrinya",
    "Tibetan Standard, Tibetan, Central",
    "Turkmen",
    "Tagalog",
    "Tswana",
    "Tonga (Tonga Islands)",
    "Turkish",
    "Tsonga",
    "Tatar",
    "Twi",
    "Tahitian",
    "Uighur, Uyghur",
    "Ukrainian",
    "Urdu",
    "Uzbek",
    "Venda",
    "Vietse",
    "Volapük",
    "Walloon",
    "Welsh",
    "Wolof",
    "Western Frisian",
    "Xhosa",
    "Yiddish",
    "Yoruba",
    "Zhuang, Chuang",
  ],
  country: null,
  countries: [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    `Timor L'Este`,
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],
  rules: [
    (value) =>
      !value ||
      value.size < 2000000 ||
      "Profile Picture size should be less than 2 MB!",
  ],
  DOB: "",
  interest: "",
  skill: "",
  education: "",
};
</script>

<style>
</style>