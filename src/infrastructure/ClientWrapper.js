export const makeGetRequest = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  } catch {
    const message = `An error has occured in makeGetRequest`;
    throw new Error(message);
  }
};

export const makePostRequest = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const json = response.json();
      return json;
    } else {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  } catch {
    const message = `An error has occured in makePostRequest`;
    throw new Error(message);
  }
};
