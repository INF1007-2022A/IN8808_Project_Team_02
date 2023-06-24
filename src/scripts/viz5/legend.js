export function drawLegend() {
    const legendData = [
      { label: "Total de l'équipe", color: 'blue' },
      { label: 'Moyenne de tous les adversaires du Maroc', color: 'red' }
    ];
  
    const svgContainer = d3.select('.viz5-container');
  
    const legendContainer = svgContainer.insert('div', ':first-child')
      .attr('class', 'legend-container');
  
    const legend = legendContainer.append('svg')
      .attr('class', 'legend-svg')
      .attr('width', 500)
      .attr('height', 50);
  
    const legendItems = legend.selectAll('.legend')
      .data(legendData)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function (d, i) {
        return 'translate(' + (i * 200) + ', 0)';
      });
  
    legendItems.append('rect')
      .attr('x', 0)
      .attr('y', 16)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', function (d) {
        return d.color;
      });
  
    legendItems.append('text')
      .attr('x', 24)
      .attr('y', 30)
      .text(function (d) {
        return d.label;
      });
  }
  