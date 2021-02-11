class Card {
  finishCard(event) {
    console.log("FINISH");
    const actionButton = event.currentTarget;
    const finishedProjects = document.querySelector("#finished-projects ul");
    actionButton.innerText = "Activate";
    const card = actionButton.parentNode;
    actionButton.removeEventListener("click", (event) =>
      this.newCard.finishCard(event)
    );
    actionButton.addEventListener("click", (event) => this.activateCard(event));
    finishedProjects.appendChild(card);
  }

  activateCard(event) {
    console.log("ACTIVATE");
    const actionButton = event.currentTarget;
    const activeProjects = document.querySelector("#active-projects ul");
    actionButton.innerText = "Finish";
    const card = actionButton.parentNode;
    actionButton.removeEventListener("click", (event) =>
      this.newCard.activateCard(event)
    );
    actionButton.addEventListener("click", (event) => this.finishCard(event));
    activeProjects.appendChild(card);
  }

  showMoreInfo(event) {
    const target = event.currentTarget;
    const name = target.parentElement.getAttribute('data-extra-info');
    const modal = new MoreInfoModal(name);
  }
}

class MoreInfoModal {
  constructor(name) {
    this.message = name;
    this.render();
  }

  closeModal() {
    const element = this.moreInfoModal;
    element.parentNode.removeChild(element);
  }

  render() {
    this.moreInfoModal = document.createElement("div");
    this.moreInfoModal.className = "more-info-modal";
    this.moreInfoModal.innerHTML = `
			<h2>${this.message}</h2>
    `;
    this.moreInfoModal.addEventListener("click", this.closeModal.bind(this));
    document
      .getElementById("main-header")
      .parentElement.append(this.moreInfoModal);
  }
}

class App {
  static init() {
    this.newCard = new Card();
    const projectList = document.querySelectorAll(".alt");
    projectList.forEach((moreInfoBtn) => {
      moreInfoBtn.addEventListener("click", (event) =>
        this.newCard.showMoreInfo(event)
      );
    });
    const activeProjectCollection = document.querySelectorAll(
      "#active-projects .card"
    );
    activeProjectCollection.forEach((item) => {
      item.lastElementChild.addEventListener("click", (event) =>
        this.newCard.finishCard(event)
      );
    });
    const finishedProjectCollection = document.querySelectorAll(
      "#finished-projects .card"
    );
    finishedProjectCollection.forEach((item) => {
      item.lastElementChild.addEventListener("click", (event) =>
        this.newCard.activateCard(event)
      );
    });
  }
}
App.init();
