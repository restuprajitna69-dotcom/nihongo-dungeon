// =======================
// NIHONGO DUNGEON SAFE MODE
// =======================

// DAFTAR MURID
const STUDENTS = [
  "Abdul","Anjas","Arya","Daiva","Darda","Desti","Faiz","Farhan",
  "Hilpan","Ira","Khoirul","Rainaldy","Rizky","Ansori","Haidar",
  "Noval","Nayif","Nelda","Putri","Rexsya","Reyhan","Mery","Yani"
];

// PASSWORD
const PASSWORDS = {
  student: "FUFUFAFAC1",
  admin: "FUFUFAFATORA",
  trial: "FUFUFAFAKELINCI"
};

// ELEMENT
const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("message");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Login attempt:", username);

  const user = safeLogin(username, password);

  if (!user) {
    msg.textContent = "❌ Username atau password salah";
    msg.style.color = "red";
    return;
  }

  msg.textContent = `✅ Login berhasil sebagai ${user.role}: ${user.name}`;
  msg.style.color = "lightgreen";

  localStorage.setItem("nihongoUser", JSON.stringify(user));
});

// LOGIN FUNCTION (ANTI ERROR)
function safeLogin(username, password) {

  // ADMIN
  if (username === "TORA" && password === PASSWORDS.admin) {
    return { role: "Admin", name: "TORA" };
  }

  // TRIAL
  if (username === "KELINCI PERCOBAAN" && password === PASSWORDS.trial) {
    return { role: "Trial", name: username };
  }

  // STUDENT
  if (STUDENTS.includes(username) && password === PASSWORDS.student) {
    return { role: "Student", name: username };
  }

  return null;
}

console.log("SAFE MODE loaded");
