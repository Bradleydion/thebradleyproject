// src/data/sequinsBeta.ts
// Single source of truth for the Sequins beta links and status used by the
// landing page, the beta sign-up form, the welcome email and the tester guide.

export const SITE = "https://www.thebradleyproject.com";

export const SEQUINS_BETA = {
  /** Public TestFlight link (group "Beta Cohort 1", open to anyone). */
  testflightUrl: "https://testflight.apple.com/join/vcjB7QNV",
  /** Apple's free TestFlight app, needed before the link works. */
  testflightAppUrl: "https://apps.apple.com/app/testflight/id899247664",
  /** Play Internal testing opt-in. Only works once the tester's Google email is on the list. */
  playOptInUrl: "https://play.google.com/apps/internaltest/4699893209609742343",
  /** "Sequins Beta Feedback" Google Form. */
  feedbackFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe1uVjaRukGR41YrUyGqQVzx8_Lron95PY4gj0uzgOpN2VosA/viewform",
  guidePath: "/sequins/beta",
  termsPath: "/sequins/beta#terms",
  contactEmail: "bradleydion@thebradleyproject.com",
  instagram: "@thebradleyproject",
};

export const BETA_ROLES = ["Fan", "Talent", "Host", "Just curious"] as const;
export type BetaRole = (typeof BETA_ROLES)[number];
