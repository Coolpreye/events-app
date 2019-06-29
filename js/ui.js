class UI {
    constructor() {
        // app initialization
        this.init();
    }
    init() {
        // print categories in <select>
        this.printCategories();

        // select the result
        this.result = document.getElementById('result');
    }

    displayEvents(events) {
        let htmlTemplate = '';

        events.forEach(eventInfo => {
            htmlTemplate += `
                <div class="col-md-4 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                                <p class="lead text-info">Event Information:</p>
                                <p>${eventInfo.description.text.substring(0, 200)}...</p>
                                <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                                <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>

                                <a href="${eventInfo.url}" class="btn btn-primary btn-block mt-4" target="_blank">Get Ticket</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        });

        this.result.innerHTML = htmlTemplate;
    }

    // prints the categories
    printCategories() {
        const categoriesList = eventBrite.getCategoriesAPI()
            .then(categories => {
                const categoriesList = categories.categories.categories;
                const categorySelect = document.querySelector('#category');

                categoriesList.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name));
                    categorySelect.appendChild(option);
                })
            })
            .catch(error => console.log(error));
    }

    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);

        setTimeout(() => {
            document.querySelector('#search-events .alert').remove();
        }, 3000)
    }
}














