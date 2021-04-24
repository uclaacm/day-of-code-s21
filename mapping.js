function createListOfProjects() {
  console.log("entered function");
  const siteNames = [
    {
      path: "genshin",
      name: "Our Example!",
    },
    {
      path: "kimi",
      name: "Kimi No Na Wa",
    },
    {
      path: "australian",
      name: "Australian Animals",
    },
    {
      path: "kpop",
      name: "The Coolest Guy In Kpop",
    },
    {
      path: "salmon",
      name: "Salmon Sushi!",
    },
    {
      path: "potter",
      name: "Harry Potter Info!",
    },
    {
      path: "joestar",
      name: "The Joestar Family (part 1-3)",
    },
  ];
  let list = "";
  //   <a class="project" href ="https://tinyurl.com/teachlaimg"
  //         rel = "noopener noreferrer"
  //         target = "_blank">
  //           <img class="project-image" src="https://tinyurl.com/teachlaimg">
  //           <div class="project-name">Project Name</div>
  //   </a>

  for (let proj of siteNames) {
    console.log(proj);

    list +=
      `<a class="project" rel = "noreferrer noopener" target = "_blank"  href = "showcase-pages/` +
      proj.path +
      `/index.html">
    <img class="project-image" src="showcase-pages/` +
      proj.path +
      `/` +
      proj.path +
      `.png">
    <div class="project-name">` +
      proj.name +
      `</div>
  </a>`;
  }
  console.log(list);
  return list;
}
