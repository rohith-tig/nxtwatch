export const getTrendingData = async (authorization: string) => {
  const url = "https://apis.ccbp.in/videos/trending";

  const options = {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
    method: "GET",
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("trending service error:", error);
    throw new Error("Failed to fetch trending data");
  }
};

export const getGamingData = async (authorization: string) => {
  const url = "https://apis.ccbp.in/videos/gaming";

  const options = {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
    method: "GET",
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("gaming service error:", error);
    throw new Error("Failed to fetch gaming data");
  }
};

export const getHomeData = async (authorization: string, searched: string) => {
  console.log("home - search query:", searched);
  const url = `https://apis.ccbp.in/videos/all/?search=${searched}`;

  const options = {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
    method: "GET",
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Home service error:", error);
    throw new Error("Failed to fetch home data");
  }
};

export const videoData = async (authorization: string, id: string) => {
  const url = `https://apis.ccbp.in/videos/${id}`;

  const options = {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
    method: "GET",
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("video service error:", error);
    throw new Error("Failed to fetch video data");
  }
};
