const getMenu = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/menu`);
  const { data } = await response.json();
  return data;
};

export { getMenu };
