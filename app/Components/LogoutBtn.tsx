"use client";

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch("http://localhost:3003/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  };

  return (
    <h1
      onClick={handleLogout}
      className="font-bold text-red-500 cursor-pointer"
    >
      Logout
    </h1>
  );
}
