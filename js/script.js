var elem = document.querySelector('.portfolio-container');

var iso = new Isotope(elem, {
itemSelector: '.portfolio-item',
layoutMode: 'fitRows'
});


var filtersElem = document.querySelector('.protfolio-btn');

filtersElem.addEventListener('click', function(event) {

if (!event.target.matches('button')) return;

var filterValue = event.target.getAttribute('data-filter');

iso.arrange({ filter: filterValue });

});


var buttons = document.querySelectorAll(".protfolio-btn button");

buttons.forEach(btn => {

btn.addEventListener("click", function(){

buttons.forEach(b => b.classList.remove("active"));

this.classList.add("active");

});

});


// dynamic-isotop

const projects = [
  {
    title: "Hill Family",
    category: "web",
    image: "./portfolioimg/Screenshot (177).png",
    link: "#"
  },
  {
    title: "Education Website",
    category: "web",
    image: "./portfolioimg/Screenshot (176).png",
    link: "#"
  },
  {
    title: "Cabinet Mark",
    category: "desktop",
    image: "./portfolioimg/Screenshot (173).png",
    link: "#"
  },
  {
    title: "Assessment",
    category: "mobile",
    image: "./portfolioimg/Screenshot (175).png",
    link: "#"
  },
  {
    title: "Beacon One Capital",
    category: "branding",
    image: "./portfolioimg/Screenshot (172).png",
    link: "#"
  },
  {
    title: "Amazon Clone",
    category: "web",
    image: "./portfolioimg/Screenshot (178).png",
    link: "#"
  }
];

const portfolioGrid = document.getElementById("portfolioGrid");

projects.forEach(project => {
  portfolioGrid.innerHTML += `
    <div class="col-lg-4 col-md-6 portfolio-item ${project.category}">
      <div class="card">
        <figure class="card-sub-img">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
        </figure>

        <div class="card-body">
          <span class="card-name">${project.title}</span>

          <div class="mt-3">
            <a href="${project.link}" target="_blank" class="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
});

// isotop-js

window.addEventListener("load", function () {

  var elem = document.querySelector(".portfolio-container");

  var iso = new Isotope(elem, {
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows"
  });

  var filtersElem = document.querySelector(".protfolio-btn");

  filtersElem.addEventListener("click", function (event) {

    if (!event.target.matches("button")) return;

    var filterValue = event.target.getAttribute("data-filter");

    iso.arrange({
      filter: filterValue
    });

  });

});

// email-js

document.querySelector(".contact-form").addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = document.querySelectorAll('.form-input');
    const service = document.querySelector('.form-slecter');
    const project = document.querySelector('.form-textarea');

    emailjs.send(
        'ts9482293@gmail.com',   // ← Put your Service ID here
        'template_varxcvs',  // ← Your Template ID
        {
            name: inputs[0].value,
            email: inputs[1].value,
            phone: inputs[2].value,
            service: service.value,
            timeline: inputs[3].value,
            project: project.value
        }
    )
    .then(() => {
        alert("✅ Message sent successfully!");
        document.querySelector(".contact-form").reset();
    })
    .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message");
    });

});
