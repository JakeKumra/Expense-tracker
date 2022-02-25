const expensesTable = document.getElementById("expenses-table")

let expensesList = []
let expenseItem =  {}

document.getElementById("add-btn").addEventListener("click", function() {
    document.querySelector(".empty-fields-msg").style.display = "none"

    // grab all input fields from user and store in variables
    const nameValue = document.querySelector(".name-input").value
    const amountValue = document.querySelector(".amount-input").value
    const dateValue = document.querySelector(".date-input").value
    
    // conditional to check if input fields are filled
    if (nameValue && amountValue && dateValue) {

            // assign input fields to object with key-value pair
            expenseItem["name"] = nameValue;
            expenseItem["date"] = dateValue;
            expenseItem["amount"] = amountValue;
            expensesList.push(expenseItem) // put object into an array list
            renderExpenses()
        } else {
            document.querySelector(".empty-fields-msg").style.display = "block"
        }   
        resetInputFields()
})

// Create table row and table data elements, including a button to remove the table row
// Assign each table data element to the array object key value
function renderExpenses() {
    for (let i = 0; i < expensesList.length; i++) {
        
        document.querySelector(".no-expenses-msg").style.display = "none" 

        let newExpenseRow = document.createElement("tr") 

        let tableNameItem = document.createElement("td")
        tableNameItem.textContent = expensesList[i].name

        let tableDateItem = document.createElement("td")
        tableDateItem.textContent = expensesList[i].date

        let tableAmountItem = document.createElement("td")
        tableAmountItem.textContent = expensesList[i].amount

        let removeBtnTableData = document.createElement("td")
        let removeButton = document.createElement("button")
        removeButton.classList.add("rem-btn")
        removeButton.textContent = "X"
        removeBtnTableData.appendChild(removeButton)

        removeButton.addEventListener("click", function(){
            newExpenseRow.remove()
        })

        newExpenseRow.append(tableNameItem, tableDateItem, tableAmountItem, removeBtnTableData)
        expensesTable.appendChild(newExpenseRow)
    
   }  
   expensesList = []
}

function resetInputFields(){
    document.querySelector(".name-input").value = ''
    document.querySelector(".amount-input").value = ''
    document.querySelector(".date-input").value = ''
}