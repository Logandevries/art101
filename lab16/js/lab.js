// index.js - purpose and description here
// Author: Logan de Vries
// Created: 31 June

// Define Variables

// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://api.allorigins.win/raw?url=https://xkcd.com/614/info.0.json?id=123&api_key=blahblahblah",
  // The data to send (will be converted to a query string)
  data: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
          id: 123,
          api_key: "blahblahblah",
        },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
      
      var comicObj = data;
      var section = $("<section></section>");
      var title = $("<h1></h1>").text(comicObj.title);
      var image = $("<img></img>").attr({
            src: comicObj.img,
            alt: comicObj.alt,
            title: comicObj.alt
          });

        section.append(title);
        section.append(image);
        $("body").append(section);

    },
          // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
    }
});