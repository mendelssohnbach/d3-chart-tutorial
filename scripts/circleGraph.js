const width = 500;
const height = 500;

const data = [10, 15, 20, 25, 30];
const colors = ['#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837'];

const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

const g = svg
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', (d, i) => {
    return 'translate(0,0)';
  });

g.append('circle')
  .attr('cx', (d, i) => {
    return i * 100 + 50;
  })
  .attr('cy', (d, i) => {
    return 100;
  })
  .attr('r', (d) => {
    return d * 1.5;
  })
  .attr('fill', (d, i) => {
    return colors[i];
  });

g.append('text')
  .attr('x', (d, i) => {
    return i * 100 + 40;
  })
  .attr('y', 105)
  .attr('stroke', 'teal')
  .attr('font-size', '12px')
  .attr('font-family', 'sans-serif')
  .text((d) => {
    return d;
  });
