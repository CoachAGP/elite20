(() => {
  const rosters = {
    girls: {
      title: "2026 Elite 20 National Girls Game",
      image: "assets/7014.jpg",
      teams: [
        ["Team Impact", [["Kaleena Smith", "ESPN #1 2027"], ["Caroline Bradley", "ESPN #3 2027"], ["GG Banks", "ESPN #4 2027"], ["Hailey Benbow", "ESPN #18 2028"], ["Giovanna Burress", "ESPN #11 2028"], ["Reece Gilpatrick", "ESPN #6 2028"], ["Jayden McClain", "ESPN #12 2029"], ["Jessie Moses", "ESPN #42 2027"], ["Qandace Samuels", "ESPN #11 2027"], ["Zya Smalls", "ESPN #34 2027"]]],
        ["Team Unity", [["Tatianna Griffin", "ESPN #1 2028"], ["Eve Long", "ESPN #5 2027"], ["Chloe Johnson", "ESPN #2 2028"], ["Sydney Douglas", "ESPN #3 2028"], ["Jayla Forbes", "ESPN #13 2027"], ["Jaylah King", "ESPN #12 2028"], ["Corinne Lomax", "ESPN #90 2027"], ["Bella Owumi", "ESPN #3 2027"], ["Ari Peterson", "ESPN #38 2028"], ["Morgan Reckley", "ESPN #5 2028"]]]
      ]
    },
    boys: {
      title: "2026 Elite 20 National Boys Game",
      image: "assets/7389.jpg",
      teams: [
        ["Team Impact", [["Malachi Jordan", "ESPN #7 2027"], ["Isaiah Hill", "ESPN #10 2027"], ["Gabe Nesmith", "ESPN #20 2027"], ["Jakyi Miles", "ESPN #8 2028"], ["Javon Bardwell", "ESPN #37 2027"], ["Josh Smith Jr.", "ESPN 2027"], ["Tyran Frazier", "ESPN #32 2027"], ["Braxton Bogard", "ESPN #22 2028"], ["Peyton Kemp", "ESPN 2027"], ["Brandon Woodard", "ESPN #52 2027"]]],
        ["Team Unity", [["Demarcus Henry", "ESPN #3 2027"], ["Adan Diggs", "ESPN #5 2027"], ["Kevin Savage", "ESPN #27 2027"], ["Lewis Uvwo", "ESPN #25 2027"], ["King Kendrick", "ESPN 2027"], ["Shalen Sheppard", "ESPN #8 2028"], ["Romelo Hill", "ESPN 2027"], ["Draydne McDaniel", "ESPN #2 2029"], ["Declan Griffiths", "Ranked Top 100 in 2027"], ["Peter Julius", "ESPN #54 2028"]]]
      ]
    }
  };

  const sponsorPackages = [
    ["$20,000", "Title Sponsor", "Presented by your brand with the largest event footprint.", ["Presented By Your Brand", "Logo on jersey and warm up shirt", "Vendor presence at event", "Digital content pre-event and post-event", "MVP rights", "In-game advertising", "Direct engagement with future D1 talent", "Direct engagement with future NBA and WNBA stars"]],
    ["$8,000", "Jersey Sponsor", "Premium jersey placement connected to elite player visibility.", ["Brand visibility on event apparel", "Association with national-level talent", "Social and event-day recognition"]],
    ["$6,000", "Fan Zone", "Own a high-energy touchpoint for fans and families.", ["Dedicated fan activation area", "Community engagement throughout the event", "Strong photo and social content opportunity"]],
    ["$3,500", "Floor Decal", "Put your brand on the court where every highlight happens.", ["Court-level brand placement", "Visibility during gameplay and content capture", "Great entry point for local and regional partners"]],
    ["$2,000", "Vendor At Event", "Meet the crowd directly with an in-person presence.", ["Vendor table at the event", "Direct fan and family engagement", "Flexible activation options"]],
    ["$1,000", "Timeout / Quarter Break", "Own a short, memorable moment inside the game flow.", ["Recognition during timeout or between quarters", "Budget-friendly exposure", "Can be structured around a custom activation"]]
  ];

  const rosterButtons = [...document.querySelectorAll(".segmented button")];
  const rosterPoster = document.querySelector(".rosterLayout .poster");
  const rosterTitle = document.querySelector(".teamBoard h3");
  const rosterTeams = document.querySelector(".teamBoard .teams");

  function showRoster(key) {
    const roster = rosters[key];
    if (!roster || !rosterPoster || !rosterTitle || !rosterTeams) return;
    rosterButtons.forEach((button) => {
      const selected = button.textContent.trim().startsWith(key === "girls" ? "Girls" : "Boys");
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    rosterPoster.src = roster.image;
    rosterPoster.alt = `${roster.title} roster poster`;
    rosterTitle.textContent = roster.title;
    rosterTeams.replaceChildren(...roster.teams.map(([name, players]) => {
      const team = document.createElement("div");
      team.className = "team";
      const heading = document.createElement("h4");
      heading.textContent = name;
      const list = document.createElement("ol");
      players.forEach(([player, rank]) => {
        const item = document.createElement("li");
        const playerName = document.createElement("span");
        playerName.textContent = player;
        const playerRank = document.createElement("small");
        playerRank.textContent = rank;
        item.append(playerName, playerRank);
        list.append(item);
      });
      team.append(heading, list);
      return team;
    }));
  }

  rosterButtons.forEach((button) => button.addEventListener("click", () => showRoster(button.textContent.trim().startsWith("Boys") ? "boys" : "girls")));

  const sponsorButtons = [...document.querySelectorAll(".sponsorTabs button")];
  const sponsorDetail = document.querySelector(".sponsorDetail");
  function showSponsor(index) {
    const details = sponsorPackages[index];
    if (!details || !sponsorDetail) return;
    sponsorButtons.forEach((button, buttonIndex) => {
      const selected = buttonIndex === index;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    const [price, name, summary, benefits] = details;
    const detailCopy = sponsorDetail.querySelector("div");
    detailCopy.querySelector(".eyebrow").textContent = price;
    detailCopy.querySelector("h3").textContent = name;
    detailCopy.querySelector("p:last-child").textContent = summary;
    const benefitsList = sponsorDetail.querySelector("ul");
    benefitsList.replaceChildren(...benefits.map((benefit) => {
      const item = document.createElement("li");
      item.textContent = `✓ ${benefit}`;
      return item;
    }));
  }
  sponsorButtons.forEach((button, index) => button.addEventListener("click", () => showSponsor(index)));
})();
