import $http from '../service/http.service';

export default class CandidatesModel {
    constructor() {
        this.candidates = [];
    }
    
    async asyncGetCanidates() {
        this.candidates = await $http.get('/candidates');
        return this.candidates;
    }
}