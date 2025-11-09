export const getProfileData = async () => {
  try {
    const response = await fetch("http://localhost:8080/me");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log("✅ Data fetched:", data);
    return data;
  } catch (error) {
    console.error("❌ Fetch error:", error);
    return null;
  }
};
