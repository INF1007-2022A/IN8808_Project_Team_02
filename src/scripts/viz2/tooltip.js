export function getContents(d) {
  const target = d.target.__data__;
  const tooltipContents = d3.create("div");
  const color = d3.select(d.target).attr("fill");

  // Color square and Team name on the same line
  const line1 = tooltipContents
    .append("div")
    .style("display", "flex")
    .style("align-items", "center");

  // Color square
  line1
    .append("div")
    .style("width", "12px")
    .style("height", "12px")
    .style("background-color", color)
    .style("margin-right", "10px");

  // Team name
  line1
    .append("div")
    .style("font-family", "'Montserrat', 'sans-serif'")
    .style("font-size", "24px")
    .style("font-weight", "normal")
    .text(target.team);

  // Number of goals
  tooltipContents
    .append("div")
    .style("font-family", "'Montserrat', 'sans-serif'")
    .style("font-weight", "normal")
    .text(target.value + " Buts");

  tooltipContents.selectAll("div").style("margin-bottom", "8px");

  return tooltipContents.node().outerHTML;
    // const target = d.target.__data__;
    // const tooltipContents = d3.create("div");
    // const color = d3.select(d.target).attr("fill");
    
    // // Color square
    // tooltipContents
    //   .append("div")
    //   .style("width", "12px")
    //   .style("height", "12px")
    //   .style("background-color", color);

    // // Team name
    // tooltipContents
    //   .append("div")
    //   .style("font-family", "Montserrat")
    //   .style("font-size", "24px")
    //   .style("font-weight", "normal")
    //   .text(target.team);
  
    // // Number of goals
    // tooltipContents
    //   .append("div")
    //   .style("font-family", "Montserrat")
    //   .style("font-weight", "normal")
    //   .text(target.value + " Buts");
  
  
    // tooltipContents.selectAll("div").style("margin-bottom", "8px");
  
    // return tooltipContents.node().outerHTML;
  }
  