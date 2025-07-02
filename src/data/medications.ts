export interface Medication {
  id: string;
  genericName: string;
  brandNames: string[];
  class: MedicationClass;
  slug: string;
  description: string;
  indications: string[];
  whyLiquidTaper: string;
  concentrations: string[];
  bottleSizes: string[];
  basePrice: number;
}

export type MedicationClass = 
  | 'SSRIs'
  | 'SNRIs'
  | 'Benzodiazepines'
  | 'Antipsychotics'
  | 'Mood Stabilizers'
  | 'Stimulants'
  | 'Others';

export const medications: Medication[] = [
  // SSRIs
  {
    id: 'escitalopram',
    genericName: 'Escitalopram',
    brandNames: ['Lexapro'],
    class: 'SSRIs',
    slug: 'escitalopram-lexapro',
    description: 'A selective serotonin reuptake inhibitor (SSRI) commonly prescribed for depression and anxiety disorders.',
    indications: ['Major Depressive Disorder', 'Generalized Anxiety Disorder'],
    whyLiquidTaper: 'Escitalopram liquid allows for precise dose reductions below the smallest tablet size (5mg), enabling smoother discontinuation and reduced withdrawal symptoms.',
    concentrations: ['1mg/mL', '2mg/mL', '5mg/mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 89
  },
  {
    id: 'sertraline',
    genericName: 'Sertraline',
    brandNames: ['Zoloft'],
    class: 'SSRIs',
    slug: 'sertraline-zoloft',
    description: 'An SSRI antidepressant used to treat depression, anxiety disorders, and other conditions.',
    indications: ['Major Depressive Disorder', 'Panic Disorder', 'PTSD', 'Social Anxiety Disorder'],
    whyLiquidTaper: 'Liquid sertraline enables gradual dose reductions smaller than 12.5mg increments, minimizing discontinuation syndrome.',
    concentrations: ['10mg/mL', '20mg/mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 79
  },
  {
    id: 'fluoxetine',
    genericName: 'Fluoxetine',
    brandNames: ['Prozac'],
    class: 'SSRIs',
    slug: 'fluoxetine-prozac',
    description: 'A widely prescribed SSRI with a long half-life, used for depression and anxiety disorders.',
    indications: ['Major Depressive Disorder', 'OCD', 'Bulimia Nervosa', 'Panic Disorder'],
    whyLiquidTaper: 'Despite its long half-life, liquid fluoxetine allows for more precise tapering than splitting 10mg capsules.',
    concentrations: ['4mg/mL', '20mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 75
  },
  {
    id: 'citalopram',
    genericName: 'Citalopram',
    brandNames: ['Celexa'],
    class: 'SSRIs',
    slug: 'citalopram-celexa',
    description: 'An SSRI antidepressant used primarily for major depressive disorder.',
    indications: ['Major Depressive Disorder'],
    whyLiquidTaper: 'Liquid form allows tapering below 10mg tablets, crucial for sensitive patients experiencing withdrawal.',
    concentrations: ['2mg/mL', '10mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 69
  },
  {
    id: 'paroxetine',
    genericName: 'Paroxetine',
    brandNames: ['Paxil'],
    class: 'SSRIs',
    slug: 'paroxetine-paxil',
    description: 'An SSRI known for effectiveness but also for challenging discontinuation symptoms.',
    indications: ['Major Depressive Disorder', 'Panic Disorder', 'Social Anxiety Disorder', 'PTSD'],
    whyLiquidTaper: 'Paroxetine has severe withdrawal symptoms. Liquid form is essential for very gradual tapering to minimize discontinuation effects.',
    concentrations: ['2mg/mL', '10mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 85
  },

  // SNRIs
  {
    id: 'venlafaxine',
    genericName: 'Venlafaxine',
    brandNames: ['Effexor'],
    class: 'SNRIs',
    slug: 'venlafaxine-effexor',
    description: 'A serotonin-norepinephrine reuptake inhibitor for depression and anxiety.',
    indications: ['Major Depressive Disorder', 'Generalized Anxiety Disorder', 'Social Anxiety Disorder', 'Panic Disorder'],
    whyLiquidTaper: 'Venlafaxine has notoriously difficult withdrawal. Liquid allows micro-tapering to minimize brain zaps and other symptoms.',
    concentrations: ['25mg/5mL', '37.5mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 95
  },
  {
    id: 'duloxetine',
    genericName: 'Duloxetine',
    brandNames: ['Cymbalta'],
    class: 'SNRIs',
    slug: 'duloxetine-cymbalta',
    description: 'An SNRI used for depression, anxiety, and certain pain conditions.',
    indications: ['Major Depressive Disorder', 'Generalized Anxiety Disorder', 'Diabetic Neuropathy', 'Fibromyalgia'],
    whyLiquidTaper: 'Cymbalta capsules cannot be split. Liquid form enables gradual tapering impossible with standard formulations.',
    concentrations: ['6mg/mL', '12mg/mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 99
  },

  // Benzodiazepines
  {
    id: 'alprazolam',
    genericName: 'Alprazolam',
    brandNames: ['Xanax'],
    class: 'Benzodiazepines',
    slug: 'alprazolam-xanax',
    description: 'A fast-acting benzodiazepine for anxiety and panic disorders.',
    indications: ['Anxiety Disorders', 'Panic Disorder'],
    whyLiquidTaper: 'Liquid alprazolam allows for micro-tapering essential for avoiding seizures and severe withdrawal from this potent benzodiazepine.',
    concentrations: ['0.5mg/mL', '1mg/mL'],
    bottleSizes: ['30mL', '60mL'],
    basePrice: 125
  },
  {
    id: 'clonazepam',
    genericName: 'Clonazepam',
    brandNames: ['Klonopin'],
    class: 'Benzodiazepines',
    slug: 'clonazepam-klonopin',
    description: 'A long-acting benzodiazepine for seizure disorders and panic disorder.',
    indications: ['Seizure Disorders', 'Panic Disorder'],
    whyLiquidTaper: 'Precise liquid dosing enables the slow taper required for this long-acting benzodiazepine, reducing protracted withdrawal.',
    concentrations: ['0.1mg/mL', '0.5mg/mL'],
    bottleSizes: ['30mL', '60mL'],
    basePrice: 115
  },
  {
    id: 'lorazepam',
    genericName: 'Lorazepam',
    brandNames: ['Ativan'],
    class: 'Benzodiazepines',
    slug: 'lorazepam-ativan',
    description: 'An intermediate-acting benzodiazepine for anxiety disorders.',
    indications: ['Anxiety Disorders', 'Insomnia', 'Seizures'],
    whyLiquidTaper: 'Liquid form allows tapering by fractions of milligrams, crucial for avoiding withdrawal symptoms and rebound anxiety.',
    concentrations: ['0.5mg/mL', '2mg/mL'],
    bottleSizes: ['30mL', '60mL'],
    basePrice: 105
  },

  // Antipsychotics
  {
    id: 'risperidone',
    genericName: 'Risperidone',
    brandNames: ['Risperdal'],
    class: 'Antipsychotics',
    slug: 'risperidone-risperdal',
    description: 'An atypical antipsychotic for schizophrenia and bipolar disorder.',
    indications: ['Schizophrenia', 'Bipolar Disorder', 'Irritability in Autism'],
    whyLiquidTaper: 'Liquid risperidone enables precise dose reductions to minimize withdrawal dyskinesia and rebound symptoms.',
    concentrations: ['1mg/mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 135
  },
  {
    id: 'olanzapine',
    genericName: 'Olanzapine',
    brandNames: ['Zyprexa'],
    class: 'Antipsychotics',
    slug: 'olanzapine-zyprexa',
    description: 'An atypical antipsychotic for schizophrenia and bipolar disorder.',
    indications: ['Schizophrenia', 'Bipolar Disorder'],
    whyLiquidTaper: 'Liquid form allows gradual tapering to avoid withdrawal psychosis and minimize metabolic rebound effects.',
    concentrations: ['1mg/mL', '5mg/mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 145
  },

  // Mood Stabilizers
  {
    id: 'lamotrigine',
    genericName: 'Lamotrigine',
    brandNames: ['Lamictal'],
    class: 'Mood Stabilizers',
    slug: 'lamotrigine-lamictal',
    description: 'An anticonvulsant used as a mood stabilizer in bipolar disorder.',
    indications: ['Bipolar Disorder', 'Seizure Disorders'],
    whyLiquidTaper: 'Liquid lamotrigine allows for the very gradual dose changes needed to avoid triggering mood episodes or rash.',
    concentrations: ['5mg/mL', '10mg/mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 119
  },
  {
    id: 'lithium',
    genericName: 'Lithium',
    brandNames: ['Lithobid', 'Eskalith'],
    class: 'Mood Stabilizers',
    slug: 'lithium',
    description: 'A classic mood stabilizer for bipolar disorder.',
    indications: ['Bipolar Disorder', 'Treatment-Resistant Depression'],
    whyLiquidTaper: 'Liquid lithium enables precise dose adjustments crucial for maintaining therapeutic levels while tapering.',
    concentrations: ['300mg/5mL'],
    bottleSizes: ['60mL', '120mL', '240mL'],
    basePrice: 89
  },

  // Stimulants
  {
    id: 'methylphenidate',
    genericName: 'Methylphenidate',
    brandNames: ['Ritalin', 'Concerta'],
    class: 'Stimulants',
    slug: 'methylphenidate-ritalin',
    description: 'A stimulant medication for ADHD and narcolepsy.',
    indications: ['ADHD', 'Narcolepsy'],
    whyLiquidTaper: 'Liquid form allows gradual reduction to minimize rebound symptoms and withdrawal fatigue.',
    concentrations: ['5mg/5mL', '10mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 95
  },
  {
    id: 'amphetamine',
    genericName: 'Amphetamine/Dextroamphetamine',
    brandNames: ['Adderall'],
    class: 'Stimulants',
    slug: 'amphetamine-adderall',
    description: 'A combination stimulant medication for ADHD.',
    indications: ['ADHD', 'Narcolepsy'],
    whyLiquidTaper: 'Liquid allows for smoother tapering than splitting tablets, reducing withdrawal depression and fatigue.',
    concentrations: ['5mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 105
  },

  // Others
  {
    id: 'trazodone',
    genericName: 'Trazodone',
    brandNames: ['Desyrel'],
    class: 'Others',
    slug: 'trazodone-desyrel',
    description: 'An antidepressant commonly used off-label for insomnia.',
    indications: ['Major Depressive Disorder', 'Insomnia (off-label)'],
    whyLiquidTaper: 'Liquid trazodone enables gradual reduction to avoid rebound insomnia and withdrawal symptoms.',
    concentrations: ['10mg/mL', '50mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 69
  },
  {
    id: 'bupropion',
    genericName: 'Bupropion',
    brandNames: ['Wellbutrin'],
    class: 'Others',
    slug: 'bupropion-wellbutrin',
    description: 'An atypical antidepressant also used for smoking cessation.',
    indications: ['Major Depressive Disorder', 'Seasonal Affective Disorder', 'Smoking Cessation'],
    whyLiquidTaper: 'Liquid form allows tapering below 75mg tablets, important for avoiding seizure risk and withdrawal symptoms.',
    concentrations: ['25mg/5mL', '50mg/5mL'],
    bottleSizes: ['30mL', '60mL', '120mL'],
    basePrice: 85
  }
];

export const medicationsByClass = medications.reduce((acc, med) => {
  if (!acc[med.class]) {
    acc[med.class] = [];
  }
  acc[med.class].push(med);
  return acc;
}, {} as Record<MedicationClass, Medication[]>);

export const getMedicationBySlug = (slug: string): Medication | undefined => {
  return medications.find(med => med.slug === slug);
}; 