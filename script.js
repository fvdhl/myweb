// document.querySelector.body.console.log("his");

// document.body.classList.add("sticky");
console.log("hi");

const sectionHeroEl = document.querySelector(".hero");

const hero = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.IsIntersecting) {
      console.log("hiiiii");
      document.body.classList.add("sticky");
    } else if (ent.IsIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(hero);
