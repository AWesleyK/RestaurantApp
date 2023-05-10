import { useState, useEffect } from 'react';

export default function TestFetch() {
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/menu');
        const data = await response.json();
        setMenuData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching menu data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Raw JSON Data</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(menuData, null, 2)}</pre>
      )}
    </div>
  );
}
