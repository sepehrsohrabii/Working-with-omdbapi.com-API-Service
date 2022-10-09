getMovieName = () => {
  const MovieTitle = document.getElementById("MovieTitle").value;
  console.log(MovieTitle);
  fetchAPI(MovieTitle);
};

let fetchAPI = async (x) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=57bee994&s=${x}`
    );
    const result = await response.json();

    sendResults(result["Search"]);
  } catch (e) {
    console.log("Error", e);
  }
};

sendResults = (list) => {
  console.log(list);
  for (item of list) {
    var entry = document.createElement("li");
    entry.className = "p-3";
    entry.appendChild(document.createTextNode(`${item["Title"]}`));
    var image = document.createElement("img");
    entry.appendChild(image);
    tasksList.appendChild(entry);
  }
};

mainFunction = () => {
  getMovieName();
};
