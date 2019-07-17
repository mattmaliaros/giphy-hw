var topics = ['Michael Jordan', 'Lebron James', 'Andre Iguodala', 'Steph Curry', 'Kobe Bryant', 'Dwayne Wade', 'Kevin Durant',
'Damian Lillard', 'Russell Westbrook', 'Tracy McGrady'];
function createTopics () {
for(var i = 0; i < topics.length; i++)
{
    var div = $("#div");
    var button = $('<button></button>').text(topics[i]);
    button.attr('id', "button" + i);
    div.append(button);
    $("#button" + i).on("click", function (){
        console.log($("#button" + i).text());
    });
}
}
function giphy(buttNum){
var giphyurl = "https://api.giphy.com/v1/gifs/search?q=" + buttNum +
    "&api_key=LgLbsRdUWao0JhCQMJryh9mbJgxU03D8&limit=1";
    console.log(buttNum);
    $.ajax({
        url: giphyurl,
        method: "GET"
        //We use the .then function which promises that we will receive some response (memes) from the source
      }).then(function (memes) {
        var results = memes.data;
        for (var i = 0; i < results.length; i++) {
        var fun = $('<div>');
        //creates a div element and stores it into var fun
        var gifsImage = $('<img>');
        //creates an image element and stores it into the var gifsImage
        gifsImage.attr('src', results[i].images.fixed_height.url);
        //the image will receive a new src attribute and receive the src value
        //the src value is received from accessing the results array's props: Images -> fixed height -> url
        gifsImage.attr("data-animate", results[i].images.fixed_height.url)
        //the image will receive a new data-animate attr and receive the data-animate value
        //the data-animate value is received from accessing the results array's props: Images -> fixed height -> url
        gifsImage.addClass('gif');
        //gives the image a class of 'gif'
        fun.append(gifsImage);
        //appends the image into the fun variable (a div element)
  
        $('#gifyImageLoader').prepend(fun);
        }
      });
}

createTopics();