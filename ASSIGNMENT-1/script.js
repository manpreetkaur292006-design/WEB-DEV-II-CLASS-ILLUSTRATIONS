

// TARGET THE FORM AND BUTTONS
const eventForm = document.getElementById("Event-form");
const eventTitle = document.getElementById("Event-Title");
const eventDate = document.getElementById("Event-Date");
const category = document.getElementById("Category");
const description = document.getElementById("Description");

const addEventBtn = document.getElementById("b1");
const clearAllBtn = document.getElementById("b2");
const addSampleBtn = document.getElementById("b3");
const democontent=document.getElementById("demoContent")

const eventContainer = document.getElementById("Event-container");

// Sample events
const SampleEvents = [
  {
    title: "Web-Development",
    date: "2026-02-10",
    category: "Webinar",
    description: "A Webinar on Web Development."
  },
  {
    title: "Debuggers Coffee Cup",
    date: "2026-02-12",
    category: "Social",
    description: "Code Debugging Competition."
  }
];

// Create one event card
function createEventCard(eventData) {
  const card = document.createElement("div");
  card.className = "Event-Card";
  card.innerHTML = `
    <button class="delete-btn">X</button>
    <h2 class="ev-title">${eventData.title}</h2>
    <h3 class="ev-date">📅 ${eventData.date}</h3>
    <div class="ev-cat">${eventData.category}</div>
    <p class="ev-desc">${eventData.description}</p>
  `;
  return card;
}

// Showing the empty-state if no events
function showEmptyState() {
  if (!eventContainer.querySelector(".empty-state")) {
    const div = document.createElement("div");
    div.className = "empty-state";
    div.textContent = "No events yet. Add your first event!";
    eventContainer.appendChild(div);
  }
}

// Removing the empty-state if present
function removeEmptyState() {
  const emptyState = eventContainer.querySelector(".empty-state");
  if (emptyState) {
    emptyState.remove();
  }
}

// Adding one event to My Events
function addEvent(eventData) {
  removeEmptyState();
  const card = createEventCard(eventData);
  eventContainer.appendChild(card);
}

// FORM SUBMIT 
eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const eventData = {
    title: eventTitle.value,
    date: eventDate.value,
    category: category.value,
    description: description.value
  };
  addEvent(eventData);
  eventForm.reset();
});

// "Add Event" 
addEventBtn.addEventListener("click", () => {
  const eventData = {
    title: eventTitle.value,
    date: eventDate.value,
    category: category.value,
    description: description.value
  };

  addEvent(eventData);
  eventForm.reset();
});

// "Clear All Events"
clearAllBtn.addEventListener("click", () => {
  eventContainer.innerHTML = "";
  showEmptyState();
});

// "Add Sample Events" 
addSampleBtn.addEventListener("click", () => {
  SampleEvents.forEach((ev) => addEvent(ev));
});

// delete button on cards
eventContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const card = e.target.closest(".Event-Card");
    card.remove();
    if (eventContainer.querySelectorAll(".Event-Card").length === 0) {
      showEmptyState();
    }
  }
});

// dom manipulation demo
document.addEventListener("keydown",function(e){
  democontent.textContent="You Pressed :" + e.key;
})



