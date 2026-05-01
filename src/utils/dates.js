export function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export function sameCalendarDay(a, b) {
  const x = startOfDay(a);
  const y = startOfDay(b);
  return x.getTime() === y.getTime();
}
