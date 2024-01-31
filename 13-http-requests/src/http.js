export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch places.');
  }

  return data.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({places}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Could not update places.');
  }

  return resData.message
}


export async function fetchUserPlaces() {
  // import user-places.json
  const response = await fetch('http://localhost:3000/user-placesssss');
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch user places.');
  }

  return data.places;
}
