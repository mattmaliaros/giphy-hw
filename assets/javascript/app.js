var topics = ['Michael Jordan', 'Lebron James', 'Andre Iguodala', 'Steph Curry', 'Kobe Bryant', 'Dwayne Wade', 'Kevin Durant',
'Damian Lillard', 'Russell Westbrook', 'Tracy McGrady'];
function createTopics () {
for(var i = 0; i < topics.length; i++)
{
    var button = $('<button>');
    button.attr('id', "button" + i);
    console.log(button.text(topics[i]));
}
}
createTopics();