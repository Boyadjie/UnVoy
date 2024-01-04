export const smoothScroll = (event: React.MouseEvent, anchor: string) => {
  event.preventDefault();
  const element = document.getElementById(anchor);
  element && element.scrollIntoView({behavior: 'smooth', block: 'start'});
};
