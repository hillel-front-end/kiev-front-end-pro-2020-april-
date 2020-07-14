import CandidatesView  from '../view/candidates.view';
import CandidatesModel from '../model/cadidates.model';


class CandidateController {
    constructor(Model, View) {
        this.model = new Model();
        this.view = new View();
    }

    onInit() {
        this.getModelCandidates();
    }

    getModelCandidates() {
        this.model.asyncGetCanidates();
        console.log(this.candidates, 'candidates');
    }
}


export default new CandidateController(CandidatesModel, CandidatesView)




