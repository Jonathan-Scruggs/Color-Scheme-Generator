const form = document.getElementsByClassName("color-generator-form")[0]
const colorDisplay = document.getElementsByClassName("colors-display")[0]
form.addEventListener("submit",function(event){
    event.preventDefault()
    const formData = new FormData(form)
    let color = formData.get("color-picker")
    const colorScheme = formData.get("color-scheme-picker").toLowerCase()
    // Need to use a query string to filter results
    color = color.replace("#","")
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorScheme}&count=5&w=414px`
        ,{
           method:"GET"
        }
    )
    .then(response => response.json())
    .then(data => renderColors(data.colors))
    
})
function renderColors(colors){
    let count = 1 
    for (let color of colors){
        let hex = color.hex.value
        document.getElementById(`color-${count}`).style.backgroundColor = hex
        document.getElementById(`color-${count}-hex`).textContent = hex
        count++
    }

}