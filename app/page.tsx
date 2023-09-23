'use client'
import { useState, useEffect } from 'react';
import UserList from './userList';
import ModuleList from './modulesList';
import { getData } from './getData';
import { postCreateUser } from './postData';
import { getModuleData } from './getModuleData';

interface FormData {
  name: string;
  value: string;
}

function convertData(dataForm: FormData[]): Record<string, string> {
  const result: Record<string, string> = {};

  for (const item of dataForm) {
    console.log("dataForm")
    console.log(dataForm)
    console.log("dataForm")
    switch (item.name) {
      case 'username':
        result['username'] = item.value;
        break;
      case 'name':
        result['name'] = item.value;
        break;
      case 'last_name':
        result['last_name'] = item.value;
        break;
      case 'userType':
        result['user_type'] = item.value;
        break;
      case 'password':
        result['password'] = item.value;
        break;
      case 'status':
        result['status'] = item.value;
        break;
      default:
        break;
    }
  }
   console.log("result")
   console.log(result)
   console.log("result")
  return result;
}

export default function Page() {
  const [users, setUsers] = useState([]);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingModule, setLoadingModule] = useState(true);

  useEffect(() => {
    getData()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });

      getModuleData()
      .then(data => {
        setModules(data);
        setLoadingModule(false)
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoadingModule(false);
      });
  }, []);

  async function create(formData: FormData) {
    const convertedData = convertData([formData]);
    const response = await postCreateUser(convertedData);
    console.log(response);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevents the default form submission behavior

    // Get form data
    const formData = new FormData(e.currentTarget);

    // Create user
    try {
      const convertedData = convertData([
        { name: "username", value: formData.get('username')?.toString()! },
        { name: "name", value: formData.get('firstName')?.toString()! },
        { name: "last_name", value: formData.get('lastName')?.toString()! },
        { name: "userType", value: formData.get('userType')?.toString()! },
        { name: "password", value: formData.get('password')?.toString()! },
        { name: "status", value: formData.get('status')?.toString()! },
      ]);

      const response = await postCreateUser(convertedData);

      console.log('User created:', response);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  return (
  <main>
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">

      <div style={{ borderRadius: '20px' }}>
        <img
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/53787841/270096343-3a9cb9cb-d458-4058-876e-601853b55062.png"
          alt="Page Banner"
          className="w-full mb-8 rounded-lg"
        />
      </div>
      {/* <form action={create}> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="-mx-3 flex flex-wrap">
          {/* FIRST NAME */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          {/* LAST NAME */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          {/* USERNAME */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="username"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          {/* USER TYPE */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="userType"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                User Type
              </label>
              <select
                name="userType"
                id="userType"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>

          {/* PASSWORD */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          {/* STATUS */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="status"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

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
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          {/* ... Your form code ... */}

          {/* Conditionally render UserList */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UserList users={users} />
          )}

        </div>
      </div>

        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            {/* ... Your form code ... */}

            {/* Conditionally render UserList */}
            {loadingModule ? (
              <div>loadingModule...</div>
            ) : (
              <ModuleList modules={modules}/>
            )}

          </div>
        </div>

      
      </div>
    </div>
  </main>)
}



 