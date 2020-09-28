const baseURL = 'https://api.unsplash.com/';
const key = 'r-XlgVpb8Q9VzsEGsbSNhJKvF8eIyCipfqFBuav-OHk';
const secret_key = 'I4epuxODd0hqCtNLYedSqqg4e3D3C1o0mRIMMlC8f50';


fetch(baseURL)
    .then((response) => response.json())
    .then((json) => console.log(json));
