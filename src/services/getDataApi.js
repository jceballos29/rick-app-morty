

export const getDataApi = async (url) => await fetch(url).then(response => response.json())