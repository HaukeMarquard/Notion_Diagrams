import { get_data } from "./notion/get_data";

document.addEventListener("DOMContentLoaded", function () {
  var chart = bb.generate({
    data: {
      columns: [
        ["Data 1", 30, 200, 100, 400, 150, 250],
        ["Data 2", 50, 20, 10, 40, 15, 25],
      ],
      type: "bar",
    },
    bindto: "#chart",
  });
});

get_data();

function executeEveryMinute() {}

setInterval(executeEveryMinute, 60000);
