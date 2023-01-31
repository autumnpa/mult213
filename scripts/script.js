// JavaScript for MULT213 A2


// fetch('https://zenquotes.io/api/quotes/keyword=anxiety')
//   .then(response => response.json())
//   .catch(error => console.error('Error:', error))


const quotes = document.getElementById("quote");

function fetchJSON(url) {
  // Fetches data from posts
  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
      let html = "";

      // Copied from my previous promise exercise
      // loops through the posts data and then prints html list
      for (let i = 0; i < data.length; i++) {
        // creates a list of ids for posts
        html += `<p>${data[i].id}</p>`;
      }
      console.log(data);

      if (data.length <= 0)
        html += `<p>No quotes exist.</p>`

      // outputs in div we labeled as id=posts in index.html
      const quotes = document.getElementById("quote");
      quotes.innerHTML += html;
    })
    .catch(error => console.error('Error:', error))
}
fetchJSON('https://type.fit/api/quotes')
// quotes.innerHTML = html;


// function fetchJSON(url) {
//   fetch('https://zenquotes.io/api/quotes')
//     .then(response => response.json())
//     .then(data => {
//       let html = "";

//       for (let i = 0; i < data.length; i++) {
//         html += `<li>${data[i].id}</li>`;
//       }

//       if (data.length <= 0)
//         html += `<p>No quotes exist.</p>`

//       const quotes = document.getElementById("quote");
//       quotes.innerHTML += html;
//     })
//     .catch(error => console.error('Error:', error))
// }
// fetchJSON('https://zenquotes.io/api/quotes')
// console.log('https://zenquotes.io/api/quotes');