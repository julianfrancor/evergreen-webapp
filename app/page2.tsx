// page.tsx

import { NextResponse } from 'next/server'
import { useState, useEffect } from 'react';
import UserList from './UserList'; // Import the UserList component
import { getData } from './getData'; // Import the getData function

interface FormData {
  name: string;
  value: string;
}

function convertData(dataForm: FormData[]): Record<string, string> {
  // ... (existing code remains the same)
}

async function postCreateUser(convertedData: any) {
  // ... (existing code remains the same)
}

export default function Page() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userData = await getData();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  async function create(formData: FormData) {
    // ... (existing code remains the same)
  }

  return (
    <main>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            {/* ... (existing form fields remain the same) */}
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>

          {/* GET ALL USERS */}
          <h2>User List</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UserList users={users} />
          )}

        </div>
      </div>
    </main>
  );
}
