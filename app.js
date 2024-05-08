$(document).ready(function(){
    var API_ENDPOINT = "https://bf7h44b347.execute-api.us-west-2.amazonaws.com/Test";

    // AJAX POST request to save employee data
    $("#saveemployee").click(function(){
        var inputData = {
            "employeeid": $('#employeeid').val(),
            "name": $('#name').val(),
            "role": $('#role').val(),
            "age": $('#age').val()
        };
        $.ajax({
            url: API_ENDPOINT,
            type: 'POST',
            data:  JSON.stringify(inputData),
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                $("#employeeSaved").text("Employee Data Saved!");
            },
            error: function () {
                alert("Error saving employee data.");
            }
        });
    });

    // AJAX GET request to retrieve all employees
    $("#getemployees").click(function(){  
        $.ajax({
            url: API_ENDPOINT,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                $('#employeeTable tbody').empty();
                $.each(response, function(i, data) {          
                    $("#employeeTable tbody").append("<tr> \
                        <td>" + data['employeeid'] + "</td> \
                        <td>" + data['name'] + "</td> \
                        <td>" + data['role'] + "</td> \
                        <td>" + data['age'] + "</td> \
                        </tr>");
                });
            },
            error: function () {
                alert("Error retrieving employee data.");
            }
        });
    });
});
