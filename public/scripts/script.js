var friendsArr, newFriend, currFriend, currFriendScores, compFriend, compFriendScores, hi ,lo, scoreDiff, bff;
var scoreDiffArr = [];
var currentURL = window.location.origin;
var total = 39;
var best = 40;
/*$.get("/api/friends", function(data) {
    friendsArr = JSON.parse(data);
 });*/

// event listener for submit button
$(".submit").on("click", function(event) {
    event.preventDefault();
    getSurvey();
    bestMatch();
});

function getSurvey() {
    newFriend = {
	name: $("#name").val().trim(),
	photo: $("#url").val().trim(),
	scores: [parseInt($("#q1").val()), parseInt($("#q2").val()), parseInt($("#q3").val()), parseInt($("#q4").val()), parseInt($("#q5").val()), parseInt($("#q6").val()), parseInt($("#q7").val()), parseInt($("#q8").val()), parseInt($("#q9").val()), parseInt($("#q10").val())]
    };
    currFriend = newFriend;
    
    $.post("/api/friends", newFriend, function() {
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

function bestMatch() {
    $.ajax({ url: currentURL + "/api/friends", method: "GET" })
	.done(function(data) {
	    friendsArr = data;
	});
    compFriend = friendsArr.shift();
    compFriendScores = compFriend.scores;
    console.log(compFriendScores);
    console.log(currFriend);
    currFriendScores = currFriend.scores;
    for(var j = 0; j < 10; j++) {
	hi = Math.max(parseInt(compFriendScores[j]), parseInt(currFriend[j]));
	lo = Math.min(parseInt(compFriendScores[j]), parseInt(currFriend[j]));
	scoreDiff = hi - lo;
	scoreDiffArr.push(scoreDiff);
	console.log("scores diff arr " + scoreDiffArr);
    };
    
    for(var t in scoreDiffArr) {
	total += (scoreDiffArr[t]);
	console.log(scoreDiffArr);
    };
    console.log(total);
    
    if(total < best) {
	best = total;
	bff = compFriend[i];
	console.log("My bff is: " + bff);
    } else {
	best = best;
    }
    // load bff into modal
    $("#bestName").html(bff.name);
    $("#bestPic").attr(src, bff.photo);
    // show modal
    $(".modal").modal({backdrop: true});
};


