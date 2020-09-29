const baseURL = 'https://api.unsplash.com/';
const key = 'r-XlgVpb8Q9VzsEGsbSNhJKvF8eIyCipfqFBuav-OHk';
const secret_key = 'I4epuxODd0hqCtNLYedSqqg4e3D3C1o0mRIMMlC8f50';
const shark_link = 'https://www.indystar.com/story/life/2015/06/28/shark-sharks-indiana-reservoirs-tiger-sharks-jaws-movie-jaws/29341887/';

//query selector of form

//add eventlistener for form to go into fetchResults

function fetchResults() {

    let url = `${baseURL}search/photos?query=${/*put searchTerm here*/}&client_id=${key}`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json) /*calls another function that will display your data */);
}

fetchResults();
// create function to display data