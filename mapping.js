function createListOfProjects() {
  //console.log("entered function");
  const siteNames = [
    {
      path: "genshin",
      name: "Our Example!",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
    {
      path: "kimi",
      name: "Kimi No Na Wa",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
    {
      path: "australian",
      name: "Australian Animals",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
    {
      path: "kpop",
      name: "The Coolest Guy In Kpop",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
    {
      path: "salmon",
      name: "Salmon Sushi!",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
    {
      path: "potter",
      name: "Harry Potter Info!",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
    {
      path: "joestar",
      name: "The Joestar Family (part 1-5)",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
    {
      path: "dogs",
      name: "Dogs Are Love",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
  ];
  //sort siteNames by newest first
  //TODO: Make it support both ascending/descending date time
  siteNames.sort(
    (first, second) => second.date.getTime() - first.date.getTime()
  );

  //create new doc element to be added
  let projectsList = document.createElement("div");
  projectsList.className = "projects-container";
  projectsList.id = "projects";

  //create each new project within grid list
  for (let proj of siteNames) {
    //creating anchor element
    let newProj = document.createElement("a");
    newProj.className = "project";
    newProj.rel = "no referrer noopener";
    newProj.target = "_blank";
    newProj.href = "showcase-pages/" + proj.path + "/index.html";

    //creating inner image within anchor element
    let newProjImage = document.createElement("img");
    newProjImage.className = "project-image";
    newProjImage.src = "showcase-pages/" + proj.path + "/" + proj.path + ".png";
    newProj.appendChild(newProjImage);

    //creating title section within anchor
    let newProjTitle = document.createElement("div");
    newProjTitle.className = "project-name";
    let newProjText = document.createTextNode(proj.name);
    newProjTitle.appendChild(newProjText);

    //adding title to project
    newProj.appendChild(newProjTitle);
    //adding new project to list of projects
    projectsList.appendChild(newProj);
  }
  document.body.appendChild(projectsList);
}
