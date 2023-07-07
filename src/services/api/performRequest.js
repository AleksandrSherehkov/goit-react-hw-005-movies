export const performRequest = async (requestFn, url, signal) => {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await requestFn(url, { signal });
    clearTimeout(timeout);
    return response.data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request timed out');
    }
    throw error;
  }
};
