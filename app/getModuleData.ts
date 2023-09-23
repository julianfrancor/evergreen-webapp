export async function getModuleData() {
  const res = await fetch('https://evergreen-adm.azurewebsites.net/modules');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
