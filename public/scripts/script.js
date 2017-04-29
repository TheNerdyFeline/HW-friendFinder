var friendsArr, newFriend, currFriend, compFriend, hi ,lo, scoreDiff, total, bff;
var scoreDiffArr = [];
var currentURL = window.location.origin;
var best = 40;
/*$.get("/api/friends", function(data) {
    friendsArr = JSON.parse(data);
 });*/

// event listener for submit button
$(".submit").on("click", function(event) {
    event.preventDefault();
    bestMatch();
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
	    for(var i = 0; i < friendsArr.length; i++) {
		compFriend = friendsArr[i].scores;
		currFriend = newFriend.scores;
		for(var j = 0; j < 10; j++) {
	    hi = Math.max(compFriend[j], currFriend[j]);
		    lo = Math.min(compFriend[j], currFriend[j]);
		    scoreDiff = hi - lo;
		    scoreDiffArr.push(scoreDiff);  
		}
		for(var t in scoreDiffArr) {
		    total += scoreDiffArr[t];
		    console.log(scoreDiffArr);
		    console.log(total);
		}
		    
		if(total < best) {
		    best = total;
		    bff = compFriend[i];
		    console.log("My bff is: " + bff);
		}
	    }
	    // load bff into modal
	    $("#bestName").html(bff.name);
	    $("#bestPic") = bff.photo;
	    // show modal
	    $(".modal").modal({backdrop: true});
	});
};

