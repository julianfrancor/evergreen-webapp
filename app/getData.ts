// getData.ts
export async function getData() {
  const res = await fetch('https://evergreen-adm.azurewebsites.net/users');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
