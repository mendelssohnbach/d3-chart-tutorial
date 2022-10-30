const width = 400;
const height = 400;
const data = [10, 15, 20, 25, 30];

const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

const x_scale = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width - 100]);

const y_scale = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([height / 2, 0]);

const x_axis = d3.axisBottom().scale(x_scale);

const y_axis = d3.axisLeft().scale(y_scale);

svg.append('g').attr('transform', 'translate(50, 10)').call(y_axis);

const xAxisTranslate = height / 2 + 10;

svg
  .append('g')
  .attr('transform', 'translate(50, ' + xAxisTranslate + ')')
  .call(x_axis);
