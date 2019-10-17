let newdata = {
    custmerid: "Ny kund",
    userid: "User id",
    date: 1920201234132,
    description: "Detta är en beskrivning",
    content: "Detta är ett innehåll"
};

let updatedata = {
    custmerid: "Ny kund"
};

$.ajax({
    type: "DELETE",
    url: "https://5da7897d23fa740014697829.mockapi.io/events/2",
    success: (resp) => {
        console.log(resp);
    }
});

$.ajax({
    type: "PUT",
    url: "https://5da7897d23fa740014697829.mockapi.io/events/1",
    data: updatedata,
    success: (resp) => {
        console.log(resp);
    },
    dataType: "json"
});


$.ajax({
    type: "POST",
    url: "https://5da7897d23fa740014697829.mockapi.io/events",
    data: newdata,
    success: (resp) => {
        console.log(resp);
    },
    dataType: "js"
});


$.ajax({
    type: "Get",
    url: "https://5da7897d23fa740014697829.mockapi.io/events",
    success: (resp) => {
        console.log(resp);
    }
});