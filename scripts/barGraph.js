const data = [5, 10, 12];
const width = 200,
  scaleFactor = 10,
  barHeight = 20;

const graph = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', barHeight * data.length);

const bar = graph
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', (d, i) => 'translate(0,' + i * barHeight + ')');

bar
  .append('rect')
  .attr('width', (d) => {
    return d * scaleFactor;
  })
  .attr('height', barHeight - 1);

bar
  .append('text')
  .attr('x', (d) => {
    return d * scaleFactor;
  })
  .attr('y', barHeight / 2)
  .attr('dy', '0.35em')
  .text(function (d) {
    return d;
  });
