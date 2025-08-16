// Get the select dropdown element for language selection
const selected = document.getElementById('input');

// Get the repository title element (h1 tag inside .repo-tit)
const repoTitle = document.getElementById('repo-title');
// Get the container that holds the description content
const descriptionContainer = document.querySelector('.Dcontent')
// Get the paragraph element that displays repository description
const repoDescription = document.querySelector('.repo-description');

// Get the refresh/search button element
const submitBtn = document.getElementById('refresh')

// Get the main result container that holds all repository info
const result = document.querySelector('.result')

// Get individual elements for repository statistics
const fork = document.querySelector('.fork')        // Element to display fork count
const language_ = document.querySelector('.lan')    // Element to display programming language
const info = document.querySelector('.info')        // Element to display open issues count

const star = document.querySelector('.star')        // Element to display star count
const repo_des = document.querySelector('.repo-des') // Container for all detail elements
const detail = document.querySelector('.detail')    // Individual detail item container

// Get the repository title container
const repoTit = document.querySelector('.repo-tit')

// Get the button container element
const mainButton = document.querySelector('.btn')

// Global variable to store the selected programming language
var language = null

// Global variable to track which repository we're currently viewing (array index)
var index = 0
// Global variable to store the fetched repository data from GitHub API
var data = null;

// Function to render/display repository information on the page
async function render()
{
    // Check if data exists, has items array, and index is within bounds
    if (!data || !data.items || index >= data.items.length) {
        console.log("No data available or index out of bounds"); // Log error message
        return; // Exit function if no valid data
    }

    // Display the full repository name (owner/repo-name)
    repoTitle.textContent = data.items[index].full_name;
    // Display the repository description
    repoDescription.textContent = data.items[index].description;

    // Display the number of forks for this repository
    fork.textContent = data.items[index].forks;
    // Display the primary programming language
    language_.textContent = data.items[index].language;

    // Make the repository details section visible and style it
    repo_des.style.display = 'flex';           // Show as flexbox
    repo_des.style.justifyContent = 'space-evenly'; // Distribute items evenly
    repo_des.style.alignItems = 'center';      // Center items vertically

    // Display the number of stars (stargazers)
    star.textContent = data.items[index].stargazers_count;
    // Display the number of open issues
    info.textContent = data.items[index].open_issues;

    // Show the main button container
    mainButton.style.display = 'flex';

    // Add a bottom border to the repository title section
    repoTit.style.borderBottom = '1px solid white';
}


// Async function to fetch repository data from GitHub API
async function fetchData()
{
    // Initialize URL variable as null
    var url = null;

    // Build the GitHub API URL if a language is selected
    if (language) url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`;

    try
    {
        // Make HTTP request to GitHub API
        const response = await fetch(url);


        // Check if the response was successful
        if (!response.ok)
        {
            // Handle error case - update UI to show error state
            repoDescription.textContent = `Error: ${response.status} - ${response.statusText}`; // Show specific error message

            // Make description container visible
            descriptionContainer.style.display = 'flex'
            // Change result background to error color with transparency
            result.style.background = '#ed737dff';
            result.style.opacity = '0.4' // Make it semi-transparent
            result.style.color = 'white' // White text for contrast

            // Update button styling for error state
            submitBtn.parentElement.style.display = 'flex' // Show button container
            submitBtn.style.background = 'red' // Red background for error
            submitBtn.style.color = 'white' // White text
            submitBtn.textContent = 'Click to Retry' // Change button text

            // Remove any existing event listeners to prevent multiple listeners
            submitBtn.removeEventListener('click', retryFetch);
            // Add retry functionality to the submit button
            submitBtn.addEventListener('click', retryFetch);

            throw new Error("Error Fetching Data"); // Throw error with details
        }

        // Parse the JSON response from GitHub API
        const fetchedData = await response.json();
        // Store the fetched data in global variable for use in other functions
        data = fetchedData;

        // Call render function to display the first repository
        render();

        // Remove any existing event listeners to prevent duplicates
        submitBtn.removeEventListener('click', navigateRepos);
        submitBtn.removeEventListener('click', retryFetch);

        // Add event listener to refresh button for navigating through repositories
        submitBtn.addEventListener('click', navigateRepos);

        // Reset button styling to normal state after successful fetch
        submitBtn.style.background = '#2563eb'; // Reset to normal blue
        submitBtn.textContent = 'Refresh'; // Reset button text

        return data; // Return the fetched data

    } catch (e)
    {
        console.log("Fetch Error Details:", e) // Log detailed error information
    }
}

// Function to handle navigation between repositories
function navigateRepos() {
    console.log("Navigating to next repository") // Debug log
    index += 1; // Move to next repository
    // Reset to first repository if we've reached the end of the list
    if (index >= data.items.length)
        index = 0;

    // Re-render with new repository data
    render();
}

// Function to retry fetching data when there's an error
function retryFetch() {
    console.log("Retrying data fetch..."); // Debug log
    // Reset index to start from beginning
    index = 0;
    // Clear previous data
    data = null;
    // Show loading message
    repoDescription.textContent = "Retrying... Please wait";
    // Call fetchData again to retry the request
    fetchData().then((retryData) => {
        if (retryData) {
            fillPageWithInfos(retryData);
        }
    });
}
// Function to fill page with initial repository information (legacy function)
function fillPageWithInfos(data)
{
    // Set the repository title to the first item's full name
    repoTitle.textContent = data.items[0].full_name;
    // Make the title visible
    repoTitle.style.display = 'block';
}

// Event listener for when user selects a programming language from dropdown
input.addEventListener('change', () =>
{
    // Show loading message while fetching data
    repoDescription.textContent = "Loading ..."
    // Store the selected language value in global variable
    language = selected.value;

    // Call fetchData and handle the returned promise
    fetchData().then((data) =>
    {
        // If data was successfully fetched, fill page with info
        if (data)
            fillPageWithInfos(data);
    })
})
