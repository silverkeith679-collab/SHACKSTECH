const axios = require('axios');

const fetchJoke = async () => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const joke = response.data;

        if (joke.type === 'single') {
            console.log(joke.joke);
        } else {
            console.log(`${joke.setup} - ${joke.delivery}`);
        }
    } catch (error) {
        console.error('Error fetching joke:', error.message);
    }
};

// Fetch and display a random joke
fetchJoke();