function createListOfProjects() {
  console.log("entered function");
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
  let list = "";
  //   <a class="project" href ="https://tinyurl.com/teachlaimg"
  //         rel = "noopener noreferrer"
  //         target = "_blank">
  //           <img class="project-image" src="https://tinyurl.com/teachlaimg">
  //           <div class="project-name">Project Name</div>
  //   </a>

  //sort siteNames by newest first
  //TODO: Make it support both ascending/descending date time
  siteNames.sort(
    (first, second) => second.date.getTime() - first.date.getTime()
  );

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
