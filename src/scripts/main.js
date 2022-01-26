import { fetchSubmissions } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchSubmissions().then(
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )
}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
