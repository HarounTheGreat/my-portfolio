export const isVolunteering = () => {
  const currentUrl = window.location.href;
  return currentUrl.includes("volunteering");
};
