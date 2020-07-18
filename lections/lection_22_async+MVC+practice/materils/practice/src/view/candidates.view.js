export default class CandidatesView {
    constructor(selector) {
        this.app = document.querySelector(selector);
    }

    createViewCandidates(candidates) {
        const markup = `
            <div class="candidates">
                ${candidates.map(candidate => {
                    return `<section class="candidates__candidate" data-id="${candidate.id}">
                        <span>${candidate.age}</span>
                        <span>${candidate.sex}</span>
                        <span>${candidate.name}</span>
                    </section>`
                }).join('')}
            </div>
        `

        return markup;
    }


    render(candidates) {
        const app = this.app;

        if (app) {
            app.innerHTML = this.createViewCandidates(candidates)
        }
    }
}