const API = "http://localhost:8088"
const applicationState = {submissions:[]}


export const fetchSubmissions = () => {
    return fetch(`${API}/submissions`)
        .then(response => response.json())
        .then(
            (letterSubmissions) => {
                // Store the external state in application state
                applicationState.submissions = letterSubmissions
            }
        )
}

export const getSubmissions = () => {
    return applicationState.submissions
}

export const sendSubmissions = (userSubmission) => {
    const fetchOptions = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSubmission)
    }


    return fetch(`${API}/submissions`, fetchOptions)
        .then(response => response.json())
        .then(() => {

        })
}
