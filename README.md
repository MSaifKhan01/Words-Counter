

```markdown
# Word Count App

## Table of Contents
1. [Description](#description)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Endpoints](#endpoints)
6. [Example Requests](#example-requests)
7. [How to Use from the Client Side](#how-to-use-from-the-client-side)

## Description
The Word Count App is a web application that allows you to analyze the word count and images of any webpage by providing its URL. It also provides features to mark insights as favorites and manage your search history.

## Prerequisites
Before you start, make sure you have the following:
- Node.js installed
- Npm (Node Package Manager) installed
- A modern web browser

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

The server will start at `http://localhost:3000`.

## Usage
1. Access the Word Count App in your web browser at `http://localhost:3000`.
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
1. Access the Word Count App in your web browser at `http://localhost:3000`.
2. Enter a URL and click "Check Word Count" to analyze the webpage.
3. View word count and image URLs in the table.
4. Mark insights as favorites and manage your search history.
```

