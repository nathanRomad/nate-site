const contentTarget = document.querySelector(".project_modal")
const eventHub = document.querySelector(".portfolio-items")

eventHub.addEventListener("click", e => {
  if (e.target.id === "topFIVE"){
    // console.log("click")
    contentTarget.innerHTML = `
      <div id="about__modal" class="modal--parent">
        <div id="about__content" class="modal--content">
          <h2 class="modalTitle">topFIVE</h2>
          <section>Full-stack one page application for keeping track of your topFIVE's! 
          This application will allow a user to log in and create, read, update, or delete their topFIVE's. 
          A user will be able to 'follow' other users topFIVE's.</section><br>
          <div class="modalLinks">
            <section class="modalLink"><a target="_blank" href="https://github.com/nathanRomad/topFIVE">Code</a></section>
            </div>
            <br>
            <h3 class="modalSubTitle">topFIVE Homepage</h3>
            <img src="img/topFIVE/topFIVE_homepage.png">
        </div>
      </div>
    `
  } else if (e.target.id === "resume"){
    // console.log("click")
    contentTarget.innerHTML = `
      <div id="about__modal" class="modal--parent">
        <div id="about__content" class="modal--content">
          <section>Nathan Hamilton Resume</section><br>
          <section><a target="_blank" href="img/resume/Nate Hamilton 2021.v2.pdf">GitHub</a></section>
          <button id="modal--close">Close</button>
          <div class="modal__message"></div>
        </div>
      </div>
    `
  }
})



eventHub.addEventListener("click", e => {
  // debugger
  if (e.target.id === "modal--close"){
    console.log("click")

    closeModal()
  }
})

const closeModal = () => {
  contentTarget.innerHTML = ""
}