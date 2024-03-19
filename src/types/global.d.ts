export {};

declare global {
  interface LocationData {
    latitude: number;
    lookupSource: string;
    longitude: number;
    localityLanguageRequested: string;
    continent: string;
    continentCode: string;
    countryName: string;
    countryCode: string;
    principalSubdivision: string;
    principalSubdivisionCode: string;
    city: string;
    locality: string;
    postcode: string;
    plusCode: string;
    localityInfo: LocalityInfo;
  }

  interface LocalityInfo {
    administrative: Administrative[];
    informative: Informative[];
  }

  interface Administrative {
    name: string;
    description: string;
    isoName: string;
    order: number;
    adminLevel: number;
    isoCode: string;
    wikidataId: string;
    geonameId?: number;
  }

  interface Informative {
    name: string;
    description: string;
    isoName?: string;
    order: number;
    isoCode?: string;
    wikidataId?: string;
    geonameId?: number;
  }

  interface Coordinates {
    latitude: number;
    longitude: number;
  }

  interface ApiResponseMenu {
    status: string;
    data: Pizza[];
  }

  interface Pizza {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[];
    soldOut: boolean;
  }

  interface OrderFormData {
    customer: string;
    phone: string;
    address: string;
    priority: boolean;
    cart: string; // Assuming cart is a JSON string
  }
}
