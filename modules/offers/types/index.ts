export interface OfferContainer {
  title: string;
  offers: Offer[];
  section: OfferSection;
}

export interface OfferSection {
  name: string;
  page_name: string;
  pos: number;
  title: string;
  more_link: string | null;
}

export interface Offer {
  id: number;
  isMRT2: boolean;
  title: string;
  image: string;
  review: OfferReview;
  type: string;
  category: string;
  rawCategory: string;
  tags: string[];
  multiCity: boolean;
  cityCount: number;
  duration: OfferDuration;
  isGuarantee: boolean;
  nowUse: boolean;
  price: OfferPrice;
  guide: OfferGuide;
  city: OfferCity;
  country: OfferCountry;
  period: OfferPeriod | null;
}

export interface OfferReview {
  count: number | null;
  type: string;
  star: number | null;
}

export interface OfferDuration {
  size: number;
  unit: "hour" | "minute" | "day";
}

export interface OfferPrice {
  main: number;
  origin: number;
  includeDiscount: boolean;
}

export interface OfferGuide {
  id: number;
  name: string;
  isRealGuide: boolean;
}

export interface OfferCity {
  key: string;
  name: string;
  image: string;
}

export interface OfferCountry {
  key: string;
  name: string;
}

export interface OfferPeriod {
  start: string;
  end: string;
}
