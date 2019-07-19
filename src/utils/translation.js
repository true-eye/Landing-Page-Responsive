const dictionary = {
  en: {
    "navbar.about-us": "About us",
    "navbar.how-it-works": "How It Works",
    "navbar.contact-us": "Contact Us",

    "home.headline.h1":
      "A better job matching app to find opportunities in Canada",
    "home.headline.headline-text":
      "Flipptap is a social networking app matching jobs in Canada for students, professionals and international skilled workers.",
    "home.headline.headline-bottom-text":
      "By signing up, you agree to Flipptap’s Terms and Privacy Policy.",

    "home.sign-up-form.fullname": "Full Name",
    "home.sign-up-form.email": "Email ID",
    "home.sign-up-form.button": "TRY FOR FREE",

    "home.button.get-started": "GET STARTED"
  },
  fr: {
    "navbar.about-us": "A propos",
    "navbar.how-it-works": "Comment ça marche",
    "navbar.contact-us": "Contactez nous",

    "home.headline.h1":
      "La meilleure application pour trouver un job et des opportunités au Canada.",
    "home.headline.headline-text":
      "Flipptap est une application et réseau social qui permet aux étudiants, professionnels et expats de matcher avec des jobs au Canada",
    "home.headline.headline-bottom-text":
      "En vous inscrivant, vous acceptez les termes et la politique de confidentialité de Flipptap. ",

    "home.sign-up-form.fullname": "Nom complet",
    "home.sign-up-form.email": "Email",
    "home.sign-up-form.button": "ESSAYEZ GRATUITEMENT",

    "home.button.get-started": "commencez"
  }
};

export const translate = (lang, s) => {
  if (!dictionary[lang] || !dictionary[lang][s]) return s;
  return dictionary[lang][s];
};
