$('document').ready(function () {
    $('button').on("click",function (e) {
        e.preventDefault();
        $.ajax({
            url: "/rate",
            crossDomain: true,
            data: { id: $(this).html(), province: $('title').text() },
            success: function (data) {
                $('#rate').text(data)
            },
            error: function (e) {
            }
        })
    })
});
// $(document).ready(function () {
//     $("button").click(function () {
//         var rate = $(this).text();
//         console.log(rate);
//         var province = $('title').text();
//         $.ajax({
//             url: "/rate",
//             data: { rate: rate, province: province},
//             type: "GET",
//             success: function (response) {
//                 $('#rate').text(response);
//             },
//             error: function (e) {
//                 console.log(e);
//             }
//         })
//         $('select').val("none");
//     });
// });