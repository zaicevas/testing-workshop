export const getTitle = async () => {
  try {
    const response = await window.fetch("/title");

    return response.data;
  } catch (ex) {
    return null;
  }
};
