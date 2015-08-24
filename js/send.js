function checkConditions() {
	return $("#checked").prop("checked", true);
}

$(document).ready(function() {
	var name = "";
	var email = "";
	var affiliation = "";
	var usage = "";

	$("#send").click(function() {
		function sendSuccess() {

		}

		function sendFailure() {

		}

		function submitForm() {
			name = $("#name").val();
			email = $("#email").val();
			affiliation = $("#affiliation").val();
			usage = $("#usage").val();

			// Send get request for email.
			$.get(window.location.origin + "/send", {
				name : name,
				email: email
				affiliation: affiliation,
				usage: usage
			});

		}

		function tryAgain() {

		}

		checkConditions() ? submitForm : tryAgain;
	})

});