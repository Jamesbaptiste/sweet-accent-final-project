//to console to ensure working submit button
console.log("it works");

//ready submit function
$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("clicked submit");

    //values for fields
    var email = $(".email").val();
    var name = $(".name").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    //name length must be greater than or equal to 2 characters
    if (name.length >= 2) {
      statusElm.append("<div>Name is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Name must be at least 2 characters</div>");
    }

    //email length must be greater than 5 characters and include "@" and "."
    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append(
        "<div>Email must follow format of: yourname@email.com</div>"
      );
    }

    //message length must be greater than or equal to 10 characters
    if (message.length >= 10) {
      statusElm.append("<div>Message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Message must be at least 10 characters</div>");
    }
  });
});

//restore scroll to top when refreshed
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
