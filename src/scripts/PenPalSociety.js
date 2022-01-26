import { LetterForm } from "./LetterForm.js"
import { Submissions } from "./Submissions.js"

export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="letterForm">
            ${LetterForm()}
        </section>

        <section class="submissions">
            <h2>Letter Submissions</h2>
            ${Submissions()}
        </section>
    `
}