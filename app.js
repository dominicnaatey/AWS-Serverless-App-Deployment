$(document).ready(function(){
    var API_ENDPOINT = "https://9nymjuda1j.execute-api.us-west-2.amazonaws.com/test";

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

    // Function to convert JSON to CSV
    function convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

        // Add header line
        var headers = ['Employee ID', 'Name', 'Role', 'Age'];
        str += headers.join(',') + '\r\n';
        
        for (var i = 0; i < array.length; i++) {
            var line = '';
            line += array[i]['employeeid'] + ',';
            line += '"' + array[i]['name'] + '",';
            line += '"' + array[i]['role'] + '",';
            line += array[i]['age'];
            str += line + '\r\n';
        }
        return str;
    }

    // Function to download CSV
    function downloadCSV(csv, filename) {
        var csvFile;
        var downloadLink;

        csvFile = new Blob([csv], {type: 'text/csv'});
        downloadLink = document.createElement('a');
        downloadLink.download = filename;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }

    // Click event handler for download CSV button
    $("#downloadCSV").click(function(){
        $.ajax({
            url: API_ENDPOINT,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                var csv = convertToCSV(response);
                downloadCSV(csv, 'employee_data.csv');
            },
            error: function () {
                alert("Error downloading employee data as CSV.");
            }
        });
    });
});
