let list = document.querySelectorAll(".ul__experience_list > li");

let experienceTitles = ['Estágio em web','Estágio em web com e-commerce','Monitor de Algoritmos'];
let experienceDates = ['Jun de 2021 - Out de 2021','Fev de 2022 - Atualmente','Mar de 2021 - Jun de 2021'];
let experienceNames = ['Conselho Federal de Medicina','Job Space Creative','Universidade Católica de Brasília'];
let experienceWords = ["Desenvolvi uma aplicação do 0, que ajudou médicos e advogados a encontrem informações.Desenvolvi habilidades de Design (UI/UX), em que me auxiliou a montar a aplicação para os médicos e advogados.Me especializei em Wordpress, PHP, front-end e design.","Desenvolvimento de sites e e-commerce usando as tecnologias HTML, CSS, PHP, Wordpress e Vtex IO","Auxiliei junto ao coordenador do curso os alunos na disciplina de algoritmos de programação, onde sanei as dúvidas e realizei algumas aulas sobre como codificar utilizando boas práticas."];
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("listClick");
    }
    this.classList.add("listClick");
    let h2 = document.querySelector(".h2__staticTitle");
    h2.innerHTML = experienceTitles[i];
    let time = document.querySelector(".time__staticTime");
    time.innerHTML = experienceDates[i];
    let name = document.querySelector(".p__staticJobName");
    name.innerHTML = experienceNames[i];
    let word = document.querySelector(".p__staticJobText");
    word.innerHTML = experienceWords[i];
  });
}





