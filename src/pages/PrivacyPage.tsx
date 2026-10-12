import React, { useEffect, useState } from 'react';
import { CONFIG } from '../data/config';
import {
  ShieldCheck,
  Mail,
  ArrowLeft,
  Lock,
  Database,
  Key,
  Copy,
  Trash2,
  EyeOff,
  UserCheck,
  CheckCircle2,
  ExternalLink,
  Clock,
  Server,
  Download,
  HardDrive,
  FileText,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    document.title = 'Privacy Policy – ProfiVault Chrome Extension';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'intro', label: '1. Introduction & Scope' },
    { id: 'data-collected', label: '2. Information Accessed & Collected' },
    { id: 'purpose', label: '3. Purpose of Processing' },
    { id: 'handling', label: '4. How Data is Handled & Processed' },
    { id: 'storage', label: '5. Local vs Cloud Storage' },
    { id: 'google-oauth', label: '6. Google Sign-In & OAuth' },
    { id: 'clipboard', label: '7. Clipboard Write Behavior' },
    { id: 'sharing', label: '8. Data Sharing & Third Parties' },
    { id: 'external-apis', label: '9. External Services & APIs' },
    { id: 'retention', label: '10. Retention & Deletion' },
    { id: 'security', label: '11. Data Security & Encryption' },
    { id: 'user-choices', label: '12. User Choices & Controls' },
    { id: 'children', label: '13. Children’s Privacy' },
    { id: 'changes', label: '14. Policy Updates' },
    { id: 'contact', label: '15. Developer Contact Info' },
  ];

  return (
    <div className="py-10 bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to ProfiVault Home</span>
          </button>

          <a
            href={CONFIG.CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            <span>Chrome Web Store Listing</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Official Privacy Policy</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ProfiVault Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Transparent disclosure of data practices for{' '}
              <strong className="text-white">ProfiVault – Fast Profile Link Copier</strong> (Chrome Extension Manifest V3, ID: <span className="font-mono text-blue-400">bkbmplkfckpkjkjkmeipomiklhdbfobo</span>) and the ProfiVault web portal.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Last Updated: <strong className="text-slate-200">October 12, 2026</strong></span>
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Status: <strong className="text-emerald-400">Fully Compliant with Google User Data Privacy Policy</strong></span>
              </span>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Local by Default</h4>
              <p className="text-xs text-slate-400 mt-0.5">Works 100% offline in Guest Mode. Data stays in local browser storage.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Optional Google Sign-In</h4>
              <p className="text-xs text-slate-400 mt-0.5">OAuth used exclusively for user authentication and cross-device sync.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20 text-sky-400">
              <Copy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Write-Only Clipboard</h4>
              <p className="text-xs text-slate-400 mt-0.5">Only writes selected URL on 1-click copy. Never reads clipboard content.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 text-amber-400">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Tracking or Ads</h4>
              <p className="text-xs text-slate-400 mt-0.5">No browsing history tracking, no ad trackers, no sale of user data.</p>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Table of Contents - Desktop Sticky Sidebar */}
          <aside className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800">
                <FileText className="w-4 h-4 text-blue-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Policy Table of Contents</h3>
              </div>
              
              <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 text-xs">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition flex items-center justify-between group cursor-pointer ${
                      activeSection === s.id
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70'
                    }`}
                  >
                    <span className="truncate">{s.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeSection === s.id ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`} />
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-900/50 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Mail className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Privacy Contact</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have questions or need data deletion? Email our compliance team directly:
              </p>
              <a
                href={`mailto:${CONFIG.PRIVACY_EMAIL}`}
                className="inline-block text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline break-all"
              >
                {CONFIG.PRIVACY_EMAIL}
              </a>
            </div>
          </aside>

          {/* Detailed Policy Document Sections */}
          <main className="lg:col-span-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">

            {/* Section 1: Introduction & Scope */}
            <section id="intro" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Section 1</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">1. Introduction and Scope</h2>
              <p>
                This Privacy Policy describes how the developer team of <strong className="text-white">ProfiVault</strong> ("we", "us", or "our") accesses, collects, handles, stores, processes, and protects user information in connection with the <strong className="text-white">ProfiVault – Fast Profile Link Copier</strong> browser extension for Google Chrome (Manifest V3) and our official website (<a href={CONFIG.SITE_URL} className="text-blue-400 hover:underline">{CONFIG.SITE_URL}</a>).
              </p>
              <p>
                ProfiVault is designed as a productivity tool for students, job applicants, developers, freelancers, and professionals who frequently copy and paste their career profile links (including LinkedIn, GitHub, personal portfolio websites, resumes, and coding platforms like LeetCode, CodeChef, HackerRank, GeeksForGeeks, Kaggle, and StackOverflow) into job applications, client proposals, and recruitment portals.
              </p>
              <p>
                Our core architectural principle is <strong className="text-white">privacy by design and minimal data footprint</strong>. The extension functions fully offline in Guest Mode without requiring account creation. We do not track your web browsing activity, inspect third-party webpage content, or monetize user data.
              </p>
            </section>

            {/* Section 2: Information Accessed & Collected */}
            <section id="data-collected" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Database className="w-4 h-4" />
                <span>Section 2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">2. Information the Extension Accesses and Collects</h2>
              <p>
                ProfiVault collects and accesses only the data strictly necessary to fulfill its declared single purpose of saving, organizing, and quickly copying user-provided professional profile links. We categorize this information as follows:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    A. User-Provided Profile Links and Metadata
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    When you save or import links into ProfiVault, the extension stores:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><strong className="text-white">Profile URLs:</strong> Web addresses input by the user (e.g., LinkedIn profile URL, GitHub profile URL, portfolio link, Google Drive resume URL, coding platform links, or custom web links).</li>
                    <li><strong className="text-white">Display Titles & Labels:</strong> User-customized names for each link (e.g., "My GitHub", "Senior Resume 2026").</li>
                    <li><strong className="text-white">Usernames & Handles:</strong> Optional username or handle associated with the platform.</li>
                    <li><strong className="text-white">Descriptions & Notes:</strong> Optional private notes or context attached to a link.</li>
                    <li><strong className="text-white">Category Tags:</strong> Categorization labels (such as <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">professional</code>, <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">coding</code>, <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">social</code>, <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">creative</code>, or <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">custom</code>).</li>
                    <li><strong className="text-white">Organization Flags:</strong> Favorite status (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">isFavorite</code>), Quick Copy bar pinning status (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">isQuickCopy</code>), manual sort order (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">sortOrder</code>), local copy counter (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">copyCount</code>), and timestamps (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">createdAt</code>, <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">updatedAt</code>, <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">lastCopiedAt</code>).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    B. Extension Preferences and Settings
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    To tailor the user interface, the extension stores configuration preferences:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li>Theme preference (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">theme</code>: <code className="text-xs font-mono text-slate-300">'light' | 'dark' | 'system'</code>).</li>
                    <li>Behavioral toggles: <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">autoCloseOnCopy</code>, <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">showCopyNotification</code>, <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">defaultOpenInNewTab</code>, and <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">syncEnabled</code>.</li>
                    <li>Quick Copy chips display threshold (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">quickCopyLimit</code>) and initial onboarding flag (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">ProfiVault_has_onboarded</code>).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    C. Google Account Data (Optional — Only When User Chooses Google Sign-In)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    If and only if you explicitly choose to sign in with your Google account via Chrome Identity API (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">chrome.identity</code>), the extension accesses:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><strong className="text-white">Google User Identifier (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">sub</code>):</strong> A unique numeric ID assigned by Google.</li>
                    <li><strong className="text-white">Email Address:</strong> Used to identify your account and associate cloud synchronization.</li>
                    <li><strong className="text-white">Display Name:</strong> Used to display your greeting in the extension header.</li>
                    <li><strong className="text-white">Profile Picture URL:</strong> Used solely to render your avatar icon in the UI.</li>
                    <li><strong className="text-white">OAuth Access Token:</strong> Short-lived token used to authenticate requests to the ProfiVault sync backend.</li>
                  </ul>
                  <p className="text-xs text-amber-300 bg-amber-950/30 p-2.5 rounded-lg border border-amber-900/50 mt-1">
                    <strong>Note:</strong> If you use ProfiVault in Guest Mode, <strong>zero</strong> Google account information is ever requested, accessed, or collected.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    D. Data ProfiVault Explicitly DOES NOT Access or Collect
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    To prevent any ambiguity, ProfiVault never accesses or collects:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-400">
                    <li>Your browsing history, visited URLs, tabs, or bookmarks.</li>
                    <li>Web page contents, DOM trees, forms, or text on sites you visit.</li>
                    <li>Keystrokes, passwords, autofill credentials, or financial data.</li>
                    <li>Google Drive contents (other than user-pasted public resume URLs), Gmail messages, contacts, or calendar data.</li>
                    <li>Your existing clipboard contents or clipboard history (ProfiVault is strictly write-only on user action).</li>
                    <li>IP addresses for geolocation, device serial numbers, or advertising identifiers.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Purpose of Processing Each Data Category */}
            <section id="purpose" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Section 3</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">3. Purpose of Processing Each Data Category</h2>
              <p>
                Every piece of information handled by ProfiVault directly supports a specific, user-facing function of the extension. We do not process data for secondary purposes, advertising, analytics tracking, or profiling.
              </p>

              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2.5 px-3 font-semibold">Data Category</th>
                      <th className="py-2.5 px-3 font-semibold">Specific Purpose</th>
                      <th className="py-2.5 px-3 font-semibold">Legal / Operational Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-3 px-3 font-medium text-white">Profile URLs & Titles</td>
                      <td className="py-3 px-3">Allows users to store, organize, view, and 1-click copy their URLs during application form filling.</td>
                      <td className="py-3 px-3 text-slate-400">Performance of user-requested core functionality.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-white">Category Tags & Organization Flags</td>
                      <td className="py-3 px-3">Enables category filtering (e.g., Coding vs. Professional), pinning top links to Quick Copy bar, and usage sorting.</td>
                      <td className="py-3 px-3 text-slate-400">User configuration and interface personalization.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-white">Settings & Preferences</td>
                      <td className="py-3 px-3">Remembers UI dark/light theme, auto-close preference, and notification settings across browser sessions.</td>
                      <td className="py-3 px-3 text-slate-400">User experience persistence.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-white">Google OAuth Identity (Optional)</td>
                      <td className="py-3 px-3">Authenticates user identity, establishes a secure session, and binds cloud-synced links to the user account across devices.</td>
                      <td className="py-3 px-3 text-slate-400">Explicit user consent (initiated by user clicking Sign In).</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-white">Clipboard Write Operation</td>
                      <td className="py-3 px-3">Places the selected URL into the operating system clipboard upon clicking "Copy".</td>
                      <td className="py-3 px-3 text-slate-400">Immediate user-initiated command execution.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-white">Support Communications</td>
                      <td className="py-3 px-3">Responds to user questions, bug reports, or compliance inquiries submitted through the website.</td>
                      <td className="py-3 px-3 text-slate-400">Customer support communication.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: How Data is Handled & Processed */}
            <section id="handling" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Section 4</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">4. How Information is Handled and Processed</h2>
              <p>
                ProfiVault processes data differently depending on the operating mode selected by the user:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <HardDrive className="w-4 h-4 text-blue-400" />
                    <span>Guest Mode (100% Local Processing)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By default, ProfiVault runs in Guest Mode. All profile creation, modification, reordering, searching, and deletion are processed entirely on your local device inside the Chrome extension sandboxed environment.
                  </p>
                  <p className="text-xs text-slate-400">
                    No profile links, settings, or credentials leave your computer or touch any external server.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span>Synchronized Mode (Encrypted Cloud Sync)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    When you sign in with Google and enable synchronization, your saved profile links are transmitted over secure TLS 1.3 / HTTPS to our dedicated synchronization API hosted on Render (<code className="text-xs font-mono text-blue-300">https://linkvaultapi.onrender.com/api</code>).
                  </p>
                  <p className="text-xs text-slate-400">
                    The backend merges links across your authenticated sessions and returns the unified list to your extension storage.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 mt-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Local JSON Export and Import Processing</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When you use the Export feature, ProfiVault compiles your links into a standard JSON file directly in browser memory using HTML5 Blob technology and triggers a browser download. When importing a JSON backup, the file is parsed and validated locally in your browser before saving. No file contents are transmitted to external servers during export or import.
                </p>
              </div>
            </section>

            {/* Section 5: Local vs Cloud Storage */}
            <section id="storage" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <HardDrive className="w-4 h-4" />
                <span>Section 5</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">5. Local Browser Storage and Any Cloud Storage</h2>
              <p>
                We clearly distinguish between storage environments used by ProfiVault:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    Local Browser Storage (<code className="text-xs font-mono text-blue-300">chrome.storage.local</code>)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    ProfiVault relies primarily on Google Chrome's local storage partition (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">chrome.storage.local</code>). The specific keys stored on your device are:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">ProfiVault_profiles</code>: Array of your saved profile links and metadata.</li>
                    <li><code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">ProfiVault_settings</code>: User configuration object (theme, copy behavior, notification preferences).</li>
                    <li><code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">ProfiVault_auth</code>: Active session object (<code className="text-xs font-mono text-slate-300">{`{ isGuest: boolean, token: string | null, user: UserProfile | null }`}</code>).</li>
                    <li><code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">ProfiVault_has_onboarded</code>: Boolean flag recording whether the initial introductory tutorial was completed.</li>
                    <li><code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">ProfiVault_recently_copied</code>: Temporary tracking of the most recently copied link ID for UI highlight.</li>
                  </ul>
                  <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900/50 text-xs text-blue-300">
                    <strong>Important Technical Distinction:</strong> ProfiVault does <strong>NOT</strong> utilize <code className="font-mono text-blue-200">chrome.storage.sync</code> (Google Chrome's browser-level account synchronization). Local storage entries remain isolated to your specific local Chrome browser profile.
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    Remote Cloud Storage (Only if Google Sign-In is Enabled)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    When you choose to enable cloud synchronization:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><strong className="text-white">Cloud Host:</strong> Hosted on Render Services Inc. (<code className="text-xs font-mono text-blue-300">https://linkvaultapi.onrender.com/api</code>).</li>
                    <li><strong className="text-white">Stored Entities:</strong> Your user profile record (Google ID, email, name, profile image) and your saved profile links.</li>
                    <li><strong className="text-white">Access Control:</strong> All cloud database records are strictly partitioned by authenticated user ID and protected by encrypted JWT tokens. No user can access or view links belonging to another user.</li>
                    <li><strong className="text-white">Disabling Sync:</strong> You can turn off synchronization or sign out at any time. When signed out, no further communications occur with cloud storage.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Google Sign-In and OAuth Data */}
            <section id="google-oauth" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Section 6</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">6. Google Sign-In and OAuth Data</h2>
              <p>
                ProfiVault declares the <code className="text-xs font-mono text-blue-300 bg-slate-950 px-1 py-0.5 rounded">identity</code> permission in its Chrome Manifest V3 file to support optional Google Sign-In.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <h3 className="font-bold text-white text-sm">OAuth Scopes Declared and Usage</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400">
                          <th className="py-2 px-3 font-semibold">Scope</th>
                          <th className="py-2 px-3 font-semibold">Why It Is Requested</th>
                          <th className="py-2 px-3 font-semibold">What We Do With It</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr>
                          <td className="py-2.5 px-3 font-mono text-blue-300">openid</td>
                          <td className="py-2.5 px-3">Standard OpenID Connect protocol authentication.</td>
                          <td className="py-2.5 px-3">Verifies your Google account identity.</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-mono text-blue-300">https://www.googleapis.com/auth/userinfo.email</td>
                          <td className="py-2.5 px-3">Retrieves your verified Google email address.</td>
                          <td className="py-2.5 px-3">Identifies your account and binds your cloud sync link repository.</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 font-mono text-blue-300">https://www.googleapis.com/auth/userinfo.profile</td>
                          <td className="py-2.5 px-3">Retrieves your display name and public avatar image URL.</td>
                          <td className="py-2.5 px-3">Renders your name and profile avatar in the extension header.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm">Token Lifecycle and Security</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Authentication is performed using Google's official <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">chrome.identity.getAuthToken</code> API (or <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">launchWebAuthFlow</code>). The access token is exchanged securely with our backend (<code className="text-xs font-mono text-blue-300">/api/auth/google</code>) to issue an application session token.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">
                    When you click "Sign Out", ProfiVault calls <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">chrome.identity.clearAllCachedAuthTokens()</code> and purges all authentication tokens and user profile records from local storage.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Clipboard Behavior */}
            <section id="clipboard" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Copy className="w-4 h-4" />
                <span>Section 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">7. Clipboard Behavior and Permissions</h2>
              <p>
                ProfiVault requests the <code className="text-xs font-mono text-blue-300 bg-slate-950 px-1 py-0.5 rounded">clipboardWrite</code> permission in its Chrome extension manifest.
              </p>

              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Strict Write-Only Execution Upon Explicit User Action</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">clipboardWrite</code> permission is invoked <strong>strictly and exclusively</strong> when you manually click:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                  <li>The "Copy" button icon next to any saved profile card.</li>
                  <li>A Quick Copy chip in the Quick Copy bar.</li>
                  <li>The "Copy URL" button in the extension options dashboard.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Upon that click, the extension invokes <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">navigator.clipboard.writeText(url)</code> to place that specific URL onto your system clipboard, displays a confirmation toast, and optionally closes the popup if <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">autoCloseOnCopy</code> is enabled.
                </p>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900/50 text-xs text-emerald-300">
                  <strong>Zero Clipboard Reading:</strong> ProfiVault does <strong>NOT</strong> request or hold the <code className="font-mono text-emerald-200">clipboardRead</code> permission. ProfiVault never calls <code className="font-mono text-emerald-200">navigator.clipboard.readText()</code> and has zero technical capability to read, monitor, log, or access any existing contents of your system clipboard.
                </div>
              </div>
            </section>

            {/* Section 8: Data Sharing and Third-Party Recipients */}
            <section id="sharing" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Section 8</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">8. Data Sharing and Third-Party Recipients</h2>
              <p>
                We maintain an absolute commitment against unauthorized data distribution:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm text-emerald-400">No Sale, Rental, or Commercial Monetization</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    ProfiVault <strong className="text-white">does not sell, rent, lease, trade, or transfer</strong> your personal data, saved profile URLs, account details, or usage patterns to third-party data brokers, advertising networks, recruiters, employers, or marketing agencies under any circumstances.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm text-blue-400">Technical Service Providers (Data Processors)</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Information is transmitted only to reputable infrastructure providers strictly necessary to execute user-requested features:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-300">
                    <li><strong className="text-white">Google LLC:</strong> Facilitates OAuth authentication via Chrome Identity API (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Privacy Policy</a>).</li>
                    <li><strong className="text-white">Render Services Inc.:</strong> Hosts our optional cloud synchronization API and database servers under strict data processing agreements (<a href="https://render.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Render Privacy Policy</a>).</li>
                    <li><strong className="text-white">Web3Forms:</strong> Relays customer support inquiries submitted via the website contact form directly to our developer inbox (<a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Web3Forms Privacy Policy</a>).</li>
                    <li><strong className="text-white">Vercel Inc.:</strong> Hosts the static documentation and public privacy policy web portal (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Vercel Privacy Policy</a>).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm text-slate-200">Legal Disclosures</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    We may disclose information only if strictly required by applicable law, regulation, valid subpoena, or governmental request.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: External Services and APIs */}
            <section id="external-apis" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>Section 9</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">9. External Services and APIs</h2>
              <p>
                To provide complete transparency, the following is an exhaustive audit of all external network domains accessed by the ProfiVault extension and web portal:
              </p>

              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2.5 px-3 font-semibold">Service Domain</th>
                      <th className="py-2.5 px-3 font-semibold">Endpoint Purpose</th>
                      <th className="py-2.5 px-3 font-semibold">When Triggered</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-3 px-3 font-mono text-blue-300">accounts.google.com</td>
                      <td className="py-3 px-3">Google OAuth 2.0 authorization dialog.</td>
                      <td className="py-3 px-3">Only when user initiates Google Sign-In.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono text-blue-300">googleapis.com/oauth2/v3/userinfo</td>
                      <td className="py-3 px-3">Retrieves user's Google ID, name, email, and avatar picture.</td>
                      <td className="py-3 px-3">Only when authenticating with Google token.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono text-blue-300">linkvaultapi.onrender.com/api</td>
                      <td className="py-3 px-3">ProfiVault backend for cloud sync (<code className="text-xs">/auth/google</code>, <code className="text-xs">/links</code>, <code className="text-xs">/links/sync</code>, <code className="text-xs">/user/account</code>).</td>
                      <td className="py-3 px-3">Only when signed into a Google account with sync enabled.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono text-blue-300">api.dicebear.com/7.x/</td>
                      <td className="py-3 px-3">Open-source avatar SVG fallback generator.</td>
                      <td className="py-3 px-3">Only if user Google account lacks a profile picture.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono text-blue-300">api.web3forms.com/submit</td>
                      <td className="py-3 px-3">Relays contact inquiries submitted via Support web page.</td>
                      <td className="py-3 px-3">Only when user submits web support form.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Retention & Deletion */}
            <section id="retention" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Trash2 className="w-4 h-4" />
                <span>Section 10</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">10. Data Retention and Deletion</h2>
              <p>
                You retain complete, perpetual control over your stored data. ProfiVault retains data only for as long as you choose to keep it in the extension:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Deleting Individual Links
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    You can delete any saved link at any time by clicking the trash icon in the popup or options dashboard. Deleting a link instantly and permanently deletes it from <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">chrome.storage.local</code>. If cloud sync is active, an immediate <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">DELETE /api/links/:id</code> request is dispatched to purge the link from cloud storage as well.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Clearing All Local Extension Data
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Inside the Options dashboard under the "Import & Export" or "Settings" tab, clicking "Clear All Data" will invoke <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">chrome.storage.local.clear()</code>, which instantly wipes all saved links, preferences, and session data from your browser.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Extension Uninstallation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    If you uninstall or remove ProfiVault from Google Chrome (via <code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">chrome://extensions</code>), the Chrome browser automatically and irrevocably purges all local storage partitions associated with the extension ID.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Cloud Account & Data Deletion
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    If you enabled Google Sign-In and wish to completely delete your cloud account and all cloud-synced profile links, you can dispatch an account deletion request (<code className="text-xs font-mono text-blue-300 bg-slate-900 px-1 py-0.5 rounded">DELETE /api/user/account</code>) or email us at <a href={`mailto:${CONFIG.PRIVACY_EMAIL}`} className="text-blue-400 hover:underline">{CONFIG.PRIVACY_EMAIL}</a> with the subject "Data Deletion Request". We permanently delete all account records and cloud-synced links within 30 days of verification.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Security */}
            <section id="security" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Section 11</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">11. Data Security and Encryption</h2>
              <p>
                We employ industry-standard technical measures to safeguard your information:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>Encryption in Transit</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    All external network communications (Google OAuth identity flows, backend link synchronization, and web support submissions) are strictly transmitted over HTTPS utilizing TLS 1.3 encryption.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Browser Sandbox Isolation</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Data saved in Chrome local storage (<code className="text-xs font-mono text-blue-300">chrome.storage.local</code>) is protected by Google Chrome's strict extension isolation boundaries and cannot be read by third-party web pages or malicious scripts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <Key className="w-4 h-4 text-amber-400" />
                    <span>Token Authentication</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Cloud API endpoints require valid, signed JWT authorization headers. No user can view, edit, or delete another user's links.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Principle of Least Privilege</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ProfiVault declares strictly 3 permissions (<code className="text-xs font-mono text-blue-300">storage</code>, <code className="text-xs font-mono text-blue-300">identity</code>, <code className="text-xs font-mono text-blue-300">clipboardWrite</code>). We do not request broad host permissions, webRequest, or activeTab.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: User Choices & Controls */}
            <section id="user-choices" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Section 12</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">12. User Choices and Controls</h2>
              <p>
                ProfiVault provides users with transparent options to govern their privacy:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm space-y-2 text-slate-300">
                <li><strong className="text-white">Opting for Local Guest Mode:</strong> You are never required to log in or create an account. You can use all core features (saving, categorizing, sorting, copying, and exporting links) entirely offline.</li>
                <li><strong className="text-white">Cloud Sync Toggle:</strong> You can toggle cloud synchronization on or off at any time in Settings.</li>
                <li><strong className="text-white">Data Portability (JSON Backup):</strong> You can export all saved profiles into a clean, human-readable JSON backup file at any time via Options &gt; Import & Export.</li>
                <li><strong className="text-white">Sign Out & Invalidation:</strong> You can click "Sign Out" at any time to clear your active Google session and invalidate local tokens.</li>
                <li><strong className="text-white">Instant Data Deletion:</strong> You can selectively delete links or perform a full local data purge whenever you wish.</li>
              </ul>
            </section>

            {/* Section 13: Children's Privacy */}
            <section id="children" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Section 13</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">13. Children’s Privacy</h2>
              <p>
                ProfiVault is designed as a productivity tool for job seekers, college and university students, developers, and working professionals. It is not intended for or targeted at children under the age of 13 (or under 16 in the European Union).
              </p>
              <p>
                We do not knowingly solicit, collect, or store personal information from children under 13. If you believe a child has provided us with personal information, please contact us at <a href={`mailto:${CONFIG.PRIVACY_EMAIL}`} className="text-blue-400 hover:underline">{CONFIG.PRIVACY_EMAIL}</a>, and we will promptly delete such information.
              </p>
            </section>

            {/* Section 14: Changes to Policy */}
            <section id="changes" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Section 14</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">14. Changes to This Privacy Policy</h2>
              <p>
                We may periodically update this Privacy Policy to reflect improvements in our extension, operational practices, or regulatory requirements. Any modifications will be posted directly to this publicly accessible page (<a href={`${CONFIG.SITE_URL}/privacy`} className="text-blue-400 hover:underline">{CONFIG.SITE_URL}/privacy</a>) with a revised "Last Updated" date at the top of the document.
              </p>
              <p>
                For significant changes that affect user data practices, we will provide prominent notification within the Chrome extension dashboard or through update release notes. We encourage you to review this page periodically.
              </p>
            </section>

            {/* Section 15: Developer Contact Info */}
            <section id="contact" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-slate-950 border border-blue-900/50 space-y-5">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Section 15</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">15. Developer Contact Information</h2>
              <p className="text-sm text-slate-300">
                If you have questions, feedback, compliance inquiries, or wish to exercise your data rights regarding this Privacy Policy or the ProfiVault Chrome extension, please contact the developer team:
              </p>

              <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-sans font-semibold">Extension Name:</span>
                  <span className="text-white font-sans">{CONFIG.PRODUCT_NAME} – Fast Profile Link Copier</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-sans font-semibold">Chrome Extension ID:</span>
                  <span className="text-blue-400">bkbmplkfckpkjkjkmeipomiklhdbfobo</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-sans font-semibold">Support Contact:</span>
                  <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`} className="text-blue-400 hover:underline">{CONFIG.SUPPORT_EMAIL}</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-sans font-semibold">Privacy & Legal Inquiries:</span>
                  <a href={`mailto:${CONFIG.PRIVACY_EMAIL}`} className="text-blue-400 hover:underline">{CONFIG.PRIVACY_EMAIL}</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-sans font-semibold">Official Website:</span>
                  <a href={CONFIG.SITE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{CONFIG.SITE_URL}</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-sans font-semibold">Public Privacy Policy URL:</span>
                  <a href={`${CONFIG.SITE_URL}/privacy`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{CONFIG.SITE_URL}/privacy</a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('/support')}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition cursor-pointer shadow-md shadow-blue-500/20"
                >
                  Visit Support Center
                </button>
                <button
                  onClick={() => onNavigate('/')}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition cursor-pointer"
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
