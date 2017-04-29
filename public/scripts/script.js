var newFriend, currFriend, compFriend, hi ,lo, scoreDiff, best, total, bff;
var scoreDiffArr = [];
var friendsArr = require("../data/friends.js");

// event listener for submit button
$(".submit").on("click", function(event) {
    event.preventDefault();
    getSurvey();
});

function getSurvey() {
    newFriend = {
	name: $("#name").val().trim(),
	photo: $("#url").val().trim(),
	scores: [parseInt($("#q1").val()), parseInt($("#q2").val()), parseInt($("#q3").val()), parseInt($("#q4").val()), parseInt($("#q5").val()), parseInt($("#q6").val()), parseInt($("#q7").val()), parseInt($("#q8").val()), parseInt($("#q9").val()), parseInt($("#q10").val())]
    };
    
    $.post("/api/friends", newFriend, function() {
    });
	 console.log(newFriend);
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

function bestMatch() {
    for(var i = 0; i < friendsArr.length; i++) {
	compFriend = friendsArr[i].score;
	currFriend = newFriend.score;
	for(var j = 0; j < 10; j++) {
	    hi = Math.max(compare[j], currFriend[j]);
	    lo = Math.min(compare[j], currFriend[j]);
	    scoreDiff = hi - lo;
	    scoreDiffArr.push(scoreDiff);  
	}
	for(var t in scoreDiffArr) {
	    total += scoreDiffArr[t];
	}
	if(total === 0 || total < best) {
	    best = total;
	    bff = compFriend[i];
	}
    }
    // load bff into modal
    $("#bestName") = bff.name;
    $("#bestPic") = bff.photo;
    // show modal
    $(".modal").modal({backdrop: true});
};
