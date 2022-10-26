const firstNameInput  = document.getElementById("firstName")
const lastNameInput = document.getElementById("lastName")
const emailInput = document.getElementById("emailAddress")
const saveBtn = document.getElementById("save")
const tableBody = document.getElementById("tableBody")

const getElementValue= (element) => {
    return element.value

}

saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const firstNameValue = getElementValue(firstNameInput)
    const lastNameValue = getElementValue(lastNameInput)
    const emailValue = getElementValue(emailInput)

    const tableRow = document.createElement("tr")

    const firstNameTd = document.createElement("td")
    firstNameTd.innerHTML = firstNameValue
    tableRow.appendChild(firstNameTd)

    const lastNameTd = document.createElement("td")
    lastNameTd.innerHTML = lastNameValue
    tableRow.appendChild(lastNameTd)

    const emailTd = document.createElement("td")
    emailTd.innerHTML = emailValue
    tableRow.appendChild(emailTd)

    tableBody.appendChild(tableRow)


})
