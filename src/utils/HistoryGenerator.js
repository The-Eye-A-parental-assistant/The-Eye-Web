function historyGenerator(time) {
  const now = new Date();
  const difference = now - new Date(time);
  const differenceInSeconds = Math.floor(difference / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInDays / 365);

  let history = '';

  if (differenceInYears > 0) {
    history = `${differenceInYears} Years Ago`;
  } else if (differenceInMonths > 0) {
    history = `${differenceInMonths} Months Ago`;
  } else if (differenceInDays > 0) {
    history = `${differenceInDays} Days Ago`;
  } else if (differenceInHours > 0) {
    history = `${differenceInHours} Hours Ago`;
  } else if (differenceInMinutes > 0) {
    history = `${differenceInMinutes} Minutes Ago`;
  } else if (differenceInSeconds > 0) {
    history = `${differenceInSeconds} Seconds Ago`;
  }
  return history;
}

export default historyGenerator;
