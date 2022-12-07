import { Rating } from 'react-native-elements';

export type HotelRatingsProps = {
  rating: number;
  showRating: boolean;
  imageSize: number;
};

const HotelRatings = ({ rating, showRating, imageSize }: HotelRatingsProps) => {
  return (
    <Rating
      type='heart'
      ratingCount={10}
      imageSize={imageSize}
      startingValue={rating}
      showRating={showRating}
    />
  );
};

export default HotelRatings;
