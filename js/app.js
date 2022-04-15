const elUsers = document.querySelector("#users")
const elPosts = document.querySelector("#posts")
const elComments = document.querySelector("#comments")



/////////////// USERS ///////////////
elUsers.addEventListener("click", (evt) => {
    if (evt.target.matches("li")) {
        const id = evt.target.dataset.userData
        elComments.innerHTML = null

        // Loader
        const loader = document.createElement("img")
        loader.setAttribute("src", "./Spinner.svg")
        loader.setAttribute("class", "spinner")
        elPosts.appendChild(loader)

        getPosts(id)
    }
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
        id.setAttribute("class", "for-id")

        const name = document.createElement("p")
        name.textContent = item.name
        name.setAttribute("class", "for-name")


        // Contact
        const contact = document.createElement("p")
        contact.textContent = "Contact:"
        contact.style.fontWeight = "bold"
        contact.style.fontSize = "20px"
        contact.style.fontStyle = "italic"
        contact.style.textAlign = "center"

        const userName = document.createElement("p")
        userName.textContent = `Username: ${item.username}`
        userName.setAttribute("class", "for-username")

        const imgEmail = document.createElement("img")
        imgEmail.setAttribute("src", "https://www.svgrepo.com/show/56752/email.svg")
        imgEmail.style.width = "30px"
        imgEmail.style.height = "30px"

        const email = document.createElement("a")
        email.setAttribute("href", `mailto:${item.email}`)
        email.style.marginRight = "10px"
        email.appendChild(imgEmail)

        const imgWebsite = document.createElement("img")
        imgWebsite.setAttribute("src", "./web.svg")
        imgWebsite.style.width = "30px"
        imgWebsite.style.height = "30px"

        const website = document.createElement("a")
        website.setAttribute("href", item.website)
        website.style.marginRight = "10px"
        website.appendChild(imgWebsite)

        const imgPhone = document.createElement("img")
        imgPhone.setAttribute("src", "https://www.svgrepo.com/show/152978/phone-call.svg")
        imgPhone.style.width = "30px"
        imgPhone.style.height = "30px"

        const phone = document.createElement("a")
        phone.setAttribute("href", `tel:${item.phone}`)
        phone.appendChild(imgPhone)

        const wrapperContact = document.createElement("div")
        wrapperContact.style.display = "flex"
        wrapperContact.style.justifyContent = "space-around"
        wrapperContact.appendChild(email)
        wrapperContact.appendChild(website)
        wrapperContact.appendChild(phone)


        // Company
        const company = document.createElement("p")
        company.textContent = "Company:"
        company.style.fontWeight = "bold"
        company.style.fontSize = "20px"
        company.style.fontStyle = "italic"
        company.style.textAlign = "center"

        const companyName = document.createElement("p")
        companyName.textContent = `Name: ${item.company.name}`

        const catchPhrase = document.createElement("p")
        catchPhrase.textContent = `catchPhrase: ${item.company.catchPhrase}`

        const bs = document.createElement("p")
        bs.textContent = `bs: ${item.company.bs}`


        //Address
        const address = document.createElement("p")
        address.textContent = "Address:"
        address.style.fontWeight = "bold"
        address.style.fontSize = "20px"
        address.style.fontStyle = "italic"
        address.style.textAlign = "center"

        const street = document.createElement("p")
        street.textContent = `Street: ${item.address.street}`

        const suite = document.createElement("p")
        suite.textContent = `Suite: ${item.address.suite}`

        const city = document.createElement("p")
        city.textContent = `City: ${item.address.city}`

        const zipcode = document.createElement("p")
        zipcode.textContent = `Zipcode: ${item.address.zipcode}`

        const lat = item.address.geo.lat
        const lng = item.address.geo.lng

        const locationImg = document.createElement("img")
        locationImg.setAttribute("src", "./location.svg")
        locationImg.style.width = "30px"
        locationImg.style.height = "30px"

        const location = document.createElement("a")
        location.style.fontSize = "20px"
        location.setAttribute("target", "_blank")
        location.setAttribute("href", `https://www.google.com/maps/place/${lat},${lng}`)
        location.appendChild(locationImg)
        wrapperContact.appendChild(location)


        // Add elements to DOM
        usersList.appendChild(id)
        usersList.appendChild(name)

        usersList.appendChild(company)
        usersList.appendChild(companyName)
        usersList.appendChild(catchPhrase)
        usersList.appendChild(bs)

        usersList.appendChild(address)
        usersList.appendChild(street)
        usersList.appendChild(suite)
        usersList.appendChild(city)
        usersList.appendChild(zipcode)

        usersList.appendChild(contact)
        usersList.appendChild(userName)
        usersList.appendChild(wrapperContact)

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
    if (evt.target.matches("li")) {
        const id = evt.target.dataset.postData

        // Loader
        const loader = document.createElement("img")
        loader.setAttribute("src", "./Spinner.svg")
        loader.setAttribute("class", "spinner")
        elComments.appendChild(loader)

        getComments(id)
    }
})

// RENDER POSTS
function renderPosts(arr, element) {
    element.innerHTML = null

    elPosts.classList.add("posts")

    const fragmentPosts = document.createDocumentFragment()

    arr.forEach(item => {

        // New Item
        const postsList = document.createElement("li")
        postsList.dataset.postData = item.id

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
async function getPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const data = await res.json()

    renderPosts(data, elPosts)
}



/////////////// COMMENTS ///////////////

// RENDER COMMENTS
function renderComments(arr, element) {
    element.innerHTML = null

    elComments.classList.add("comments")

    const fragmentComments = document.createDocumentFragment()

    arr.forEach(item => {

        // New Item
        const commentsList = document.createElement("li")
        commentsList.dataset.commentData = item.id

        // Title
        const name = document.createElement("h3")
        name.textContent = item.name

        // Email
        const imgEmail = document.createElement("img")
        imgEmail.setAttribute("src", "https://www.svgrepo.com/show/56752/email.svg")
        imgEmail.style.width = "30px"
        imgEmail.style.height = "30px"

        const email = document.createElement("a")
        email.setAttribute("href", `mailto:${item.email}`)
        email.appendChild(imgEmail)

        // Body
        const body = document.createElement("p")
        body.textContent = item.body


        // Add elements to DOM
        commentsList.appendChild(name)
        commentsList.appendChild(email)
        commentsList.appendChild(body)

        fragmentComments.appendChild(commentsList)

    })

    element.appendChild(fragmentComments)
}

// FETCH COMMENTS
async function getComments(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const data = await res.json()

    renderComments(data, elComments)
}