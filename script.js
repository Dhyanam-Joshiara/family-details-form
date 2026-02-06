/************************************
 * Family Details Form - script.js
 * Enhanced with animations and UX
 ************************************/

// ===== CONFIG =====
const API_URL = "https://script.google.com/macros/s/AKfycbxGyDQ41u_vJOAEf7qYU3Eo2gSdewk1y124NLbZ4sAK4iUOocxYX2bIFrIHpIPFb9MrRQ/exec";

// ===== PAGE NAVIGATION =====
let currentPage = 0;
const pages = document.querySelectorAll(".form-page");
const totalPages = pages.length;

function showPage(index) {
  // Remove active class from all pages
  pages.forEach(p => p.classList.remove("active"));
  
  // Add active class to current page
  pages[index].classList.add("active");
  
  // Update progress bar
  updateProgressBar(index);
  
  // Update step indicators
  updateStepIndicators(index);
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar(index) {
  const progressFill = document.getElementById("progressFill");
  const percentage = ((index + 1) / totalPages) * 100;
  progressFill.style.width = percentage + "%";
}

function updateStepIndicators(index) {
  const steps = document.querySelectorAll(".step");
  
  steps.forEach((step, i) => {
    step.classList.remove("active", "completed");
    
    if (i === index) {
      step.classList.add("active");
    } else if (i < index) {
      step.classList.add("completed");
      // Change number to checkmark for completed steps
      const circle = step.querySelector(".step-circle");
      circle.innerHTML = "✓";
    } else {
      // Reset to number for future steps
      const circle = step.querySelector(".step-circle");
      circle.innerHTML = i + 1;
    }
  });
}

function nextPage() {
  if (validateCurrentPage()) {
    if (currentPage < totalPages - 1) {
      currentPage++;
      showPage(currentPage);
    }
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

function validateCurrentPage() {
  const currentPageElement = pages[currentPage];
  const requiredFields = currentPageElement.querySelectorAll("[required]");
  
  for (let field of requiredFields) {
    if (!field.value.trim()) {
      field.focus();
      showNotification("Please fill in all required fields", "error");
      return false;
    }
  }
  
  return true;
}

// Initialize first page
showPage(currentPage);

// ===== WHATSAPP AUTO-FILL =====
document.getElementById("same_whatsapp").addEventListener("change", e => {
  if (e.target.checked) {
    const mobileNumber = document.getElementById("mobile_number").value;
    document.getElementById("whatsapp_number").value = mobileNumber;
  }
});

// Also update WhatsApp when mobile changes if checkbox is checked
document.getElementById("mobile_number").addEventListener("input", e => {
  if (document.getElementById("same_whatsapp").checked) {
    document.getElementById("whatsapp_number").value = e.target.value;
  }
});

// ===== EDUCATION TABLE =====
function addEducationRow() {
  const tbody = document.querySelector("#educationTable tbody");
  const row = document.createElement("tr");
  
  row.innerHTML = `
    <td><input type="text" placeholder="2020"></td>
    <td><input type="text" placeholder="B.Tech"></td>
    <td><input type="text" placeholder="University Name"></td>
    <td><input type="text" placeholder="85%"></td>
    <td><button type="button" class="remove-btn" title="Remove">×</button></td>
  `;
  
  // Add fade-in animation
  row.style.opacity = "0";
  tbody.appendChild(row);
  
  setTimeout(() => {
    row.style.transition = "opacity 0.3s ease";
    row.style.opacity = "1";
  }, 10);
  
  // Remove row on button click
  row.querySelector("button").onclick = () => {
    row.style.opacity = "0";
    setTimeout(() => row.remove(), 300);
  };
}

// ===== FAMILY MEMBERS TABLE =====
document.getElementById("total_family_members").addEventListener("change", e => {
  const count = parseInt(e.target.value || 0);
  const tbody = document.querySelector("#familyTable tbody");
  
  if (count < 1 || count > 20) {
    showNotification("Please enter a valid number of family members (1-20)", "error");
    return;
  }
  
  tbody.innerHTML = "";
  
  for (let i = 0; i < count; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" placeholder="Full Name"></td>
      <td>
        <select>
          <option value="">Select</option>
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
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </td>
      <td><input type="date"></td>
      <td><input type="text" placeholder="Qualification"></td>
      <td><input type="text" placeholder="Occupation"></td>
      <td>
        <select>
          <option value="">Select</option>
          <option>Single</option>
          <option>Married</option>
        </select>
      </td>
    `;
    
    // Add staggered animation
    row.style.opacity = "0";
    tbody.appendChild(row);
    
    setTimeout(() => {
      row.style.transition = "opacity 0.3s ease";
      row.style.opacity = "1";
    }, i * 50);
  }
});

// ===== FORM SUBMISSION =====
document.getElementById("familyForm").addEventListener("submit", async e => {
  e.preventDefault();
  
  // Show loading overlay
  showLoading(true);
  
  try {
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
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    
    showLoading(false);
    
    if (res.ok) {
      showNotification("Form submitted successfully! Thank you.", "success");
      
      // Reset form after 2 seconds
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else {
      showNotification("Submission failed. Please try again.", "error");
    }
  } catch (err) {
    showLoading(false);
    showNotification("Network error. Please check your connection and try again.", "error");
    console.error("Submission error:", err);
  }
});

// ===== UTILITY FUNCTIONS =====
function showLoading(show) {
  const overlay = document.getElementById("loadingOverlay");
  if (show) {
    overlay.classList.add("active");
  } else {
    overlay.classList.remove("active");
  }
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    color: "white",
    fontWeight: "500",
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    zIndex: "9999",
    animation: "slideInRight 0.3s ease",
    maxWidth: "400px"
  });
  
  // Set background color based on type
  if (type === "success") {
    notification.style.background = "#10b981";
  } else if (type === "error") {
    notification.style.background = "#ef4444";
  } else {
    notification.style.background = "#3b82f6";
  }
  
  document.body.appendChild(notification);
  
  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Add CSS animations for notifications
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===== KEYBOARD NAVIGATION =====
document.addEventListener("keydown", e => {
  // Alt + Right Arrow = Next
  if (e.altKey && e.key === "ArrowRight") {
    e.preventDefault();
    nextPage();
  }
  
  // Alt + Left Arrow = Previous
  if (e.altKey && e.key === "ArrowLeft") {
    e.preventDefault();
    prevPage();
  }
});

// ===== CLICK ON STEP INDICATORS =====
document.querySelectorAll(".step").forEach((step, index) => {
  step.style.cursor = "pointer";
  step.addEventListener("click", () => {
    currentPage = index;
    showPage(currentPage);
  });
});

// ===== AUTO-SAVE TO LOCAL STORAGE (OPTIONAL) =====
// Uncomment to enable auto-save feature
/*
setInterval(() => {
  const formData = {
    family_head_name: document.getElementById("family_head_name").value,
    gender: document.getElementById("gender").value,
    mobile_number: document.getElementById("mobile_number").value,
    // Add other fields as needed
  };
  localStorage.setItem("familyFormDraft", JSON.stringify(formData));
}, 30000); // Save every 30 seconds

// Load saved data on page load
window.addEventListener("load", () => {
  const savedData = localStorage.getItem("familyFormDraft");
  if (savedData) {
    const data = JSON.parse(savedData);
    Object.keys(data).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        element.value = data[key];
      }
    });
  }
});
*/
