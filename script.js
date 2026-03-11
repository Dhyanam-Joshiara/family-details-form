/***************************************
 * Family Details Form – script.js
 * v4.0 – Multilingual + Tabbed Cards
 ***************************************/

// ===== CONFIG =====
const API_URL = "https://script.google.com/macros/s/AKfycbxGyDQ41u_vJOAEf7qYU3Eo2gSdewk1y124NLbZ4sAK4iUOocxYX2bIFrIHpIPFb9MrRQ/exec";

// ===== TRANSLATIONS =====
const i18n = {
  en: {
    splash_title: "Family Details Registration",
    splash_subtitle: "Help us know your family better",
    splash_desc: "This information is collected for record-keeping purposes only and will be kept confidential.",
    choose_language: "Choose your language",
    start_filling: "Start Filling Form →",
    language: "Language:",
    step_personal: "Personal",
    step_family: "Family",
    step_additional: "Additional",
    form_title: "Family Details Registration",
    form_subtitle: "Please fill in your details accurately",
    page1_title: "Personal Information",
    page1_sub: "Tell us about yourself — the family head",
    label_fullname: "Full Name",
    ph_fullname: "Enter your full name",
    label_gender: "Gender",
    label_dob: "Date of Birth",
    label_pob: "Place of Birth",
    ph_pob: "City, State",
    label_blood: "Blood Group",
    label_mobile: "Mobile Number",
    ph_mobile: "+91 XXXXX XXXXX",
    label_whatsapp: "WhatsApp Number",
    same_as_mobile: "Same as Mobile Number",
    label_address: "Full Residential Address",
    ph_address: "Enter your complete address",
    label_hobbies: "Special Hobbies & Interests",
    ph_hobbies: "e.g. Reading, Sports, Music",
    btn_next: "Next",
    btn_back: "Back",
    btn_submit: "Submit Form",
    page2_title: "Family Members",
    page2_sub: "Details of all family members including yourself",
    label_total_members: "Total Family Members (Including Self)",
    ph_total_members: "e.g. 4",
    btn_generate: "Generate Cards",
    hint_family: 'Enter number of family members and click "Generate Cards"',
    page3_title: "Additional Information",
    page3_sub: "A few more details to complete your registration",
    label_married_daughters: "Do you have married daughters?",
    h_married_daughters: "Details of Married Daughters",
    btn_add_daughter: "+ Add Daughter",
    label_expectations: "Expectations from Family / Community",
    ph_expectations: "Share your thoughts and expectations...",
    label_ec_name: "Emergency Contact Person",
    ph_ec_name: "Full Name",
    label_ec_number: "Emergency Contact Number",
    h_review: "Review Your Submission",
    review_sub: "Please review your details before submitting",
    submitting: "Submitting your form...",
    thankyou_title: "Thank You! 🙏",
    thankyou_msg: "Your family details have been submitted successfully. We appreciate your time and effort in filling out this form.",
    thankyou_sub: "Your information is safe with us.",
    submit_another: "Submit Another Response",
    tab_personal: "👤 Personal",
    tab_education: "🎓 Education",
    tab_career: "💼 Career",
    label_relation: "Relation to Head",
    label_member_gender: "Gender",
    label_member_dob: "Date of Birth",
    label_member_marital: "Marital Status",
    label_highest_edu: "Highest Qualification",
    label_occupation: "Occupation Status",
    label_designation: "Designation / Organization",
    label_work_location: "Work Location",
    label_skills: "Skills / Achievements",
    ph_designation: "e.g. Software Engineer at ABC Corp",
    ph_work_location: "City, State",
    ph_skills: "Notable skills or achievements",
    na_education: "Not Applicable (e.g. young child)",
    na_career: "Not Applicable",
    member_self: "Self (You)",
    member_number: "Family Member",
    opt_select: "Select",
    opt_male: "Male",
    opt_female: "Female",
    opt_other: "Other",
    opt_no: "No",
    opt_yes: "Yes",
    ph_specify: "Please specify",
    career_show_hint: "Career details shown for Job / Business / Professional",
    review_personal: "Personal Details",
    review_family: "Family Members",
    daughter_name: "Daughter's Name",
    husband_name: "Husband's Name",
    daughter_city: "Current City / Country",
    daughter_contact: "Contact Number",
    err_required: "Please fill in all required fields marked with *",
    cards_generated: "family member card(s) generated",
    confirm_regenerate: "Regenerating will clear existing family data. Continue?",
  },
  gu: {
    splash_title: "કૌટુંબિક વિગતો નોંધણી",
    splash_subtitle: "અમને તમારા પરિવાર વિશે વધુ જાણવામાં મદદ કરો",
    splash_desc: "આ માહિતી ફક્ત રેકોર્ડ રાખવા માટે એકત્ર કરવામાં આવે છે અને તે ગુપ્ત રાખવામાં આવશે.",
    choose_language: "તમારી ભાષા પસંદ કરો",
    start_filling: "ફોર્મ ભરવાનું શરૂ કરો →",
    language: "ભાષા:",
    step_personal: "વ્યક્તિગત",
    step_family: "કુટુંબ",
    step_additional: "વધારાની",
    form_title: "કૌટુંબિક વિગતો નોંધણી",
    form_subtitle: "કૃપા કરીને તમારી વિગતો સચોટ રીતે ભરો",
    page1_title: "વ્યક્તિગત માહિતી",
    page1_sub: "કુટુંબના વડા વિશે અમને જણાવો",
    label_fullname: "પૂરું નામ",
    ph_fullname: "તમારું પૂરું નામ દાખલ કરો",
    label_gender: "લિંગ",
    label_dob: "જન્મ તારીખ",
    label_pob: "જન્મ સ્થળ",
    ph_pob: "શહેર, રાજ્ય",
    label_blood: "લોહીનો ગ્રૂપ",
    label_mobile: "મોબાઇલ નંબર",
    ph_mobile: "+91 XXXXX XXXXX",
    label_whatsapp: "વ્હોટ્સએપ નંબર",
    same_as_mobile: "મોબાઇલ નંબર જ",
    label_address: "સંપૂર્ણ રહેઠાણ સરનામું",
    ph_address: "તમારું સંપૂર્ણ સરનામું દાખલ કરો",
    label_hobbies: "ખાસ શોખ અને રુચિ",
    ph_hobbies: "દા.ત. વાંચન, રમતો, સંગીત",
    btn_next: "આગળ",
    btn_back: "પાછળ",
    btn_submit: "ફોર્મ સબમિટ કરો",
    page2_title: "કુટુંબના સભ્યો",
    page2_sub: "તમારી જાત સહિત તમામ કુટુંબ સભ્યોની વિગતો",
    label_total_members: "કુલ કુટુંબ સભ્યો (પોતે સહિત)",
    ph_total_members: "દા.ત. 4",
    btn_generate: "કાર્ડ બનાવો",
    hint_family: 'કુટુંબ સભ્યોની સંખ્યા દાખલ કરો અને "કાર્ડ બનાવો" ક્લિક કરો',
    page3_title: "વધારાની માહિતી",
    page3_sub: "તમારી નોંધણી પૂર્ણ કરવા માટે થોડી વધારે વિગતો",
    label_married_daughters: "શું તમારી પરણેલી દીકરીઓ છે?",
    h_married_daughters: "પરણેલી દીકરીઓની વિગતો",
    btn_add_daughter: "+ દીકરી ઉમેરો",
    label_expectations: "કુટુંબ / સમાજ પ્રત્યે અપેક્ષાઓ",
    ph_expectations: "તમારા વિચારો અને અપેક્ષાઓ શેર કરો...",
    label_ec_name: "કટોકટી સંપર્ક વ્યક્તિ",
    ph_ec_name: "પૂરું નામ",
    label_ec_number: "કટોકટી સંપર્ક નંબર",
    h_review: "સબમિટ કરતા પહેલા સમીક્ષા કરો",
    review_sub: "સબમિટ કરતા પહેલા તમારી વિગતો તપાસો",
    submitting: "ફોર્મ સબમિટ થઈ રહ્યું છે...",
    thankyou_title: "આભાર! 🙏",
    thankyou_msg: "તમારી કૌટુંબિક વિગતો સફળતાપૂર્વક સબમિટ કરવામાં આવી છે. ફોર્મ ભરવા માટે તમારો સમય આપવા બદલ આભાર.",
    thankyou_sub: "તમારી માહિતી અમારી સાથે સુરક્ષિત છે.",
    submit_another: "બીજો જવાબ સબમિટ કરો",
    tab_personal: "👤 વ્યક્તિગત",
    tab_education: "🎓 શિક્ષણ",
    tab_career: "💼 કારકિર્દી",
    label_relation: "વડા સાથે સંબંધ",
    label_member_gender: "લિંગ",
    label_member_dob: "જન્મ તારીખ",
    label_member_marital: "વૈવાહિક સ્થિતિ",
    label_highest_edu: "સૌથી વધુ લાયકાત",
    label_occupation: "વ્યવસાય સ્થિતિ",
    label_designation: "હોદ્દો / સંસ્થા",
    label_work_location: "કામ કરવાનું સ્થળ",
    label_skills: "કૌશલ્ય / સિદ્ધિઓ",
    ph_designation: "દા.ત. ABC કંપની માં સૉફ્ટવૅર ઇજનેર",
    ph_work_location: "શહેર, રાજ્ય",
    ph_skills: "નોંધપાત્ર કૌશલ્ય અથવા સિદ્ધિઓ",
    na_education: "લાગુ નથી (દા.ત. નાનું બાળક)",
    na_career: "લાગુ નથી",
    member_self: "હું (પોતે)",
    member_number: "કુટુંબ સભ્ય",
    opt_select: "પસંદ કરો",
    opt_male: "પુરુષ",
    opt_female: "સ્ત્રી",
    opt_other: "અન્ય",
    opt_no: "ના",
    opt_yes: "હા",
    ph_specify: "કૃપા કરીને જણાવો",
    career_show_hint: "નોકરી / વ્યવસાય / વ્યાવસાયિક માટે કારકિર્દી વિગતો",
    review_personal: "વ્યક્તિગત વિગતો",
    review_family: "કુટુંબ સભ્યો",
    daughter_name: "દીકરીનું નામ",
    husband_name: "પતિનું નામ",
    daughter_city: "વર્તમાન શહેર / દેશ",
    daughter_contact: "સંપર્ક નંબર",
    err_required: "કૃપા કરીને * ચિહ્નિત તમામ ફરજિયાત ક્ષેત્રો ભરો",
    cards_generated: "કુટુંબ સભ્ય કાર્ડ(ઓ) બનાવવામાં આવ્યા",
    confirm_regenerate: "ફરીથી બનાવવાથી હાલની કૌટુંબિક ડેટા સાફ થઈ જશે. ચાલુ રાખો?",
  },
  hi: {
    splash_title: "पारिवारिक विवरण पंजीकरण",
    splash_subtitle: "हमें आपके परिवार को बेहतर जानने में मदद करें",
    splash_desc: "यह जानकारी केवल रिकॉर्ड रखने के उद्देश्य से एकत्र की जाती है और गोपनीय रखी जाएगी।",
    choose_language: "अपनी भाषा चुनें",
    start_filling: "फ़ॉर्म भरना शुरू करें →",
    language: "भाषा:",
    step_personal: "व्यक्तिगत",
    step_family: "परिवार",
    step_additional: "अतिरिक्त",
    form_title: "पारिवारिक विवरण पंजीकरण",
    form_subtitle: "कृपया अपना विवरण सटीक रूप से भरें",
    page1_title: "व्यक्तिगत जानकारी",
    page1_sub: "परिवार के मुखिया के बारे में बताएं",
    label_fullname: "पूरा नाम",
    ph_fullname: "अपना पूरा नाम दर्ज करें",
    label_gender: "लिंग",
    label_dob: "जन्म तिथि",
    label_pob: "जन्म स्थान",
    ph_pob: "शहर, राज्य",
    label_blood: "रक्त समूह",
    label_mobile: "मोबाइल नंबर",
    ph_mobile: "+91 XXXXX XXXXX",
    label_whatsapp: "व्हाट्सएप नंबर",
    same_as_mobile: "मोबाइल नंबर जैसा ही",
    label_address: "पूर्ण आवासीय पता",
    ph_address: "अपना पूरा पता दर्ज करें",
    label_hobbies: "विशेष शौक और रुचियाँ",
    ph_hobbies: "जैसे पढ़ना, खेल, संगीत",
    btn_next: "अगला",
    btn_back: "वापस",
    btn_submit: "फ़ॉर्म जमा करें",
    page2_title: "परिवार के सदस्य",
    page2_sub: "स्वयं सहित सभी परिवार के सदस्यों का विवरण",
    label_total_members: "कुल परिवार के सदस्य (स्वयं सहित)",
    ph_total_members: "जैसे 4",
    btn_generate: "कार्ड बनाएं",
    hint_family: 'परिवार के सदस्यों की संख्या दर्ज करें और "कार्ड बनाएं" पर क्लिक करें',
    page3_title: "अतिरिक्त जानकारी",
    page3_sub: "आपका पंजीकरण पूरा करने के लिए कुछ और विवरण",
    label_married_daughters: "क्या आपकी विवाहित बेटियाँ हैं?",
    h_married_daughters: "विवाहित बेटियों का विवरण",
    btn_add_daughter: "+ बेटी जोड़ें",
    label_expectations: "परिवार / समुदाय से अपेक्षाएँ",
    ph_expectations: "अपने विचार और अपेक्षाएँ साझा करें...",
    label_ec_name: "आपातकालीन संपर्क व्यक्ति",
    ph_ec_name: "पूरा नाम",
    label_ec_number: "आपातकालीन संपर्क नंबर",
    h_review: "सबमिट करने से पहले समीक्षा करें",
    review_sub: "सबमिट करने से पहले अपना विवरण जाँचें",
    submitting: "फ़ॉर्म जमा हो रहा है...",
    thankyou_title: "धन्यवाद! 🙏",
    thankyou_msg: "आपका पारिवारिक विवरण सफलतापूर्वक जमा कर दिया गया है। फ़ॉर्म भरने में समय देने के लिए आपका आभार।",
    thankyou_sub: "आपकी जानकारी हमारे पास सुरक्षित है।",
    submit_another: "दूसरा जवाब जमा करें",
    tab_personal: "👤 व्यक्तिगत",
    tab_education: "🎓 शिक्षा",
    tab_career: "💼 करियर",
    label_relation: "मुखिया से संबंध",
    label_member_gender: "लिंग",
    label_member_dob: "जन्म तिथि",
    label_member_marital: "वैवाहिक स्थिति",
    label_highest_edu: "सर्वोच्च योग्यता",
    label_occupation: "व्यवसाय की स्थिति",
    label_designation: "पद / संस्था",
    label_work_location: "कार्य स्थान",
    label_skills: "कौशल / उपलब्धियाँ",
    ph_designation: "जैसे ABC कंपनी में सॉफ्टवेयर इंजीनियर",
    ph_work_location: "शहर, राज्य",
    ph_skills: "उल्लेखनीय कौशल या उपलब्धियाँ",
    na_education: "लागू नहीं (जैसे छोटा बच्चा)",
    na_career: "लागू नहीं",
    member_self: "मैं (स्वयं)",
    member_number: "परिवार के सदस्य",
    opt_select: "चुनें",
    opt_male: "पुरुष",
    opt_female: "महिला",
    opt_other: "अन्य",
    opt_no: "नहीं",
    opt_yes: "हाँ",
    ph_specify: "कृपया बताएं",
    career_show_hint: "नौकरी / व्यवसाय / पेशेवर के लिए करियर विवरण",
    review_personal: "व्यक्तिगत विवरण",
    review_family: "परिवार के सदस्य",
    daughter_name: "बेटी का नाम",
    husband_name: "पति का नाम",
    daughter_city: "वर्तमान शहर / देश",
    daughter_contact: "संपर्क नंबर",
    err_required: "कृपया * से चिह्नित सभी आवश्यक फ़ील्ड भरें",
    cards_generated: "परिवार सदस्य कार्ड बनाए गए",
    confirm_regenerate: "पुनः बनाने से मौजूदा पारिवारिक डेटा साफ हो जाएगा। जारी रखें?",
  }
};

// ===== RELATIONSHIP OPTIONS =====
const relationOptions = {
  en: ["Self","Spouse","Son","Daughter","Father","Mother","Brother","Sister",
       "Grandfather","Grandmother","Grandson","Granddaughter",
       "Father-in-law","Mother-in-law","Son-in-law","Daughter-in-law",
       "Uncle","Aunt","Nephew","Niece","Other"],
  gu: ["પોતે","જીવનસાથી","દીકરો","દીકરી","પિતા","માતા","ભાઈ","બહેન",
       "દાદા","દાદી","પૌત્ર","પૌત્રી",
       "સસરા","સાસુ","જમાઈ","વહુ",
       "કાકા/મામા","કાકી/મામી","ભત્રીજો/ભાણો","ભત્રીજી/ભાણી","અન્ય"],
  hi: ["स्वयं","पति/पत्नी","बेटा","बेटी","पिता","माता","भाई","बहन",
       "दादा/नाना","दादी/नानी","पोता/नाती","पोती/नातिन",
       "ससुर","सास","दामाद","बहू",
       "चाचा/मामा","चाची/मामी","भतीजा/भांजा","भतीजी/भांजी","अन्य"],
};

const educationOptions = {
  en: ["SSC","HSC","Diploma","Graduate","Post-Graduate","Doctorate","Other"],
  gu: ["SSC","HSC","ડિપ્લોમા","સ્નાતક","અનુ-સ્નાતક","ડૉક્ટરેટ","અન્ય"],
  hi: ["SSC","HSC","डिप्लोमा","स्नातक","स्नातकोत्तर","डॉक्टरेट","अन्य"],
};

const occupationOptions = {
  en: ["Job","Business","Professional","Retired","Homemaker","Student","Other"],
  gu: ["નોકરી","વ્યવસાય","વ્યાવસાયિક","નિવૃત્ત","ગૃહિણી","વિદ્યાર્થી","અન્ય"],
  hi: ["नौकरी","व्यवसाय","पेशेवर","सेवानिवृत्त","गृहिणी","छात्र","अन्य"],
};

const maritalOptions = {
  en: ["Single","Married","Widowed","Divorced"],
  gu: ["અપરિણીત","પરિણીત","વિધવા/વિધુર","છૂટાછેડા"],
  hi: ["अविवाहित","विवाहित","विधवा/विधुर","तलाकशुदा"],
};

const genderOptions = {
  en: ["Male","Female","Other"],
  gu: ["પુરુષ","સ્ત્રી","અન્ય"],
  hi: ["पुरुष","महिला","अन्य"],
};

// ===== GLOBAL STATE =====
let currentLang = "en";
let currentPage = 0;
let pages, totalPages;
let marriedDaughterCounter = 0;
let familyCardsGenerated = false;

// ===== DOM READY =====
document.addEventListener("DOMContentLoaded", () => {
  pages = document.querySelectorAll(".form-page");
  totalPages = pages.length;

  applyTranslations();
  setupSplash();
  setupLangSwitchers();
  setupEventListeners();
  showPage(0);
});

// ===== SPLASH =====
function setupSplash() {
  document.getElementById("startFormBtn").addEventListener("click", () => {
    document.getElementById("splashScreen").style.animation = "fadeOut 0.4s ease forwards";
    setTimeout(() => {
      document.getElementById("splashScreen").style.display = "none";
      document.getElementById("mainWrapper").style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  });
}

// add fadeOut keyframe dynamically
const styleEl = document.createElement("style");
styleEl.textContent = `@keyframes fadeOut { from{opacity:1} to{opacity:0} }`;
document.head.appendChild(styleEl);

// ===== LANGUAGE SWITCHERS =====
function setupLangSwitchers() {
  document.querySelectorAll(".lang-btn, .lang-bar-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;

  // Update active states on all switcher buttons
  document.querySelectorAll(".lang-btn, .lang-bar-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  applyTranslations();
  refreshFamilyCardLabels();
}

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
}

function applyTranslations() {
  // data-i18n text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    // preserve required span
    const req = el.querySelector(".required");
    el.textContent = t(key);
    if (req) el.appendChild(req);
  });

  // data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Re-translate select options that have data-i18n
  document.querySelectorAll("option[data-i18n]").forEach(opt => {
    opt.textContent = t(opt.dataset.i18n);
  });
}

// ===== PAGE NAVIGATION =====
function showPage(index) {
  if (!pages) return;
  pages.forEach(p => p.classList.remove("active"));
  if (pages[index]) pages[index].classList.add("active");

  const pct = ((index + 1) / totalPages) * 100;
  const fill = document.getElementById("progressFill");
  if (fill) fill.style.width = pct + "%";

  document.querySelectorAll(".step").forEach((step, i) => {
    step.classList.remove("active", "completed");
    const circle = step.querySelector(".step-circle");
    if (i === index) { step.classList.add("active"); circle.textContent = i + 1; }
    else if (i < index) { step.classList.add("completed"); circle.textContent = "✓"; }
    else { circle.textContent = i + 1; }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Build review on page 3
  if (index === 2) buildReview();
}

function nextPage() {
  if (!validateCurrentPage()) return;
  if (currentPage < totalPages - 1) {
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

function validateCurrentPage() {
  const pageEl = pages[currentPage];
  const required = pageEl.querySelectorAll("[required]");
  for (let f of required) {
    if (!f.value || !f.value.trim()) {
      f.focus();
      showNotification(t("err_required"), "error");
      f.style.animation = "shake 0.3s ease";
      setTimeout(() => f.style.animation = "", 350);
      return false;
    }
  }
  return true;
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // WhatsApp same-as-mobile
  const sameCheck = document.getElementById("same_whatsapp");
  const mobileIn = document.getElementById("mobile_number");
  const waIn = document.getElementById("whatsapp_number");
  if (sameCheck && mobileIn && waIn) {
    sameCheck.addEventListener("change", () => { if (sameCheck.checked) waIn.value = mobileIn.value; });
    mobileIn.addEventListener("input", () => { if (sameCheck.checked) waIn.value = mobileIn.value; });
  }

  // Married daughters toggle
  const mdSelect = document.getElementById("has_married_daughters");
  if (mdSelect) mdSelect.addEventListener("change", handleMarriedDaughtersChange);

  // Form submit
  const form = document.getElementById("familyForm");
  if (form) form.addEventListener("submit", handleFormSubmit);

  // Submit another
  document.getElementById("submitAnotherBtn")?.addEventListener("click", () => {
    document.getElementById("thankYouModal").style.display = "none";
    location.reload();
  });

  // Setup static conditional selects (Page 1)
  setupConditionalSelects();
}

function setupConditionalSelects() {
  document.querySelectorAll(".conditional-select").forEach(sel => {
    sel.addEventListener("change", function () {
      const otherId = this.id + "_other";
      const otherEl = document.getElementById(otherId);
      if (!otherEl) return;
      otherEl.style.display = this.value === "Other" ? "block" : "none";
      if (this.value !== "Other") otherEl.value = "";
    });
  });
}

// ===== FAMILY CARDS GENERATION =====
function generateFamilyCards() {
  const input = document.getElementById("total_family_members");
  const count = parseInt(input?.value || 0);

  if (!count || count < 1 || count > 20) {
    showNotification("Please enter a valid number (1–20)", "error");
    return;
  }

  const container = document.getElementById("familyContainer");
  const hint = document.getElementById("familyHint");

  if (familyCardsGenerated && container.children.length > 0) {
    if (!confirm(t("confirm_regenerate"))) return;
  }

  container.innerHTML = "";
  familyCardsGenerated = true;
  if (hint) hint.style.display = "none";

  for (let i = 0; i < count; i++) {
    const isSelf = i === 0;
    const card = buildFamilyCard(i + 1, isSelf);
    card.style.opacity = "0";
    container.appendChild(card);
    setTimeout(() => {
      card.style.transition = "opacity 0.3s ease";
      card.style.opacity = "1";
    }, i * 60);
  }

  // Pre-fill self card from page 1
  prefillSelfCard();
  showNotification(`${count} ${t("cards_generated")}`, "info");
}

function buildFamilyCard(num, isSelf) {
  const card = document.createElement("div");
  card.className = `family-card ${isSelf ? "self-card" : ""}`;
  card.dataset.cardId = num;

  const title = isSelf ? t("member_self") : `${t("member_number")} #${num}`;
  const subtitle = isSelf ? "👑 Family Head" : "";

  card.innerHTML = `
    <div class="card-header" onclick="toggleCard(${num})">
      <div class="card-header-left">
        <div class="card-avatar">${num}</div>
        <div>
          <div class="card-title">${title}</div>
          ${subtitle ? `<div class="card-subtitle">${subtitle}</div>` : ""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        ${!isSelf ? `<button type="button" class="card-remove-btn" onclick="event.stopPropagation(); removeCard(${num})" title="Remove">×</button>` : ""}
        <span class="card-toggle">▾</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-tabs">
        <button type="button" class="card-tab active" data-card="${num}" data-tab="personal" onclick="switchTab(${num},'personal')">
          <span class="tab-icon">👤</span> <span data-i18n="tab_personal">${t("tab_personal").replace("👤 ","")}</span>
        </button>
        <button type="button" class="card-tab" data-card="${num}" data-tab="education" onclick="switchTab(${num},'education')">
          <span class="tab-icon">🎓</span> <span data-i18n="tab_education">${t("tab_education").replace("🎓 ","")}</span>
        </button>
        <button type="button" class="card-tab" data-card="${num}" data-tab="career" onclick="switchTab(${num},'career')">
          <span class="tab-icon">💼</span> <span data-i18n="tab_career">${t("tab_career").replace("💼 ","")}</span>
        </button>
      </div>
      <div class="tab-panels">
        ${buildPersonalTab(num, isSelf)}
        ${buildEducationTab(num)}
        ${buildCareerTab(num)}
      </div>
    </div>
  `;

  // Auto-expand first card
  if (isSelf) {
    setTimeout(() => card.classList.add("expanded"), 100);
  }

  return card;
}

function buildPersonalTab(num, isSelf) {
  const relOpts = relationOptions[currentLang] || relationOptions.en;
  const relOptions = relOpts.map(r => `<option value="${r}"${r === "Self" || r === "પોતે" || r === "स्वयं" ? (isSelf ? " selected" : "") : ""}>${r}</option>`).join("");

  const gOpts = genderOptions[currentLang] || genderOptions.en;
  const gOptions = ["", ...gOpts].map((g, i) => `<option value="${g}">${i === 0 ? t("opt_select") : g}</option>`).join("");

  const mOpts = maritalOptions[currentLang] || maritalOptions.en;
  const mOptions = ["", ...mOpts].map((m, i) => `<option value="${m}">${i === 0 ? t("opt_select") : m}</option>`).join("");

  return `
    <div class="tab-panel active" data-card="${num}" data-panel="personal">
      <div class="mini-grid">
        <div class="form-group full">
          <label>${t("label_fullname")} <span class="required">*</span></label>
          <input type="text" class="m-name" placeholder="${t("ph_fullname")}" ${isSelf ? 'readonly style="background:#f9fafb;"' : ""}>
        </div>
        <div class="form-group">
          <label>${t("label_relation")}</label>
          <select class="m-relation"${isSelf ? ' disabled style="background:#f9fafb;"' : ""}>
            <option value="">${t("opt_select")}</option>
            ${relOptions}
          </select>
        </div>
        <div class="form-group">
          <label>${t("label_member_gender")}</label>
          <select class="m-gender"${isSelf ? ' disabled style="background:#f9fafb;"' : ""}>
            ${gOptions}
          </select>
        </div>
        <div class="form-group">
          <label>${t("label_dob")}</label>
          <input type="date" class="m-dob" ${isSelf ? 'readonly style="background:#f9fafb;"' : ""}>
        </div>
        <div class="form-group">
          <label>${t("label_mobile")}</label>
          <input type="tel" class="m-mobile" placeholder="${t("ph_mobile")}">
        </div>
        <div class="form-group">
          <label>${t("label_blood")}</label>
          <select class="m-blood">
            <option value="">${t("opt_select")}</option>
            ${["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(b=>`<option value="${b}">${b}</option>`).join("")}
          </select>
        </div>
        <div class="form-group full">
          <label>${t("label_member_marital")}</label>
          <select class="m-marital">
            ${mOptions}
          </select>
        </div>
      </div>
    </div>
  `;
}

function buildEducationTab(num) {
  const eduOpts = educationOptions[currentLang] || educationOptions.en;
  const eduOptions = ["", ...eduOpts].map((e, i) => `<option value="${e}">${i === 0 ? t("opt_select") : e}</option>`).join("");

  return `
    <div class="tab-panel" data-card="${num}" data-panel="education">
      <div class="na-checkbox-row">
        <input type="checkbox" id="na-edu-${num}" onchange="toggleNA(${num},'education')">
        <label for="na-edu-${num}">${t("na_education")}</label>
      </div>
      <div class="na-fields-wrapper" id="edu-fields-${num}">
        <div class="mini-grid">
          <div class="form-group full">
            <label>${t("label_highest_edu")}</label>
            <select class="m-education">
              ${eduOptions}
            </select>
          </div>
          <div class="form-group">
            <label>Institution / School / University</label>
            <input type="text" class="m-institution" placeholder="e.g. ABC University">
          </div>
          <div class="form-group">
            <label>Year of Completion</label>
            <input type="text" class="m-edu-year" placeholder="e.g. 2020">
          </div>
          <div class="form-group full">
            <label>Additional Qualifications</label>
            <input type="text" class="m-extra-edu" placeholder="Any other degrees or certifications">
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildCareerTab(num) {
  const occOpts = occupationOptions[currentLang] || occupationOptions.en;
  const occOptions = ["", ...occOpts].map((o, i) => `<option value="${o}">${i === 0 ? t("opt_select") : o}</option>`).join("");

  return `
    <div class="tab-panel" data-card="${num}" data-panel="career">
      <div class="na-checkbox-row">
        <input type="checkbox" id="na-career-${num}" onchange="toggleNA(${num},'career')">
        <label for="na-career-${num}">${t("na_career")}</label>
      </div>
      <div class="na-fields-wrapper" id="career-fields-${num}">
        <div class="mini-grid">
          <div class="form-group full">
            <label>${t("label_occupation")}</label>
            <select class="m-occupation" onchange="toggleCareerDetails(${num}, this.value)">
              ${occOptions}
            </select>
          </div>
          <div class="career-details" id="career-details-${num}" style="display:none; grid-column:1/-1;">
            <div class="mini-grid">
              <div class="form-group">
                <label>${t("label_designation")}</label>
                <input type="text" class="m-designation" placeholder="${t("ph_designation")}">
              </div>
              <div class="form-group">
                <label>${t("label_work_location")}</label>
                <input type="text" class="m-work-location" placeholder="${t("ph_work_location")}">
              </div>
              <div class="form-group full">
                <label>${t("label_skills")}</label>
                <textarea class="m-skills" rows="2" placeholder="${t("ph_skills")}"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== CARD INTERACTIONS =====
function toggleCard(num) {
  const card = document.querySelector(`.family-card[data-card-id="${num}"]`);
  if (card) card.classList.toggle("expanded");
}

function removeCard(num) {
  const card = document.querySelector(`.family-card[data-card-id="${num}"]`);
  if (card) {
    card.style.opacity = "0";
    card.style.transform = "translateX(-20px)";
    card.style.transition = "all 0.3s ease";
    setTimeout(() => card.remove(), 300);
  }
}

function switchTab(num, tabName) {
  // Deactivate all tabs & panels for this card
  document.querySelectorAll(`.card-tab[data-card="${num}"]`).forEach(t => t.classList.remove("active"));
  document.querySelectorAll(`.tab-panel[data-card="${num}"]`).forEach(p => p.classList.remove("active"));

  // Activate selected
  const tab = document.querySelector(`.card-tab[data-card="${num}"][data-tab="${tabName}"]`);
  const panel = document.querySelector(`.tab-panel[data-card="${num}"][data-panel="${tabName}"]`);
  if (tab) tab.classList.add("active");
  if (panel) panel.classList.add("active");
}

function toggleNA(num, section) {
  const checked = document.getElementById(`na-${section === "education" ? "edu" : "career"}-${num}`).checked;
  const fieldsEl = document.getElementById(`${section === "education" ? "edu" : "career"}-fields-${num}`);
  if (fieldsEl) fieldsEl.classList.toggle("disabled", checked);
}

function toggleCareerDetails(num, value) {
  const show = ["Job","Business","Professional","નોકરી","વ્યવસાય","વ્યાવસાયિક","नौकरी","व्यवसाय","पेशेवर"].includes(value);
  const detailsEl = document.getElementById(`career-details-${num}`);
  if (detailsEl) detailsEl.style.display = show ? "block" : "none";
}

// ===== PRE-FILL SELF CARD =====
function prefillSelfCard() {
  const selfCard = document.querySelector('.family-card[data-card-id="1"]');
  if (!selfCard) return;

  const name = document.getElementById("family_head_name")?.value || "";
  const dob = document.getElementById("dob")?.value || "";
  const genderSel = document.getElementById("gender");
  const genderOther = document.getElementById("gender_other");
  const gender = genderSel?.value === "Other" ? genderOther?.value : genderSel?.value;

  const nameInput = selfCard.querySelector(".m-name");
  const dobInput = selfCard.querySelector(".m-dob");
  const genderSelect = selfCard.querySelector(".m-gender");

  if (nameInput) nameInput.value = name;
  if (dobInput) dobInput.value = dob;
  if (genderSelect && gender) {
    // Try to match the option value
    Array.from(genderSelect.options).forEach(opt => {
      if (opt.value.toLowerCase() === gender.toLowerCase() ||
          genderOptions.en[genderOptions[currentLang]?.indexOf(opt.value)] === gender) {
        genderSelect.value = opt.value;
      }
    });
  }
}

// ===== REFRESH LABELS AFTER LANG CHANGE =====
function refreshFamilyCardLabels() {
  // Rebuild cards if already generated
  const count = parseInt(document.getElementById("total_family_members")?.value || 0);
  if (familyCardsGenerated && count > 0) {
    generateFamilyCards();
  }
}

// ===== MARRIED DAUGHTERS =====
function handleMarriedDaughtersChange(e) {
  const section = document.getElementById("marriedDaughtersSection");
  const container = document.getElementById("marriedDaughtersContainer");
  if (!section || !container) return;

  if (e.target.value === "Yes") {
    section.style.display = "block";
    if (container.children.length === 0) addMarriedDaughterRow();
  } else {
    section.style.display = "none";
    container.innerHTML = "";
    marriedDaughterCounter = 0;
  }
}

function addMarriedDaughterRow() {
  const container = document.getElementById("marriedDaughtersContainer");
  if (!container) return;

  marriedDaughterCounter++;
  const id = marriedDaughterCounter;

  const card = document.createElement("div");
  card.className = "mobile-card";
  card.dataset.daughterId = id;
  card.innerHTML = `
    <div class="mobile-card-header">
      <div class="mobile-card-title">🌸 ${t("h_married_daughters").replace("Details of ","")} #${id}</div>
      <button type="button" class="mobile-card-remove" onclick="removeDaughterCard(${id})">×</button>
    </div>
    <div class="mobile-card-body">
      <div class="mobile-card-field">
        <label>${t("daughter_name")}</label>
        <input type="text" class="d-name" placeholder="${t("ph_fullname")}">
      </div>
      <div class="mobile-card-field">
        <label>${t("husband_name")}</label>
        <input type="text" class="d-husband" placeholder="${t("ph_fullname")}">
      </div>
      <div class="mobile-card-field">
        <label>${t("daughter_city")}</label>
        <input type="text" class="d-city" placeholder="e.g. Mumbai, India">
      </div>
      <div class="mobile-card-field">
        <label>${t("daughter_contact")}</label>
        <input type="tel" class="d-contact" placeholder="${t("ph_mobile")}">
      </div>
    </div>
  `;

  card.style.opacity = "0";
  container.appendChild(card);
  setTimeout(() => { card.style.transition = "opacity 0.3s ease"; card.style.opacity = "1"; }, 10);
}

function removeDaughterCard(id) {
  const card = document.querySelector(`[data-daughter-id="${id}"]`);
  if (card) { card.style.opacity = "0"; setTimeout(() => card.remove(), 300); }
}

// ===== REVIEW SUMMARY =====
function buildReview() {
  const summary = document.getElementById("reviewSummary");
  if (!summary) return;

  const name = document.getElementById("family_head_name")?.value || "—";
  const mobile = document.getElementById("mobile_number")?.value || "—";
  const dob = document.getElementById("dob")?.value || "—";
  const address = document.getElementById("address")?.value || "—";

  const familyCards = document.querySelectorAll("#familyContainer .family-card");
  let familyHTML = "";
  familyCards.forEach((card, i) => {
    const n = card.querySelector(".m-name")?.value || "—";
    const r = card.querySelector(".m-relation")?.value || "—";
    familyHTML += `<div class="review-item"><span class="review-label">${t("member_number")} ${i+1}</span><span class="review-value">${n} (${r})</span></div>`;
  });

  summary.innerHTML = `
    <div class="review-group">
      <div class="review-group-title">${t("review_personal")}</div>
      <div class="review-grid">
        <div class="review-item"><span class="review-label">${t("label_fullname")}</span><span class="review-value">${name}</span></div>
        <div class="review-item"><span class="review-label">${t("label_mobile")}</span><span class="review-value">${mobile}</span></div>
        <div class="review-item"><span class="review-label">${t("label_dob")}</span><span class="review-value">${dob}</span></div>
        <div class="review-item"><span class="review-label">${t("label_address")}</span><span class="review-value">${address}</span></div>
      </div>
    </div>
    ${familyHTML ? `<div class="review-group"><div class="review-group-title">${t("review_family")}</div><div class="review-grid">${familyHTML}</div></div>` : ""}
  `;
}

// ===== DATA COLLECTION =====
function collectFamilyData() {
  const cards = document.querySelectorAll("#familyContainer .family-card");
  return Array.from(cards).map(card => {
    const naEdu = card.querySelector('[id^="na-edu"]')?.checked || false;
    const naCareer = card.querySelector('[id^="na-career"]')?.checked || false;
    return {
      name: card.querySelector(".m-name")?.value || "",
      relation: card.querySelector(".m-relation")?.value || "",
      gender: card.querySelector(".m-gender")?.value || "",
      dob: card.querySelector(".m-dob")?.value || "",
      mobile: card.querySelector(".m-mobile")?.value || "",
      blood_group: card.querySelector(".m-blood")?.value || "",
      marital_status: card.querySelector(".m-marital")?.value || "",
      education_na: naEdu,
      highest_education: naEdu ? "N/A" : (card.querySelector(".m-education")?.value || ""),
      institution: naEdu ? "" : (card.querySelector(".m-institution")?.value || ""),
      edu_year: naEdu ? "" : (card.querySelector(".m-edu-year")?.value || ""),
      extra_education: naEdu ? "" : (card.querySelector(".m-extra-edu")?.value || ""),
      career_na: naCareer,
      occupation: naCareer ? "N/A" : (card.querySelector(".m-occupation")?.value || ""),
      designation: naCareer ? "" : (card.querySelector(".m-designation")?.value || ""),
      work_location: naCareer ? "" : (card.querySelector(".m-work-location")?.value || ""),
      skills: naCareer ? "" : (card.querySelector(".m-skills")?.value || ""),
    };
  });
}

function collectMarriedDaughtersData() {
  return Array.from(document.querySelectorAll("#marriedDaughtersContainer .mobile-card")).map(card => ({
    daughter_name: card.querySelector(".d-name")?.value || "",
    husband_name: card.querySelector(".d-husband")?.value || "",
    city: card.querySelector(".d-city")?.value || "",
    contact: card.querySelector(".d-contact")?.value || "",
  }));
}

// ===== FORM SUBMISSION =====
async function handleFormSubmit(e) {
  e.preventDefault();
  showLoading(true);

  try {
    const gSel = document.getElementById("gender");
    const gOther = document.getElementById("gender_other");
    const bgSel = document.getElementById("blood_group");
    const bgOther = document.getElementById("blood_group_other");

    const payload = {
      family_head_name: document.getElementById("family_head_name")?.value || "",
      gender: gSel?.value === "Other" ? gOther?.value : gSel?.value,
      dob: document.getElementById("dob")?.value || "",
      place_of_birth: document.getElementById("place_of_birth")?.value || "",
      blood_group: bgSel?.value === "Other" ? bgOther?.value : bgSel?.value,
      address: document.getElementById("address")?.value || "",
      mobile_number: document.getElementById("mobile_number")?.value || "",
      whatsapp_number: document.getElementById("whatsapp_number")?.value || "",
      hobbies: document.getElementById("hobbies")?.value || "",
      total_family_members: document.getElementById("total_family_members")?.value || "",
      has_married_daughters: document.getElementById("has_married_daughters")?.value || "",
      expectations: document.getElementById("expectations")?.value || "",
      emergency_contact_name: document.getElementById("emergency_contact_name")?.value || "",
      emergency_contact_number: document.getElementById("emergency_contact_number")?.value || "",
      language_used: currentLang,
      family_members: collectFamilyData(),
      married_daughters: collectMarriedDaughtersData(),
    };

    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    showLoading(false);
    document.getElementById("thankYouModal").style.display = "flex";

  } catch (err) {
    showLoading(false);
    console.error("Submission error:", err);
    showNotification("There was an error submitting. Please try again.", "error");
  }
}

// ===== UTILITIES =====
function showLoading(show) {
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) overlay.classList.toggle("active", show);
}

function showNotification(message, type = "info") {
  const n = document.createElement("div");
  n.className = "notification";
  n.textContent = message;
  n.style.background = type === "success" ? "#27ae60" : type === "error" ? "#e74c3c" : "#e85d26";
  document.body.appendChild(n);
  setTimeout(() => {
    n.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => n.remove(), 300);
  }, 4000);
}

console.log("%cFamily Form v4.0", "color:#e85d26;font-size:22px;font-weight:800;");
console.log("%cMultilingual | Tabbed Cards | Mobile-First", "color:#6b7280;font-size:12px;");
