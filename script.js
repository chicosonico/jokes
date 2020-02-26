

$(function() {
        var id = Math.floor(Math.random()*(30+1));
        console.log(id);

        var $htmlJoke = $('#update');
        $.ajax({
            type: "GET",
            url: "http://api.icndb.com/jokes/random",
            success: function(data) {
                console.log("Success " + data.value.joke);
                $htmlJoke.append(data.value.joke);
            },
            error: function(){
                alert("json not found");
            }
        });
             
    });
    

