import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [donations, setDonations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get('/api/donation/my-donations', { withCredentials: true });
        setDonations(res.data);
      } catch (err) {
        setError('Failed to fetch donations');
      } finally {
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Donations</h1>
      {Object.entries(donations).map(([type, items]) => (
        <div key={type} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 capitalize">{type}</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">No {type} donations yet.</p>
          ) : (
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={item._id || idx} className="border rounded p-4 bg-white shadow">
                  <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(item, null, 2)}</pre>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Profile; 