// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (themeIcon) themeIcon.innerText = theme === 'dark' ? '☀️' : '🌙';
    if (themeText) themeText.innerText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('sams-theme', theme);
}

const savedTheme = localStorage.getItem('sams-theme');
if (savedTheme) applyTheme(savedTheme);

// Tab Management
function switchTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
    tablinks = document.querySelectorAll(".tab-btn:not(.annual-tab-btn)");
    for (i = 0; i < tablinks.length; i++) { tablinks[i].classList.remove("active"); }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function switchAnnualTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("annual-tab-content");
    for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
    tablinks = document.getElementsByClassName("annual-tab-btn");
    for (i = 0; i < tablinks.length; i++) { tablinks[i].classList.remove("active"); }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function switchView(evt, viewName) {
    var i, panes, buttons;
    panes = document.getElementsByClassName("view-pane");
    for (i = 0; i < panes.length; i++) { panes[i].classList.remove("active"); }
    buttons = document.getElementsByClassName("toggle-btn");
    for (i = 0; i < buttons.length; i++) { buttons[i].classList.remove("active"); }
    var activePanes = document.getElementsByClassName(viewName);
    for (i = 0; i < activePanes.length; i++) { activePanes[i].classList.add("active"); }
    evt.currentTarget.classList.add("active");
}

// Modal Management
function openModal(year) {
    const data = financialData[year];
    const modal = document.getElementById('financialModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    if (!data || !modal || !title || !body) return;

    title.innerText = `${year} Financial Performance`;

    let htmlContent = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div style="background: var(--table-header); padding: 15px; border-radius: 12px;">
                <h4 style="color: var(--sams-teal); margin-bottom: 10px;">Revenue</h4>
                ${Object.entries(data.revenue).map(([key, val]) =>
        `<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: var(--text-muted);">${key}</span>
                        <span style="font-weight: 600;">$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>`
    ).join('')}
            </div>
            <div style="background: var(--table-header); padding: 15px; border-radius: 12px;">
                <h4 style="color: var(--sams-orange); margin-bottom: 10px;">COGS</h4>
                ${Object.entries(data.cogs).map(([key, val]) =>
        `<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: var(--text-muted);">${key}</span>
                        <span style="font-weight: 600;">$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>`
    ).join('')}
            </div>
        </div>

        <div style="background: var(--table-header); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
            <h4 style="color: var(--sams-yellow); margin-bottom: 10px;">OpEx</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px;">
            ${Object.entries(data.opex).map(([key, val]) =>
        `<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="color: var(--text-muted); font-size: 0.9em;">${key}</span>
                    <span style="font-weight: 600; font-size: 0.9em;">$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>`
    ).join('')}
            </div>
        </div>

        <div style="background: rgba(64, 173, 72, 0.1); padding: 20px; border-radius: 12px; text-align: center; border: 1px solid var(--sams-green);">
            <h3 style="color: var(--sams-green); margin: 0;">NET PROFIT: $${data.net.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
        </div>
    `;

    body.innerHTML = htmlContent;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('financialModal');
    if (modal) modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('financialModal');
    if (event.target == modal) closeModal();
}
