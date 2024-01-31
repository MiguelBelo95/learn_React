import Places from './Places.jsx';
import Error from './Error.jsx';
import { useState, useEffect } from 'react';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFechingPlaces, setIsFetchingPlaces] = useState(false);
  const [AvailablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);
  // Fetch available places from the API

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetchingPlaces(true);

      try {
        const places = await fetchAvailablePlaces();


        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude);

          setAvailablePlaces(sortedPlaces);
          setIsFetchingPlaces(false);
        });

      } catch (error) {
        setError({ message: error.message || 'Something went wrong!' });
        setIsFetchingPlaces(false);
      }

    }
    fetchPlaces();
  }, [])

  if (error) {
    return <Error message={error.message} title="An error occurred!" />
  }

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={isFechingPlaces}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
