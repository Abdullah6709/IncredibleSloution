/* ==========================================================================
   Incredible Solutions - Interactive Logic & Dynamics
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Industry Selector Interaction
  const industryCards = document.querySelectorAll('.industry-card');
  industryCards.forEach(card => {
    card.addEventListener('click', () => {
      industryCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const industryName = card.querySelector('h4').textContent;
      showIndustryRecommendation(industryName);
    });
  });

  function showIndustryRecommendation(industry) {
    const recMap = {
      'Data Centres': 'Recommended: Modular Online UPS (50-500 KVA) with N+1 Redundancy & Hot Swappable Modules.',
      'Hospitals': 'Recommended: Three Phase High-Isolation Online UPS (20-120 KVA) for Critical Medical Equipment.',
      'Industries': 'Recommended: Heavy Duty Industrial Three Phase UPS (30-300 KVA) with High Inrush Current Tolerances.',
      'Banks & Finance': 'Recommended: 10-40 KVA True Online Double Conversion UPS for Servers & ATM Networks.',
      'Telecom': 'Recommended: Rackmount / Tower 1-Phase & 3-Phase Online UPS with Long Backup VRLA Batteries.',
      'IT & Education': 'Recommended: 1-10 KVA Single Phase Online UPS for Server Racks & Computer Labs.',
      'Retail & Commercial': 'Recommended: 3-10 KVA Compact Single Phase UPS with Pure Sine Wave Output.',
      'Government': 'Recommended: Custom High-Efficiency 3-Phase UPS with Annual AMC Support & Pan India SLA.'
    };

    const text = recMap[industry] || 'Contact our experts for customized UPS sizing.';
    showToast(`💡 ${industry} Solution: ${text}`);
  }

  // Dynamic KVA & Battery Calculator
  const loadWattsInput = document.getElementById('calcLoadWatts');
  const backupHoursInput = document.getElementById('calcBackupHours');
  const calcResultKva = document.getElementById('calcResultKva');
  const calcResultSpecs = document.getElementById('calcResultSpecs');

  function calculateUpsiRequirement() {
    if (!loadWattsInput || !backupHoursInput) return;
    const watts = parseFloat(loadWattsInput.value) || 0;
    const backupHours = parseFloat(backupHoursInput.value) || 1;

    if (watts <= 0) {
      if (calcResultKva) calcResultKva.textContent = '0 KVA';
      if (calcResultSpecs) calcResultSpecs.textContent = 'Enter your equipment load in Watts above';
      return;
    }

    // Power factor standard 0.8 / 0.9 with 25% overhead buffer
    const requiredKva = (watts / 0.8 / 1000 * 1.25).toFixed(1);
    const phaseType = requiredKva > 10 ? '3-Phase High Capacity' : '1-Phase Compact Tower';
    const totalVah = (watts * backupHours) / 0.85; // Efficiency 85%
    const estimatedBatteryAh = (totalVah / 12 / 16).toFixed(0); // 16 batteries in standard string

    if (calcResultKva) calcResultKva.textContent = `${requiredKva} KVA`;
    if (calcResultSpecs) {
      calcResultSpecs.innerHTML = `
        <strong>Recommended Setup:</strong> ${phaseType}<br>
        <strong>Est. Battery Requirement:</strong> Approx. 16x 12V ${estimatedBatteryAh}Ah Batteries for ~${backupHours} hr backup
      `;
    }
  }

  if (loadWattsInput && backupHoursInput) {
    loadWattsInput.addEventListener('input', calculateUpsiRequirement);
    backupHoursInput.addEventListener('input', calculateUpsiRequirement);
    calculateUpsiRequirement();
  }

  // Product Spec Modal Logic
  const specModal = document.getElementById('specModal');
  const specModalTitle = document.getElementById('specModalTitle');
  const specModalBody = document.getElementById('specModalBody');
  const closeModalBtns = document.querySelectorAll('.close-modal');

  const productSpecs = {
    'single-phase': {
      title: 'Single Phase Online UPS (1 KVA - 10 KVA)',
      specs: [
        { label: 'Capacity Range', value: '1.0 KVA to 10.0 KVA' },
        { label: 'Input Voltage Range', value: '110V - 300V AC Single Phase' },
        { label: 'Output Voltage', value: '220V / 230V AC ± 1%' },
        { label: 'Technology', value: 'True Double Conversion Online Technology' },
        { label: 'Power Factor', value: '0.9 / 1.0 Unity Power Factor' },
        { label: 'Waveform', value: 'Pure Sine Wave' },
        { label: 'Battery System', value: 'External VRLA / Lithium Battery Bank (36V to 240V DC)' },
        { label: 'Ideal For', value: 'Small & Medium Offices, Diagnostic Labs, IT Racks' }
      ]
    },
    'three-phase': {
      title: 'Three Phase Online UPS (10 KVA - 120 KVA)',
      specs: [
        { label: 'Capacity Range', value: '10.0 KVA to 120.0 KVA' },
        { label: 'Input Voltage Range', value: '380V / 400V / 415V AC 3-Phase 4-Wire' },
        { label: 'Output Voltage', value: '400V / 415V AC 3-Phase ± 1%' },
        { label: 'Efficiency', value: 'Up to 96% in Online Double Conversion Mode' },
        { label: 'Display & Control', value: 'Touchscreen LCD Graphic Display with SNMP Monitoring' },
        { label: 'Overload Capability', value: '125% for 10 mins; 150% for 1 min' },
        { label: 'Ideal For', value: 'Hospitals, Factories, Industrial Motors, Server Rooms' }
      ]
    },
    'modular': {
      title: 'Modular Online UPS (20 KVA - 500 KVA+)',
      specs: [
        { label: 'Capacity Range', value: '20 KVA to 500 KVA+ Scalable' },
        { label: 'Module Capacity', value: '10 KVA, 25 KVA, 50 KVA Hot-Swappable Power Modules' },
        { label: 'Redundancy', value: 'N+X Parallel Redundancy' },
        { label: 'Maintenance', value: 'Zero Downtime Module Replacement (Hot Swap)' },
        { label: 'Footprint', value: 'Ultra Compact High Power Density Cabinet' },
        { label: 'Ideal For', value: 'Enterprise Data Centres, Financial Cloud Racks, Telecom Hubs' }
      ]
    }
  };

  document.querySelectorAll('.view-spec-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productKey = btn.getAttribute('data-product');
      const data = productSpecs[productKey];

      if (data && specModal) {
        specModalTitle.textContent = data.title;
        let html = '<table style="width:100%; border-collapse: collapse; font-size:0.92rem;">';
        data.specs.forEach(s => {
          html += `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding:10px; font-weight:700; color:#0b2545; width:40%;">${s.label}</td>
              <td style="padding:10px; color:#596b78;">${s.value}</td>
            </tr>
          `;
        });
        html += '</table>';
        specModalBody.innerHTML = html;
        specModal.classList.add('active');
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  // Quote Form Submission & WhatsApp/Email Dispatcher
  const quoteForm = document.getElementById('quoteForm');
  const quoteModal = document.getElementById('quoteModal');
  const quoteSummary = document.getElementById('quoteSummary');
  const btnWaDispatch = document.getElementById('btnWaDispatch');
  const btnMailDispatch = document.getElementById('btnMailDispatch');

  let currentFormData = {};

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quoteName').value.trim();
      const mobile = document.getElementById('quoteMobile').value.trim();
      const email = document.getElementById('quoteEmail').value.trim();
      const city = document.getElementById('quoteCity').value.trim();
      const capacity = document.getElementById('quoteCapacity').value;
      const message = document.getElementById('quoteMessage') ? document.getElementById('quoteMessage').value.trim() : '';

      if (!name || !mobile) {
        alert('Please fill in your Name and Mobile Number.');
        return;
      }

      currentFormData = { name, mobile, email, city, capacity, message };

      // Build Summary Display
      quoteSummary.innerHTML = `
        <div style="background:#eef5ff; padding:16px; border-radius:8px; border:1px solid #0056b3; line-height:1.7;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>City:</strong> ${city || 'N/A'}</p>
          <p><strong>Capacity Req.:</strong> ${capacity}</p>
          ${message ? `<p><strong>Note:</strong> ${message}</p>` : ''}
        </div>
      `;

      if (quoteModal) {
        quoteModal.classList.add('active');
      }
    });
  }

  // WhatsApp Dispatch Action
  if (btnWaDispatch) {
    btnWaDispatch.addEventListener('click', () => {
      const waNumber = '919891916223';
      const text = `Hi Incredible Solutions, I am interested in an Online UPS Enquiry:
- Name: ${currentFormData.name}
- Mobile: ${currentFormData.mobile}
- Email: ${currentFormData.email || 'N/A'}
- City: ${currentFormData.city || 'N/A'}
- Capacity Required: ${currentFormData.capacity}`;
      
      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      if (quoteModal) quoteModal.classList.remove('active');
    });
  }

  // Email Dispatch Action
  if (btnMailDispatch) {
    btnMailDispatch.addEventListener('click', () => {
      const mailEmail = 'raturiincredible@gmail.com';
      const subject = `Online UPS Enquiry from ${currentFormData.name}`;
      const body = `Hi Incredible Solutions Team,

I would like to request a quote / consultation for Online UPS systems:

Name: ${currentFormData.name}
Mobile: ${currentFormData.mobile}
Email: ${currentFormData.email || 'N/A'}
City: ${currentFormData.city || 'N/A'}
UPS Capacity Requirement: ${currentFormData.capacity}

Message / Requirement details:
${currentFormData.message || 'Please contact me with price catalog.'}

Thanks & Regards,
${currentFormData.name}`;

      const mailtoUrl = `mailto:${mailEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      if (quoteModal) quoteModal.classList.remove('active');
    });
  }

  // Floating Toast Notification Helper
  function showToast(msg) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.style.cssText = `
        position: fixed;
        bottom: 95px;
        right: 25px;
        background: #0b2545;
        color: #ffffff;
        padding: 14px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 1000;
        font-size: 0.9rem;
        max-width: 380px;
        transition: all 0.3s ease;
        border-left: 4px solid #f39c12;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 4000);
  }
});
