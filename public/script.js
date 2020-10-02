
const baseURL = 'https://api.unsplash.com/';
const key = 'r-XlgVpb8Q9VzsEGsbSNhJKvF8eIyCipfqFBuav-OHk';
const secret_key = 'I4epuxODd0hqCtNLYedSqqg4e3D3C1o0mRIMMlC8f50';

let expDiv = document.querySelector('#experimentDiv');


let animals = [
    'black-bear',
    'coyote',
    'mountain-lion',
    'wolf',
    'badger',
    'beaver',
    'bobcat',
    'rabbit',
    'mole',
    'squirrel',
    'fox',
    'groundhog',
    'hog',
    'bat',
    'possum',
    'raccoon',
    'otter',
    'skunk',
    'deer',
    'shark'
];

const displayResults = (data, searchTerm) => {
    //create img tag
    // let animalPic = document.createElement('img');
    // //create h1 tag for animal name
     let animalName = document.getElementById('animalName');
    animalName.innerHTML = searchTerm
    // //create p tag for fun facts
    // let funFacts = document.createElement('p');



    //append img tag to parent div
    // expDiv.appendChild(animalPic);
    document.getElementById('animalPic').src = data;
    // set img.src = data
    // animalPic.src = listing();

    //revealing displayResults
    expDiv.style.visibility = 'visible';
}


//function to get all animals into dropdown list
const listing = () => {
    //remove any elements in the parent div
    expDiv.style.visibility = 'hidden';
    //grabbing the area to put the dropdown list in
    let dropdown = document.getElementById('dropdown');
    //looping through animals array
    animals.forEach(animal => {
        //creating anchor tags
        let a = document.createElement('a');
        //assigning the id of each tag to the corresponding animal name
        a.id = animal;
        //appening anchor tag to the dropdown list
        dropdown.appendChild(a);
        //setting the name of the a tag to the name of animal
        a.innerHTML = `${animal}`;
        //setting the link attribute
        a.setAttribute('href', '#');
        //giving each tag the bootstrap class
        a.className = 'dropdown-item';


        //adding an event listener to each animal
        a.addEventListener('click', function (e) {
            //prevent refresh
            e.preventDefault();
            //grabbing the id and assigning it to a variable
            let searchTerm = e.target.id;
            console.log(searchTerm);
            //interpolating the url to fetch from based on the search term(animal id)
            let url = (`${baseURL}search/photos?query=${searchTerm}&client_id=${key}`);
            console.log('fetch url: ', url)
            
            //fetching from the interpolated url
            fetch(url)
                .then(res => res.json())
                //stepping through the data to get the first image url
                //skunk, opossum, bobcat, tiger shark ,mtn lion
                .then(data => {
                    if (e.target.id === 'possum') {
                        console.log('img url: ', data.results[5].urls.full)
                        let urlData = data.results[5].urls.full;
                        displayResults(urlData, searchTerm) 
                                                                        
                    } else if (e.target.id === 'skunk') {
                        console.log('img url: ', 'https://images.unsplash.com/photo-1561493642-645a773b12a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80')
                        let urlData = 'https://images.unsplash.com/photo-1561493642-645a773b12a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80';
                        displayResults(urlData, searchTerm)
                    } else {
                        console.log('img url: ', data.results[0].urls.full)
                        let urlData = data.results[0].urls.full
                        displayResults(urlData, searchTerm)
                    }
                })
        })
    })
}
listing();