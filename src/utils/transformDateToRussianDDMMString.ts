export function transformDateToRussianDDMMString(date: Date) {
  return `${date.getDate()} ${translateMonth(date.getMonth())}`;
}

function translateMonth(monthNumber: number) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  return months[monthNumber];
}
