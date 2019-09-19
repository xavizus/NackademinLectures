document.addEventListener("DOMContentLoaded", function(e) {
    var submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function() {
        let today = new Date();
        let age = document.getElementById("age").value;
        let realAge = 0;
        let computerType = "";
        let remainingDaysToBirthday = 0;
        let name = document.getElementById("name").value;
        let birthday = document.getElementById("birthday").value;
        let color = document.getElementById("favoriteColor").value;
        let cheatedAge = false;
        let presentation = document.getElementById("presentation").value;
        let elementTVseries = document.getElementsByName("tvseries");

        // Gets all TVsererier that are marked
        let tvseries = []
        for (let index = 0; index < elementTVseries.length; index++) {
            if (elementTVseries[index].checked) {
                tvseries.push(elementTVseries[index].value);
            }
        }

        //get all elements with the name attribute value "computer"
        let computers = document.getElementsByName("computer");
        for (let computer of computers) {
            if (computer.checked) {
                computerType = computer.value;
                break;
            }
        }

        //Make the birthday to a real date and not a string.
        birthday = new Date(birthday);

        //Calculate the real age
        realAge = today.getFullYear() - birthday.getFullYear();

        //check if age is cheated
        cheatedAge = (age == realAge) ? "Har fuskat sin ålder!" : "Har inte fuskat sin ålder";

        //
        birthday = birthday.setFullYear(birthday.getFullYear() + realAge);
        remainingDaysToBirthday = Math.round((birthday - today) / (1000 * 60 * 60 * 24), 0);


        console.log("Hej %s", name);
        console.log("Du är %s år gammal. och det är %s dagar kvar tills din födelsedag", age, remainingDaysToBirthday);
        console.log(cheatedAge);
        console.log(document.getElementsByClassName("container"));

        document.getElementsByClassName("container")[0].style.background = color;
        console.log("Du har valt en %s", computerType);
        console.log("Du tittar på följande serier: ");
        for (let serie of tvseries) {
            console.log(serie);
        }
        document.getElementById("presentation-text").innerHTML = presentation;
    });
});


//Load when the document has been loaded.
$(function() {

    // Set commentIndex
    let commentIndex = 0;

    // Listen for submit button
    $("#submit_comment").click(function() {

        //Get commentor name
        let name = document.getElementById("comment_name").value;

        //Get commentor comment
        let comment = document.getElementById("comment").value;

        //Add a div box for the comment and give it a commentID.
        $("#comments").append("<div id='commentID-" + commentIndex + "'></div>");

        // Store the commentors Name in a span with commentName class.
        name = $("<span class='commentName'></span>").text(name + ": ");

        // Store a paragraph with the class comment and the commentor comment.
        comment = $("<p class='comment'> </p>").text(comment);

        // Store a remove button to be able to remove the comment
        removeButton = $("<button class='removeComment' >Remove</button>");

        // Add the comment to the comment box.
        $("#commentID-" + commentIndex).append(name, comment, removeButton);
        commentIndex++;
    });

    //Listen for click event on the removeComment class.
    $(document).on("click", ".removeComment", function() {
        // This row of code is a bit difficult to wrap your head around if you are not an experienced programmer.

        //the keyword this, means the button element.
        //parent function mean, the element above the this parrent
        //remove, selfexplained.
        $(this).parent().remove();

        //This is an example output to the HTML-page after you have submitted a comment.
        /*
        <div id="commentID-0"> <---- When we use parent for this keyword, it's pointet do this element. So when we remove this element, everything below gets removed.
            <span class="commentName">Stephan: </span>
            <p class="comment">Detta är en kommentar</p>
            <button class="removeComment">Remove</button> <---- The keyword this, points to this element.
        </div>
        */
    });
});