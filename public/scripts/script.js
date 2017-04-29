var friendsArr, newFriend, currFriend, currFriendScores, compFriend, compFriendScores, hi ,lo, bff;
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
    bestMatch();
    getSurvey();
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
	    console.log(data);
	    // currFriend.scores is current arr holding values of this friend that we're comparing
	    
	    
	    var diffArr = data.map(function(el){
		var newObj = {};
		newObj.name = el.name;
		newObj.photo = el.photo;
		var totalDiff = 0;
		
		el.scores.forEach(function(score, idx){
		    let diff = Math.abs(parseInt(currFriend.scores[idx]) - parseInt(score));
		    totalDiff += diff;
		});
		newObj.totalDiff = totalDiff;
		// return an array of objects that holds the friend's name and the difference between each score
		return newObj;
	    });
	    
	    
	    // sort through new arr to find lowest number then load that info into modal
	    diffArr.sort();
	    console.log(diffArr);
	    bff = diffArr[0];
	    console.log(bff);
	    console.log(bff.photo);
	    
	    $("#bestName").html(bff.name);
	    $("#bestPic").attr("src", bff.photo);
	    // show modal
	    $(".modal").modal({backdrop: true});
	});
};

