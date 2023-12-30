document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["HTML5", "CSS3", "Javascript", "TypeScript"],

      datasets: [
        {
          label: "# Skill",
          data: [90, 70, 50, 10],
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "blue",
          backgroundColor: ["#2187e7b3", "#2187e7b3", "#2187e7b3", "#2187e7b3"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
