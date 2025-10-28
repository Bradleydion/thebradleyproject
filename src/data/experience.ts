export type Experience = {
  employer: string;
  title: string;
  dates: string; // e.g., "Jun 2025 – Present"
  location?: string;
};

export const experience: Experience[] = [
  { employer: "Hillsboro Medical Center (OHSU)", title: "Health Plan Coordinator", dates: "Jun 2025 – Present", location: "Hillsboro, OR" },
  { employer: "Hillsboro Medical Center (OHSU)", title: "Admitting Representative", dates: "Jan 2025 – Jun 2025", location: "Hillsboro, OR" },
  { employer: "Advance Local / The Oregonian", title: "Senior Account Associate", dates: "Feb 2022 – Jan 2025", location: "Portland, OR" },
  { employer: "Bath Fitter", title: "Event & Office Manager", dates: "January 2016 – Jan 2022", location: "Clearwater, FL" },
  { employer: "The Home Depot, Quench Bar, Datz Restaurant", title: "Various Roles", dates: "January 2014 – Jan 2022", location: "Clearwater, FL" },
  { employer: "Pizza hut, Rite Aid, Hannifords, Central Wave Bar, 313 bar and Club, Long Horns Steakhouse", title: "Various Roles", dates: "January 2005 – Jan 2022", location: "New Hampshire" },
  // Add/edit freely as things change
];

// Short objective for the floating card
export const objective = `Editor-in-progress: bringing strong story instincts, developmental feedback,
and brand voice alignment from years of client-facing work. Seeking roles in
developmental or acquisitions editing, with a focus on commercial fantasy and
narrative-driven projects.`;