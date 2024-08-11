export const getCurrentDateFormated = () => {
  const date = new Date();
  
  const options: Intl.DateTimeFormatOptions= {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
  };

  const formatDate =  date.toLocaleDateString('pt-BR', options);
  return formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
}
