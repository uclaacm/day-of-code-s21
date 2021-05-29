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
    {
      path: "gravity",
      name: "Why I Love Gravity Falls!",
      date: new Date(2021, 5, 29),
    },

    {
      path: "ladyBlog",
      name: "LadyBlog",
      date: new Date(2021, 5, 29),
    },

    {
      path: "butterfly",
      name: "Butterflies",
      date: new Date(2021, 5, 29),
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
    newProj.rel = "noreferrer noopener";
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

function createListOfWinners() {
  const winners = [
    {
      path: "joestar",
      name: "The Joestar Family (part 1-5)",
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
      path: "kimi",
      name: "Kimi No Na Wa",
      //April 24, 2021
      date: new Date(2021, 3, 24),
    },
  ];

  //get element of the list of winners
  let winnersList = document.getElementById("winner-projects");
  for (let winner of winners) {
    //creating anchor element
    let newWinner = document.createElement("a");
    newWinner.className = "project carousel-cell";

    newWinner.rel = "noreferrer noopener";
    newWinner.target = "_blank";
    newWinner.href = "showcase-pages/" + winner.path + "/index.html";

    //creating inner image within anchor element
    let newWinnerImage = document.createElement("img");
    newWinnerImage.className = "project-image";
    newWinnerImage.src =
      "showcase-pages/" + winner.path + "/" + winner.path + ".png";
    newWinner.appendChild(newWinnerImage);

    //creating title section within anchor
    let newWinnerTitle = document.createElement("div");
    newWinnerTitle.className = "project-name";
    let newWinnerText = document.createTextNode(winner.name);
    newWinnerTitle.appendChild(newWinnerText);

    //adding title to winner
    newWinner.appendChild(newWinnerTitle);
    //adding new winner to list of winners
    winnersList.appendChild(newWinner);
  }
}
