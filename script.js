/* ===== RESET & BASE ===== */
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --primary: #e85d26;
  --primary-dark: #c94d1a;
  --primary-light: #fff4ef;
  --accent: #f5a623;
  --success: #27ae60;
  --danger: #e74c3c;
  --text: #1a1a2e;
  --text-sec: #6b7280;
  --border: #e5e7eb;
  --bg: #f9fafb;
  --white: #ffffff;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.12);
  --radius: 14px;
  --radius-sm: 8px;
  --trans: all 0.25s ease;
}

body {
  font-family: 'Nunito', 'Tiro Devanagari Hindi', sans-serif;
  background: #fdf6f0;
  min-height: 100vh;
  color: var(--text);
  line-height: 1.6;
}

/* ===== SPLASH SCREEN ===== */
.splash-screen {
  position: fixed;
  inset: 0;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.splash-bg-shapes .shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
}
.shape-1 { width: 500px; height: 500px; background: var(--primary); top: -150px; right: -150px; }
.shape-2 { width: 350px; height: 350px; background: var(--accent); bottom: -100px; left: -100px; }
.shape-3 { width: 200px; height: 200px; background: #fff; top: 50%; left: 10%; }

.splash-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  animation: splashIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes splashIn {
  from { opacity: 0; transform: scale(0.85) translateY(30px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.splash-icon {
  font-size: 4rem;
  margin-bottom: 1.25rem;
  display: block;
  filter: drop-shadow(0 4px 12px rgba(232,93,38,0.4));
}

.splash-title {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.6rem;
  line-height: 1.2;
}

.splash-subtitle {
  font-size: 1.1rem;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 1rem;
}

.splash-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.lang-picker { margin-bottom: 2rem; }
.lang-picker-label {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.lang-buttons {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-wrap: wrap;
}

.lang-btn {
  padding: 0.55rem 1.2rem;
  border-radius: 50px;
  border: 2px solid rgba(255,255,255,0.2);
  background: transparent;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--trans);
  font-family: 'Nunito', 'Tiro Devanagari Hindi', sans-serif;
}

.lang-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.lang-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.splash-start-btn {
  width: 100%;
  padding: 1.1rem 2rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--trans);
  box-shadow: 0 8px 24px rgba(232,93,38,0.35);
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.02em;
}

.splash-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(232,93,38,0.45);
}

.splash-start-btn:active { transform: scale(0.98); }

/* ===== THANK YOU MODAL ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.3s ease;
}

.modal-box {
  background: white;
  border-radius: 24px;
  padding: 3rem 2.5rem;
  max-width: 440px;
  width: 100%;
  text-align: center;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
  animation: modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.8) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.modal-icon { font-size: 3.5rem; margin-bottom: 1rem; display: block; }
.modal-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 0.75rem;
}
.modal-msg {
  font-size: 1rem;
  color: var(--text-sec);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}
.modal-sub {
  font-size: 0.85rem;
  color: var(--success);
  font-weight: 600;
  margin-bottom: 2rem;
}
.modal-btn {
  padding: 0.9rem 2rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--trans);
  font-family: 'Nunito', sans-serif;
}
.modal-btn:hover { background: var(--primary-dark); transform: translateY(-2px); }

/* ===== LANGUAGE BAR ===== */
.lang-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1.5rem;
  background: white;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}

.lang-bar-label {
  font-size: 0.8rem;
  color: var(--text-sec);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.lang-bar-buttons { display: flex; gap: 0.4rem; }

.lang-bar-btn {
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
  border: 1.5px solid var(--border);
  background: transparent;
  color: var(--text-sec);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--trans);
  font-family: 'Nunito', 'Tiro Devanagari Hindi', sans-serif;
}
.lang-bar-btn:hover { border-color: var(--primary); color: var(--primary); }
.lang-bar-btn.active { background: var(--primary); border-color: var(--primary); color: white; }

/* ===== MAIN WRAPPER ===== */
.main-wrapper {
  min-height: 100vh;
  background: #fdf6f0;
}

/* ===== CONTAINER ===== */
.container {
  max-width: 860px;
  margin: 0 auto;
  background: white;
  border-radius: 0 0 var(--radius) var(--radius);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

/* ===== PROGRESS ===== */
.progress-container {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  padding: 2rem 2rem 1.5rem;
}

.progress-bar {
  height: 6px;
  background: rgba(255,255,255,0.25);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.progress-fill {
  height: 100%;
  background: white;
  border-radius: 10px;
  width: 33.33%;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-steps {
  display: flex;
  justify-content: space-around;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: var(--trans);
}

.step-circle {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: 2.5px solid rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 1rem;
  transition: var(--trans);
}

.step.active .step-circle {
  background: white;
  border-color: white;
  color: var(--primary);
  transform: scale(1.15);
  box-shadow: 0 4px 12px rgba(255,255,255,0.3);
}

.step.completed .step-circle {
  background: rgba(255,255,255,0.9);
  border-color: white;
  color: var(--success);
}

.step-label {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.8);
  font-weight: 600;
}
.step.active .step-label { color: white; font-weight: 700; }

/* ===== FORM HEADER ===== */
.form-header {
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid var(--border);
}

.form-header h1 {
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 0.3rem;
}

.subtitle {
  color: var(--text-sec);
  font-size: 0.95rem;
}

/* ===== FORM PAGES ===== */
.form-page {
  display: none;
  padding: 2rem;
  animation: slideIn 0.35s ease;
}
.form-page.active { display: block; }

@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

.page-header {
  margin-bottom: 1.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--primary-light);
}
.page-header h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.3rem;
}
.page-header p { color: var(--text-sec); font-size: 0.9rem; }

/* ===== FORM GRID ===== */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
  margin-bottom: 1.5rem;
}

.form-group { display: flex; flex-direction: column; }
.form-group.full-width { grid-column: 1 / -1; }

/* ===== FORM ELEMENTS ===== */
label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
  display: block;
}

.required { color: var(--danger); margin-left: 2px; }

input[type="text"], input[type="tel"], input[type="date"],
input[type="number"], select, textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  color: var(--text);
  background: white;
  font-family: 'Nunito', 'Tiro Devanagari Hindi', sans-serif;
  transition: var(--trans);
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(232,93,38,0.1);
}

input::placeholder, textarea::placeholder { color: #adb5bd; }

select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

textarea { resize: vertical; min-height: 90px; }

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.6rem;
  font-size: 0.88rem;
  color: var(--text-sec);
  cursor: pointer;
  font-weight: 600;
}
.checkbox-label input[type="checkbox"] {
  width: 17px; height: 17px;
  accent-color: var(--primary);
  cursor: pointer;
}

.other-input { animation: slideDown 0.25s ease; }
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== BUTTONS ===== */
.btn {
  padding: 0.85rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--trans);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.01em;
}
.btn:active { transform: scale(0.97); }

.btn-primary { background: var(--primary); color: white; box-shadow: 0 4px 12px rgba(232,93,38,0.25); }
.btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 6px 18px rgba(232,93,38,0.3); }

.btn-secondary { background: white; color: var(--text); border: 2px solid var(--border); }
.btn-secondary:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-1px); }

.btn-success { background: var(--success); color: white; box-shadow: 0 4px 12px rgba(39,174,96,0.25); }
.btn-success:hover { background: #219a52; transform: translateY(-2px); }

.btn-sm { padding: 0.55rem 1.1rem; font-size: 0.85rem; }
.arrow { font-size: 1.1rem; }
.submit-icon { font-size: 1rem; }

/* ===== FORM ACTIONS ===== */
.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid var(--bg);
  gap: 1rem;
}

/* ===== FAMILY COUNT ROW ===== */
.family-count-row {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.family-count-row .form-group { margin-bottom: 0; flex: 1; min-width: 200px; }

/* ===== FAMILY CARDS ===== */
.family-cards-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Each family member card */
.family-card {
  border: 2px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--trans);
  background: white;
}

.family-card:hover { border-color: var(--primary); box-shadow: var(--shadow-md); }

.family-card.self-card { border-color: var(--primary); background: #fffaf7; }

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--bg);
  border-bottom: 2px solid var(--border);
  cursor: pointer;
  user-select: none;
}

.self-card .card-header { background: var(--primary-light); border-bottom-color: rgba(232,93,38,0.15); }

.card-header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.self-card .card-avatar { background: linear-gradient(135deg, var(--primary), var(--accent)); }

.card-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
}
.card-subtitle {
  font-size: 0.78rem;
  color: var(--text-sec);
  margin-top: 1px;
}

.card-toggle {
  font-size: 1.2rem;
  color: var(--text-sec);
  transition: transform 0.25s ease;
}
.family-card.expanded .card-toggle { transform: rotate(180deg); }

/* Card Remove Button */
.card-remove-btn {
  background: none;
  border: none;
  color: var(--danger);
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  transition: var(--trans);
  line-height: 1;
}
.card-remove-btn:hover { background: #fef2f2; }

/* ===== CARD TABS ===== */
.card-body { display: none; }
.family-card.expanded .card-body { display: block; }

.card-tabs {
  display: flex;
  border-bottom: 2px solid var(--border);
  background: white;
  overflow-x: auto;
  scrollbar-width: none;
}
.card-tabs::-webkit-scrollbar { display: none; }

.card-tab {
  flex: 1;
  min-width: 90px;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-sec);
  cursor: pointer;
  border: none;
  background: transparent;
  border-bottom: 3px solid transparent;
  transition: var(--trans);
  white-space: nowrap;
  font-family: 'Nunito', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}

.card-tab:hover { color: var(--primary); background: var(--primary-light); }
.card-tab.active { color: var(--primary); border-bottom-color: var(--primary); background: var(--primary-light); }
.card-tab .tab-icon { font-size: 0.9rem; }
.card-tab .tab-check { color: var(--success); font-size: 0.8rem; }

/* Tab Panels */
.tab-panels { padding: 1.25rem; }
.tab-panel { display: none; animation: slideIn 0.2s ease; }
.tab-panel.active { display: block; }

/* NA Checkbox */
.na-checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.6rem 0.9rem;
  background: #f8f9fa;
  border-radius: var(--radius-sm);
  border: 1.5px dashed var(--border);
}

.na-checkbox-row input[type="checkbox"] {
  width: 16px; height: 16px;
  accent-color: var(--text-sec);
  cursor: pointer;
}

.na-checkbox-row label {
  font-size: 0.85rem;
  color: var(--text-sec);
  margin-bottom: 0;
  font-weight: 600;
  cursor: pointer;
}

.na-fields-wrapper.disabled {
  opacity: 0.4;
  pointer-events: none;
}

/* Mini form grid inside cards */
.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.mini-grid .full { grid-column: 1 / -1; }

/* Career conditional show */
.career-fields { transition: var(--trans); }

/* ===== SECTION DIVIDER ===== */
.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border), transparent);
  margin: 2rem 0;
}

/* ===== TABLE SECTION ===== */
.table-section { margin-top: 1.5rem; }
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.table-header h3 { font-size: 1.1rem; font-weight: 700; color: var(--text); }
.table-hint {
  text-align: center;
  color: var(--text-sec);
  font-size: 0.88rem;
  font-style: italic;
  margin-top: 0.75rem;
}

/* ===== MARRIED DAUGHTERS ===== */
.mobile-cards-container { display: flex; flex-direction: column; gap: 1rem; }

.mobile-card {
  border: 2px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  background: white;
  box-shadow: var(--shadow-sm);
  animation: slideDown 0.3s ease;
}

.mobile-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1.5px solid var(--border);
}

.mobile-card-title { font-size: 0.95rem; font-weight: 700; color: var(--primary); }

.mobile-card-remove {
  background: var(--danger);
  color: white;
  border: none;
  width: 28px; height: 28px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: var(--trans);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-card-remove:hover { background: #c0392b; transform: scale(1.1); }

.mobile-card-body { display: grid; gap: 0.85rem; }

.mobile-card-field { display: flex; flex-direction: column; }
.mobile-card-field label { font-size: 0.82rem; color: var(--text-sec); margin-bottom: 0.35rem; }
.mobile-card-field input, .mobile-card-field select { padding: 0.65rem 0.9rem; font-size: 0.9rem; }

/* ===== REVIEW SECTION ===== */
.review-section { margin-top: 1rem; }
.review-section h3 { font-size: 1.15rem; font-weight: 700; color: var(--text); margin-bottom: 0.3rem; }
.review-section > p { font-size: 0.88rem; color: var(--text-sec); margin-bottom: 1rem; }

.review-summary {
  background: var(--bg);
  border-radius: var(--radius);
  padding: 1.25rem;
  border: 1px solid var(--border);
}

.review-group { margin-bottom: 1.25rem; }
.review-group:last-child { margin-bottom: 0; }

.review-group-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary);
  margin-bottom: 0.6rem;
  padding-bottom: 0.4rem;
  border-bottom: 1.5px solid var(--primary-light);
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.review-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.review-label { font-size: 0.75rem; color: var(--text-sec); font-weight: 600; }
.review-value { font-size: 0.88rem; color: var(--text); font-weight: 700; }
.review-value:empty::after { content: "—"; color: #ccc; }

/* ===== LOADING OVERLAY ===== */
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
  z-index: 9000;
  backdrop-filter: blur(4px);
}
.loading-overlay.active { display: flex; }

.spinner {
  width: 52px; height: 52px;
  border: 4px solid rgba(255,255,255,0.2);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.loading-overlay p {
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
}

/* ===== NOTIFICATIONS ===== */
.notification {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  padding: 0.9rem 1.4rem;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  z-index: 9999;
  max-width: 360px;
  font-size: 0.9rem;
  animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
  from { transform: translateX(400px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutRight {
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(400px); opacity: 0; }
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 700px) {
  .form-grid { grid-template-columns: 1fr; }
  .mini-grid { grid-template-columns: 1fr; }
  .review-grid { grid-template-columns: 1fr; }
  .form-page { padding: 1.25rem; }
  .form-header { padding: 1.5rem 1.25rem 0.75rem; }
  .form-header h1 { font-size: 1.4rem; }
  .form-actions { flex-direction: column-reverse; }
  .form-actions .btn { width: 100%; justify-content: center; }
  .family-count-row { flex-direction: column; }
  .family-count-row .btn { width: 100%; }
  .progress-container { padding: 1.5rem 1rem 1rem; }
  .step-circle { width: 34px; height: 34px; font-size: 0.85rem; }
  .step-label { font-size: 0.68rem; }
  .table-header { flex-direction: column; align-items: flex-start; }
  .table-header .btn { width: 100%; }
  .splash-content { padding: 1.75rem 1.25rem; }
  .splash-title { font-size: 1.5rem; }
  .modal-box { padding: 2rem 1.5rem; }
  .lang-bar { padding: 0.5rem 1rem; }
  .card-tab { font-size: 0.78rem; padding: 0.65rem 0.75rem; min-width: 75px; }
}

@media (max-width: 420px) {
  body { font-size: 14px; }
  .splash-icon { font-size: 3rem; }
  .splash-title { font-size: 1.3rem; }
  .lang-btn { padding: 0.45rem 0.9rem; font-size: 0.82rem; }
}
