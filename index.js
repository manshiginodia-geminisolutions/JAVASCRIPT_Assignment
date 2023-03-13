(function () {

    var personalDetails = new Array();
    personalDetails.push(["Name", "Age", "DOB", "Email", "Company"]);
    personalDetails.push(["Manshi", 21, "19-08-2001", "mg@gmail.com", "Gemini Solutions"]);
    personalDetails.push(["Ritwik", 22, "23-11-2000", "rs@yahoo.com", "Amazon"]);
    personalDetails.push(["Ayushi", 21, "09-05-2001", "ap@hotmail.com", "Flipkart"]);
    personalDetails.push(["Sabuj", 23, "27-02-1999", "sm@gmail.com", "Apple"]);

    const table = document.createElement("table");
    const tablebody = document.createElement("tbody");

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            if (i == 0) {
                const header = document.createElement("th");
                header.style.padding = "10px";
                const Text = document.createTextNode(personalDetails[i][j]);
                header.appendChild(Text);
                row.appendChild(header);
            }
            else {
                const column = document.createElement("td");
                column.style.padding = "10px";
                const Text = document.createTextNode(personalDetails[i][j]);
                column.appendChild(Text);
                row.appendChild(column);
            }
        }
        tablebody.appendChild(row);
    }

    table.appendChild(tablebody);
    document.body.appendChild(table);
    
    table.setAttribute("border", "2");
    table.style.borderCollapse = "collapse";
    table.style.textAlign = 'center';
    
})();