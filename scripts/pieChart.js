const data = [2, 4, 8, 10];

const svg = d3.select('svg'),
  width = svg.attr('width'),
  height = svg.attr('height'),
  radius = Math.min(width, height) / 2,
  g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

const color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

// Generate the pie
const pie = d3.pie();

// Generate the arcs
const arc = d3.arc().innerRadius(0).outerRadius(radius);

// Generate groups
const arcs = g.selectAll('arc').data(pie(data)).enter().append('g').attr('class', 'arc');

// Draw arc paths
arcs
  .append('path')
  .attr('fill', (d, i) => color(i))
  .attr('d', arc);
