window.onload = function() {
  
    var giphy = new XMLHttpRequest();
    giphy.open("GET", "https://api.giphy.com/v1/gifs/trending?api_key=6a15bad02b5e413388d72dbb8491f368", true);
    giphy.send();
    giphy.onload = function() {
        if (giphy.status >= 200 && giphy.status < 400) {
            var scope = JSON.parse(giphy.responseText);
            console.log(scope);
            var parent = document.getElementById("grid");
            var numOfGifs = 20;
            console.log(numOfGifs);
            for (var i = 0; i < numOfGifs; i++) {
                var li = document.createElement("li");
                // li.setAttribute("class", "shown");

                var anchor = document.createElement("a");
                var image = document.createElement("img");
                var heading = document.createElement("h3");
                heading.innerHTML = scope.data[i].slug;
                anchor.setAttribute("href", scope.data[i].source_post_url);
              anchor.setAttribute("target", "_blank");
                image.setAttribute("width", "300");

                image.setAttribute("src", scope.data[i].images.fixed_height.url);
                image.setAttribute("alt", "dummy");
                anchor.append(image);
                anchor.append(heading);
                li.append(anchor);
                parent.append(li);

                if (i < numOfGifs - 1) {

                    new GridScrollFx(document.getElementById('grid'), {
                        viewportFactor: 0.4
                    });
                 
                }


            }

        }
    };
};