var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) { // Ensure the request was successful
        var articles = xhr.response.articles; // Retrieve the articles array from the JSON response.
        var articlesDiv = document.getElementById("articles"); // Retrieve the HTML element with the ID 'articles'.

        if (articles) {
            // Iterate through health data to fetch on the front page using loops.
            articles.forEach(function (article) {
                var articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                var title = document.createElement('h2');
                title.textContent = article.title;

                var description = document.createElement('p');
                description.textContent = article.description;

                var waysHeader = document.createElement('h3');
                waysHeader.textContent = 'Ways to Achieve:';

                var waysList = document.createElement('ul');
                if (Array.isArray(article.ways_to_achieve)) {
                    article.ways_to_achieve.forEach(function (way) {
                        var listItem = document.createElement('li');
                        listItem.textContent = way;
                        waysList.appendChild(listItem);
                    });
                }

                var benefitsHeader = document.createElement('h3');
                benefitsHeader.textContent = 'Benefits:';

                var benefitsList = document.createElement('ul');
                if (Array.isArray(article.benefits)) {
                    article.benefits.forEach(function (benefit) {
                        var listItem = document.createElement('li');
                        listItem.textContent = benefit;
                        benefitsList.appendChild(listItem);
                    });
                }

                articleDiv.appendChild(title);
                articleDiv.appendChild(description);
                articleDiv.appendChild(waysHeader);
                articleDiv.appendChild(waysList);
                articleDiv.appendChild(benefitsHeader);
                articleDiv.appendChild(benefitsList);

                articlesDiv.appendChild(articleDiv);
            });
        } else {
            console.error("No articles found in the JSON response.");
        }
    } else {
        console.error("Error loading JSON: " + xhr.statusText);
    }
};

xhr.send(); // Send the request
