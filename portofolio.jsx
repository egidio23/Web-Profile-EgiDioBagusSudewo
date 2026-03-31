import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  ExternalLink, 
  ChevronRight,
  Code,
  Users,
  Database,
  FileText,
  Globe,
  Instagram,
  Library,
  ArrowRight,
  BookMarked,
  Download,
  Layers,
  Star,
  CheckCircle,
  Linkedin,
  ShieldCheck
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileData = {
    name: "Egi Dio Bagus Sudewo, S.Kom., M.Kom.",
    role: "AI Researcher & Informatics Lecturer",
    summary: "Master of Informatics graduate from Universitas Ahmad Dahlan (UAD) specializing in Machine Learning and Deep Learning. Proven track record in academic research with publications in Scopus Q2 and Sinta-indexed journals. Passionate about leveraging AI for social impact and educational advancement.",
    contact: {
      address: "Medan, North Sumatra, Indonesia",
      phone: "+62 882 6424 0687",
      email: "egidio8gali@gmail.com",
      scholar: "https://scholar.google.com/citations?user=c56Uo7IAAAAJ&hl=id",
      orcid: "https://orcid.org/0009-0003-0239-3012",
      researchgate: "https://www.researchgate.net/profile/Egi-Sudewo",
      sinta: "https://sinta.kemdiktisaintek.go.id/authors/profile/6973658",
      instagram: "https://www.instagram.com/egidio.sudewo/"
    },
    education: [
      {
        degree: "Master of Informatics",
        school: "Universitas Ahmad Dahlan",
        year: "2023 - 2025",
        gpa: "3.88 / 4.00",
        honors: "Cum Laude",
        details: "Thesis: Handwritten Javanese Script Recognition Using CNN Architecture."
      },
      {
        degree: "Bachelor of Information Systems",
        school: "STMIK Triguna Dharma",
        year: "2019 - 2023",
        gpa: "3.65 / 4.00",
        honors: "Cum Laude",
        details: "Thesis: ARAS Method Implementation in Decision Support Systems."
      }
    ],
    teaching: [
      "Machine Learning",
      "Artificial Intelligence",
      "E-Business",
      "Knowledge Management",
      "E-Governance"
    ],
    publications: [
      { 
        title: "Evaluating the Impact of Optimizer Hyperparameters on ResNet in Hanacaraka Character Recognition", 
        info: "Scopus Q2 Indexed • 2024",
        link: "https://www.researchgate.net/publication/389276199_Evaluating_the_Impact_of_Optimizer_Hyperparameters_on_ResNet_in_Hanacaraka_Character_Recognition" 
      },
      { 
        title: "DenseNet Architecture for Efficient and Accurate Recognition of Javanese Script Hanacaraka Character", 
        info: "Sinta 2 Indexed • 2024",
        link: "https://doi.org/10.30812/matrik.v23i2.3855" 
      },
      { 
        title: "Javanese Script Hanacaraka Character Prediction With Resnet-18 Architecture", 
        info: "Sinta 3 Indexed • 2024",
        link: "https://sinta.kemdiktisaintek.go.id/authors/profile/6973658/?view=googlescholar" 
      }
    ],
    experience: [
      {
        role: "Informatics Instructor",
        org: "SMP Muhammadiyah 3 Medan",
        period: "Present",
        desc: "Developing digital literacy and basic programming curricula."
      },
      {
        role: "Research Grant Recipient",
        org: "DRTPM - Ministry of Education",
        period: "2024 - 2025",
        desc: "Conducting high-impact research on Javanese script recognition and predictive modeling."
      }
    ],
    grants: [
      "Recipient of DRTPM Master's Thesis Research Grant 2024",
      "Research Team Member for DRTPM PDP Grant 2025"
    ],
    organizations: [
      {
        role: "Vice Chairman",
        org: "Informatics Master's Student Association (HIMA) UAD",
        period: "2023 - 2025"
      },
      {
        role: "Member",
        org: "Arts and Culture Council, Muhammadiyah Regional Board North Sumatra",
        period: "Active"
      },
      {
        role: "Head of Organizational Division",
        org: "Muhammadiyah Youth Branch (PRPM) Tanjung Sari Barat",
        period: "Past"
      },
      {
        role: "General Chairman",
        org: "Muhammadiyah Student Association (IPM) Branch Tanjung Sari",
        period: "Past"
      },
      {
        role: "Head of Library and Information Council",
        org: "Muhammadiyah Branch (PCM) Tanjung Sari",
        period: "Active"
      }
    ]
  };

  const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-12 text-center lg:text-left">
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-500 max-w-2xl">{subtitle}</p>}
      <div className="mt-4 h-1 w-20 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-2xl font-black tracking-tighter text-blue-600">EDBS<span className="text-slate-400">.</span></span>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-500">
            {['About', 'Teaching', 'Research', 'Leadership', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Star size={12} fill="currentColor" /> Welcome to my Portfolio
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Shaping the <span className="text-blue-600">Future</span> <br className="hidden lg:block"/> with Intelligence.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              I am <span className="font-bold text-slate-800">Egi Dio Bagus Sudewo</span>, an academic researcher and educator dedicated to advancing Artificial Intelligence and Machine Learning solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2">
                Connect Now <ArrowRight size={18} />
              </a>
              <button className="px-8 py-4 border border-slate-200 bg-white text-slate-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2">
                <Download size={18} /> Resume
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6 pt-6">
              {[
                { icon: Globe, url: profileData.contact.scholar, color: 'hover:text-blue-600' },
                { icon: Library, url: profileData.contact.researchgate, color: 'hover:text-emerald-600' },
                { icon: Database, url: profileData.contact.sinta, color: 'hover:text-orange-500' },
                { icon: Instagram, url: profileData.contact.instagram, color: 'hover:text-pink-500' }
              ].map((social, i) => {
                const SocialIcon = social.icon;
                return (
                  <a key={i} href={social.url} target="_blank" className={`text-slate-400 ${social.color} transition-all transform hover:scale-110`}>
                    <SocialIcon size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="w-full max-w-md lg:max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl group-hover:bg-blue-600/10 transition-all"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                  alt="Egi Dio Bagus Sudewo"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="About Research Focus" subtitle="Combining academic rigor with technical innovation to bridge the gap between theory and application." />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 leading-relaxed text-lg text-slate-600">
                {profileData.summary}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {profileData.education.map((edu, i) => (
                  <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <GraduationCap size={24} />
                    </div>
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{edu.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 mt-2">{edu.degree}</h4>
                    <p className="text-slate-500 font-medium">{edu.school}</p>
                    <div className="mt-4 flex items-center gap-2">
                       <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full">GPA {edu.gpa}</span>
                       <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full uppercase">{edu.honors}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
               <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-white">Areas of Interest</h4>
                    <ul className="space-y-4">
                      {['Computer Vision', 'Predictive Modeling', 'Pattern Recognition', 'Neural Networks'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-slate-400 font-medium">
                          <CheckCircle size={16} className="text-blue-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 pt-8 border-t border-slate-800">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">Research Impact</p>
                    <p className="text-slate-300 italic text-sm leading-relaxed">"Contributing to the digitalization of indigenous knowledge through deep learning character recognition."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Teaching Portfolio" subtitle="Experienced in delivering high-level informatics and management courses." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {profileData.teaching.map((course, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center hover:bg-white hover:border-blue-600 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all shadow-sm">
                  <BookMarked size={20} />
                </div>
                <p className="font-bold text-slate-800 text-sm">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications Section */}
      <section id="research" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Academic Publications" subtitle="Published research in indexed journals and conferences focusing on AI optimization." />
          
          <div className="grid gap-6">
            {profileData.publications.map((pub, i) => (
              <a 
                key={i} 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full">{pub.info}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight max-w-3xl">{pub.title}</h3>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Full Article <ExternalLink size={18} />
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
             <a href={profileData.contact.scholar} target="_blank" className="px-10 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-lg flex items-center gap-3">
               More on Google Scholar <ArrowRight size={20} />
             </a>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Leadership & Organizations" subtitle="Actively contributing to various academic and social communities." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.organizations.map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-400 transition-all shadow-sm flex items-start gap-5">
                <div className="p-3 bg-white rounded-2xl text-blue-600 shadow-sm shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight">{item.role}</h4>
                  <p className="text-slate-500 text-sm mt-1">{item.org}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-white border border-slate-200 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Grants Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader title="Work Experience" />
              <div className="space-y-12">
                {profileData.experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-200 last:before:hidden">
                    <div className="absolute left-[-4px] top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{exp.period}</span>
                    <h4 className="text-xl font-bold text-slate-900 mt-2">{exp.role}</h4>
                    <p className="text-slate-500 font-bold mb-3">{exp.org}</p>
                    <p className="text-slate-600 leading-relaxed text-sm">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title="Public Grants" />
              <div className="space-y-4">
                {profileData.grants.map((grant, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 flex items-center gap-5 shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <Award size={24} />
                    </div>
                    <p className="font-bold text-slate-700 text-sm leading-relaxed">{grant}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2"><Globe size={18}/> Social Engagement</h4>
                <p className="text-blue-700 text-sm leading-relaxed opacity-80 italic">"Dedicated to community service as a Mubaligh Hijrah and providing career counseling for vocational students."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white rounded-t-[4rem] lg:rounded-t-[6rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl font-extrabold tracking-tight text-white">Let's build something <br/><span className="text-blue-500 underline decoration-4 underline-offset-8">Extraordinary</span>.</h2>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: profileData.contact.email },
                  { icon: Phone, label: 'WhatsApp', value: profileData.contact.phone },
                  { icon: MapPin, label: 'Office', value: profileData.contact.address }
                ].map((item, i) => {
                  const ContactIcon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <ContactIcon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{item.label}</p>
                        <p className="text-lg font-bold text-slate-200">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-xl text-left">
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-medium text-white" />
                <input type="email" placeholder="Email Address" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-medium text-white" />
                <textarea rows="4" placeholder="How can I help you?" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-medium resize-none text-white"></textarea>
                <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all shadow-xl shadow-blue-600/20">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-500 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 Egi Dio Bagus Sudewo, M.Kom. • Built with Integrity and AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
