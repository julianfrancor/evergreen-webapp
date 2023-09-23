export async function getRoleData() {
  const res = await fetch('https://evergreen-adm.azurewebsites.net/roles');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
