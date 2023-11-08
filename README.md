
# Word Count App


**Frontend**: [Word Count App](https://web-words-counter.netlify.app/)
**Backend**: [Word Count App API](https://words-counter.onrender.com)

## Description
The Word Count App is a web application that allows you to analyze the word count and images of any webpage by providing its URL. It also provides features to mark insights as favorites and manage your search history.

## Prerequisites
Before you start, make sure you have the following:
- Node.js installed
- Npm (Node Package Manager) installed
- A modern web browser

## Technologies and Modules
The Word Count App is built using the following technologies and Node.js modules:
- Node.js
- Express.js
- HTML/CSS
- Node Mon
- Express
- Body-parser
- Cheerio
- Axios

## Installation
1. Clone this repository to your local machine.
2. Open the terminal and navigate to the project's root directory.
3. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server with the following command:

   ```bash
   npm run server
   ```

The server will start at [https://words-counter.onrender.com](https://words-counter.onrender.com).

## Usage
1. Access the Word Count App in your web browser at `https://web-words-counter.netlify.app/`.
2. Enter a URL and click "Check Word Count" to analyze the webpage.
3. View word count and image URLs in the table.
4. Mark insights as favorites and manage your search history.

## Endpoints
- `POST /url/addUrl`: Add a new URL for word count analysis.
- `GET /url/getData`: Retrieve the search history.
- `PUT /url/update/:id`: Mark an insight as a favorite.
- `DELETE /url/delete/:id`: Remove a URL from search history.

## Example Requests
### POST /url/addUrl
```json
{
  "url": "https://example.com"
}
```

### PUT /url/update/0
Mark the first insight as a favorite.

### DELETE /url/delete/1
Remove the second URL from search history.

## How to Use from the Client Side
1. Access the Word Count App in your web browser at `https://web-words-counter.netlify.app/`.
2. Enter a URL and click "Check Word Count" to analyze the webpage.
3. View word count and image URLs in the table.
4. Mark insights as favorites and manage your search history.



```

