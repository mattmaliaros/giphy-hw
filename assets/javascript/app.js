var topics = ['Michael Jordan', 'Lebron James', 'Andre Iguodala', 'Steph Curry', 'Kobe Bryant', 'Dwayne Wade', 'Kevin Durant',
'Damian Lillard', 'Russell Westbrook', 'Tracy McGrady'];
$("#submit").on("click", function() {
  $('#div').empty();
  var userInput = $('#searchBox').val();
  topics.push(userInput);
  var buttonInsert = $('<button></button>').text(userInput);
  $('#div').append(buttonInsert);
  createTopics();
});
function createTopics () {
for(var i = 0; i < topics.length; i++)
{

    var div = $("#div");
    var button = $('<button></button>').text(topics[i]);
    var buttId = button.attr('id', "button" + i);
    div.append(button);
    $("#button" + i).on("click", function (){
        $('#gif').empty();
        giphy($(this).text());
    });
}
}
function giphy(buttNum){
var giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + buttNum +
    "&api_key=LgLbsRdUWao0JhCQMJryh9mbJgxU03D8&limit=10";
    console.log(buttNum);
    $.ajax({
        url: giphyurl,
        method: "GET"
        //We use the .then function which promises that we will receive some response (memes) from the source
      }).then(function (memes) {
        var results = memes.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
        var fun = $('<div>');
        //creates a div element and stores it into var fun
        var gifsImage = $('<img>');
        gifsImage.attr('value', i);
        //creates an image element and stores it into the var gifsImage
        gifsImage.attr('src', results[i].images.fixed_height_still.url);
        var gifsImageRating = results[i].rating;
        gifsImage.on("click", function() {
            //gifsImage.attr.hide();
            //console.log($(this).attr('value'));
          if ($(this).attr('src') == results[$(this).attr('value')].images.fixed_height.url){
            $(this).attr('src', results[$(this).attr('value')].images.fixed_height_still.url)
          }
          else{
            $(this).attr('src', results[$(this).attr('value')].images.fixed_height.url);
          }
        });
        fun.append(gifsImage);
        fun.append($('<br>'));
        fun.append("Rating : " + gifsImageRating);
        
        //appends the image into the fun variable (a div element)
        $('#gif').prepend(fun);
        
        }
        $('#gif').fadeIn();
      });
}

createTopics();