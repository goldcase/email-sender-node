function checkConditions() {
	return $("#checked").prop("checked");
}

$(document).ready(function() {
	var name = "";
	var email = "";
	var affiliation = "";
	var usage = "";

	$("#send").click(function() {
		function sendSuccess() {
			alert("send success");
		}

		function sendFailure() {
			alert("send failure");
		}

		function submitForm() {
			name = $("#name").val();
			email = $("#email").val();
			affiliation = $("#affiliation").val();
			usage = $("#usage").val();

			// Send post request for email.
			$.get(window.location.origin + "/send", {
				name : name,
				email: email,
				affiliation: affiliation,
				usage: usage
			});
		}

		function tryAgain() {
			alert("You haven't agreed to the conditions. Please try again.");
		}

		checkConditions() ? submitForm() : tryAgain();
	});

});