/**
 * Topaz Mail — Waitlist Edition Script
 * Standalone interactive logic for the waitlist landing page
 */

(function () {
  'use strict';

  // Demo email dataset from Figma prototype
  const DEMO_EMAILS = [
    {
      id: 0,
      sender: 'Maya Chen',
      email: 'maya@studio-chen.com',
      avatarBg: '#d5e8df',
      avatarText: 'MC',
      subject: 'Re: Brand direction for Q4',
      time: '10:42 AM',
      body: `Hi Danny,\n\nI’ve reviewed the latest moodboards and the updated typeface pairings. The serif headline option feels dramatically more elevated and distinct from standard tech mail interfaces.\n\nCould we lock this in by Thursday before the stakeholder review? Let me know if you need any additional export presets.\n\nBest,\nMaya Chen\nDesign Lead · Studio Chen`
    },
    {
      id: 1,
      sender: 'Tunde at Paystack',
      email: 'tunde@paystack.com',
      avatarBg: '#f1dfc7',
      avatarText: 'TP',
      subject: 'Your monthly payment report',
      time: 'Yesterday',
      body: `Good afternoon,\n\nYour settlement report for the period ending yesterday has been generated and reconciled successfully.\n\nTotal transactions processed: 418\nDisbursement status: Settled to designated account\nReconciliation reference: PSTK-TOPAZ-8849\n\nYou can review your full statement anytime in your account portal.\n\nWarm regards,\nTunde Adeleke\nMerchant Operations · Paystack`
    },
    {
      id: 2,
      sender: 'Kelechi Okafor',
      email: 'kelechi@hyperion.ng',
      avatarBg: '#d8d5e8',
      avatarText: 'KO',
      subject: 'Production timeline and next steps',
      time: 'Oct 24',
      body: `Hello Danny,\n\nFollowing our sync this morning, here is the revised deployment schedule for the rollout:\n\n1. DNS automation validation: Completed\n2. Custom DKIM key propagation: Green\n3. Final penetration check: Thursday morning\n\nLooking forward to going live!\n\nBest,\nKelechi Okafor\nLead Systems Architect`
    },
    {
      id: 3,
      sender: 'Adaeze & Co.',
      email: 'adaeze@adaeze.legal',
      avatarBg: '#ead4d2',
      avatarText: 'AC',
      subject: 'Documents ready for review',
      time: 'Oct 22',
      body: `Dear Danny,\n\nPlease find the executed Master Service Agreement attached for your records. All mutual confidentiality clauses and data processing agreements have been updated to reflect current NDPR compliance requirements.\n\nLet us know if you require any countersigned hard copies.\n\nKind regards,\nAdaeze Nnamdi, Esq.\nPrincipal Counsel · Adaeze & Co.`
    },
    {
      id: 4,
      sender: 'Topaz Mail',
      email: 'system@topazmail.ng',
      avatarBg: '#c7e2dd',
      avatarText: 'TM',
      subject: 'Your domain is fully protected',
      time: 'Oct 20',
      body: `Security Status: Fully Protected\n\nYour domain authentication records (SPF, DKIM, DMARC) have passed all automated validation checks with a 100% alignment score.\n\n• SPF: Pass (v=spf1 include:_spf.topazmail.ng ~all)\n• DKIM: Pass (2048-bit RSA active)\n• DMARC: Enforced (p=reject)\n• TLS: Inbound & outbound TLS 1.3 active\n\nNo further configuration is required on your DNS provider.\n\nTopaz Mail Security Team`
    }
  ];

  // DOM Elements
  const demoEmailList = document.getElementById('demoEmailList');
  const demoAvatar = document.getElementById('demoAvatar');
  const demoSenderName = document.getElementById('demoSenderName');
  const demoSenderEmail = document.getElementById('demoSenderEmail');
  const demoSubject = document.getElementById('demoSubject');
  const demoTime = document.getElementById('demoTime');
  const demoBody = document.getElementById('demoBody');

  const waitlistModal = document.getElementById('waitlistModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const doneModalBtn = document.getElementById('doneModalBtn');
  const waitlistForm = document.getElementById('waitlistForm');
  const modalFormContainer = document.getElementById('modalFormContainer');
  const modalSuccess = document.getElementById('modalSuccess');
  const confirmedEmail = document.getElementById('confirmedEmail');
  const planSelect = document.getElementById('planSelect');

  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const mainNav = document.getElementById('mainNav');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  let toastTimeout = null;

  // Show Toast
  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // Interactive Demo: Switch Email
  function selectDemoEmail(id) {
    const email = DEMO_EMAILS.find(item => item.id === Number(id));
    if (!email) return;

    if (demoEmailList) {
      demoEmailList.querySelectorAll('.demo-mail').forEach(item => {
        if (Number(item.dataset.id) === email.id) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    if (demoAvatar) {
      demoAvatar.textContent = email.avatarText;
      demoAvatar.style.backgroundColor = email.avatarBg;
    }
    if (demoSenderName) demoSenderName.textContent = email.sender;
    if (demoSenderEmail) demoSenderEmail.textContent = email.email;
    if (demoSubject) demoSubject.textContent = email.subject;
    if (demoTime) demoTime.textContent = email.time;
    if (demoBody) demoBody.textContent = email.body;
  }

  if (demoEmailList) {
    demoEmailList.addEventListener('click', (e) => {
      const btn = e.target.closest('.demo-mail');
      if (btn && btn.dataset.id !== undefined) {
        selectDemoEmail(btn.dataset.id);
      }
    });
  }

  // Open Modal
  function openWaitlistModal(selectedPlan = 'Professional') {
    if (!waitlistModal) return;

    // Reset view
    if (modalFormContainer) modalFormContainer.style.display = 'block';
    if (modalSuccess) modalSuccess.style.display = 'none';

    // Set plan selection if matching
    if (planSelect && selectedPlan) {
      const match = Array.from(planSelect.options).find(
        opt => opt.value.toLowerCase() === selectedPlan.toLowerCase()
      );
      if (match) planSelect.value = match.value;
    }

    waitlistModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const firstInput = waitlistModal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  // Close Modal
  function closeWaitlistModal() {
    if (!waitlistModal) return;
    waitlistModal.classList.remove('open');
    document.body.style.overflow = '';
    if (waitlistForm) waitlistForm.reset();
  }

  // Bind Buttons with data-action="waitlist"
  document.querySelectorAll('[data-action="waitlist"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const plan = btn.getAttribute('data-plan') || 'Professional';
      openWaitlistModal(plan);
    });
  });

  // Bind Buttons with data-action="login"
  document.querySelectorAll('[data-action="login"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Client access opens at public launch. Join the waitlist for priority early onboarding.');
      openWaitlistModal('Starter');
    });
  });

  // Modal close listeners
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeWaitlistModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeWaitlistModal);
  if (doneModalBtn) doneModalBtn.addEventListener('click', closeWaitlistModal);

  if (waitlistModal) {
    waitlistModal.addEventListener('click', (e) => {
      if (e.target === waitlistModal) {
        closeWaitlistModal();
      }
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && waitlistModal && waitlistModal.classList.contains('open')) {
      closeWaitlistModal();
    }
  });

  // Form Submission
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('waitlistEmailInput');
      const nameInput = document.getElementById('waitlistNameInput');
      const domainInput = document.getElementById('waitlistDomainInput');

      const emailVal = emailInput ? emailInput.value.trim() : '';
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const domainVal = domainInput ? domainInput.value.trim() : '';
      const planVal = planSelect ? planSelect.value : 'Professional';

      if (!emailVal) return;

      // Persist in localStorage for local testing
      try {
        const stored = JSON.parse(localStorage.getItem('topaz_waitlist_signups') || '[]');
        stored.push({
          email: emailVal,
          name: nameVal,
          domain: domainVal,
          plan: planVal,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('topaz_waitlist_signups', JSON.stringify(stored));
      } catch (err) {
        // Fallback gracefully
      }

      // Switch to success view
      if (confirmedEmail) confirmedEmail.textContent = emailVal;
      if (modalFormContainer) modalFormContainer.style.display = 'none';
      if (modalSuccess) modalSuccess.style.display = 'block';
    });
  }

  // Mobile Navigation Toggle
  if (menuToggleBtn && mainNav) {
    menuToggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const expanded = mainNav.classList.contains('open');
      menuToggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close menu when clicking navigation links
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

})();
