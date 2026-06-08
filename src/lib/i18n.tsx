import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.access": "Access",
  "nav.about": "About",
  "nav.focus": "Focus",
  "nav.education": "Education",
  "nav.inquire": "Contact",
  "nav.cta": "Investor Contact",

  "hero.eyebrow": "BASHIR CAPITAL · MONTRÉAL → CLEVELAND",
  "hero.title": "A bridge to American real estate.",
  "hero.sub": "Bashir Capital is a Canadian-owned company acquiring and operating real estate assets in the United States.",
  "hero.cta1": "Get in Touch",
  "hero.cta2": "How It Works",

  "access.eyebrow": "Cross-Border Access",
  "access.title": "Accessing the American market",
  "access.titleItalic": "for Canadian investors.",
  "access.body": "The United States remains one of the world's deepest and most institutional real estate markets — defined by scale, liquidity, and disciplined operating partners. Bashir Capital exists to give Canadian investors a clearer, more informed path into it.",
  "access.k1": "Sourcing",
  "access.v1": "Where the sky is the limit.\n\n\nFor Canadian investors, select U.S. markets may provide:\n\n\n-Stronger cash flow potential\n-More inventory availability\n-Geographic diversification\n-Long-term population and employment growth\n-Access to larger multifamily ecosystems\n-Access to professionally managed assets\n\n",
  "access.k2": "",
  "access.v2": "\n",
  "access.k3": "",
  "access.v3": "",

  "about.eyebrow": "About",
  "about.title": "A modern, cross-border real estate platform.",
  "about.p1": "Focused on scalable, cash-flowing investment opportunities in the U.S. market.",
  "about.p2": "",
  "about.p3": "We are bilingual by design. We work with our investors in French and English, with the cultural fluency that cross-border investing requires.",
  "about.s1k": "Cleveland",
  "about.s1v": "Headquarters",
  "about.s2k": "Ohio",
  "about.s2v": "Initial Focus",
  "about.s3k": "Multifamily",
  "about.s3v": "Asset Class",
  "about.s4k": "FR / EN",
  "about.s4v": "Bilingual Investors",

  "focus.eyebrow": "Where We Invest",
  "focus.title": "The U.S. Midwest — and Ohio first.",
  "focus.body": "Cleveland, Columbus, and Cincinnati offer something rare today: livable cities with growing populations, diversified employment, and a multifamily housing market that remains accessible. We concentrate where fundamentals — not headlines — drive value.",
  "focus.p1t": "Affordability",
  "focus.p1d": "Markets where rent-to-income ratios still support healthy tenant demand and durable occupancy.",
  "focus.p2t": "Diversified economies",
  "focus.p2d": "Healthcare, education, manufacturing, and logistics — not dependent on any single industry.",
  "focus.p3t": "Patient ownership",
  "focus.p3d": "We approach each property as a long-term operator, not as a short-term trade.",

  "edu.eyebrow": "Investor Education",
  "edu.title": "Clear guidance for Canadian investors navigating the U.S. market.",
  "edu.body": "Cross-border investing comes with real questions — taxation, structuring, currency, and reporting. We meet our investors where they are, in French or English, and walk through the considerations before any commitment is made.",
  "edu.b1": "Cross-border tax considerations",
  "edu.b2": "Common ownership structures",
  "edu.b3": "What due diligence looks like",
  "edu.b4": "Risks and how we think about them",

  "inq.eyebrow": "Contact",
  "inq.title": "Start a conversation.",
  "inq.body": "Bashir Capital is currently expanding its cross-border network and strategic relationships across key U.S. multifamily markets. Interested parties may request to be added to our contact list for updates and opportunities in the next financial quarter.",
  "inq.direct": "Direct",
  "inq.city": "Montréal, Québec",
  "inq.first": "First Name",
  "inq.last": "Last Name",
  "inq.email": "Email",
  "inq.lang": "Preferred Language",
  "inq.langPh": "Français / English",
  "inq.msg": "Message",
  "inq.submit": "Send Message",
  "inq.thanks": "Thank you.",
  "inq.thanksBody": "A member of the Bashir Capital team will be in touch shortly.",
  "inq.received": "Received",

  "foot.tag": "",
  "foot.firm": "Firm",
  "foot.contact": "Contact",
  "foot.legal": "This website is for informational purposes only and does not constitute an offer or solicitation to buy or sell any security. Investing in real estate involves risk, including loss of principal. No outcomes are guaranteed.",
  "foot.rights": "All rights reserved.",
};

const fr: Dict = {
  "nav.access": "Accès",
  "nav.about": "À propos",
  "nav.focus": "Marchés",
  "nav.education": "Éducation",
  "nav.inquire": "Contact",
  "nav.cta": "Contact investisseur",

  "hero.eyebrow": "BASHIR CAPITAL · MONTRÉAL → CLEVELAND",
  "hero.title": "Un pont vers l'immobilier américain.",
  "hero.sub": "Bashir Capital est une société canadienne axée sur l’acquisition et la détention d’actifs immobiliers aux États-Unis.",
  "hero.cta1": "Nous joindre",
  "hero.cta2": "Notre approche",

  "access.eyebrow": "Accès transfrontalier",
  "access.title": "Accéder au marché américain",
  "access.titleItalic": "pour les investisseurs canadiens.",
  "access.body": "Les États-Unis demeurent l'un des marchés immobiliers les plus profonds et les plus institutionnels au monde — caractérisés par leur envergure, leur liquidité et la rigueur de leurs opérateurs. Bashir Capital existe pour offrir aux investisseurs canadiens un accès plus clair et mieux informé à ce marché.",
  "access.k1": "Repérage",
  "access.v1": "Où le ciel est la limite.\n\n\nPour les investisseurs canadiens, certains marchés américains peuvent offrir :\n\n\n-Un potentiel de «cashflow» plus fort\n-Plus de disponibilité d'inventaire\n-Une diversification géographique\n-Une croissance démographique et de l'emploi à long terme\n-Accès à des écosystèmes multifamiliaux plus vastes\n-Accès à des actifs gérés de façon professionnelle\n\n",
  "access.k2": "",
  "access.v2": "\n",
  "access.k3": "",
  "access.v3": "",

  "about.eyebrow": "À propos",
  "about.title": "Une plateforme immobilière transfrontalière, moderne.",
  "about.p1": "Nous investissons avec une vision à long terme et une approche disciplinée axée sur la création de valeur.",
  "about.p2": "",
  "about.p3": "Nous sommes bilingues par conception. Nous accompagnons nos investisseurs en français et en anglais, avec la fluidité culturelle que requiert l'investissement transfrontalier.",
  "about.s1k": "Cleveland",
  "about.s1v": "Siège social",
  "about.s2k": "Ohio",
  "about.s2v": "Marché initial",
  "about.s3k": "Multifamilial",
  "about.s3v": "Classe d'actifs",
  "about.s4k": "FR / EN",
  "about.s4v": "Investisseurs bilingues",

  "focus.eyebrow": "Où nous investissons",
  "focus.title": "Le Midwest américain — un marché de choix.",
  "focus.body": "Cleveland, Columbus et Cincinnati offrent une combinaison rare d’accessibilité, de croissance et de dynamisme économique. Ce sont des villes où les opportunités demeurent nombreuses dans un marché américain en constante évolution.",
  "focus.p1t": "Accessibilité",
  "focus.p1d": "Des marchés où le ratio loyer/revenu soutient une demande locative saine et une occupation durable.",
  "focus.p2t": "Économies diversifiées",
  "focus.p2d": "Santé, éducation, manufacturier et logistique — sans dépendre d'une seule industrie.",
  "focus.p3t": "Détention patiente",
  "focus.p3d": "Nous abordons chaque immeuble en opérateur de long terme, jamais comme une transaction à court terme.",

  "edu.eyebrow": "Éducation des investisseurs",
  "edu.title": "Un accompagnement clair pour les investisseurs canadiens face au marché américain.",
  "edu.body": "Investir de l'autre côté de la frontière soulève de vraies questions — fiscalité, structuration, devise, reddition de comptes. Nous rejoignons nos investisseurs là où ils sont, en français comme en anglais, et passons en revue les considérations avant tout engagement.",
  "edu.b1": "Considérations fiscales transfrontalières",
  "edu.b2": "Structures de détention courantes",
  "edu.b3": "À quoi ressemble une vérification diligente",
  "edu.b4": "Les risques et notre façon de les aborder",

  "inq.eyebrow": "Contact",
  "inq.title": "Engageons la conversation.",
  "inq.body": "Bashir Capital élargit actuellement son réseau transfrontalier et ses relations stratégiques dans les principaux marchés multifamiliaux américains. Les parties intéressées peuvent demander à être ajoutées à notre liste de contacts pour des mises à jour et des opportunités au cours du prochain trimestre financier.",
  "inq.direct": "Direct",
  "inq.city": "Montréal, Québec",
  "inq.first": "Prénom",
  "inq.last": "Nom",
  "inq.email": "Courriel",
  "inq.lang": "Langue préférée",
  "inq.langPh": "Français / English",
  "inq.msg": "Message",
  "inq.submit": "Envoyer le message",
  "inq.thanks": "Merci.",
  "inq.thanksBody": "Un membre de l'équipe Bashir Capital vous contactera sous peu.",
  "inq.received": "Reçu",

  "foot.tag": "",
  "foot.firm": "Cabinet",
  "foot.contact": "Contact",
  "foot.legal": "Ce site est fourni à titre informatif uniquement et ne constitue pas une offre ni une sollicitation d'achat ou de vente d'un titre. L'investissement immobilier comporte des risques, y compris la perte de capital. Aucun rendement n'est garanti.",
  "foot.rights": "Tous droits réservés.",
};

const dicts: Record<Lang, Dict> = { en, fr };

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (k: string) => dicts[lang][k] ?? k;
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useI18n = () => useContext(LangCtx);