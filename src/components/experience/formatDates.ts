export const formatDates = (startDate: string, endDate: string | null) => {
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const start = new Date(startDate);
  const end = new Date(endDate ?? Date.now());

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffDays / 365);
  const monthsLeft = Math.floor((diffDays % 365) / 30);
  const daysLeft = diffDays % 30;

  let observation = '';

  if (years > 0) {
    observation = `${years} ${years === 1 ? 'ano' : 'anos'}`;
  } else if (monthsLeft > 0) {
    observation = `${monthsLeft} ${monthsLeft === 1 ? 'mês' : 'meses'}`;
  } else {
    observation = `${daysLeft} ${daysLeft === 1 ? 'dia' : 'dias'}`;
  }

  const startMonth = months[start.getMonth()];
  const startYear = start.getFullYear();

  const endMonth = months[end.getMonth()];
  const endYear = end.getFullYear();

  let formattedDate =
    endDate == null
      ? `${startMonth} ${startYear} - Atual`
      : `${startMonth} ${startYear} - ${endMonth} ${endYear}`;

  if (years > 0) {
    formattedDate += ` (${years} anos)`;
  } else {
    formattedDate += ` (${observation})`;
  }

  return formattedDate;
};
