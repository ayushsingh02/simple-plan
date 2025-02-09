export const loadFav = async () => {
  try {
    const favData = await localStorage.getItem("favProduct");
    return favData ? JSON.parse(favData) : [];
  } catch (error) {
    return [];
  }
};

export const markFav = async (productId) => {
  try {
    const favData = await localStorage.getItem("favProduct");
    const favArray = favData ? JSON.parse(favData) : [];
    await localStorage.setItem(
      "favProduct",
      JSON.stringify([...favArray, productId])
    );
  } catch (error) {
    console.log(error);
  }
};

export const unMarkFav = async (productId) => {
  try {
    const favData = await localStorage.getItem("favProduct");
    const favArray = favData ? JSON.parse(favData) : [];
    await localStorage.setItem(
      "favProduct",
      JSON.stringify(favArray?.filter((i) => i !== productId))
    );
  } catch (error) {
    console.log(error);
  }
};
