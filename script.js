/************************************
 * Family Details Form - script.js
 * Multi-page | Dynamic tables
 ************************************/

// ===== CONFIG =====
const API_URL = "https://script.google.com/macros/s/AKfycbxGyDQ41u_vJOAEf7qYU3Eo2gSdewk1y124NLbZ4sAK4iUOocxYX2bIFrIHpIPFb9MrRQ/exec";

// ===== PAGE NAVIGATION =====
let currentPage = 0;
const pages = document.querySelectorAll(".form-page");

function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

showPage(currentPage);

// ===== WHATSAPP AUTO-FILL =====
document.getElementById("same_whatsapp").addEventListener("change", e => {
  if (e.target.checked) {
    document.getElementById("whatsapp_number").value =
      document.getElementById("mobile_number").value;
  }
});

// ===== EDUCATION TABLE =====
function addEducationRow() {
  const tbody = document.querySelector("#educationTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><button type="button">X</button></td>
  `;

  row.querySelector("button").onclick = () => row.remove();
  tbody.appendChild(row);
}

// ===== FAMILY MEMBERS TABLE =====
document.getElementById("total_family_members").addEventListener("change", e => {
  const count = parseInt(e.target.value || 0);
  const tbody = document.querySelector("#familyTable tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input></td>
      <td>
        <select>
          <option>Self</option>
          <option>Spouse</option>
          <option>Son</option>
          <option>Daughter</option>
          <option>Father</option>
          <option>Mother</option>
          <option>Brother</option>
          <option>Sister</option>
          <option>Other</option>
        </select>
      </td>
      <td>
        <select>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </td>
      <td><input type="date"></td>
      <td><input></td>
      <td><input></td>
      <td>
        <select>
          <option>Single</option>
          <option>Married</option>
        </select>
      </td>
    `;
    tbody.appendChild(row);
  }
});

// ===== FORM SUBMISSION =====
document.getElementById("familyForm").addEventListener("submit", async e => {
  e.preventDefault();

  // ---- Education Data ----
  const education = [...document.querySelectorAll("#educationTable tbody tr")].map(r => ({
    year: r.children[0].querySelector("input").value,
    degree: r.children[1].querySelector("input").value,
    institution: r.children[2].querySelector("input").value,
    percentage: r.children[3].querySelector("input").value
  }));

  // ---- Family Members Data ----
  const family = [...document.querySelectorAll("#familyTable tbody tr")].map(r => ({
    name: r.children[0].querySelector("input").value,
    relation: r.children[1].querySelector("select").value,
    gender: r.children[2].querySelector("select").value,
    dob: r.children[3].querySelector("input").value,
    education: r.children[4].querySelector("input").value,
    occupation: r.children[5].querySelector("input").value,
    marital_status: r.children[6].querySelector("select").value
  }));

  // ---- Payload ----
  const payload = {
    family_head_name: document.getElementById("family_head_name").value,
    gender: document.getElementById("gender").value,
    dob: document.getElementById("dob").value,
    place_of_birth: document.getElementById("place_of_birth").value,
    blood_group: document.getElementById("blood_group").value,
    address: document.getElementById("address").value,
    mobile_number: document.getElementById("mobile_number").value,
    whatsapp_number: document.getElementById("whatsapp_number").value,
    hobbies: document.getElementById("hobbies").value,

    highest_education: document.getElementById("highest_education").value,
    occupation_status: document.getElementById("occupation_status").value,
    designation_org: document.getElementById("designation_org").value,
    work_location: document.getElementById("work_location").value,
    skills_achievements: document.getElementById("skills_achievements").value,

    total_family_members: document.getElementById("total_family_members").value,
    expectations: document.getElementById("expectations").value,
    emergency_contact_name: document.getElementById("emergency_contact_name").value,
    emergency_contact_number: document.getElementById("emergency_contact_number").value,

    education_history: education,
    family_members: family
  };

  // ---- Submit ----
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert("Form submitted successfully!");
      location.reload();
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (err) {
    alert("Network error. Please try again later.");
  }
});
