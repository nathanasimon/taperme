export interface Provider {
  id: string;
  name: string;
  logo: string;
  testimonial: string;
  author: string;
  role: string;
  caseStudySlug?: string;
}

export const providers: Provider[] = [
  {
    id: 'mindful-psychiatry',
    name: 'Mindful Psychiatry Associates',
    logo: '/providers/mindful-psychiatry.svg',
    testimonial: 'TaperMe has revolutionized how we help patients discontinue medications. The precision of liquid tapering has reduced withdrawal symptoms by 70% in our practice.',
    author: 'Dr. Sarah Chen',
    role: 'Medical Director',
    caseStudySlug: 'mindful-psychiatry-case-study'
  },
  {
    id: 'wellness-clinic',
    name: 'Integrated Wellness Clinic',
    logo: '/providers/wellness-clinic.svg',
    testimonial: 'The accuracy and convenience of TaperMe\'s compounded liquids have made tapering accessible to patients who previously struggled with pill splitting.',
    author: 'Dr. Michael Rodriguez',
    role: 'Chief Psychiatrist',
    caseStudySlug: 'wellness-clinic-case-study'
  },
  {
    id: 'harbor-mental-health',
    name: 'Harbor Mental Health',
    logo: '/providers/harbor-mental-health.svg',
    testimonial: 'Our patients report smoother transitions and better outcomes. The pre-measured syringes eliminate dosing errors and improve compliance.',
    author: 'Dr. Emily Thompson',
    role: 'Clinical Director',
    caseStudySlug: 'harbor-mental-health-case-study'
  },
  {
    id: 'serenity-behavioral',
    name: 'Serenity Behavioral Health',
    logo: '/providers/serenity-behavioral.svg',
    testimonial: 'TaperMe has become an essential tool in our practice. The ability to make micro-adjustments has been game-changing for sensitive patients.',
    author: 'Dr. James Park',
    role: 'Psychiatrist',
    caseStudySlug: 'serenity-behavioral-case-study'
  },
  {
    id: 'pacific-psychiatry',
    name: 'Pacific Psychiatry Group',
    logo: '/providers/pacific-psychiatry.svg',
    testimonial: 'The consistency and quality of TaperMe\'s compounded medications give us confidence in managing complex tapers, especially for benzodiazepines.',
    author: 'Dr. Lisa Wang',
    role: 'Senior Psychiatrist',
    caseStudySlug: 'pacific-psychiatry-case-study'
  },
  {
    id: 'clarity-mental-health',
    name: 'Clarity Mental Health Center',
    logo: '/providers/clarity-mental-health.svg',
    testimonial: 'Workflow integration has been seamless. Our staff appreciates the clear labeling and the support from TaperMe\'s pharmacy team.',
    author: 'Dr. Robert Johnson',
    role: 'Medical Director',
    caseStudySlug: 'clarity-mental-health-case-study'
  }
]; 