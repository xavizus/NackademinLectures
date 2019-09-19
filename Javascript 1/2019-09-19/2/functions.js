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

$(function() {
    let commentIndex = 0;
    $("#submit_comment").click(function() {
        let name = document.getElementById("comment_name").value;
        let comment = document.getElementById("comment").value;
        $("#comments").append("<div id='commentID-" + commentIndex + "'></div>");
        name = $("<span class='commentName'></span>").text(name + ": ");
        comment = $("<p class='comment'> </p>").text(comment);
        removeButton = $("<button class='removeComment' >Remove</button>");
        $("#commentID-" + commentIndex).append(name, comment, removeButton);
        commentIndex++;
    });

    $(document).on("click", ".removeComment", function() {
        $(this).parent().remove();
    });
});