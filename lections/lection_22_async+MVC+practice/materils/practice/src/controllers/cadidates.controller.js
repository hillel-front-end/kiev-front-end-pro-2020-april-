import CandidatesView  from '../view/candidates.view';
import CandidatesModel from '../model/cadidates.model';


class CandidateController {
    constructor(Model, View) {
        this.model = new Model();
        this.view = new View('#app');
    }

    async onInit() {
        const candidates = await this.asyncGetCanidates();
        this.renderCandidates(candidates);

    }

    async asyncGetCanidates() {
      return await this.model.asyncGetCanidates();
    }

    renderCandidates(candidates) {
        this.view.render(candidates)
    }
}


export default new CandidateController(CandidatesModel, CandidatesView)




