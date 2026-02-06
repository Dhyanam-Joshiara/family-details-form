/************************************
 * Family Details Form - script.js
 * Fixed and enhanced version
 ************************************/

// ===== CONFIG =====
const API_URL = "https://script.google.com/macros/s/AKfycbxGyDQ41u_vJOAEf7qYU3Eo2gSdewk1y124NLbZ4sAK4iUOocxYX2bIFrIHpIPFb9MrRQ/exec";

// ===== GLOBAL VARIABLES =====
let currentPage = 0;
let pages, totalPages;

// ===== WAIT FOR DOM TO LOAD =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables after DOM is ready
  pages = document.querySelectorAll(".form-page");
  totalPages = pages.length;
  
  // Initialize first page
  showPage(currentPage);
  
  // Setup event listeners
  setupEventListeners();
});

// ===== PAGE NAVIGATION =====
function showPage(index) {
  if (!pages || pages.length === 0) return;
  
  // Remove active class from all pages
  pages.forEach(p => p.classList.remove("active"));
  
  // Add active class to current page
  if (pages[index]) {
    pages[index].classList.add("active");
  }
  
  // Update progress bar
  updateProgressBar(index);
  
  // Update step indicators
  updateStepIndicators(index);
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar(index) {
  const progressFill = document.getElementById("progressFill");
  if (!progressFill) return;
  
  const percentage = ((index + 1) / totalPages) * 100;
  progressFill.style.width = percentage + "%";
}

function updateStepIndicators(index) {
  const steps = document.querySelectorAll(".step");
  if (!steps) return;
  
  steps.forEach((step, i) => {
    step.classList.remove("active", "completed");
    const circle = step.querySelector(".step-circle");
    
    if (i === index) {
      step.classList.add("active");
      circle.innerHTML = i + 1;
    } else if (i < index) {
      step.classList.add("completed");
      circle.innerHTML = "✓";
    } else {
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
  if (!pages || !pages[currentPage]) return true;
  
  const currentPageElement = pages[currentPage];
  const requiredFields = currentPageElement.querySelectorAll("[required]");
  
  for (let field of requiredFields) {
    if (!field.value || !field.value.trim()) {
      field.focus();
      showNotification("Please fill in all required fields marked with *", "error");
      
      // Add shake animation to field
      field.style.animation = "shake 0.3s ease";
      setTimeout(() => {
        field.style.animation = "";
      }, 300);
      
      return false;
    }
  }
  
  return true;
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
  // WhatsApp auto-fill
  const sameWhatsappCheckbox = document.getElementById("same_whatsapp");
  const mobileNumberInput = document.getElementById("mobile_number");
  const whatsappNumberInput = document.getElementById("whatsapp_number");
  
  if (sameWhatsappCheckbox && mobileNumberInput && whatsappNumberInput) {
    sameWhatsappCheckbox.addEventListener("change", function(e) {
      if (e.target.checked) {
        whatsappNumberInput.value = mobileNumberInput.value;
      }
    });
    
    mobileNumberInput.addEventListener("input", function(e) {
      if (sameWhatsappCheckbox.checked) {
        whatsappNumberInput.value = e.target.value;
      }
    });
  }
  
  // Family members table generation
  const totalFamilyMembersInput = document.getElementById("total_family_members");
  if (totalFamilyMembersInput) {
    totalFamilyMembersInput.addEventListener("change", generateFamilyTable);
    totalFamilyMembersInput.addEventListener("input", generateFamilyTable);
  }
  
  // Form submission
  const form = document.getElementById("familyForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
  
  // Step indicator clicks
  const steps = document.querySelectorAll(".step");
  steps.forEach((step, index) => {
    step.style.cursor = "pointer";
    step.addEventListener("click", function() {
      currentPage = index;
      showPage(currentPage);
    });
  });
  
  // Keyboard navigation
  document.addEventListener("keydown", function(e) {
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
}

// ===== EDUCATION TABLE =====
function addEducationRow() {
  const tbody = document.querySelector("#educationTable tbody");
  if (!tbody) return;
  
  const row = document.createElement("tr");
  
  row.innerHTML = `
    <td><input type="text" placeholder="2020" /></td>
    <td><input type="text" placeholder="B.Tech" /></td>
    <td><input type="text" placeholder="University Name" /></td>
    <td><input type="text" placeholder="85%" /></td>
    <td style="text-align: center;"><button type="button" class="remove-btn" title="Remove">×</button></td>
  `;
  
  // Add fade-in animation
  row.style.opacity = "0";
  tbody.appendChild(row);
  
  setTimeout(() => {
    row.style.transition = "opacity 0.3s ease";
    row.style.opacity = "1";
  }, 10);
  
  // Remove row on button click
  const removeBtn = row.querySelector("button");
  if (removeBtn) {
    removeBtn.onclick = function() {
      row.style.opacity = "0";
      setTimeout(() => row.remove(), 300);
    };
  }
}

// ===== FAMILY MEMBERS TABLE =====
function generateFamilyTable(e) {
  const count = parseInt(e.target.value || 0);
  const tbody = document.querySelector("#familyTable tbody");
  const hint = document.getElementById("familyTableHint");
  
  if (!tbody) return;
  
  if (count < 1 || count > 20 || isNaN(count)) {
    if (count > 0) {
      showNotification("Please enter a valid number of family members (1-20)", "error");
    }
    return;
  }
  
  // Clear existing rows
  tbody.innerHTML = "";
  
  // Hide hint when table is generated
  if (hint) {
    hint.style.display = "none";
  }
  
  // Generate rows
  for (let i = 0; i < count; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="text" placeholder="Full Name" /></td>
      <td>
        <select>
          <option value="">Select</option>
          <option value="Self">Self</option>
          <option value="Spouse">Spouse</option>
          <option value="Son">Son</option>
          <option value="Daughter">Daughter</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Brother">Brother</option>
          <option value="Sister">Sister</option>
          <option value="Other">Other</option>
        </select>
      </td>
      <td>
        <select>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </td>
      <td><input type="date" /></td>
      <td><input type="text" placeholder="Qualification" /></td>
      <td><input type="text" placeholder="Occupation" /></td>
      <td>
        <select>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
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
  
  showNotification(`${count} family member row(s) generated`, "info");
}

// ===== FORM SUBMISSION =====
async function handleFormSubmit(e) {
  e.preventDefault();
  
  // Show loading overlay
  showLoading(true);
  
  try {
    // ---- Education Data ----
    const educationRows = document.querySelectorAll("#educationTable tbody tr");
    const education = Array.from(educationRows).map(r => ({
      year: r.children[0].querySelector("input").value || "",
      degree: r.children[1].querySelector("input").value || "",
      institution: r.children[2].querySelector("input").value || "",
      percentage: r.children[3].querySelector("input").value || ""
    }));
    
    // ---- Family Members Data ----
    const familyRows = document.querySelectorAll("#familyTable tbody tr");
    const family = Array.from(familyRows).map(r => ({
      name: r.children[0].querySelector("input").value || "",
      relation: r.children[1].querySelector("select").value || "",
      gender: r.children[2].querySelector("select").value || "",
      dob: r.children[3].querySelector("input").value || "",
      education: r.children[4].querySelector("input").value || "",
      occupation: r.children[5].querySelector("input").value || "",
      marital_status: r.children[6].querySelector("select").value || ""
    }));
    
    // ---- Payload ----
    const payload = {
      family_head_name: document.getElementById("family_head_name").value || "",
      gender: document.getElementById("gender").value || "",
      dob: document.getElementById("dob").value || "",
      place_of_birth: document.getElementById("place_of_birth").value || "",
      blood_group: document.getElementById("blood_group").value || "",
      address: document.getElementById("address").value || "",
      mobile_number: document.getElementById("mobile_number").value || "",
      whatsapp_number: document.getElementById("whatsapp_number").value || "",
      hobbies: document.getElementById("hobbies").value || "",
      
      highest_education: document.getElementById("highest_education").value || "",
      occupation_status: document.getElementById("occupation_status").value || "",
      designation_org: document.getElementById("designation_org").value || "",
      work_location: document.getElementById("work_location").value || "",
      skills_achievements: document.getElementById("skills_achievements").value || "",
      
      total_family_members: document.getElementById("total_family_members").value || "",
      expectations: document.getElementById("expectations").value || "",
      emergency_contact_name: document.getElementById("emergency_contact_name").value || "",
      emergency_contact_number: document.getElementById("emergency_contact_number").value || "",
      
      education_history: education,
      family_members: family
    };
    
    console.log("Submitting payload:", payload);
    
    // ---- Submit ----
    const res = await fetch(API_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script requires no-cors
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });
    
    showLoading(false);
    
    // With no-cors, we can't read the response, so we assume success
    showNotification("Form submitted successfully! Thank you for your submission.", "success");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      if (confirm("Form submitted! Would you like to submit another response?")) {
        location.reload();
      } else {
        // Just reset to first page
        currentPage = 0;
        showPage(currentPage);
        document.getElementById("familyForm").reset();
      }
    }, 2000);
    
  } catch (err) {
    showLoading(false);
    console.error("Submission error:", err);
    showNotification("There was an error submitting the form. Please try again.", "error");
  }
}

// ===== UTILITY FUNCTIONS =====
function showLoading(show) {
  const overlay = document.getElementById("loadingOverlay");
  if (!overlay) return;
  
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
    borderRadius: "12px",
    color: "white",
    fontWeight: "600",
    boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.3)",
    zIndex: "9999",
    animation: "slideInRight 0.3s ease",
    maxWidth: "400px",
    fontSize: "0.95rem"
  });
  
  // Set background color based on type
  if (type === "success") {
    notification.style.background = "#10b981";
  } else if (type === "error") {
    notification.style.background = "#ef4444";
  } else {
    notification.style.background = "#6366f1";
  }
  
  document.body.appendChild(notification);
  
  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// ===== ADD SHAKE ANIMATION =====
const style = document.createElement("style");
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);

// ===== CONSOLE MESSAGE =====
console.log("%cFamily Details Form", "color: #6366f1; font-size: 24px; font-weight: bold;");
console.log("%cForm loaded successfully!", "color: #10b981; font-size: 14px;");
console.log("%cVersion: 2.0 | Enhanced Edition", "color: #64748b; font-size: 12px;");
