# Pre-publication legal and operational checklist

## Must confirm before publishing

- [ ] Company name, G.E.MI., EUID, address, and contact email are current.
- [ ] `omniderma-aesthetica.com` is owned and controlled by OMNIDERMA SINGLE MEMBER P.C.
- [ ] The app has a recordable Terms acceptance flow for version `2026-07-12`.
- [ ] Optional photo analysis has a separate, affirmative consent control.
- [ ] Optional health-related profile fields have an appropriate explicit-consent flow where GDPR Article 9 applies.
- [ ] The interface does not submit a photo before consent is recorded.
- [ ] “Reset saved data” behaves exactly as described.
- [ ] A complete erasure request can be actioned through `info@omniderma.health`.
- [ ] The OpenAI account uses business/API services and not a consumer ChatGPT workflow.
- [ ] Current OpenAI retention controls are documented internally.
- [ ] Render service region, DPA, subprocessors, and backup/log retention have been reviewed.
- [ ] Google OAuth scopes remain limited to `openid email profile`.
- [ ] No analytics, advertising pixels, crash reporter, or marketing SDK has been added without updating the Privacy Policy.
- [ ] Product-search requests still exclude profile, routine, and image data as stated.
- [ ] Raw data URLs continue to be stripped from persistent user state at the backend.
- [ ] Users under the applicable age cannot provide unsupported self-consent.
- [ ] A Greek/EU lawyer or privacy professional has reviewed consumer-law, GDPR, age, consent, and liability language.

## Strongly recommended

- [ ] Create and monitor `privacy@omniderma-aesthetica.com`.
- [ ] Maintain a record of processing activities (ROPA).
- [ ] Complete a DPIA screening for facial/skin image processing and health-related profile data.
- [ ] Sign and archive DPAs with Render and OpenAI where applicable.
- [ ] Document Standard Contractual Clauses and transfer-risk measures.
- [ ] Add a privacy-request workflow and response log.
- [ ] Test deletion end-to-end, including active DB data, cached values, auth tokens, and expected provider residuals.
- [ ] Add a dated subprocessor register and change-notification process.
- [ ] Review whether the app needs a formal DPO; do not claim one unless appointed.
