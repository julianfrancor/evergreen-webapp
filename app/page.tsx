import { NextResponse } from 'next/server'


interface FormData {
  name: string;
  value: string;
}

function convertData(dataForm: FormData[]): Record<string, string> {
  const result: Record<string, string> = {};

  for (const item of dataForm) {
    switch (item.name) {
      case 'username':
        result['username'] = item.value;
        break;
      case 'firstName':
        result['name'] = item.value;
        break;
      case 'lastName':
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

  return result;
}

async function postCreateUser(convertedData) {
  const res = await fetch('https://evergreen-adm.azurewebsites.net/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(convertedData),
  })
 
  const data = await res.json()
  console.log(data)
 
  return NextResponse.json(data)
}



async function getData() {
  const res = await fetch('https://evergreen-adm.azurewebsites.net/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

export default async function Page() {
  const data = await getData()
  console.log(data)
  
  async function create(formData: FormData) {
    'use server'
    console.log(formData)
    const convertedData = convertData([formData]);
    console.log(convertedData);
    postCreateUser(convertedData)
  }

  return (
  <main>
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
      
      <form action={create}>
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

      
      </div>
    </div>
  </main>)
}



 