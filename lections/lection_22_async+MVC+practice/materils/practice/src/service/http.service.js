const DOMAIN = 'http://localhost:3005';

class HttpService {

    constructor() {
        this._url = null;
        this.domain = DOMAIN;
    }

    get url() {
        return this._url;
    }

    set url(path) {
        this._url = `${this.domain}${path}`
    }

    async get(path) {
        this.url = path;
        const response = await fetch(this.url);
        const data = response.json();

        return data;
    }
}


export default new HttpService();
