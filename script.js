const app = document.getElementById("root");

var request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function() {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(film => {
      const card = document.createElement("article");
      card.setAttribute("class", "card");

      const h2 = document.createElement("h2");
      h2.textContent = film.title;

      const rtRating = document.createElement("p");
      rtRating.textContent = film.rt_score + "%";

      const p = document.createElement("p");
      film.description = film.description.substring(0, 300);
      p.textContent = `${film.description}...`;

      app.appendChild(card);
      card.appendChild(h2);
      card.appendChild(rtRating);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
