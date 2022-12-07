import { useQuery } from '@tanstack/react-query';
import { BASE_HOTEL_URL } from '@env';

export type Hotels = Hotel[];

export interface Hotel {
  id: number;
  name: string;
  location: Location;
  stars: number;
  checkIn: CheckIn;
  checkOut: CheckOut;
  contact: Contact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}

export interface Location {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface CheckIn {
  from: string;
  to: string;
}

export interface CheckOut {
  from: string;
  to: string;
}

export interface Contact {
  phoneNumber: string;
  email: string;
}

const HotelsData = async () => {
  const data = await fetch(`${BASE_HOTEL_URL as string}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      contentType: 'application/json',
    },
  });

  return (await data.json()) as Hotels;
};

const useFetchHotels = () => {
  const { data, error, isLoading, isFetching, isError } = useQuery<
    Hotels,
    Error
  >(['hotels'], () => HotelsData(), {
    retry: 3,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-misused-promises
    onError: async err => {
      //TODO: handle error or record error in analytics
    },
  });

  return {
    data,
    error,
    isLoading,
    isFetching,
    isError,
  };
};

export default useFetchHotels;
