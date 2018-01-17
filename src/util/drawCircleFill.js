export default function (context, start, color, fillColor, radius, lineWidth) {
  const handleRadius = radius;

  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.arc(start.x, start.y, handleRadius, 0, 2 * Math.PI);
  context.fillStyle = fillColor;
  context.fill();
  context.stroke();
}
