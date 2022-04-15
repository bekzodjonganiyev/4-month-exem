const elUsers = document.querySelector("#users")
const elPosts = document.querySelector("#posts")
const elComments = document.querySelector("#comments")

/////////////// USERS ///////////////
elUsers.addEventListener("click", (evt) => {
    getPosts()
})

// RENDER USERS
function renderUsers(arr, element) {
    element.innerHTML = null;

    elUsers.classList.add("users")

    const fragmentUsers = document.createDocumentFragment()

    arr.forEach(item => {

        // New Item
        const usersList = document.createElement("li")
        usersList.dataset.userData = item.id


        // Name and Id
        const id = document.createElement("p")
        id.textContent = item.id

        const name = document.createElement("p")
        name.textContent = item.name


        // Contact
        const contact = document.createElement("p")
        contact.textContent = "Contact:"
        contact.style.fontWeight = "bold"

        const userName = document.createElement("p")
        userName.textContent = item.username

        const email = document.createElement("a")
        email.href = item.email
        email.textContent = item.email
        email.style.marginRight = "10px"

        const website = document.createElement("a")
        website.href = item.website
        website.textContent = item.website
        website.style.marginRight = "10px"

        const img = document.createElement("img")
        img.setAttribute("src", "https://www.svgrepo.com/show/152978/phone-call.svg")
        img.style.width = "20px"
        img.style.height = "20px"

        const phone = document.createElement("a")
        phone.href = item.phone
        phone.setAttribute("href", item.phone)
        phone.setAttribute("target", "_blank")

        phone.appendChild(img)


        // Company
        const company = document.createElement("p")
        company.textContent = "Company:"
        company.style.fontWeight = "bold"

        const companyName = document.createElement("p")
        companyName.textContent = item.company.name

        const catchPhrase = document.createElement("p")
        catchPhrase.textContent = item.company.catchPhrase

        const bs = document.createElement("p")
        bs.textContent = item.company.bs


        //Address
        const address = document.createElement("p")
        address.textContent = "Address"
        address.style.fontWeight = "bold"

        const street = document.createElement("p")
        street.textContent = item.address.street

        const suite = document.createElement("p")
        suite.textContent = item.address.suite

        const city = document.createElement("p")
        city.textContent = item.address.city

        const zipcode = document.createElement("p")
        zipcode.textContent = item.address.zipcode

        const lat = item.address.geo.lat
        const lng = item.address.geo.lng

        const locationImg = document.createElement("img")
        locationImg.setAttribute("src", "https://img.icons8.com/color/2x/marker.png")
        locationImg.style.width = "20px"
        locationImg.style.height = "20px"

        const location = document.createElement("a")
        location.textContent = "Location"
        location.setAttribute("target", "_blank")
        location.setAttribute("href", `https://www.google.com/maps/place/${lat},${lng}`)
        location.appendChild(locationImg)


        // Add elements to DOM
        usersList.appendChild(id)
        usersList.appendChild(name)

        usersList.appendChild(contact)
        usersList.appendChild(userName)
        usersList.appendChild(email)
        usersList.appendChild(website)
        usersList.appendChild(phone)

        usersList.appendChild(company)
        usersList.appendChild(companyName)
        usersList.appendChild(catchPhrase)
        usersList.appendChild(bs)

        usersList.appendChild(address)
        usersList.appendChild(street)
        usersList.appendChild(suite)
        usersList.appendChild(city)
        usersList.appendChild(zipcode)
        usersList.appendChild(location)

        fragmentUsers.appendChild(usersList)
    });

    element.appendChild(fragmentUsers)
}

// FETCH USERS
(async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    renderUsers(data, elUsers)
})()


/////////////// POSTS ///////////////
elPosts.addEventListener("click", (evt) => {

})

// RENDER POSTS
function renderPosts(arr, element) {
    element.innerHTML = null

    elPosts.classList.add("users")

    const fragmentPosts = document.createDocumentFragment()

    arr.forEach(item => {

        // New Item
        const postsList = document.createElement("li")
        postsList.dataset.userData = item.id

        // Title
        const title = document.createElement("h3")
        title.textContent = item.title

        // Body
        const body = document.createElement("p")
        body.textContent = item.body


        // Add elements to DOM
        postsList.appendChild(title)
        postsList.appendChild(body)

        fragmentPosts.appendChild(postsList)

    })

    element.appendChild(fragmentPosts)
}

// FETCH POSTS 
async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    renderPosts(data, elPosts)
}








