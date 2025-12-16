
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import HeroSection from "@/components/about/HeroSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TeamSection from "@/components/about/TeamSection";
import GallerySection from "@/components/about/GallerySection";
import FacilitiesSection from "@/components/about/FacilitiesSection";
import LicensedFacilitySection from "@/components/about/LicensedFacilitySection";
import MentalHealthCrisisSection from "@/components/about/MentalHealthCrisisSection";
import CTASection from "@/components/about/CTASection";

const AboutUs = () => {
  const teamMembers = [
    // Psychiatrists
    {
      name: "Dr. Geo George",
      title: "MBBS, MD Psychiatry",
      subtitle: "Consultant Psychiatrist | Geriatric & Child Psychiatry Expert",
      bio: "Dr. Geo George is a compassionate and dedicated Consultant Psychiatrist committed to providing evidence-based and holistic mental health care. With a strong academic foundation and a passion for teaching and research, he integrates psychopharmacology, psychotherapy, and family interventions to offer personalized treatment for individuals across all age groups. He is especially known for his patient-centered approach and his ability to work collaboratively with patients and families to support recovery and long-term mental well-being. He completed his MD Psychiatry from Amala Institute of Medical Sciences, Thrissur (KUHS) and MBBS from Karuna Medical College, Palakkad (Calicut University).",
      expertise: [
        "Psychopharmacology",
        "Consultation Liaison Psychiatry",
        "Geriatric Psychiatry",
        "Child & Adolescent Psychiatry",
        "Psychotherapy & Family Interventions",
        "Modified ECT",
        "Chronic Psychiatric Care",
        "Rehabilitation & Social Skills Training"
      ],
      image: "/lovable-uploads/e0465572-2ef5-4f25-8619-53377b3dbdc2.png"
    },
    {
      name: "Dr. Evelyn George",
      title: "MBBS, MD Psychiatry",
      subtitle: "Consultant Psychiatrist | Mental Health Specialist",
      bio: "Dr. Evelyn George is a highly respected board-certified psychiatrist with vast clinical experience across multiple mental health domains. She completed her MBBS from MOSC Medical College, Kolenchery and MD Psychiatry from Father Muller Medical College, Mangalore. With experience as an Assistant Professor in Psychiatry, she specializes in the diagnosis and medical management of complex psychiatric conditions, offering a compassionate and scientific approach to mental wellness. Her clinical practice covers child and adolescent psychiatry, adult psychiatry, and geriatric mental health.",
      expertise: [
        "Child and Adolescent Psychiatry",
        "Behavioural Problems in Children",
        "General Psychiatry",
        "Mood Disorders",
        "Psychosis",
        "Anxiety Disorders",
        "OCD (Obsessive-Compulsive Disorder)",
        "Depression and Anxiety Disorders",
        "Bipolar Disorder and Schizophrenia",
        "ADHD and Childhood Behavioral Issues",
        "Geriatric Mental Health",
        "Medication Management and Monitoring",
        "Psychopharmacology and Psychotherapy"
      ],
      image: "/lovable-uploads/660178f3-90d8-4857-9767-abd7114115da.png"
    },
    {
      name: "Dr. Thomas Mathai",
      title: "MBBS, DPM, DNB",
      subtitle: "Consultant Psychiatrist | MBT & Couple Therapy Specialist",
      bio: "Dr. Thomas Mathai is a skilled Consultant Psychiatrist specialized in MBT (Mentalization-Based Therapy) and Couple Therapy. He completed his MBBS from Government Medical College, Thiruvananthapuram, and pursued DPM from Central Institute of Psychiatry, Ranchi and DNB training from Mental Health Centre, Thiruvananthapuram. He offers compassionate and evidence-based treatment to individuals and couples facing mental health challenges. With a commitment to patient care and continuous professional development, he stays updated with the latest advancements in psychiatry, providing tailored solutions for his patients' well-being. Dr. Thomas Mathai's holistic approach, exceptional communication skills, and empathy have earned him the trust and appreciation of both patients and colleagues. He is dedicated to promoting mental wellness and reducing the stigma associated with mental health issues, making a positive impact in his field.",
      expertise: [
        "Mentalization-Based Therapy (MBT)",
        "Couple Therapy",
        "Individual Psychotherapy",
        "Evidence-Based Treatment",
        "Mental Health Assessment",
        "Psychiatric Consultation",
        "Holistic Mental Health Approach",
        "Mental Wellness Promotion"
      ],
      image: "/lovable-uploads/d9a77fcf-4876-4980-8358-3363bb0f3f44.png"
    },
    // Clinical Psychologists - Updated to include Dr. Suryasree
    {
      name: "Dr. Suryasree",
      title: "B.Sc. Psychology, M.Sc. Applied Psychology, Dip. HRM, M.Phil. Rehab Psychology, Ph.D.",
      subtitle: "Rehabilitation Psychologist | Licensed Clinical Practitioner",
      bio: "Dr. Suryasree is a licensed and experienced Rehabilitation Psychologist with over nine years of clinical experience. She offers both in-person and telepsychology services, working extensively with children, adolescents, and adults dealing with psychological, emotional, and neurodevelopmental challenges. Her clinical expertise lies in comprehensive psychological assessments, diagnosis, and evidence-based psychotherapy. She integrates behaviour therapy, cognitive behavioural therapy (CBT), and mindfulness-based approaches in her treatment framework. In addition to her practice, Dr. Suryasree is actively involved in research in health and rehabilitation psychology and has held clinical roles at Government Medical College Hospital, Kottayam, and reputed institutions in Hyderabad and Thrissur. She is currently pursuing her doctoral research at Periyar University, Salem.",
      expertise: [
        "Behaviour Therapy & CBT",
        "Mindfulness-Based Therapeutic Approaches",
        "Psycho-social Rehabilitation",
        "Psychological & Neurodevelopmental Assessment",
        "Family and Individual Therapy",
        "Health and Rehabilitation Research"
      ],
      image: "/lovable-uploads/430ce184-68f9-4305-aa9d-cc1f3eab486d.png"
    },
    {
      name: "Archana K M",
      title: "RCI-Registered Clinical Psychologist | M.Phil Clinical Psychology, M.Sc. Psychology",
      subtitle: "Clinical Psychologist | CBT & Evidence-Based Therapy Expert",
      bio: "Archana K M is a seasoned Clinical Psychologist with professional training in psychometric assessments and a wide range of therapeutic modalities. She specializes in treating mood disorders, trauma, anxiety, and personality disorders. Her therapy methods include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Mindfulness-Based Cognitive Therapy (MBCT).",
      expertise: [
        "CBT, DBT, MET, MBCT",
        "Neuropsychological Assessment",
        "Therapy for Trauma, PTSD, OCD, Anxiety",
        "Psychotherapy for Adults and Adolescents",
        "Psychometric Assessments",
        "Individual, Couples, and Family Therapy"
      ],
      image: "/lovable-uploads/30cfff55-e334-40fd-8900-f6133212cb99.png"
    },
    {
      name: "Prijitha S",
      title: "Licensed Clinical Psychologist & Psychotherapist",
      subtitle: "RCI-CRR No. A80180",
      bio: "Prijitha S is an experienced Clinical Psychologist and licensed Psychotherapist, committed to advancing mental health through professional care and public awareness. With extensive experience at reputable institutions across India, she brings a strong foundation in diagnostics and evidence-based psychotherapy. Her clinical approach is centered around accurate diagnosis, psychometric assessments, and long-term therapeutic interventions tailored to individual needs.",
      expertise: [
        "Clinical & Diagnostic Interview",
        "Psychometric Assessments & Reporting",
        "Neuropsychological Assessment",
        "Cognitive Behavioural Therapy (CBT)",
        "Solution Focused Brief Therapy (SFBT)",
        "Psychoanalytic Psychotherapy",
        "Behaviour Therapy & Relaxation Training",
        "Family and Couple Therapy"
      ],
      image: "/lovable-uploads/024f20e6-7aad-4ebb-9e99-d340b6ed82b9.png"
    },
    // Licensed Mental Health / Rehabilitation Therapists (M.Phil holders moved here)
    {
      name: "Lintamol Devasia",
      title: "M.Phil. Psychiatric Social Work",
      subtitle: "Psychiatric Social Worker | Child & Family Therapy Specialist | Registration No: SW77/2023/SMHA",
      bio: "Lintamol Devasia is a trained and compassionate psychiatric social worker with advanced qualifications in social work and mental health. She holds a Master's degree in Social Work and an M.Phil. in Psychiatric Social Work from IMHANS, one of the leading institutions in mental health education in India. Her therapeutic style is rooted in empathetic engagement, structured intervention, and holistic rehabilitation. Lintamol's work focuses on vulnerable populations, especially children, adolescents, and families navigating mental health challenges and emotional distress.",
      expertise: [
        "Child and Adolescent Psychiatry",
        "Family Therapy and Parent Counselling",
        "Behavioural Disorders",
        "Psychosocial Rehabilitation and Recovery Planning"
      ],
      image: "/lovable-uploads/b3a6d1a6-6f8b-452e-85c2-7d49bc82534b.png"
    },
    {
      name: "Princy K",
      title: "M.Phil. Psychiatric Social Work - NIMHANS, NET Qualified",
      subtitle: "Special Educator & Psychiatric Social Worker | Suicide Researcher",
      bio: "Princy K is a highly qualified and experienced mental health professional with specialized training in both psychiatric social work and special education. She holds an M.Phil from NIMHANS, one of India's premier mental health institutions, and is NET qualified with a research focus on suicide prevention. Her multifaceted background allows her to provide holistic, evidence-based support to individuals facing psychological and developmental challenges. With extensive experience including roles as Medical Social Worker at Amala Institute of Medical Sciences and Psychiatric Social Worker at NIMHANS, she brings comprehensive expertise to her current role at Mindful Rejuvenation.",
      expertise: [
        "Suicide Prevention and Risk Assessment",
        "Psychiatric Social Work",
        "Special Education and Developmental Support",
        "Rehabilitation Therapy for Psychiatric Disorders",
        "Inclusive Education for Special Needs Children",
        "Psychosocial Assessment and Intervention",
        "Medical Social Work",
        "Research in Mental Health"
      ],
      image: "/lovable-uploads/f176d58a-5fb4-4b6b-872c-75fc19b3eb6c.png"
    },
    // Psychologists & Counsellors Team
    {
      name: "Psychologists & Counsellors Team", 
      title: "Team of Qualified Psychologists & Mental Health Counsellors",
      subtitle: "Mental Health Professionals | Therapy & Counselling Specialists",
      bio: "Our team consists of highly qualified psychologists and mental health counsellors with diverse expertise in therapeutic interventions and mental health education. The team holds advanced degrees including MSW, M.Phil., and MSc Psychology, bringing together specialists in relationship counselling, youth wellness programs, stress management, and client-centered therapy. They provide comprehensive support through individual therapy, group sessions, crisis intervention, and community outreach programs.",
      expertise: [
        "Relationship and Family Therapy",
        "Cognitive Behavioural Therapy (CBT)",
        "Solution-Focused Brief Therapy (SFBT)",
        "Crisis Intervention and Stress Management",
        "Youth Wellness and Educational Programs",
        "Group Therapy Facilitation",
        "Mental Health Awareness and Education",
        "Client-Centered Therapeutic Approaches",
        "Psychosocial Rehabilitation"
      ],
      image: "/lovable-uploads/8d19cd90-634d-4e75-bc30-820eec349e43.png"
    },
    // Patient Counsellors Team
    {
      name: "Patient Counsellors Team",
      title: "Team of Professional Counsellors",
      subtitle: "Mental Health Support Specialists | Psychosocial Care Providers",
      bio: "Our dedicated team of professional counsellors consists of qualified mental health professionals with expertise in medical and psychiatric social work. They provide comprehensive psychosocial support, patient advocacy, and therapeutic guidance. The team specializes in case management, family support, and ensuring continuity of care throughout the treatment process. Each counsellor brings unique skills in active listening, empathy, documentation, and collaborative care delivery.",
      expertise: [
        "Patient Counselling and Follow-up",
        "Psychosocial Assessments and Support",
        "Family Support Services",
        "Case Management and Documentation",
        "Crisis Intervention and Psychosocial First Aid",
        "Group Therapy Facilitation",
        "Care Plan Coordination",
        "Therapeutic Communication",
        "Patient Advocacy and Support"
      ],
      image: "/lovable-uploads/3014c635-3d79-406e-8213-e75b8e1cf89c.png"
    },
    // Mental Health Nurses and Care Assistants Team
    {
      name: "Mental Health Nurses & Care Assistants Team",
      title: "Team of Mental Health Nurses & Care Assistants",
      subtitle: "Compassionate Care Providers | Clinical Support Specialists",
      bio: "Our dedicated team of mental health nurses and care assistants provides round-the-clock compassionate care and clinical support to patients. They are trained in psychiatric nursing care, medication administration, vital signs monitoring, and patient safety protocols. The team works closely with psychiatrists and therapists to ensure comprehensive care delivery, maintaining a safe and therapeutic environment for recovery. They bring expertise in crisis management, behavioral observation, therapeutic communication, and activities of daily living support.",
      expertise: [
        "Psychiatric Nursing Care",
        "Medication Administration and Monitoring",
        "Vital Signs and Health Assessment",
        "Patient Safety and Crisis Management",
        "Behavioral Observation and Documentation",
        "Activities of Daily Living (ADL) Support",
        "Therapeutic Communication",
        "Infection Control and Hygiene Management",
        "Emergency Response and First Aid",
        "Patient Comfort and Emotional Support"
      ],
      image: "/lovable-uploads/8d19cd90-634d-4e75-bc30-820eec349e43.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sand-50 pt-[72px]">
      <Header />
      <HeroSection />
      <MissionVisionSection />
      <TeamSection teamMembers={teamMembers} />
      <GallerySection />
      <FacilitiesSection />
      <LicensedFacilitySection />
      <MentalHealthCrisisSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default AboutUs;
