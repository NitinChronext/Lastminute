import renderer from 'react-test-renderer';
import App from '../App';
import { Hotel, Hotels } from '../src/hooks/useFetchHotels';

// mock the useCachedResources, so the if block in App.tsx can render component instead of returning null.
jest.mock('../src/hooks/useCachedResources', () =>
  jest.fn(() => Promise.resolve(true)),
);

jest.mock('../src/hooks/useFetchUsers', () => jest.fn(() => true));

const testHotel: Hotel = {
  id: 12321,
  name: 'Park Plaza London Waterloo',
  location: {
    address: '6 Hercules Road',
    city: 'London',
    latitude: 51.49845,
    longitude: -0.11343,
  },
  stars: 4,
  checkIn: {
    from: '14:00',
    to: '20:00',
  },
  checkOut: {
    from: '07:00',
    to: '10:00',
  },
  contact: {
    phoneNumber: '+39 24322342',
    email: 'park_plaza@gmail.com',
  },
  gallery: [
    'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1499779963/Swindon_yjsrwz.jpg',
  ],
  userRating: 9.8,
  price: 120,
  currency: 'EUR',
};

const testHotels: Hotels = [testHotel];

jest.mock('../src/hooks/useFetchUsers', () => {
  return () => {
    return {
      data: [testHotels],
      error: null,
      isError: false,
    };
  };
});

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />);
    expect(tree.root.children.length).toBe(1);
    tree.unmount();
  });
});
