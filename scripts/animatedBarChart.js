const svg = d3.select('svg'),
  margin = 200,
  width = svg.attr('width') - margin,
  height = svg.attr('height') - margin;

svg
  .append('text')
  .attr('transform', 'translate(100,0)')
  .attr('x', 50)
  .attr('y', 50)
  .attr('font-size', '24px')
  .text('XYZ Foods Stock Price');

const x = d3.scaleBand().range([0, width]).padding(0.4),
  y = d3.scaleLinear().range([height, 0]);

const g = svg.append('g').attr('transform', 'translate(100, 100)');

d3.csv('./data/xyz.csv', (error, data) => {
  if (error) throw error;

  x.domain(data.map((d) => d.year));
  y.domain([0, d3.max(data, (d) => d.value)]);

  g.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .append('text')
    .attr('y', height - 250)
    .attr('x', width - 100)
    .attr('text-anchor', 'end')
    .attr('stroke', 'black')
    .text('Year');

  g.append('g')
    .call(
      d3
        .axisLeft(y)
        .tickFormat((d) => `$${d}`)
        .ticks(10)
    )
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '-5.1em')
    .attr('text-anchor', 'end')
    .attr('stroke', 'black')
    .text('Stock Price');

  g.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .on('mouseover', onMouseOver) // Add listener for the mouseover event
    .on('mouseout', onMouseOut) // Add listener for the mouseout event
    .attr('x', (d) => x(d.year))
    .attr('y', (d) => y(d.value))
    .attr('width', x.bandwidth())
    .transition()
    .ease(d3.easeLinear)
    .duration(400)
    .delay((d, i) => i * 50)
    .attr('height', (d) => height - y(d.value));
});

//mouseover event handler function
function onMouseOver(d, i) {
  d3.select(this).attr('class', 'highlight');
  d3.select(this)
    .transition() // adds animation
    .duration(400)
    .attr('width', x.bandwidth() + 5)
    .attr('y', (d) => {
      return y(d.value) - 10;
    })
    .attr('height', (d) => {
      return height - y(d.value) + 10;
    });

  g.append('text')
    .attr('class', 'val')
    .attr('x', () => x(d.year))
    .attr('y', () => y(d.value) - 15)
    .text(() => {
      return [`$${d.value}`]; // Value of the text
    });
}

//mouseout event handler function
function onMouseOut(d, i) {
  // use the text label class to remove label on mouseout
  d3.select(this).attr('class', 'bar');
  d3.select(this)
    .transition() // adds animation
    .duration(400)
    .attr('width', x.bandwidth())
    .attr('y', (d) => y(d.value))
    .attr('height', (d) => height - y(d.value));

  d3.selectAll('.val').remove();
}
