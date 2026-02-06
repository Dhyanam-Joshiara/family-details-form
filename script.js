const API_URL = "https://script.google.com/macros/s/AKfycbxGyDQ41u_vJOAEf7qYU3Eo2gSdewk1y124NLbZ4sAK4iUOocxYX2bIFrIHpIPFb9MrRQ/exec";

function addEducationRow() {
  const row = `
    <tr>
      <td><input></td>
      <td><input></td>
      <td><input></td>
      <td><input></td>
      <td><button type="button" onclick="this.parentElement.parentElement.remove()">X</button></td>
    </tr>`;
  document.querySelector("#educationTable tbody").insertAdjacentHTML("beforeend", row);
}

document.getElementById("total_family_members").addEventListener("change", e => {
  const n = e.target.value;
  const tbody = document.querySelector("#familyTable tbody");
  tbody.innerHTML = "";
  for (let i = 0; i < n; i++) {
    tbody.insertAdjacentHTML("beforeend", `
      <tr>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input type="date"></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
    `);
  }
});

document.getElementById("familyForm").addEventListener("submit", async e => {
  e.preventDefault();

  const education = [...document.querySelectorAll("#educationTable tbody tr")].map(r => ({
    year: r.children[0].firstChild.value,
    degree: r.children[1].firstChild.value,
    institution: r.children[2].firstChild.value,
    percentage: r.children[3].firstChild.value
  }));

  const family = [...document.querySelectorAll("#familyTable tbody tr")].map(r => ({
    name: r.children[0].firstChild.value,
    relation: r.children[1].firstChild.value,
    gender: r.children[2].firstChild.value,
    dob: r.children[3].firstChild.value,
    education: r.children[4].firstChild.value,
    occupation: r.children[5].firstChild.value,
    marital_status: r.children[6].firstChild.value
  }));

  const payload = {
    family_head_name: document.getElementById("family_head_name").value,
    gender: document.getElementById("gender").value,
    dob: document.getElementById("dob").value,
    mobile_number: document.getElementById("mobile_number").value,
    total_family_members: document.getElementById("total_family_members").value,
    education_history: education,
    family_members: family
  };

  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(payload)
  });

  alert("Form submitted successfully!");
});

