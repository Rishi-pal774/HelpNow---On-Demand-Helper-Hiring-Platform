// Translation data
const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_bookings: "My Bookings",
    nav_dashboard: "Dashboard",
    nav_logout: "Logout",
    nav_login: "Login",
    language: "Language",
    home_title: "Welcome to HelpNow",
    home_subtitle: "Find reliable service partners near you",
    home_browse_services: "Browse Services",
    services_title: "Our Services",
    services_select: "Select a service to book",
    book_now: "Book Now",
    view_details: "View Details",
    signup_title: "Create Account",
    signup_email: "Email",
    signup_password: "Password",
    signup_confirm_password: "Confirm Password",
    signup_phone: "Phone Number",
    signup_name: "Full Name",
    signup_role: "Role",
    signup_customer: "Customer",
    signup_partner: "Service Partner",
    signup_button: "Sign Up",
    signup_login_link: "Already have account? Login",
    otp_title: "Verify Email",
    otp_message: "Enter the OTP sent to your email",
    otp_code: "OTP Code",
    otp_verify: "Verify OTP",
    otp_resend: "Resend OTP",
    login_title: "Login",
    login_email: "Email",
    login_password: "Password",
    login_remember: "Remember me",
    login_button: "Login",
    login_forgot: "Forgot Password?",
    login_signup_link: "Don't have account? Sign Up",
    forgot_title: "Reset Password",
    forgot_email: "Enter your email",
    forgot_send: "Send Reset Link",
    forgot_message: "Reset link sent to your email",
    reset_password_title: "Set New Password",
    reset_new_password: "New Password",
    reset_confirm: "Confirm Password",
    reset_button: "Reset Password",
    booking_title: "Book Service",
    booking_service: "Select Service",
    booking_date: "Date",
    booking_time: "Time",
    booking_location: "Location/Address",
    booking_description: "Work Description",
    booking_submit: "Book Now",
    booking_price: "Price",
    booking_estimated_time: "Estimated Time",
    dashboard_title: "My Dashboard",
    dashboard_profile: "Profile",
    dashboard_bookings: "My Bookings",
    dashboard_completed: "Completed",
    dashboard_upcoming: "Upcoming",
    dashboard_edit_profile: "Edit Profile",
    tracking_title: "Service Partner Location",
    tracking_partner_info: "Service Partner Details",
    tracking_current_location: "Current Location",
    tracking_distance: "Distance",
    tracking_eta: "Estimated Time Arrival",
    tracking_status: "Status",
    tracking_on_way: "On the way",
    tracking_arrived: "Arrived",
    error_empty_field: "This field is required",
    error_invalid_email: "Invalid email address",
    error_password_mismatch: "Passwords do not match",
    error_phone_invalid: "Invalid phone number",
    error_invalid_otp: "Invalid OTP",
    error_login_failed: "Login failed",
    error_signup_failed: "Signup failed",
    success_signup: "Account created successfully!",
    success_login: "Logged in successfully!",
    success_booking: "Booking confirmed!",
    success_password_reset: "Password reset successfully!",
    hello: "Hello",
    logout_message: "You have been logged out"
  },
  hi: {
    nav_home: "होम",
    nav_services: "सेवाएं",
    nav_bookings: "मेरी बुकिंग",
    nav_dashboard: "डैशबोर्ड",
    nav_logout: "लॉगआउट",
    nav_login: "लॉगिन",
    language: "भाषा",
    home_title: "HelpNow में आपका स्वागत है",
    home_subtitle: "अपने पास विश्वसनीय सेवा साथी खोजें",
    home_browse_services: "सेवाएं देखें",
    services_title: "हमारी सेवाएं",
    services_select: "बुकिंग के लिए सेवा चुनें",
    book_now: "अभी बुक करें",
    view_details: "विवरण देखें",
    signup_title: "खाता बनाएं",
    signup_email: "ईमेल",
    signup_password: "पासवर्ड",
    signup_confirm_password: "पासवर्ड की पुष्टि करें",
    signup_phone: "फोन नंबर",
    signup_name: "पूरा नाम",
    signup_role: "भूमिका",
    signup_customer: "ग्राहक",
    signup_partner: "सेवा साथी",
    signup_button: "साइन अप करें",
    signup_login_link: "पहले से खाता है? लॉगिन करें",
    otp_title: "ईमेल सत्यापित करें",
    otp_message: "अपने ईमेल पर भेजा गया OTP दर्ज करें",
    otp_code: "OTP कोड",
    otp_verify: "OTP सत्यापित करें",
    otp_resend: "OTP फिर से भेजें",
    login_title: "लॉगिन",
    login_email: "ईमेल",
    login_password: "पासवर्ड",
    login_remember: "मुझे याद रखें",
    login_button: "लॉगिन",
    login_forgot: "पासवर्ड भूल गए?",
    login_signup_link: "खाता नहीं है? साइन अप करें",
    forgot_title: "पासवर्ड रीसेट करें",
    forgot_email: "अपना ईमेल दर्ज करें",
    forgot_send: "रीसेट लिंक भेजें",
    forgot_message: "रीसेट लिंक आपके ईमेल पर भेजा गया",
    reset_password_title: "नया पासवर्ड सेट करें",
    reset_new_password: "नया पासवर्ड",
    reset_confirm: "पासवर्ड की पुष्टि करें",
    reset_button: "पासवर्ड रीसेट करें",
    booking_title: "सेवा बुक करें",
    booking_service: "सेवा चुनें",
    booking_date: "तारीख",
    booking_time: "समय",
    booking_location: "स्थान/पता",
    booking_description: "काम का विवरण",
    booking_submit: "अभी बुक करें",
    booking_price: "कीमत",
    booking_estimated_time: "अनुमानित समय",
    dashboard_title: "मेरा डैशबोर्ड",
    dashboard_profile: "प्रोफाइल",
    dashboard_bookings: "मेरी बुकिंग",
    dashboard_completed: "पूर्ण",
    dashboard_upcoming: "आने वाली",
    dashboard_edit_profile: "प्रोफाइल संपादित करें",
    tracking_title: "सेवा साथी का स्थान",
    tracking_partner_info: "सेवा साथी विवरण",
    tracking_current_location: "वर्तमान स्थान",
    tracking_distance: "दूरी",
    tracking_eta: "अनुमानित समय अगमन",
    tracking_status: "स्थिति",
    tracking_on_way: "रास्ते में है",
    tracking_arrived: "पहुंच गया",
    error_empty_field: "यह फील्ड आवश्यक है",
    error_invalid_email: "अमान्य ईमेल पता",
    error_password_mismatch: "पासवर्ड मेल नहीं खाते",
    error_phone_invalid: "अमान्य फोन नंबर",
    error_invalid_otp: "अमान्य OTP",
    error_login_failed: "लॉगिन विफल",
    error_signup_failed: "साइन अप विफल",
    success_signup: "खाता सफलतापूर्वक बनाया गया!",
    success_login: "सफलतापूर्वक लॉगिन किया गया!",
    success_booking: "बुकिंग की पुष्टि हुई!",
    success_password_reset: "पासवर्ड सफलतापूर्वक रीसेट किया गया!",
    hello: "नमस्ते",
    logout_message: "आप लॉगआउट हो गए"
  }
};

// Services data
const services = [
  {
    id: 1,
    name_en: "Kitchen Service",
    name_hi: "रसोई सेवा",
    description_en: "Professional cleaning and organization",
    description_hi: "पेशेवर सफाई और संगठन",
    price: 500,
    rating: 4.8,
    image: "🍳"
  },
  {
    id: 2,
    name_en: "Handyman Service",
    name_hi: "हैंडीमैन सेवा",
    description_en: "Repair and maintenance work",
    description_hi: "मरम्मत और रखरखाव कार्य",
    price: 400,
    rating: 4.5,
    image: "🔧"
  },
  {
    id: 3,
    name_en: "Potter Service",
    name_hi: "कुम्हार सेवा",
    description_en: "Pottery and ceramic work",
    description_hi: "मिट्टी के बर्तन और सिरेमिक काम",
    price: 600,
    rating: 4.7,
    image: "🏺"
  },
  {
    id: 4,
    name_en: "Plumbing Service",
    name_hi: "नल सेवा",
    description_en: "All plumbing repairs",
    description_hi: "सभी नल की मरम्मत",
    price: 350,
    rating: 4.6,
    image: "🚰"
  },
  {
    id: 5,
    name_en: "Electrical Service",
    name_hi: "विद्युत सेवा",
    description_en: "Electrical installations and repairs",
    description_hi: "विद्युत स्थापना और मरम्मत",
    price: 450,
    rating: 4.9,
    image: "⚡"
  }
];

// Global state - using variables instead of localStorage
let currentLanguage = 'en';
let currentUser = null;
let isAuthenticated = false;
let userBookings = [];
let tempUserData = null;
let generatedOTP = null;
let trackingInterval = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initializeLanguage();
  initializeAuth();
  renderServices();
  setupEventListeners();
  updateTranslations();
});

// Language management
function initializeLanguage() {
  const langSelector = document.getElementById('languageSelector');
  langSelector.value = currentLanguage;
}

function changeLanguage(lang) {
  currentLanguage = lang;
  updateTranslations();
  renderServices();
  if (isAuthenticated) {
    updateDashboard();
    updateBookingsList();
  }
}

function updateTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      if (element.tagName === 'INPUT' && element.type === 'submit') {
        element.value = translations[currentLanguage][key];
      } else if (element.tagName === 'OPTION') {
        element.textContent = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });
}

// Authentication
function initializeAuth() {
  updateAuthUI();
}

function updateAuthUI() {
  const authBtn = document.getElementById('authBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const authRequiredLinks = document.querySelectorAll('.auth-required');
  
  if (isAuthenticated) {
    authBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-flex';
    authRequiredLinks.forEach(link => link.style.display = 'inline');
  } else {
    authBtn.style.display = 'inline-flex';
    logoutBtn.style.display = 'none';
    authRequiredLinks.forEach(link => link.style.display = 'none');
  }
}

function showAuthModal() {
  const modal = document.getElementById('authModal');
  modal.classList.add('active');
  showLogin();
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  modal.classList.remove('active');
}

function showLogin() {
  hideAllAuthForms();
  document.getElementById('loginForm').style.display = 'block';
}

function showSignup() {
  hideAllAuthForms();
  document.getElementById('signupForm').style.display = 'block';
}

function showOTPVerification() {
  hideAllAuthForms();
  document.getElementById('otpForm').style.display = 'block';
}

function showForgotPassword() {
  hideAllAuthForms();
  document.getElementById('forgotPasswordForm').style.display = 'block';
}

function showResetPassword() {
  hideAllAuthForms();
  document.getElementById('resetPasswordForm').style.display = 'block';
}

function hideAllAuthForms() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('otpForm').style.display = 'none';
  document.getElementById('forgotPasswordForm').style.display = 'none';
  document.getElementById('resetPasswordForm').style.display = 'none';
}

// Form handlers
function handleLogin(e) {
  e.preventDefault();
  showLoading();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  setTimeout(() => {
    hideLoading();
    if (email && password) {
      currentUser = {
        email: email,
        name: email.split('@')[0],
        role: 'customer'
      };
      isAuthenticated = true;
      closeAuthModal();
      updateAuthUI();
      showToast(translations[currentLanguage].success_login, 'success');
      navigateTo('dashboard');
    } else {
      showToast(translations[currentLanguage].error_login_failed, 'error');
    }
  }, 800);
}

function handleSignup(e) {
  e.preventDefault();
  
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const phone = document.getElementById('signupPhone').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const role = document.getElementById('signupRole').value;
  
  if (!validateEmail(email)) {
    showToast(translations[currentLanguage].error_invalid_email, 'error');
    return;
  }
  
  if (password !== confirmPassword) {
    showToast(translations[currentLanguage].error_password_mismatch, 'error');
    return;
  }
  
  if (!validatePhone(phone)) {
    showToast(translations[currentLanguage].error_phone_invalid, 'error');
    return;
  }
  
  showLoading();
  
  setTimeout(() => {
    hideLoading();
    tempUserData = { name, email, phone, role };
    generatedOTP = generateOTP();
    document.getElementById('generatedOTP').textContent = generatedOTP;
    showOTPVerification();
  }, 800);
}

function handleOTPVerification(e) {
  e.preventDefault();
  showLoading();
  
  const enteredOTP = document.getElementById('otpCode').value;
  
  setTimeout(() => {
    hideLoading();
    if (enteredOTP === generatedOTP) {
      currentUser = tempUserData;
      isAuthenticated = true;
      tempUserData = null;
      generatedOTP = null;
      closeAuthModal();
      updateAuthUI();
      showToast(translations[currentLanguage].success_signup, 'success');
      navigateTo('dashboard');
    } else {
      showToast(translations[currentLanguage].error_invalid_otp, 'error');
    }
  }, 500);
}

function handleForgotPassword(e) {
  e.preventDefault();
  showLoading();
  
  const email = document.getElementById('forgotEmail').value;
  
  setTimeout(() => {
    hideLoading();
    if (validateEmail(email)) {
      showToast(translations[currentLanguage].forgot_message, 'success');
      setTimeout(() => showResetPassword(), 1000);
    } else {
      showToast(translations[currentLanguage].error_invalid_email, 'error');
    }
  }, 800);
}

function handleResetPassword(e) {
  e.preventDefault();
  showLoading();
  
  const password = document.getElementById('resetPassword').value;
  const confirmPassword = document.getElementById('resetConfirmPassword').value;
  
  setTimeout(() => {
    hideLoading();
    if (password === confirmPassword) {
      showToast(translations[currentLanguage].success_password_reset, 'success');
      setTimeout(() => {
        closeAuthModal();
        showLogin();
      }, 1000);
    } else {
      showToast(translations[currentLanguage].error_password_mismatch, 'error');
    }
  }, 500);
}

function resendOTP() {
  generatedOTP = generateOTP();
  document.getElementById('generatedOTP').textContent = generatedOTP;
  showToast(translations[currentLanguage].otp_resend + ': ' + generatedOTP, 'success');
}

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone.replace(/\D/g, ''));
}

function logout() {
  isAuthenticated = false;
  currentUser = null;
  userBookings = [];
  updateAuthUI();
  navigateTo('home');
  showToast(translations[currentLanguage].logout_message, 'success');
}

// Services rendering
function renderServices() {
  const homeGrid = document.getElementById('homeServicesGrid');
  const servicesGrid = document.getElementById('servicesGrid');
  
  const serviceCards = services.map(service => createServiceCard(service)).join('');
  
  if (homeGrid) homeGrid.innerHTML = serviceCards;
  if (servicesGrid) servicesGrid.innerHTML = serviceCards;
}

function createServiceCard(service) {
  const name = currentLanguage === 'en' ? service.name_en : service.name_hi;
  const description = currentLanguage === 'en' ? service.description_en : service.description_hi;
  
  return `
    <div class="service-card" onclick="bookService(${service.id})">
      <div class="service-icon">${service.image}</div>
      <div class="service-name">${name}</div>
      <div class="service-description">${description}</div>
      <div class="service-details">
        <div class="service-price">₹${service.price}</div>
        <div class="service-rating">⭐ ${service.rating}</div>
      </div>
      <button class="btn btn--primary" onclick="bookService(${service.id})" data-i18n="book_now">${translations[currentLanguage].book_now}</button>
    </div>
  `;
}

function bookService(serviceId) {
  event.stopPropagation();
  
  if (!isAuthenticated) {
    showAuthModal();
    return;
  }
  
  const service = services.find(s => s.id === serviceId);
  if (service) {
    navigateTo('bookingFormPage');
    populateBookingForm(service);
  }
}

function populateBookingForm(service) {
  const select = document.getElementById('bookingServiceSelect');
  select.innerHTML = services.map(s => {
    const name = currentLanguage === 'en' ? s.name_en : s.name_hi;
    return `<option value="${s.id}" ${s.id === service.id ? 'selected' : ''}>${name}</option>`;
  }).join('');
  
  updateBookingPrice();
}

function updateBookingPrice() {
  const serviceId = parseInt(document.getElementById('bookingServiceSelect').value);
  const service = services.find(s => s.id === serviceId);
  if (service) {
    const priceDisplay = document.getElementById('bookingPriceDisplay');
    priceDisplay.innerHTML = `<span data-i18n="booking_price">${translations[currentLanguage].booking_price}</span>: ₹${service.price}`;
  }
}

function handleBooking(e) {
  e.preventDefault();
  showLoading();
  
  const serviceId = parseInt(document.getElementById('bookingServiceSelect').value);
  const date = document.getElementById('bookingDate').value;
  const time = document.getElementById('bookingTime').value;
  const location = document.getElementById('bookingLocation').value;
  const description = document.getElementById('bookingDescription').value;
  
  const service = services.find(s => s.id === serviceId);
  
  setTimeout(() => {
    hideLoading();
    
    const booking = {
      id: Date.now(),
      serviceId: serviceId,
      serviceName: currentLanguage === 'en' ? service.name_en : service.name_hi,
      serviceIcon: service.image,
      date: date,
      time: time,
      location: location,
      description: description,
      price: service.price,
      status: 'upcoming',
      partnerName: 'Rajesh Kumar',
      partnerPhone: '+91 98765 43210'
    };
    
    userBookings.push(booking);
    showToast(translations[currentLanguage].success_booking, 'success');
    
    setTimeout(() => {
      navigateTo('trackingPage');
      startTracking(booking);
    }, 1000);
  }, 800);
}

// Dashboard
function updateDashboard() {
  const profileInfo = document.getElementById('profileInfo');
  const dashboardBookings = document.getElementById('dashboardBookings');
  
  if (currentUser) {
    profileInfo.innerHTML = `
      <p><strong>${translations[currentLanguage].signup_name}:</strong> ${currentUser.name}</p>
      <p><strong>${translations[currentLanguage].signup_email}:</strong> ${currentUser.email}</p>
      <p><strong>${translations[currentLanguage].signup_role}:</strong> ${currentUser.role === 'customer' ? translations[currentLanguage].signup_customer : translations[currentLanguage].signup_partner}</p>
    `;
  }
  
  const upcomingBookings = userBookings.filter(b => b.status === 'upcoming');
  if (upcomingBookings.length > 0) {
    dashboardBookings.innerHTML = upcomingBookings.slice(0, 3).map(booking => `
      <div style="padding: 12px; background: var(--color-bg-1); border-radius: 8px; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 24px;">${booking.serviceIcon}</span>
          <div>
            <div style="font-weight: 600;">${booking.serviceName}</div>
            <div style="font-size: 12px; color: var(--color-text-secondary);">${booking.date} at ${booking.time}</div>
          </div>
        </div>
      </div>
    `).join('');
  } else {
    dashboardBookings.innerHTML = `<p style="color: var(--color-text-secondary);">${currentLanguage === 'en' ? 'No bookings yet' : 'अभी तक कोई बुकिंग नहीं'}</p>`;
  }
}

// Bookings
function updateBookingsList() {
  const bookingsList = document.getElementById('bookingsList');
  const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
  
  const filteredBookings = userBookings.filter(b => b.status === activeTab);
  
  if (filteredBookings.length === 0) {
    bookingsList.innerHTML = `<p style="color: var(--color-text-secondary); text-align: center; padding: 40px;">${currentLanguage === 'en' ? 'No bookings found' : 'कोई बुकिंग नहीं मिली'}</p>`;
    return;
  }
  
  bookingsList.innerHTML = filteredBookings.map(booking => `
    <div class="booking-item">
      <div class="booking-header">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 32px;">${booking.serviceIcon}</span>
          <div class="booking-service-name">${booking.serviceName}</div>
        </div>
        <span class="status status--success">${booking.status}</span>
      </div>
      <div class="booking-info">
        <div><strong>${translations[currentLanguage].booking_date}:</strong> ${booking.date}</div>
        <div><strong>${translations[currentLanguage].booking_time}:</strong> ${booking.time}</div>
        <div><strong>${translations[currentLanguage].booking_location}:</strong> ${booking.location}</div>
        <div><strong>${translations[currentLanguage].booking_price}:</strong> ₹${booking.price}</div>
      </div>
      ${booking.status === 'upcoming' ? `<button class="btn btn--primary" style="margin-top: 12px;" onclick="trackBooking(${booking.id})">${currentLanguage === 'en' ? 'Track Service Partner' : 'सेवा साथी को ट्रैक करें'}</button>` : ''}
    </div>
  `).join('');
}

function trackBooking(bookingId) {
  const booking = userBookings.find(b => b.id === bookingId);
  if (booking) {
    navigateTo('trackingPage');
    startTracking(booking);
  }
}

// Tracking
function startTracking(booking) {
  const canvas = document.getElementById('mapCanvas');
  const ctx = canvas.getContext('2d');
  const partnerDetails = document.getElementById('partnerDetails');
  
  partnerDetails.innerHTML = `
    <p><strong>${translations[currentLanguage].signup_name}:</strong> ${booking.partnerName}</p>
    <p><strong>${translations[currentLanguage].signup_phone}:</strong> ${booking.partnerPhone}</p>
    <p><strong>${currentLanguage === 'en' ? 'Service' : 'सेवा'}:</strong> ${booking.serviceName}</p>
  `;
  
  let partnerX = 100;
  let partnerY = 100;
  const customerX = 500;
  const customerY = 300;
  
  if (trackingInterval) {
    clearInterval(trackingInterval);
  }
  
  trackingInterval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw map background
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-1');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-border');
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }
    
    // Draw route line
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(partnerX, partnerY);
    ctx.lineTo(customerX, customerY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Draw customer location
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-error');
    ctx.beginPath();
    ctx.arc(customerX, customerY, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text');
    ctx.font = '24px Arial';
    ctx.fillText('🏠', customerX - 12, customerY + 8);
    
    // Draw service partner location
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-success');
    ctx.beginPath();
    ctx.arc(partnerX, partnerY, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text');
    ctx.font = '24px Arial';
    ctx.fillText('🚗', partnerX - 12, partnerY + 8);
    
    // Update partner position
    const dx = customerX - partnerX;
    const dy = customerY - partnerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 20) {
      partnerX += dx / distance * 2;
      partnerY += dy / distance * 2;
      
      const distanceKm = (distance / 50).toFixed(1);
      const eta = Math.ceil(distance / 5);
      
      document.getElementById('partnerDistance').textContent = distanceKm + ' km';
      document.getElementById('partnerETA').textContent = eta + ' min';
      document.getElementById('partnerStatus').textContent = translations[currentLanguage].tracking_on_way;
    } else {
      document.getElementById('partnerDistance').textContent = '0 km';
      document.getElementById('partnerETA').textContent = '0 min';
      document.getElementById('partnerStatus').textContent = translations[currentLanguage].tracking_arrived;
      clearInterval(trackingInterval);
    }
  }, 100);
}

function showEditProfile() {
  alert(currentLanguage === 'en' ? 'Edit profile feature coming soon!' : 'प्रोफाइल संपादन सुविधा जल्द आ रही है!');
}

// Navigation
function navigateTo(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const targetPage = document.getElementById(pageId + (pageId.includes('Page') ? '' : 'Page'));
  if (targetPage) {
    targetPage.classList.add('active');
    
    if (pageId === 'dashboard') {
      updateDashboard();
    } else if (pageId === 'bookings') {
      updateBookingsList();
    } else if (pageId === 'bookingFormPage') {
      const firstService = services[0];
      populateBookingForm(firstService);
    }
  }
}

// UI helpers
function showLoading() {
  document.getElementById('loadingSpinner').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loadingSpinner').style.display = 'none';
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show ' + type;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Event listeners setup
function setupEventListeners() {
  // Language selector
  document.getElementById('languageSelector').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
  });
  
  // Auth buttons
  document.getElementById('authBtn').addEventListener('click', showAuthModal);
  document.getElementById('logoutBtn').addEventListener('click', logout);
  
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.getAttribute('data-page');
      if (e.target.classList.contains('auth-required') && !isAuthenticated) {
        showAuthModal();
      } else {
        navigateTo(page);
      }
    });
  });
  
  // Forms
  document.getElementById('loginFormElement').addEventListener('submit', handleLogin);
  document.getElementById('signupFormElement').addEventListener('submit', handleSignup);
  document.getElementById('otpFormElement').addEventListener('submit', handleOTPVerification);
  document.getElementById('forgotPasswordFormElement').addEventListener('submit', handleForgotPassword);
  document.getElementById('resetPasswordFormElement').addEventListener('submit', handleResetPassword);
  document.getElementById('bookingForm').addEventListener('submit', handleBooking);
  
  // Booking service select
  document.getElementById('bookingServiceSelect').addEventListener('change', updateBookingPrice);
  
  // Booking tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      updateBookingsList();
    });
  });
  
  // Close modal on outside click
  document.getElementById('authModal').addEventListener('click', (e) => {
    if (e.target.id === 'authModal') {
      closeAuthModal();
    }
  });
}