import { sendSubmissions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("input[name='author']").value
        const userRecipient = document.querySelector("input[name='recipient']").value
        const userLetter = document.querySelector("input[name='letterBody']").value
        const userTone = document.querySelector("input[name='tone']").value
        const userDate = document.querySelector("input[name='dateSent']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorChoice: userAuthor,
            recipientChoice: userRecipient,
            letterBody: userLetter,
            tone: userTone,
            
            dateSent: userDate
        }

        // Send the data to the API for permanent storage
        sendSubmissions(dataToSendToAPI)
    }
})

export const LetterForm = () => {
    let html = `
        <div class="field">
        <label class="author-choice">Author:</label><br>
        <input list="author-list" id="authorChoice" name="author" class="input" /><br>
            <datalist id="author-list">
                <option value="Pablo Neruda" id="1">
                <option value="Emily Dickinson" id="2">
                <option value="bell hooks" id="3">
                <option value="Joan Didion" id="4">
                <option value="Nayyirah Waheed" id="5">
         </datalist><br>
        </div>

        <div class="field">
            <label class="letterBody" for="letterBody">Compose Letter:</label><br>
            <input type="text" name="letterBody" class="input" /><br>
        </div><br>

        <div class="field">
            <label class="tone" name="tone">Tone</label><br>
            <form>
                <input type="radio" value="Business" class="input" /> Business 
                <input type="radio" value="Friendly" class="input" /> Friendly 
                <input type="radio" value="Family" class="input" /> Family 
                <input type="radio" value="Congratulations" class="input" /> Congratulations  
                <input type="radio" value="Condolences" class="input" /> Condolences 
            </form><br>
        </div>

        <div class="field">
        <label class="recipient-choice">Recipient:</label> <br>
        <input list="recipient-list" id="recipientChoice" name="recipient" class="input" /><br>
            <datalist id="recipient-list">
                <option value="Jessica Day" id="1">
                <option value="Nick Miller" id="2">
                <option value="Winston Bishop" id="3">
                <option value="'Shmidt' Winston Saint-Marie Schmidt" id="4">
                <option value="Cece Parekh" id="5">
         </datalist><br>
        </div>

        <div class="field">
            <label class="dateSent" for="dateSent">Date needed</label><br>
            <input type="date" name="dateSent" class="input" />
        </div><br>

        <button class="button" id="submitLetter">Submit Letter</button>
    `
    return html
}
