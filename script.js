/************************************
 * Family Details Form - script.js
 * Enhanced with mobile cards & married daughters
 ************************************/

// ===== CONFIG =====
const API_URL = "https://script.google.com/macros/s/AKfycbxGyDQ41u_vJOAEf7qYU3Eo2gSdewk1y124NLbZ4sAK4iUOocxYX2bIFrIHpIPFb9MrRQ/exec";

// ===== GLOBAL VARIABLES =====
let currentPage = 0;
let pages, totalPages;
let educationCounter = 0;
let marriedDaughterCounter = 0;

// ===== WAIT FOR DOM TO LOAD =====
document.addEventListener('DOMContentLoaded', function() {
  pages = document.querySelectorAll(".form-page");
  totalPages = pages.length;
  
  showPage(currentPage);
  setupEventListeners();
});

// ===== PAGE NAVIGATION =====
function showPage(index) {
  if (!pages || pages.length === 0) return;
  
  pages.forEach(p => p.classList.remove("active"));
  
  if (pages[index]) {
    pages[index].classList.add("active");
  }
  
  updateProgressBar(index);
  updateStepIndicators(index);
  
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
    totalFamilyMembersInput.addEventListener("change", generateFamilyCards);
    totalFamilyMembersInput.addEventListener("input", generateFamilyCards);
  }
  
  // Married daughters conditional display
  const hasMarriedDaughtersSelect = document.getElementById("has_married_daughters");
  if (hasMarriedDaughtersSelect) {
    hasMarriedDaughtersSelect.addEventListener("change", handleMarriedDaughtersChange);
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
    if (e.altKey && e.key === "ArrowRight") {
      e.preventDefault();
      nextPage();
    }
    
    if (e.altKey && e.key === "ArrowLeft") {
      e.preventDefault();
      prevPage();
    }
  });
  
  // Handle "Other" option in dropdowns
  setupConditionalSelects();
}

// ===== HANDLE "OTHER" OPTION IN DROPDOWNS =====
function setupConditionalSelects() {
  const conditionalSelects = document.querySelectorAll('.conditional-select');
  
  conditionalSelects.forEach(select => {
    select.addEventListener('change', function() {
      const otherId = this.id + '_other';
      const otherInput = document.getElementById(otherId);
      
      if (otherInput) {
        if (this.value === 'Other') {
          otherInput.style.display = 'block';
          otherInput.focus();
        } else {
          otherInput.style.display = 'none';
          otherInput.value = '';
        }
      }
    });
  });
}

// ===== EDUCATION CARDS (MOBILE-FRIENDLY) =====
function addEducationRow() {
  const container = document.getElementById("educationContainer");
  if (!container) return;
  
  educationCounter++;
  
  const card = document.createElement("div");
  card.className = "mobile-card";
  card.setAttribute('data-id', educationCounter);
  
  card.innerHTML = `
    <div class="mobile-card-header">
      <div class="mobile-card-title">Education #${educationCounter}</div>
      <button type="button" class="mobile-card-remove" onclick="removeEducationCard(${educationCounter})" title="Remove">×</button>
    </div>
    <div class="mobile-card-body">
      <div class="mobile-card-field">
        <label>Year of Completion</label>
        <input type="text" placeholder="e.g., 2020" class="education-year">
      </div>
      <div class="mobile-card-field">
        <label>Degree / Qualification</label>
        <input type="text" placeholder="e.g., B.Tech, HSC, MBA" class="education-degree">
      </div>
      <div class="mobile-card-field">
        <label>Institution / University</label>
        <input type="text" placeholder="e.g., ABC University" class="education-institution">
      </div>
      <div class="mobile-card-field">
        <label>Percentage / Grade</label>
        <input type="text" placeholder="e.g., 85%, A Grade" class="education-percentage">
      </div>
    </div>
  `;
  
  card.style.opacity = "0";
  container.appendChild(card);
  
  setTimeout(() => {
    card.style.transition = "opacity 0.3s ease";
    card.style.opacity = "1";
  }, 10);
}

function removeEducationCard(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  if (card) {
    card.style.opacity = "0";
    setTimeout(() => card.remove(), 300);
  }
}

// ===== FAMILY MEMBERS CARDS (MOBILE-FRIENDLY) =====
function generateFamilyCards(e) {
  const count = parseInt(e.target.value || 0);
  const container = document.getElementById("familyContainer");
  const hint = document.getElementById("familyTableHint");
  
  if (!container) return;
  
  if (count < 1 || count > 20 || isNaN(count)) {
    if (count > 0) {
      showNotification("Please enter a valid number of family members (1-20)", "error");
    }
    return;
  }
  
  container.innerHTML = "";
  
  if (hint) {
    hint.style.display = "none";
  }
  
  for (let i = 0; i < count; i++) {
    const card = document.createElement("div");
    card.className = "mobile-card";
    
    card.innerHTML = `
      <div class="mobile-card-header">
        <div class="mobile-card-title">Family Member #${i + 1}</div>
      </div>
      <div class="mobile-card-body">
        <div class="mobile-card-field">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" class="family-name">
        </div>
        <div class="mobile-card-field">
          <label>Relation</label>
          <select class="family-relation conditional-select-inline">
            <option value="">Select Relation</option>
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
          <input type="text" class="other-input relation-other" placeholder="Please specify" style="display: none; margin-top: 0.5rem;">
        </div>
        <div class="mobile-card-field">
          <label>Gender</label>
          <select class="family-gender conditional-select-inline">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" class="other-input gender-other" placeholder="Please specify" style="display: none; margin-top: 0.5rem;">
        </div>
        <div class="mobile-card-field">
          <label>Date of Birth</label>
          <input type="date" class="family-dob">
        </div>
        <div class="mobile-card-field">
          <label>Education / Qualification</label>
          <input type="text" placeholder="e.g., Graduate, HSC" class="family-education">
        </div>
        <div class="mobile-card-field">
          <label>Occupation</label>
          <input type="text" placeholder="e.g., Teacher, Student" class="family-occupation">
        </div>
        <div class="mobile-card-field">
          <label>Marital Status</label>
          <select class="family-marital">
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
      </div>
    `;
    
    card.style.opacity = "0";
    container.appendChild(card);
    
    setTimeout(() => {
      card.style.transition = "opacity 0.3s ease";
      card.style.opacity = "1";
    }, i * 50);
  }
  
  // Setup conditional selects for dynamically added cards
  setupDynamicConditionalSelects();
  
  showNotification(`${count} family member card(s) generated`, "info");
}

// ===== HANDLE CONDITIONAL SELECTS IN DYNAMIC CARDS =====
function setupDynamicConditionalSelects() {
  const conditionalSelects = document.querySelectorAll('.conditional-select-inline');
  
  conditionalSelects.forEach(select => {
    select.addEventListener('change', function() {
      const parent = this.closest('.mobile-card-field');
      const otherInput = parent.querySelector('.other-input');
      
      if (otherInput) {
        if (this.value === 'Other') {
          otherInput.style.display = 'block';
          otherInput.focus();
        } else {
          otherInput.style.display = 'none';
          otherInput.value = '';
        }
      }
    });
  });
}

// ===== MARRIED DAUGHTERS SECTION =====
function handleMarriedDaughtersChange(e) {
  const section = document.getElementById("marriedDaughtersSection");
  const container = document.getElementById("marriedDaughtersContainer");
  
  if (!section || !container) return;
  
  if (e.target.value === "Yes") {
    section.style.display = "block";
    // Add one row automatically
    if (container.children.length === 0) {
      addMarriedDaughterRow();
    }
  } else {
    section.style.display = "none";
    // Clear all data
    container.innerHTML = "";
    marriedDaughterCounter = 0;
  }
}

function addMarriedDaughterRow() {
  const container = document.getElementById("marriedDaughtersContainer");
  if (!container) return;
  
  marriedDaughterCounter++;
  
  const card = document.createElement("div");
  card.className = "mobile-card";
  card.setAttribute('data-daughter-id', marriedDaughterCounter);
  
  card.innerHTML = `
    <div class="mobile-card-header">
      <div class="mobile-card-title">Married Daughter #${marriedDaughterCounter}</div>
      <button type="button" class="mobile-card-remove" onclick="removeMarriedDaughterCard(${marriedDaughterCounter})" title="Remove">×</button>
    </div>
    <div class="mobile-card-body">
      <div class="mobile-card-field">
        <label>Daughter's Name</label>
        <input type="text" placeholder="Full name of daughter" class="daughter-name">
      </div>
      <div class="mobile-card-field">
        <label>Husband's Name</label>
        <input type="text" placeholder="Full name of husband" class="husband-name">
      </div>
      <div class="mobile-card-field">
        <label>Current City / Country</label>
        <input type="text" placeholder="e.g., Mumbai, India" class="daughter-city">
      </div>
      <div class="mobile-card-field">
        <label>Contact Number</label>
        <input type="tel" placeholder="+91 XXXXX XXXXX" class="daughter-contact">
      </div>
    </div>
  `;
  
  card.style.opacity = "0";
  container.appendChild(card);
  
  setTimeout(() => {
    card.style.transition = "opacity 0.3s ease";
    card.style.opacity = "1";
  }, 10);
}

function removeMarriedDaughterCard(id) {
  const card = document.querySelector(`[data-daughter-id="${id}"]`);
  if (card) {
    card.style.opacity = "0";
    setTimeout(() => card.remove(), 300);
  }
}

// ===== COLLECT FORM DATA =====
function collectEducationData() {
  const cards = document.querySelectorAll("#educationContainer .mobile-card");
  const education = [];
  
  cards.forEach(card => {
    education.push({
      year: card.querySelector(".education-year").value || "",
      degree: card.querySelector(".education-degree").value || "",
      institution: card.querySelector(".education-institution").value || "",
      percentage: card.querySelector(".education-percentage").value || ""
    });
  });
  
  return education;
}

function collectFamilyData() {
  const cards = document.querySelectorAll("#familyContainer .mobile-card");
  const family = [];
  
  cards.forEach(card => {
    const relationSelect = card.querySelector(".family-relation");
    const relationOther = card.querySelector(".relation-other");
    const genderSelect = card.querySelector(".family-gender");
    const genderOther = card.querySelector(".gender-other");
    
    family.push({
      name: card.querySelector(".family-name").value || "",
      relation: relationSelect.value === "Other" ? relationOther.value : relationSelect.value,
      gender: genderSelect.value === "Other" ? genderOther.value : genderSelect.value,
      dob: card.querySelector(".family-dob").value || "",
      education: card.querySelector(".family-education").value || "",
      occupation: card.querySelector(".family-occupation").value || "",
      marital_status: card.querySelector(".family-marital").value || ""
    });
  });
  
  return family;
}

function collectMarriedDaughtersData() {
  const cards = document.querySelectorAll("#marriedDaughtersContainer .mobile-card");
  const daughters = [];
  
  cards.forEach(card => {
    daughters.push({
      daughter_name: card.querySelector(".daughter-name").value || "",
      husband_name: card.querySelector(".husband-name").value || "",
      city: card.querySelector(".daughter-city").value || "",
      contact: card.querySelector(".daughter-contact").value || ""
    });
  });
  
  return daughters;
}

// ===== FORM SUBMISSION =====
async function handleFormSubmit(e) {
  e.preventDefault();
  
  showLoading(true);
  
  try {
    const education = collectEducationData();
    const family = collectFamilyData();
    const marriedDaughters = collectMarriedDaughtersData();
    
    // Get values from "Other" fields
    const genderSelect = document.getElementById("gender");
    const genderOther = document.getElementById("gender_other");
    const bloodGroupSelect = document.getElementById("blood_group");
    const bloodGroupOther = document.getElementById("blood_group_other");
    const highestEducationSelect = document.getElementById("highest_education");
    const highestEducationOther = document.getElementById("highest_education_other");
    const occupationStatusSelect = document.getElementById("occupation_status");
    const occupationStatusOther = document.getElementById("occupation_status_other");
    
    const payload = {
      family_head_name: document.getElementById("family_head_name").value || "",
      gender: genderSelect.value === "Other" ? genderOther.value : genderSelect.value,
      dob: document.getElementById("dob").value || "",
      place_of_birth: document.getElementById("place_of_birth").value || "",
      blood_group: bloodGroupSelect.value === "Other" ? bloodGroupOther.value : bloodGroupSelect.value,
      address: document.getElementById("address").value || "",
      mobile_number: document.getElementById("mobile_number").value || "",
      whatsapp_number: document.getElementById("whatsapp_number").value || "",
      hobbies: document.getElementById("hobbies").value || "",
      
      highest_education: highestEducationSelect.value === "Other" ? highestEducationOther.value : highestEducationSelect.value,
      occupation_status: occupationStatusSelect.value === "Other" ? occupationStatusOther.value : occupationStatusSelect.value,
      designation_org: document.getElementById("designation_org").value || "",
      work_location: document.getElementById("work_location").value || "",
      skills_achievements: document.getElementById("skills_achievements").value || "",
      
      total_family_members: document.getElementById("total_family_members").value || "",
      has_married_daughters: document.getElementById("has_married_daughters").value || "",
      expectations: document.getElementById("expectations").value || "",
      emergency_contact_name: document.getElementById("emergency_contact_name").value || "",
      emergency_contact_number: document.getElementById("emergency_contact_number").value || "",
      
      education_history: education,
      family_members: family,
      married_daughters: marriedDaughters
    };
    
    console.log("Submitting payload:", payload);
    
    const res = await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });
    
    showLoading(false);
    
    showNotification("Form submitted successfully! Thank you for your submission.", "success");
    
    setTimeout(() => {
      if (confirm("Form submitted! Would you like to submit another response?")) {
        location.reload();
      } else {
        currentPage = 0;
        showPage(currentPage);
        document.getElementById("familyForm").reset();
        document.getElementById("educationContainer").innerHTML = "";
        document.getElementById("familyContainer").innerHTML = "";
        document.getElementById("marriedDaughtersContainer").innerHTML = "";
        document.getElementById("marriedDaughtersSection").style.display = "none";
        educationCounter = 0;
        marriedDaughterCounter = 0;
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
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
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
  
  if (type === "success") {
    notification.style.background = "#10b981";
  } else if (type === "error") {
    notification.style.background = "#ef4444";
  } else {
    notification.style.background = "#6366f1";
  }
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// ===== CONSOLE MESSAGE =====
console.log("%cFamily Details Form", "color: #6366f1; font-size: 24px; font-weight: bold;");
console.log("%cForm loaded successfully!", "color: #10b981; font-size: 14px;");
console.log("%cVersion: 3.0 | Mobile-Optimized Edition", "color: #64748b; font-size: 12px;");
