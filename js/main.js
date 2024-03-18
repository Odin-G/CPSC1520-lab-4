(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here

    function onSubmitNewUserForm(e) {
        e.preventDefault()
        let elements = e.target.elements
        let usernameElement = elements[0]
        let cityElement = elements[1]
        let provinceElement = elements[2]

        let username = usernameElement.value
        let city = cityElement.value
        let province = provinceElement.value

        console.log(username, city, province)

        let isFormValid = true

        if (!hasWhiteSpace(username) && isValueNotEmpty(username)) {
            usernameElement.classList.remove("is-invalid")
        } else {
            isFormValid = false
            usernameElement.classList.add("is-invalid")
        }

        if (isValueNotEmpty(city)) {
            cityElement.classList.remove("is-invalid")
        } else {
            isFormValid = false
            cityElement.classList.add("is-invalid")
        }

        if (isValueNotEmpty(province)) {
            provinceElement.classList.remove("is-invalid")
        } else {
            isFormValid = false
            provinceElement.classList.add("is-invalid")
        }

        if (isFormValid) {
            addUser(username, city, province)
        }
    }

    let newUserForm = document.querySelector('.new-user-form')

    newUserForm.addEventListener('submit', onSubmitNewUserForm)

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();