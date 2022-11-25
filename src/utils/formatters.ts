const regexDescription = /(<([^>]+)>)/gi;
export const formatHtml = (data: string) => data?.replace(regexDescription, '');
