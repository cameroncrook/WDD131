import { participantTemplate, successTemplate } from "./Templates.mjs";

let participants = 1;

document.querySelector('#add').addEventListener('click', addParticipant);

document.querySelector('form').addEventListener('submit', handleFormSubmit);

function addParticipant() {
    participants ++;

    const newParticipantHTML = participantTemplate(participants);

    document.querySelector('#add').insertAdjacentHTML("beforebegin", newParticipantHTML);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const total = calculateTotalFees();

    const adultName = document.querySelector('#adult_name').value;

    document.querySelector('form').style.display = "none";

    const info = {
        name: adultName,
        participants: participants,
        total: total
    }

    document.querySelector('.testbox').innerHTML += successTemplate(info);
}

function calculateTotalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    return feeElements.reduce((acc, fee) => acc + Number(fee.value), 0);
}