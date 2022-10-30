const width = 400;
const height = 100;

const data = [10, 15, 20, 25, 30];

const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

const scale = d3
  .scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([0, width - 100]);

const x_axis = d3.axisBottom().scale(scale);

svg.append('g').call(x_axis);
