
// TARGET THE FORM AND BUTTONS

const eventForm=document.getElementById("Event-form")
const eventTitle=document.getElementById("Event-Title")
const eventDate=document.getElementById("Event-Date")
const category=document.getElementById("Category")
const description=document.getElementById("Description")
const b2=document.getElementById("b2")
const b3=document.getElementById("b3")

const SampleEvents=[
    {
        title:"Web-Development",
        date:"2026-02-10",
        category:"Webinar",
        description:"A Webinar on Web Development."
    },
    {
        title:"Debuggers Coffee Cup",
        date:"2026-02-12",
        category:"Social",
        description:"Code Debugging Competion."
    }
]

let EventData={
    title: eventTitle.value,
    date: eventDate.value,
    category: category.value,
    description: description.value
}

function createEventCard(){
    const card=document.createElement("div");
    card.className="Event-Card";
    card.innerHTML=`
    <button class="Delete-btn">X</button>
    <h2 id="evetitle">${eventTitle}</h2>
    <h3 id="evedat">📅 ${eventDate}</h3>
    <div id="cat">${category}</div>
    <p id="desc">${description}</p>
    `
}

function addEvent(){
    const emptyState=document.getElementById("empty-state")
    Event-CSSContainerRule.appendChild(createEventCard())
}

