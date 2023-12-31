
async function checkWordCount() {
  const urlInput = document.getElementById('url');
  const url = urlInput.value;
  
  // Send a POST request to the server to get word count and save the URL
  const response = await fetch('https://words-counter.onrender.com/url/addUrl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (response.ok) {
    console.log(response)
    urlInput.value = '';
    Swal.fire('History Created');
   
    GetSearchHistory();
    
  }
}

async function GetSearchHistory() {
  // Fetching search history from the server
  const response = await fetch('https://words-counter.onrender.com/url/getData');

  if (response.ok) {
    const data = await response.json();
    console.log(data)
    const historyBody = document.getElementById('history-body');
    historyBody.innerHTML = '';

    data.searchHistory.forEach((ele, index) => {
      
      const row = document.createElement('tr');

      const SrNo = document.createElement('td');
      SrNo.innerText=index+1
      const domainCell = document.createElement('td');
      
      domainCell.setAttribute('class', 'domainCell');
      
      domainCell.textContent = ele.url;

      const wordCountCell = document.createElement('td');
      wordCountCell.textContent = ele.wordCount; 

      const favoriteCell = document.createElement('td');
      favoriteCell.textContent = ele.isFavorite;

      const actionsCell = document.createElement('td');
      const markFavoriteButton = document.createElement('button');
      markFavoriteButton.textContent = 'Mark as Favorite';
      let ImagesDiv=document.createElement('div');
      ImagesDiv.setAttribute('id', 'ImagesDiv');
      ele.imageUrls.forEach((el,ind)=>{
        if(ind<5){
        const imageUrlsCell = document.createElement('td');
        imageUrlsCell.textContent=`${ele.url} ${el} ,`
        imageUrlsCell.setAttribute('id', 'ImagesTD');
        ImagesDiv.appendChild(imageUrlsCell)
        }
      })

     
      markFavoriteButton.onclick = () =>{
        markFavorite(ele._id)

      } ;

      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove History';
      removeButton.onclick = () =>{
        removeHistory(ele._id);
      }

      actionsCell.appendChild(markFavoriteButton);
      actionsCell.appendChild(removeButton);

      row.appendChild(SrNo)
      row.appendChild(domainCell);
      row.appendChild(wordCountCell);
      row.appendChild(favoriteCell);
      row.appendChild(ImagesDiv);
      row.appendChild(actionsCell);

      historyBody.appendChild(row);
    });
  }
}

async function markFavorite(ind) {
  // Sending a PUT request to mark as a favorite
  const response = await fetch(`https://words-counter.onrender.com/url/update/${ind}`, {
    method: 'PUT',
  });

  if (response.ok) {
    Swal.fire('Marked As Favorite successful');

    GetSearchHistory();
  }
}

async function removeHistory(ind) {
  // Sending a DELETE request to removing  search history
  const response = await fetch(`https://words-counter.onrender.com/url/delete/${ind}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    Swal.fire('URL History Deleted');
      
    
    GetSearchHistory();
 
  }
}

// Loading the initial search history
GetSearchHistory();
