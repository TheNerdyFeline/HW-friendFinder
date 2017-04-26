// declare var
var newFriend;

// event listener for submit button
$(".submit").on("click", function(event) {
    event.preventDefault();
    getSurvey();
});

// function to grab info from survey and clear form
function getSurvey() {
    newFriend = {
	name: $("#name").val().trim(),
	photo: $("#url").val().trim(),
	scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(). $("#q9").val(), $("#q10").val()]
    };

    $.post("api/friends", newFriend, function(data) {
	// show modal
    });

    // clear form
    $("#name").val("");
    $("#url").val("");
    $("#q1").val("");
    $("#q2").val("");
    $("#q3").val("");
    $("#q4").val("");
    $("#q5").val("");
    $("#q6").val("");
    $("#q7").val("");
    $("#q8").val("");
    $("#q9").val("");
    $("#q10").val("");
};


//function to compare to friends list
