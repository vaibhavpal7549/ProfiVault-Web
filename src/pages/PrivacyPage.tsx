import React, { useState, useEffect } from 'react';
import { CONFIG } from '../data/config';
import {
  ShieldCheck,
  Mail,
  ArrowLeft,
  HardDrive,
  Key,
  Globe,
  FileText,
  Database,
  CheckCircle2,
  Clock,
  UserCheck,
  Copy,
  Check,
  EyeOff,
  Layers,
  HelpCircle,
  Cpu,
  ChevronRight,
  Clipboard,
  Trash2,
  AlertTriangle,
  Sparkles,
  Cloud,
} from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('section-1');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Privacy Policy – ProfiVault – Fast Profile Link Copier';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // ScrollSpy observer to dynamically highlight the active section in the sticky sidebar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0,
      }
    );

    const sectionElements = document.querySelectorAll('section[id^="section-"]');
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tableOfContents = [
    { id: 'section-1', title: '1. Introduction & Scope' },
    { id: 'section-2', title: '2. Information Accessed & Collected' },
    { id: 'section-3', title: '3. Purpose of Processing' },
    { id: 'section-4', title: '4. How Data is Handled & Processed' },
    { id: 'section-5', title: '5. Local vs Cloud Storage' },
    { id: 'section-6', title: '6. Google Sign-In & OAuth' },
    { id: 'section-7', title: '7. Clipboard Write Behavior' },
    { id: 'section-8', title: '8. Data Sharing & Third Parties' },
    { id: 'section-9', title: '9. External Services & APIs' },
    { id: 'section-10', title: '10. Retention & Deletion' },
    { id: 'section-11', title: '11. Data Security & Encryption' },
    { id: 'section-12', title: '12. User Choices & Controls' },
    { id: 'section-13', title: "13. Children's Privacy" },
    { id: 'section-14', title: '14. Changes to This Policy' },
    { id: 'section-15', title: '15. Developer Contact Info' },
  ];

  const handleReturnHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    onNavigate('/');
  };

  const handleVisitSupport = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    onNavigate('/support');
  };

  return (
    <div className="py-12 bg-slate-950 text-slate-200 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleReturnHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to ProfiVault Home</span>
          </button>

          <span className="text-[11px] font-mono text-slate-500 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
            Route: /privacy-policy
          </span>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 border-b border-slate-800/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Chrome Web Store User Data Privacy Compliant</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ProfiVault Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            Official privacy, data handling, storage, and sharing disclosure for the{' '}
            <strong className="text-white">ProfiVault – Fast Profile Link Copier</strong> Chrome Extension 
            (ID: <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">bkbmplkfckpkjkjkmeipomiklhdbfobo</code>) 
            and its official website (<span className="text-blue-400 font-mono text-xs">{CONFIG.SITE_URL}</span>).
          </p>

          {/* Compliance & Policy Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs text-slate-400 font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Last Updated: October 2026
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Effective Date: October 12, 2026
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              Extension Version: 1.0.3 (Manifest V3)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              Status: Public &amp; Active
            </span>
          </div>
        </div>

        {/* Privacy Highlights Top 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3.5 hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 mt-0.5">
              <HardDrive className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">LOCAL BY DEFAULT</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Works 100% offline in Guest Mode. Data stays in local browser storage.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3.5 hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 mt-0.5">
              <Key className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">OPTIONAL GOOGLE SIGN-IN</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                OAuth used exclusively for user authentication and cross-device sync.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3.5 hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20 mt-0.5">
              <Clipboard className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">WRITE-ONLY CLIPBOARD</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Only writes selected URL on 1-click copy. Never reads clipboard content.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3.5 hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20 mt-0.5">
              <EyeOff className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">ZERO TRACKING OR ADS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No browsing history tracking, no ad trackers, no sale of user data.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Quick TOC Selector */}
        <div className="lg:hidden">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Policy Table of Contents (15 Sections)</span>
              </span>
              <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>

            {mobileMenuOpen && (
              <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-3 py-2 rounded-xl transition cursor-pointer flex items-center justify-between ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70 ml-1" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 2-COLUMN MAIN CONTENT: Sticky Left Sidebar + Right Policy Document */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">

          {/* Sticky Left Sidebar: Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-24">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-3 max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider pb-3 border-b border-slate-800">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Policy Table of Contents</span>
              </div>

              <nav className="space-y-1">
                {tableOfContents.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between text-xs font-medium group ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="truncate pr-1">{item.title}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive
                            ? 'text-white'
                            : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Main Content Area */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">

            {/* Section 1: Introduction and Scope */}
            <section id="section-1" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 1</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">1. Introduction and Scope</h2>
              
              <p>
                This Privacy Policy describes how the developer team of <strong>ProfiVault</strong> ("we", "us", or "our") 
                accesses, collects, handles, stores, processes, and protects user information in connection with the{' '}
                <strong>ProfiVault – Fast Profile Link Copier</strong> browser extension for Google Chrome (Manifest V3) 
                and our official website (<a href={CONFIG.SITE_URL} className="text-blue-400 hover:underline font-mono text-xs">{CONFIG.SITE_URL}</a>).
              </p>
              <p>
                ProfiVault is designed as a productivity tool for students, job applicants, developers, freelancers, 
                and professionals who frequently copy and paste their career profile links (including LinkedIn, 
                GitHub, personal portfolio websites, resumes, and coding platforms like LeetCode, CodeChef, 
                HackerRank, GeeksForGeeks, Kaggle, and StackOverflow) into job applications, client proposals, 
                and recruitment portals.
              </p>
              <p>
                Our core architectural principle is <strong>privacy by design and minimal data footprint</strong>. The extension 
                functions fully offline in Guest Mode without requiring account creation. We do not track your 
                web browsing activity, inspect third-party webpage content, or monetize user data.
              </p>
            </section>

            {/* Section 2: Information the Extension Accesses and Collects */}
            <section id="section-2" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">2. Information Accessed &amp; Collected</h2>

              <p>
                ProfiVault accesses and collects only the minimum information necessary to provide its core link organizer and clipboard copying features:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    A. Profile Links and Metadata (User-Created)
                  </h3>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><strong className="text-white">Profile Title:</strong> Custom label (e.g. "My LinkedIn Profile", "Senior Full-Stack Resume").</li>
                    <li><strong className="text-white">Profile URL:</strong> Valid web addresses (e.g. LinkedIn, GitHub, LeetCode, CodeChef, HackerRank, Portfolio, Google Drive resume URLs).</li>
                    <li><strong className="text-white">Platform Identifier:</strong> Detected platform name (e.g. LinkedIn, GitHub, LeetCode, Custom).</li>
                    <li><strong className="text-white">Category Tag:</strong> User-selected category (Social, Coding, Docs, Portfolio, Other).</li>
                    <li><strong className="text-white">Custom Tags &amp; Favorite Status:</strong> User-defined search tags, star rating, and click counts.</li>
                    <li><strong className="text-white">Timestamps:</strong> Creation and update timestamps (<code className="font-mono text-[11px] text-blue-300">createdAt</code>, <code className="font-mono text-[11px] text-blue-300">updatedAt</code>).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    B. Google Account Information (Optional - Only If Signed In)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    If and only if you explicitly choose to sign in with your Google Account, the extension accesses:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><strong className="text-white">Google User ID:</strong> Unique alphanumeric identifier (<code className="font-mono text-[11px] text-blue-300">sub</code>) from Google.</li>
                    <li><strong className="text-white">Email Address:</strong> Used to identify your account and associate cloud sync.</li>
                    <li><strong className="text-white">Display Name:</strong> Used to personalize the extension header.</li>
                    <li><strong className="text-white">Profile Avatar URL:</strong> Used to display your avatar image (or DiceBear fallback avatar).</li>
                    <li><strong className="text-white">OAuth Access Token:</strong> Temporary Bearer token used to authenticate requests.</li>
                  </ul>
                  <p className="text-xs text-amber-300/90 bg-amber-950/30 p-2.5 rounded-lg border border-amber-900/40">
                    <strong>Explicit Limitation:</strong> ProfiVault <strong>never</strong> accesses your Gmail messages, contacts, Google Drive files, search history, or any other personal Google data.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-sky-400" />
                    C. Extension Settings &amp; Preferences
                  </h3>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><strong className="text-white">Theme Selection:</strong> 'light', 'dark', or 'system'.</li>
                    <li><strong className="text-white">Behavior Flags:</strong> <code className="font-mono text-[11px] text-blue-300">autoCloseOnCopy</code>, <code className="font-mono text-[11px] text-blue-300">showCopyNotification</code>, <code className="font-mono text-[11px] text-blue-300">defaultOpenInNewTab</code>.</li>
                    <li><strong className="text-white">Synchronization Toggle:</strong> <code className="font-mono text-[11px] text-blue-300">syncEnabled</code> (boolean).</li>
                    <li><strong className="text-white">Quick Copy Limit:</strong> Maximum pinned items (default: 6).</li>
                    <li><strong className="text-white">Onboarding State:</strong> <code className="font-mono text-[11px] text-blue-300">ProfiVault_has_onboarded</code> (boolean).</li>
                  </ul>
                </div>
              </div>

              {/* Data Inventory Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
                  <thead className="bg-slate-900 text-slate-200 uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Data Category</th>
                      <th className="p-3">Accessed When</th>
                      <th className="p-3">Stored Where</th>
                      <th className="p-3">Transmitted Externally?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr className="bg-slate-950/40">
                      <td className="p-3 font-medium text-white">Profile Titles &amp; URLs</td>
                      <td className="p-3">User saves or imports links</td>
                      <td className="p-3 font-mono text-[11px]">chrome.storage.local (and MongoDB Atlas if signed in)</td>
                      <td className="p-3">Only to sync backend if user signs in with Google; otherwise strictly local</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white">Google ID, Email, Name, Avatar</td>
                      <td className="p-3">User clicks "Sign In with Google"</td>
                      <td className="p-3 font-mono text-[11px]">chrome.storage.local &amp; MongoDB Atlas</td>
                      <td className="p-3">Transmitted via HTTPS to Google OAuth &amp; ProfiVault sync backend</td>
                    </tr>
                    <tr className="bg-slate-950/40">
                      <td className="p-3 font-medium text-white">Theme &amp; Extension Settings</td>
                      <td className="p-3">User changes options</td>
                      <td className="p-3 font-mono text-[11px]">chrome.storage.local</td>
                      <td className="p-3 text-emerald-400 font-semibold">No (Stored strictly on device)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white">Clipboard Target URL</td>
                      <td className="p-3">User clicks "Copy" button</td>
                      <td className="p-3 font-mono text-[11px]">System Clipboard (write-only)</td>
                      <td className="p-3 text-emerald-400 font-semibold">No (Local clipboard API only)</td>
                    </tr>
                    <tr className="bg-slate-950/40">
                      <td className="p-3 font-medium text-white">Support Inquiry Email &amp; Message</td>
                      <td className="p-3">User writes on website /support</td>
                      <td className="p-3 font-mono text-[11px]">Developer Support Mailbox</td>
                      <td className="p-3">Transmitted via Web3Forms API to support email</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Purpose of Processing Each Data Category */}
            <section id="section-3" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 3</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">3. Purpose of Processing</h2>

              <p>
                Every category of data processed has a direct, narrow purpose essential to the single purpose of the extension:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <strong className="text-white">Profile URLs and Titles:</strong> Processed exclusively to present your saved links in the extension popup and options page, enabling instant 1-click clipboard copying during job and internship applications.
                </li>
                <li>
                  <strong className="text-white">Google OAuth Authentication Data:</strong> Processed solely to authenticate your identity, establish a secure user session, and associate your cloud-synced links across multiple browsers or computers.
                </li>
                <li>
                  <strong className="text-white">Clipboard Operation:</strong> Processed solely to place your selected URL onto your system clipboard when you explicitly click the "Copy" button.
                </li>
                <li>
                  <strong className="text-white">Extension Settings:</strong> Processed to remember your interface preferences (such as dark mode, quick-copy limits, and toast notifications) between browser restarts.
                </li>
                <li>
                  <strong className="text-white">Website Support Inquiries:</strong> Processed solely to reply to user assistance requests, technical bug reports, and compliance inquiries.
                </li>
              </ul>
            </section>

            {/* Section 4: How Information is Handled and Processed */}
            <section id="section-4" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 4</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">4. How Data is Handled &amp; Processed</h2>

              <p>
                ProfiVault implements two distinct operational workflows:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-emerald-400" />
                    Mode A: Guest / Local Mode (Default)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    When you install ProfiVault, you start in Guest Mode. All profile links, categories, tags, and settings are handled 
                    <strong>entirely on your local computer</strong>. Data is written to and read from <code className="font-mono text-blue-300">chrome.storage.local</code>. 
                    Zero network calls are made to our backend sync server. The extension functions completely without an internet connection.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-blue-400" />
                    Mode B: Google Authenticated / Sync Mode
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    If you click "Sign In with Google", the extension obtains an OAuth token and authenticates with our backend API 
                    (<code className="font-mono text-blue-300">https://linkvaultapi.onrender.com/api</code>). The extension then performs 
                    bidirectional synchronization (<code className="font-mono text-blue-300">POST /links/sync</code> and <code className="font-mono text-blue-300">GET /links</code>) 
                    over encrypted HTTPS to merge your local links with your cloud backup.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Local Browser Storage and Any Cloud Storage */}
            <section id="section-5" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 5</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">5. Local vs Cloud Storage</h2>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <strong className="text-white text-sm flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-emerald-400" />
                    Local Storage Architecture (chrome.storage.local)
                  </strong>
                  <p className="text-slate-300">
                    ProfiVault utilizes Chrome's sandboxed local storage API (<code className="font-mono text-blue-300">chrome.storage.local</code>). 
                    The exact storage keys initialized and maintained are:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-slate-300">
                    <li><code className="text-blue-300">ProfiVault_profiles</code>: Array of saved profile objects.</li>
                    <li><code className="text-blue-300">ProfiVault_settings</code>: Object holding user preferences.</li>
                    <li><code className="text-blue-300">ProfiVault_auth</code>: Object holding authentication status and tokens.</li>
                    <li><code className="text-blue-300">ProfiVault_recently_copied</code>: Array of recently copied item IDs.</li>
                    <li><code className="text-blue-300">ProfiVault_has_onboarded</code>: Boolean flag for initial welcome flow.</li>
                  </ul>
                  <p className="text-slate-400 text-xs">
                    This storage is sandboxed within Google Chrome and is completely inaccessible to external web pages, scripts, or third-party extensions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <strong className="text-white text-sm flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" />
                    Cloud Storage Architecture (MongoDB Atlas via Render)
                  </strong>
                  <p className="text-slate-300">
                    For users who sign in with Google to enable cloud sync:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    <li>Data is transmitted over TLS 1.3 HTTPS to our backend API hosted on <strong>Render</strong> (<code className="font-mono text-blue-300">https://linkvaultapi.onrender.com/api</code>).</li>
                    <li>Data is persisted in an encrypted cloud database cluster provided by <strong>MongoDB Atlas</strong>.</li>
                    <li>User documents and links are strictly isolated using unique Google User ID foreign keys (<code className="font-mono text-blue-300">googleId</code>).</li>
                    <li>Database data is encrypted at rest using industry-standard AES-256 encryption.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Google Sign-In and OAuth Data */}
            <section id="section-6" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 6</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">6. Google Sign-In &amp; OAuth</h2>

              <p>
                ProfiVault requests the Chrome <code className="font-mono text-blue-300">identity</code> permission in its manifest. 
                The technical details of our Google OAuth integration are as follows:
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-2">
                  <span className="text-slate-400">OAuth Client ID:</span>
                  <span className="text-blue-300 font-mono text-[11px] truncate">14373302834-3kd9bn2klefeiv896mibrmn2i1ol4na4.apps.googleusercontent.com</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Requested Scopes:</span>
                  <span className="text-emerald-300 font-mono text-[11px]">openid, email, profile</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-400">Google Userinfo Endpoint:</span>
                  <span className="text-blue-300 font-mono text-[11px]">https://www.googleapis.com/oauth2/v3/userinfo</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300">
                When Google authentication completes, the extension reads your public profile info (<code className="font-mono text-blue-300">sub</code>, <code className="font-mono text-blue-300">email</code>, <code className="font-mono text-blue-300">name</code>, <code className="font-mono text-blue-300">picture</code>). 
                If Google does not return a photo URL, a non-identifying avatar is generated via <code className="font-mono text-blue-300">api.dicebear.com</code>. 
                Tokens are cached in Chrome Identity storage and can be revoked at any time by clicking "Sign Out".
              </p>
            </section>

            {/* Section 7: Clipboard Behavior */}
            <section id="section-7" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">7. Clipboard Write Behavior</h2>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <Clipboard className="w-4 h-4" />
                  <span>Strictly Write-Only Clipboard Operation</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ProfiVault requests the <code className="font-mono text-blue-300">clipboardWrite</code> permission in its manifest. 
                  This permission is invoked <strong>exclusively</strong> when you manually click the "Copy" button next to a saved profile link, 
                  or click an item in the Quick Copy bar.
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>The extension calls <code className="font-mono text-blue-300">navigator.clipboard.writeText(url)</code> solely to write the selected profile URL to your system clipboard.</li>
                <li>ProfiVault does <strong>NOT</strong> request the <code className="font-mono text-rose-300">clipboardRead</code> permission.</li>
                <li>The extension <strong>never</strong> reads, intercepts, inspects, or logs your existing clipboard content or clipboard history.</li>
                <li>No clipboard data is ever sent to any remote server.</li>
              </ul>
            </section>

            {/* Section 8: Data Sharing and Third-Party Recipients */}
            <section id="section-8" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 8</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">8. Data Sharing &amp; Third Parties</h2>

              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs sm:text-sm text-blue-200">
                <strong className="text-white block mb-1">Zero Commercial Data Sharing Guarantee:</strong>
                ProfiVault does <strong>NOT</strong> sell, rent, monetize, license, or trade your personal data, saved profile URLs, or extension usage data to recruiters, employers, advertisers, data brokers, or marketing companies under any circumstances.
              </div>

              <p className="text-xs sm:text-sm text-slate-300">
                Data is shared strictly with the infrastructure service providers necessary to deliver the technical service:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
                <li><strong>Google LLC:</strong> Identity authentication verification when Google Sign-In is initiated.</li>
                <li><strong>Render Services Inc.:</strong> Cloud API host for link synchronization when signed in.</li>
                <li><strong>MongoDB Atlas:</strong> Encrypted cloud database host for synced link storage.</li>
                <li><strong>Legal Authorities:</strong> Only when strictly mandated by a valid subpoena, court order, or applicable statutory law.</li>
              </ul>
            </section>

            {/* Section 9: External Services and APIs */}
            <section id="section-9" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 9</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">9. External Services &amp; APIs</h2>

              <p className="text-xs sm:text-sm text-slate-300">
                Here is the exhaustive inventory of all external endpoints contacted by the extension and website:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-xs">accounts.google.com &amp; googleapis.com</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300">Google OAuth API</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Used for Google Sign-In token issuance and basic profile verification (<code className="font-mono text-[11px]">/oauth2/v3/userinfo</code>).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-xs">linkvaultapi.onrender.com</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300">Sync Backend (Render)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Handles user login (<code className="font-mono text-[11px]">/api/auth/google</code>) and link sync (<code className="font-mono text-[11px]">/api/links/sync</code>) for authenticated users.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-xs">api.dicebear.com</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Avatar Fallback</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Public SVG generator contacted only if Google does not return a profile image URL.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-xs">api.web3forms.com</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300">Support Relay</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Contacted on the website (<code className="font-mono text-[11px]">/support</code>) strictly when submitting a support ticket.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                <EyeOff className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Background Scraping:</strong> ProfiVault does <strong>NOT</strong> inject content scripts into web pages to scrape passwords, forms, or browsing activity.
                </span>
              </div>
            </section>

            {/* Section 10: Data Retention and Deletion */}
            <section id="section-10" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 10</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">10. Retention &amp; Deletion</h2>

              <p className="text-xs sm:text-sm text-slate-300">
                You maintain total control over your data retention and can delete your information at any time using 4 straightforward mechanisms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    1. Delete Individual Links
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Click the trash icon on any profile card in the popup or options page to immediately purge that link from local storage and cloud database.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    2. Clear All Local Storage
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Click the "Clear Local Profiles" button inside Options &gt; Privacy Policy or call <code className="font-mono text-blue-300">chrome.storage.local.clear()</code> to immediately erase all local data.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                    3. Delete Remote Cloud Account
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Use "Delete Remote Account" in the Options dashboard to trigger <code className="font-mono text-blue-300">DELETE /api/user/account</code>, permanently purging your user record and all synced links from MongoDB Atlas.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    4. Uninstall Extension
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    Uninstalling ProfiVault from Chrome immediately deletes all local storage data from your computer.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Data Security Safeguards */}
            <section id="section-11" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 11</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">11. Data Security &amp; Encryption</h2>

              <p className="text-xs sm:text-sm text-slate-300">
                We employ multiple layers of defense to secure your information:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                <li><strong className="text-white">TLS 1.3 Encryption in Transit:</strong> All communications between the extension, Google APIs, and our Render sync backend occur strictly over encrypted HTTPS.</li>
                <li><strong className="text-white">JWT Session Authentication:</strong> Remote API requests require a signed JSON Web Token passed in the <code className="font-mono text-blue-300">Authorization: Bearer</code> header.</li>
                <li><strong className="text-white">Chrome Storage Sandboxing:</strong> Local profiles are isolated within the browser's extension sandbox.</li>
                <li><strong className="text-white">Database Isolation &amp; Encryption at Rest:</strong> MongoDB Atlas database uses encrypted volumes (AES-256) with strict user ID data segregation.</li>
              </ul>
            </section>

            {/* Section 12: User Choices and Controls */}
            <section id="section-12" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 12</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">12. User Choices &amp; Controls</h2>

              <p className="text-xs sm:text-sm text-slate-300">
                ProfiVault provides users with transparent controls:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                <li><strong className="text-white">Guest Mode (Local Only):</strong> You are never forced to log in or create an account. All features work locally.</li>
                <li><strong className="text-white">Cloud Sync Toggle:</strong> You can toggle <code className="font-mono text-blue-300">syncEnabled: false</code> in Settings at any time to pause cloud synchronization while remaining logged in.</li>
                <li><strong className="text-white">Data Portability (JSON Export &amp; Import):</strong> Download a complete human-readable JSON backup of all saved profile links at any time using the "Export Data" button in Options.</li>
                <li><strong className="text-white">Sign Out &amp; Invalidation:</strong> Clicking "Sign Out" clears your active Google token and returns the extension to local guest mode.</li>
              </ul>
            </section>

            {/* Section 13: Children's Privacy */}
            <section id="section-13" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 13</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">13. Children's Privacy</h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ProfiVault is intended for college students, software engineers, freelancers, and working professionals. 
                The software is not intended for or targeted at children under 13 years of age (or under 16 in the European Economic Area). 
                We do not knowingly solicit or collect personal information from children. If you believe a minor has provided us with personal information, 
                please contact us at <a href={`mailto:${CONFIG.PRIVACY_EMAIL}`} className="text-blue-400 hover:underline font-mono">{CONFIG.PRIVACY_EMAIL}</a>, 
                and we will promptly delete that information from our systems.
              </p>
            </section>

            {/* Section 14: Changes to This Policy */}
            <section id="section-14" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 14</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">14. Changes to This Policy</h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect product enhancements, API improvements, or statutory compliance updates. 
                Any revisions will be published immediately on this public page (<a href={`${CONFIG.SITE_URL}/privacy-policy`} className="text-blue-400 hover:underline font-mono">{CONFIG.SITE_URL}/privacy-policy</a>) 
                with a revised "Last Updated" date. In the event of material changes affecting user data practices, we will provide a notice in the extension's options page.
              </p>
            </section>

            {/* Section 15: Developer Contact Information */}
            <section id="section-15" className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900/90 to-slate-950 border border-blue-800/60 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECTION 15</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">15. Developer Contact Information</h2>
                </div>
              </div>

              <p className="text-sm text-slate-300">
                For any questions, concerns, feedback, or legal inquiries regarding this Privacy Policy or your data rights, 
                please contact the ProfiVault development team:
              </p>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-500 font-sans font-semibold">Extension Name:</span>
                  <span className="text-white font-sans">{CONFIG.PRODUCT_NAME} – Fast Profile Link Copier</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-500 font-sans font-semibold">Chrome Extension ID:</span>
                  <span className="text-blue-400">bkbmplkfckpkjkjkmeipomiklhdbfobo</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-500 font-sans font-semibold">Publisher / Developer:</span>
                  <span className="text-white font-sans">ProfiVault Team</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-500 font-sans font-semibold">Privacy &amp; Support Inquiries:</span>
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${CONFIG.PRIVACY_EMAIL}`} className="text-blue-400 hover:underline">
                      {CONFIG.PRIVACY_EMAIL}
                    </a>
                    <button
                      onClick={() => handleCopyEmail(CONFIG.PRIVACY_EMAIL)}
                      className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
                      title="Copy Privacy Email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-500 font-sans font-semibold">Official Website:</span>
                  <a href={CONFIG.SITE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    {CONFIG.SITE_URL}
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-sans font-semibold">Public Privacy Policy URL:</span>
                  <a href={`${CONFIG.SITE_URL}/privacy-policy`} className="text-blue-400 hover:underline">
                    {CONFIG.SITE_URL}/privacy-policy
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleVisitSupport}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition cursor-pointer shadow-lg shadow-blue-600/25 flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Visit Support Hub</span>
                </button>

                <button
                  onClick={handleReturnHome}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition cursor-pointer border border-slate-800"
                >
                  Return to Home
                </button>
              </div>
            </section>

          </main>
        </div>

      </div>
    </div>
  );
};
