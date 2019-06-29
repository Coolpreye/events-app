class EventBrite {
    constructor() {
        this.authToken = 'X6XKNZ2WW2U7H2E4CSAY';
        this.orderBy = 'date'; 
    }

    async queryAPI(eventName, category) {
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&search_type=${category}&token=${this.authToken}`);
        
        const events = await eventsResponse.json();

        return {
            events
        }
    }

    // get categories from api
    async getCategoriesAPI() {
        // query the API
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.authToken}`);

        // return as json
        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }


}