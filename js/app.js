// instantiate classes

const eventBrite = new EventBrite();
const ui = new UI();

const form = document.getElementById('submitBtn');
form.addEventListener('click', e => {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    if(eventName !== '') {
        eventBrite.queryAPI(eventName, category)
            .then(events => {
                const eventList = events.events.events;
                if(eventList.length) {
                    ui.displayEvents(eventList);
                } else {
                    ui.printMessage('No Results Found', 'alert alert-danger mt-4 text-center');
                }
            });
    } else {
        ui.printMessage('Add an event or city', 'alert alert-danger mt-4 text-center');
    }

});

