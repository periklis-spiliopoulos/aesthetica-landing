# Aesthetica app integration

## 1. Login-screen links

Place directly below the Google sign-in button or disclaimer:

**EN**

> By continuing, you agree to the [Terms of Service](https://omniderma-aesthetica.com/terms/) and confirm that you have read the [Privacy Policy](https://omniderma-aesthetica.com/privacy/).

**GR**

> Συνεχίζοντας, συμφωνείτε με τους [Όρους Χρήσης](https://omniderma-aesthetica.com/terms/) και επιβεβαιώνετε ότι διαβάσατε την [Πολιτική Απορρήτου](https://omniderma-aesthetica.com/privacy/).

For defensible evidence of acceptance, store:

```json
{
  "terms_version": "2026-07-12",
  "terms_accepted_at": "ISO-8601 timestamp",
  "privacy_notice_version": "2026-07-12"
}
```

Do not describe acknowledgement of the Privacy Policy as consent to every type of processing.

## 2. Separate explicit consent before optional photo analysis

Use an unchecked checkbox or equivalent affirmative control immediately before the first photo-analysis request.

**EN**

> I choose to submit these images for AI-assisted skincare progress analysis. I understand that they will be transmitted to OmniDerma's hosting infrastructure and OpenAI for this request, that Aesthetica does not intentionally save the raw images in my persistent routine state, and that the result is not a medical diagnosis.

**GR**

> Επιλέγω να υποβάλω αυτές τις εικόνες για ανάλυση προόδου περιποίησης με υποστήριξη AI. Κατανοώ ότι θα διαβιβαστούν στην υποδομή φιλοξενίας της OmniDerma και στην OpenAI για το συγκεκριμένο αίτημα, ότι το Aesthetica δεν αποθηκεύει σκόπιμα τις ακατέργαστες εικόνες στη μόνιμη κατάσταση της ρουτίνας μου και ότι το αποτέλεσμα δεν αποτελεί ιατρική διάγνωση.

Store a narrowly scoped record:

```json
{
  "photo_analysis_consent_version": "2026-07-12",
  "photo_analysis_consented_at": "ISO-8601 timestamp"
}
```

Allow withdrawal by clearing the record and disabling future image submission until consent is given again. Consent should not be bundled with general Terms acceptance.

## 3. Optional health-related profile fields

Before saving pregnancy/trying-to-conceive, diagnosed-condition, reaction, or similarly health-revealing fields, show concise explicit-consent text.

**EN**

> I choose to save these optional health-related details so Aesthetica can apply more conservative skincare safety rules. I can remove them or withdraw this consent at any time.

**GR**

> Επιλέγω να αποθηκεύσω αυτά τα προαιρετικά στοιχεία που σχετίζονται με την υγεία, ώστε το Aesthetica να εφαρμόζει πιο συντηρητικούς κανόνες ασφάλειας περιποίησης. Μπορώ να τα αφαιρέσω ή να ανακαλέσω τη συγκατάθεση οποτεδήποτε.

## 4. Profile legal links

Add a small “Legal & Privacy” row in Profile with:

- Terms of Service / Όροι Χρήσης
- Privacy Policy / Πολιτική Απορρήτου
- Reset saved data / Επαναφορά αποθηκευμένων δεδομένων
- Request account deletion / Αίτημα διαγραφής λογαριασμού (`mailto:info@omniderma.health?subject=Aesthetica%20Privacy%20Request`)

## 5. Explain reset accurately

Recommended confirmation dialog:

**EN**

> This deletes your saved Aesthetica profile, routine, checklist, and related app state from active account storage. It does not delete your Google account or necessarily remove security logs and provider backups immediately.

**GR**

> Αυτό διαγράφει το αποθηκευμένο προφίλ Aesthetica, τη ρουτίνα, το checklist και τη σχετική κατάσταση εφαρμογής από την ενεργή αποθήκευση λογαριασμού. Δεν διαγράφει τον λογαριασμό Google ούτε αφαιρεί απαραίτητα άμεσα αρχεία ασφάλειας και αντίγραφα παρόχων.

## 6. Keep versions synchronized

Update the pages and application constants together whenever any of these materially change:

- collected profile fields
- image handling or image persistence
- AI provider or API retention controls
- hosting/database provider or region
- product-search payload
- analytics, crash reporting, advertising, or marketing tools
- payment/subscription features
- minimum age or parental-consent flow
- account deletion behavior
