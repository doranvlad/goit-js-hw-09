const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

const localStorageObj = JSON.parse(localStorage.getItem(localStorageKey));

if (localStorageObj != null) {
    form.elements.email.value = localStorageObj.email ?? "";
    form.elements.message.value = localStorageObj.message ?? "";
}

form.addEventListener('input', onFromInput);

function onFromInput(event) {
    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify({ email: email, message: message }));
};

form.addEventListener('submit', onFormClick);

function onFormClick(event) {
    event.preventDefault();

    const form = event.target;

    const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (email.trim() === '' || message.trim() === '') {
        return alert('All form fields must be filled in');
    };

    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    
    form.reset()
    localStorage.removeItem(localStorageKey)
};