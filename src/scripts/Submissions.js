import { fetchSubmissions, getSubmissions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("submission--")) {
        const [,submissionId] = click.target.id.split("--")
        deleteRequest(parseInt(submissionId))
    }
})

const convertSubmissionToListElement = (submission) => {
    return `<li>
    ${submission.description}
    <button class="submission__delete"
            id="submission--${submission.id}">
        DELETE
    </button>
    </li>`
}

export const Submissions = () => {
    const submissions = getSubmissions()

    let html = `
        <ul>
            ${
                submissions.map(convertSubmissionToListElement)
            }
        </ul>
    `

    return html
} 
