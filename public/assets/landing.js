document.documentElement.classList.add('js');

const copy = {
  en: {
    metaTitle: 'OmniDerma Aesthetica — Calm skincare, built around you',
    metaDescription: 'Aesthetica is your calm, personalized skincare companion for daily routines, thoughtful product guidance, and steady progress.',
    skipContent: 'Skip to content', navInside: 'Inside the app', navWhy: 'Why Aesthetica', navLegal: 'Legal', navDownload: 'Get the app',
    heroEyebrow: 'YOUR SKINCARE, MADE PERSONAL',
    heroTitle: 'Calm skincare.<br><em>Built around you.</em>',
    heroLead: 'Aesthetica turns your skin goals, preferences, and daily life into a routine you can actually follow — with thoughtful guidance at every step.',
    playSmall: 'GET IT ON', heroSecondary: 'See how it feels',
    trustOne: 'Evidence-informed', trustTwo: 'English & Greek', trustThree: 'Designed for real life',
    noteOne: 'AM + PM routines', noteTwo: 'Made for your skin', previewEyebrow: 'A CALMER WAY TO CARE FOR YOUR SKIN',
    manifestoEyebrow: 'A CALMER WAY TO CARE FOR YOUR SKIN',
    manifestoTitle: 'A routine that sees<br><em>the whole picture.</em>',
    manifestoLead: 'Skincare advice is everywhere. Aesthetica helps turn it into something useful: a clear morning and evening plan shaped around your skin, your preferences, and your pace.',
    manifestoBody: 'Start with a thoughtful profile, understand why each step is there, and make changes without rebuilding your routine from scratch.',
    benefitOneTitle: 'Personal by design', benefitOneBody: 'Your skin goals, sensitivities, experience, schedule, and preferences help shape the plan.',
    benefitTwoTitle: 'Simple every day', benefitTwoBody: 'Morning and evening checklists make the next right step easy to see.',
    benefitThreeTitle: 'Context, not clutter', benefitThreeBody: 'Clear explanations help you understand what belongs, what can wait, and what may need care.',
    galleryEyebrow: 'INSIDE AESTHETICA', galleryTitle: 'Small steps.<br><em>Visible progress.</em>',
    galleryLead: 'Everything lives in one calm place — today’s checklist, your full routine, care-plan notes, and thoughtful product guidance.',
    screenToday: 'Your routine, day by day', screenRoutine: 'Know what fits', screenCare: 'Care by area', screenProduct: 'Product guidance with context',
    screenCarePlan: 'Care with a next step', screenMumu: 'Meet your sidekick', screenAssistant: 'Ask Mumu, get context',
    howEyebrow: 'HOW IT COMES TOGETHER', howTitle: 'From “where do I start?”<br><em>to a plan that fits.</em>', howLead: 'Aesthetica keeps the thinking structured and the experience gentle.',
    stepOneTitle: 'Tell us about your skin', stepOneBody: 'Share your goals, experience, preferences, and optional health-related context.',
    stepTwoTitle: 'Receive a starter routine', stepTwoBody: 'Get a balanced morning and evening plan with clear reasons behind every step.',
    stepThreeTitle: 'Follow it day by day', stepThreeBody: 'Use simple checklists and schedules to build consistency without pressure.',
    stepFourTitle: 'Adjust with context', stepFourBody: 'Check product fit, review progress, and fine-tune areas when your needs change.',
    mumuEyebrow: 'MEET MUMU', mumuTitle: 'A tiny sidekick<br><em>with a thoughtful job.</em>',
    mumuBody: 'Mumu helps make product checks, safety notes, and everyday guidance feel friendlier — while keeping important information easy to find.',
    principlesEyebrow: 'BUILT WITH CARE', principlesTitle: 'Helpful by design.<br><em>Honest by default.</em>',
    principleOneTitle: 'Educational, not diagnostic', principleOneBody: 'Aesthetica supports informed skincare decisions. It does not replace a qualified healthcare professional.',
    principleTwoTitle: 'Progress, not perfection', principleTwoBody: 'The goal is a routine you can live with — not pressure to become someone else.',
    principleThreeTitle: 'Privacy you can understand', principleThreeBody: 'Clear controls help you review your profile, reset saved data, and request account deletion.',
    downloadEyebrow: 'READY WHEN YOU ARE', downloadTitle: 'Your routine can feel<br><em>this calm.</em>',
    downloadBody: 'Download Aesthetica on Google Play and start building a routine around your skin and your everyday life.',
    footerTagline: 'Calm skincare, built around you.', footerTerms: 'Terms', footerPrivacy: 'Privacy', footerContact: 'Contact',
    footerDisclaimer: 'Educational skincare guidance. Not a medical diagnosis.'
  },
  gr: {
    metaTitle: 'OmniDerma Aesthetica — Ήρεμη περιποίηση, φτιαγμένη για εσένα',
    metaDescription: 'Το Aesthetica είναι ο ήρεμος, εξατομικευμένος σύντροφός σου για καθημερινές ρουτίνες περιποίησης, καθοδήγηση προϊόντων και σταθερή πρόοδο.',
    skipContent: 'Μετάβαση στο περιεχόμενο', navInside: 'Μέσα στην εφαρμογή', navWhy: 'Γιατί Aesthetica', navLegal: 'Νομικά', navDownload: 'Απόκτησέ το',
    heroEyebrow: 'Η ΠΕΡΙΠΟΙΗΣΗ ΣΟΥ, ΠΡΟΣΑΡΜΟΣΜΕΝΗ ΣΕ ΕΣΕΝΑ',
    heroTitle: 'Ήρεμη περιποίηση.<br><em>Φτιαγμένη για εσένα.</em>',
    heroLead: 'Το Aesthetica μετατρέπει τους στόχους, τις προτιμήσεις και την καθημερινότητά σου σε μια ρουτίνα που μπορείς πραγματικά να ακολουθήσεις — με ουσιαστική καθοδήγηση σε κάθε βήμα.',
    playSmall: 'ΔΙΑΘΕΣΙΜΟ ΣΤΟ', heroSecondary: 'Δες πώς λειτουργεί',
    trustOne: 'Τεκμηριωμένη προσέγγιση', trustTwo: 'Ελληνικά & Αγγλικά', trustThree: 'Για την πραγματική ζωή',
    noteOne: 'Πρωινή + βραδινή ρουτίνα', noteTwo: 'Για τις ανάγκες σου', previewEyebrow: 'ΕΝΑΣ ΠΙΟ ΗΡΕΜΟΣ ΤΡΟΠΟΣ ΝΑ ΦΡΟΝΤΙΖΕΙΣ ΤΟ ΔΕΡΜΑ ΣΟΥ',
    manifestoEyebrow: 'ΕΝΑΣ ΠΙΟ ΗΡΕΜΟΣ ΤΡΟΠΟΣ ΝΑ ΦΡΟΝΤΙΖΕΙΣ ΤΟ ΔΕΡΜΑ ΣΟΥ',
    manifestoTitle: 'Μια ρουτίνα που βλέπει<br><em>τη συνολική εικόνα.</em>',
    manifestoLead: 'Συμβουλές περιποίησης υπάρχουν παντού. Το Aesthetica τις μετατρέπει σε κάτι χρήσιμο: ένα ξεκάθαρο πρωινό και βραδινό πλάνο, προσαρμοσμένο στο δέρμα, τις προτιμήσεις και τον ρυθμό σου.',
    manifestoBody: 'Ξεκίνα με ένα προσεγμένο προφίλ, κατανόησε γιατί υπάρχει κάθε βήμα και κάνε αλλαγές χωρίς να ξαναχτίζεις τη ρουτίνα σου από την αρχή.',
    benefitOneTitle: 'Εξατομίκευση από τη βάση', benefitOneBody: 'Οι στόχοι, οι ευαισθησίες, η εμπειρία, το πρόγραμμα και οι προτιμήσεις σου διαμορφώνουν το πλάνο.',
    benefitTwoTitle: 'Απλό, κάθε μέρα', benefitTwoBody: 'Οι πρωινές και βραδινές λίστες κάνουν το επόμενο σωστό βήμα ξεκάθαρο.',
    benefitThreeTitle: 'Πλαίσιο, όχι φασαρία', benefitThreeBody: 'Καθαρές εξηγήσεις σε βοηθούν να δεις τι ταιριάζει, τι μπορεί να περιμένει και τι χρειάζεται προσοχή.',
    galleryEyebrow: 'ΜΕΣΑ ΣΤΟ AESTHETICA', galleryTitle: 'Μικρά βήματα.<br><em>Ορατή πρόοδος.</em>',
    galleryLead: 'Όλα βρίσκονται σε ένα ήρεμο μέρος — η σημερινή λίστα, η πλήρης ρουτίνα, οι σημειώσεις φροντίδας και η προσεγμένη καθοδήγηση προϊόντων.',
    screenToday: 'Η ρουτίνα σου, μέρα με τη μέρα', screenRoutine: 'Μάθε τι ταιριάζει', screenCare: 'Φροντίδα ανά περιοχή', screenProduct: 'Καθοδήγηση προϊόντων με πλαίσιο',
    screenCarePlan: 'Φροντίδα με επόμενο βήμα', screenMumu: 'Γνώρισε τη βοηθό σου', screenAssistant: 'Ρώτησε τη Mumu, πάρε πλαίσιο',
    howEyebrow: 'ΠΩΣ ΟΛΑ ΣΥΝΔΕΟΝΤΑΙ', howTitle: 'Από το «από πού αρχίζω;»<br><em>σε ένα πλάνο που ταιριάζει.</em>', howLead: 'Το Aesthetica κρατά τη σκέψη οργανωμένη και την εμπειρία ήρεμη.',
    stepOneTitle: 'Πες μας για το δέρμα σου', stepOneBody: 'Μοιράσου τους στόχους, την εμπειρία, τις προτιμήσεις και προαιρετικό πλαίσιο που σχετίζεται με την υγεία.',
    stepTwoTitle: 'Λάβε μια αρχική ρουτίνα', stepTwoBody: 'Απόκτησε ένα ισορροπημένο πρωινό και βραδινό πλάνο, με σαφή εξήγηση για κάθε βήμα.',
    stepThreeTitle: 'Ακολούθησέ την καθημερινά', stepThreeBody: 'Χρησιμοποίησε απλές λίστες και προγράμματα για να χτίσεις συνέπεια χωρίς πίεση.',
    stepFourTitle: 'Προσάρμοσε με πλαίσιο', stepFourBody: 'Έλεγξε αν ένα προϊόν ταιριάζει, δες την πρόοδό σου και προσαρμόσου όταν αλλάζουν οι ανάγκες σου.',
    mumuEyebrow: 'ΓΝΩΡΙΣΕ ΤΗ MUMU', mumuTitle: 'Μια μικρή βοηθός<br><em>με ουσιαστικό ρόλο.</em>',
    mumuBody: 'Η Mumu κάνει τους ελέγχους προϊόντων, τις σημειώσεις ασφάλειας και την καθημερινή καθοδήγηση πιο φιλικές — κρατώντας τις σημαντικές πληροφορίες εύκολα προσβάσιμες.',
    principlesEyebrow: 'ΣΧΕΔΙΑΣΜΕΝΟ ΜΕ ΦΡΟΝΤΙΔΑ', principlesTitle: 'Χρήσιμο από σχεδιασμό.<br><em>Ειλικρινές από επιλογή.</em>',
    principleOneTitle: 'Εκπαιδευτικό, όχι διαγνωστικό', principleOneBody: 'Το Aesthetica υποστηρίζει ενημερωμένες επιλογές περιποίησης. Δεν αντικαθιστά έναν εξειδικευμένο επαγγελματία υγείας.',
    principleTwoTitle: 'Πρόοδος, όχι τελειότητα', principleTwoBody: 'Στόχος είναι μια ρουτίνα με την οποία μπορείς να ζήσεις — όχι η πίεση να γίνεις κάποιος άλλος.',
    principleThreeTitle: 'Απόρρητο που καταλαβαίνεις', principleThreeBody: 'Ξεκάθαρα εργαλεία σε βοηθούν να ελέγξεις το προφίλ σου, να επαναφέρεις αποθηκευμένα δεδομένα και να ζητήσεις διαγραφή λογαριασμού.',
    downloadEyebrow: 'ΟΤΑΝ ΕΙΣΑΙ ΕΤΟΙΜΗ Ή ΕΤΟΙΜΟΣ', downloadTitle: 'Η ρουτίνα σου μπορεί να είναι<br><em>τόσο ήρεμη.</em>',
    downloadBody: 'Κατέβασε το Aesthetica από το Google Play και χτίσε μια ρουτίνα γύρω από το δέρμα και την καθημερινότητά σου.',
    footerTagline: 'Ήρεμη περιποίηση, φτιαγμένη για εσένα.', footerTerms: 'Όροι', footerPrivacy: 'Απόρρητο', footerContact: 'Επικοινωνία',
    footerDisclaimer: 'Εκπαιδευτική καθοδήγηση περιποίησης. Δεν αποτελεί ιατρική διάγνωση.'
  }
};

function setLanguage(lang) {
  const selected = copy[lang] ? lang : 'en';
  document.documentElement.lang = selected === 'gr' ? 'el' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = copy[selected][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const value = copy[selected][node.dataset.i18nHtml];
    if (value) node.innerHTML = value;
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-screen-en][data-screen-gr]').forEach((image) => {
    image.src = selected === 'gr' ? image.dataset.screenGr : image.dataset.screenEn;
    const alt = selected === 'gr' ? image.dataset.altGr : image.dataset.altEn;
    if (alt) image.alt = alt;
  });
  document.title = copy[selected].metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy[selected].metaDescription);
  localStorage.setItem('aesthetica-language', selected);
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem('aesthetica-language') || (navigator.language.startsWith('el') ? 'gr' : 'en'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('[data-reveal]').forEach((node) => revealObserver.observe(node));
