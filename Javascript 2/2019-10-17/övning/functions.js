let data = {
    date: 1571295394,
    description: "description 1",
    content: "content 1",
    userid: "user 1",
    custmerid: "customer 1"
};

$.ajax({
    type: "POST",
    url: "https://5da7897d23fa740014697829.mockapi.io/events",
    data: data,
    success: (resp) => {
        console.log(resp);
    },
    dataType: "json"
});


$.ajax({
    type: "Get",
    url: "https://5da7897d23fa740014697829.mockapi.io/events",
    success: (resp) => {
        console.log(resp);
    },
})