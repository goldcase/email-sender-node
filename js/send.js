function checkConditions() {
	return $("#checked").prop("checked", true);
}

$(document).ready(function() {
	var name = "";
	var email = "";
	var affiliation = "";
	var usage = "";

	$("#send").click(function() {
		function submitForm() {

		}

		function tryAgain() {

		}

		checkConditions() ? submitForm : tryAgain;
	})

});