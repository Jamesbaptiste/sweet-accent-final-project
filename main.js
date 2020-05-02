console.log("it works");

$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("clicked submit");

    var email = $(".email").val();
    var name = $(".name").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid</div>");
    }

    if (name.length >= 2) {
      statusElm.append("<div>name is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>name is not valid</div>");
    }

    if (message.length >= 10) {
      statusElm.append("<div>message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>message is not valid</div>");
    }
  });
});
