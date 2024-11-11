// script.js
function changeDetails() {
    const eventDate = prompt("Introduce la nueva fecha del almuerzo:");
    const eventTime = prompt("Introduce la nueva hora del almuerzo:");
    const eventLocation = prompt("Introduce el nuevo lugar del almuerzo:");

    if (eventDate) document.getElementById('event-date').textContent = eventDate;
    if (eventTime) document.getElementById('event-time').textContent = eventTime;
    if (eventLocation) document.getElementById('event-location').textContent = eventLocation;
}