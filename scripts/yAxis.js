const width = 400,
  height = 400;

const data = [10, 15, 20, 25, 30];
const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

const scale = d3
  .scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([height / 2, 0]);

const y_axis = d3.axisLeft().scale(scale);

svg.append('g').attr('transform', 'translate(50, 50)').call(y_axis);
