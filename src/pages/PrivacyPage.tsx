import React, { useState, useEffect } from 'react';
import { CONFIG } from '../data/config';
import {
  ShieldCheck,
  Mail,
  ArrowLeft,
  HardDrive,
  Lock,
  Server,
  Globe,
  FileText,
  Database,
  Cookie,
  ExternalLink,
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
} from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    // Set document title for privacy policy route
    document.title = 'Privacy Policy – ProfiVault';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tableOfContents = [
    { id: 'intro', title: '1. Introduction & Scope' },
    { id: 'data-collected', title: '2. Information We Collect & Access' },
    { id: 'how-we-use', title: '3. How & Why We Use Information' },
    { id: 'storage-architecture', title: '4. Data Storage & Infrastructure' },
    { id: 'auth-accounts', title: '5. Authentication & Accounts' },
    { id: 'cookies-storage', title: '6. Cookies & Browser Storage' },
    { id: 'third-parties', title: '7. Third-Party Services' },
    { id: 'data-sharing', title: '8. Data Sharing & Disclosure' },
    { id: 'retention', title: '9. Data Retention Practices' },
    { id: 'user-rights', title: '10. Access, Correction & Deletion' },
    { id: 'security', title: '11. Security Practices' },
    { id: 'children', title: "12. Children's Privacy" },
    { id: 'transfers', title: '13. International Transfers' },
    { id: 'regulatory', title: '14. DNT & Regulatory Rights' },
    { id: 'updates', title: '15. Policy Changes & Updates' },
    { id: 'contact', title: '16. Contact Information' },
  ];

  return (
    <div className="py-12 bg-slate-950 text-slate-200 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
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
            <span>Official Legal & Privacy Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ProfiVault Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            This policy transparently explains our data practices for the ProfiVault website 
            (<span className="text-blue-400 font-mono text-xs">{CONFIG.SITE_URL}</span>) and serves as the official privacy statement for the ProfiVault product suite.
          </p>

          {/* Policy Metadata Badges */}
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
              Version: {CONFIG.VERSION}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              Public Status: Active
            </span>
          </div>
        </div>

        {/* Privacy at a Glance Highlights Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-slate-950 border border-blue-900/40 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">Privacy at a Glance</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Tracking Cookies</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not use advertising, marketing, or cross-site tracking cookies on this website.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Data Sales</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never sell, rent, monetize, or trade personal data or profile links to third parties or recruiters.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Local-First Control</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Extension data is stored locally in your browser storage. You retain 100% control over deletion.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Direct Contact Only</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Support messages sent via our form are strictly used to reply to your inquiry.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Table of Contents Bar */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300 uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              Table of Contents
            </span>
            <span className="text-slate-500 font-normal normal-case">16 Sections</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-2.5 py-1.5 rounded-lg transition truncate cursor-pointer flex items-center justify-between group ${
                  activeSection === item.id
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <span className="truncate">{item.title}</span>
                <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 shrink-0 ml-1" />
              </button>
            ))}
          </div>
        </div>

        {/* MAIN POLICY SECTIONS */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">

          {/* Section 1: Introduction & Scope */}
          <section id="intro" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 1</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Introduction & Scope</h2>
            
            <p>
              Welcome to <strong>ProfiVault</strong>. This Privacy Policy describes how ProfiVault ("we", "us", or "our") 
              handles information when you visit or interact with our official website at{' '}
              <a href={CONFIG.SITE_URL} className="text-blue-400 hover:underline font-mono text-xs">
                {CONFIG.SITE_URL}
              </a>{' '}
              ("Website"), as well as when you install and use our companion Chrome browser extension ("Extension") 
              distributed via the Google Chrome Web Store.
            </p>
            <p>
              We believe in extreme data minimization and honest transparency. We design our software so that your professional links, 
              portfolio URLs, and career credentials remain under your sovereign control. This policy articulates:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
              <li>What information is handled on this Website versus inside the Chrome Extension.</li>
              <li>The exact technical and operational reasons why any data is processed.</li>
              <li>How third-party infrastructure providers (such as hosting and contact relay) participate in service delivery.</li>
              <li>Your rights to view, update, export, and delete your information.</li>
            </ul>
          </section>

          {/* Section 2: Information We Collect & Access */}
          <section id="data-collected" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 2</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Information We Collect & Access</h2>

            <p>
              To maintain accuracy, we distinguish strictly between data practices on the <strong>Website</strong> and those within the <strong>Chrome Extension</strong>:
            </p>

            {/* Category A: Website */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                A. Website Data Practices (profivaultweb.vercel.app)
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="space-y-1">
                  <strong className="text-white">1. Voluntary Support & Contact Inquiries:</strong>
                  <p>
                    When you voluntarily submit a message through our Website Support Hub (<code className="font-mono text-blue-300">/support</code>), 
                    we collect your <em>email address</em>, <em>subject line</em>, and the <em>message content</em> you enter. 
                    This information is provided voluntarily by you to receive technical support, bug reports, or product inquiries.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white">2. Server Logs & Network Diagnostics:</strong>
                  <p>
                    When you load our Website, our hosting provider (<a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Vercel Inc.</a>) 
                    automatically processes standard web server request information, including your IP address, browser user-agent string, operating system, 
                    requested URL paths, and request timestamps. This processing is technically indispensable to route internet packets, establish secure TLS connections, 
                    and mitigate DDoS attacks.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white">3. Third-Party Font Requests:</strong>
                  <p>
                    Our Website loads typography stylesheets from Google Fonts (<code className="font-mono text-blue-300">fonts.googleapis.com</code>). 
                    When your browser requests font assets, Google receives standard HTTP request headers and your IP address as necessary to deliver the font files.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white">4. Interactive Demo Simulator (Ephemeral Memory):</strong>
                  <p>
                    Our Website features an interactive simulation of the extension popup. If you test the "Add" or "Search" functions in the simulator, 
                    the sample links exist <strong>strictly within your browser's temporary React component state (in-memory)</strong>. 
                    They are never sent across the network, never written to a database, and are immediately destroyed when you refresh or close the page.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-white">5. Clipboard Demonstration on the Website:</strong>
                  <p>
                    When you click the "Copy" simulation button in our interactive demo, the Website invokes the standard browser API{' '}
                    (<code className="font-mono text-blue-300">navigator.clipboard.writeText</code>) strictly to write that sample link URL to your clipboard. 
                    The Website <strong>never reads</strong> or accesses existing clipboard contents.
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-rose-300">What the Website NEVER Collects:</strong>
                  <p>
                    The Website does <strong>not</strong> require user registration, does <strong>not</strong> collect passwords, 
                    does <strong>not</strong> process payments or financial data, and does <strong>not</strong> deploy behavioural ad trackers.
                  </p>
                </div>
              </div>
            </div>

            {/* Category B: Chrome Extension */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                B. Chrome Extension Data Practices
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                For users who install the ProfiVault Chrome extension from the Chrome Web Store:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <strong className="text-white">User-Saved Profile Links:</strong> Profile titles, URLs (e.g. LinkedIn, GitHub, portfolio, resume, LeetCode, CodeChef), 
                  and user-assigned categories are stored directly on your machine in Chrome's sandboxed local storage (<code className="font-mono text-blue-300">chrome.storage.local</code>).
                </li>
                <li>
                  <strong className="text-white">Optional Google Authentication:</strong> If Google Sign-In is enabled in your extension version, 
                  the extension utilizes the Chrome Identity API (<code className="font-mono text-blue-300">chrome.identity</code>) to authenticate your Google profile 
                  and link your account settings. ProfiVault never accesses your Gmail messages, Google Drive files, or contacts.
                </li>
                <li>
                  <strong className="text-white">Clipboard Permission (clipboardWrite):</strong> Used solely when you click "Copy" next to a saved link 
                  to copy that individual URL to your system clipboard. The extension does not read clipboard contents.
                </li>
              </ul>
            </div>

            {/* Structured Inventory Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-slate-200 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3">Data Category</th>
                    <th className="p-3">Source & Context</th>
                    <th className="p-3">Storage Location</th>
                    <th className="p-3">Transmitted To</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr className="bg-slate-950/40">
                    <td className="p-3 font-medium text-white">Support Email & Message</td>
                    <td className="p-3">User submitted via /support form</td>
                    <td className="p-3 font-mono text-[11px]">Developer Support Inbox</td>
                    <td className="p-3">Web3Forms API &gt; Support Mailbox</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Server Access Logs (IP, User-Agent)</td>
                    <td className="p-3">Automatic HTTP request handling</td>
                    <td className="p-3 font-mono text-[11px]">Vercel Edge CDN Logs</td>
                    <td className="p-3">Vercel Inc. (Infrastructure only)</td>
                  </tr>
                  <tr className="bg-slate-950/40">
                    <td className="p-3 font-medium text-white">Font Asset Requests</td>
                    <td className="p-3">Browser fetching Google Fonts</td>
                    <td className="p-3 font-mono text-[11px]">Not stored by ProfiVault</td>
                    <td className="p-3">Google LLC (Fonts CDN)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Demo Simulator Links</td>
                    <td className="p-3">Testing interactive demo on Website</td>
                    <td className="p-3 font-mono text-[11px]">Temporary Browser RAM only</td>
                    <td className="p-3 text-emerald-400 font-semibold">None (Never transmitted)</td>
                  </tr>
                  <tr className="bg-slate-950/40">
                    <td className="p-3 font-medium text-white">Extension Saved Links</td>
                    <td className="p-3">Saved in Chrome extension popup</td>
                    <td className="p-3 font-mono text-[11px]">chrome.storage.local</td>
                    <td className="p-3">Local browser (or synced account if enabled)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: How & Why We Use Information */}
          <section id="how-we-use" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 3</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. How & Why We Use Your Information</h2>

            <p>
              We process information solely for specific, legitimate, and transparent purposes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  Responding to Support Inquiries
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When you write to us, we use your email address and message content exclusively to troubleshoot bugs, 
                  answer questions, and provide customer support.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-sky-400" />
                  Infrastructure Security & Uptime
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Server access logs are evaluated to ensure site availability, detect malicious bots, prevent distributed 
                  denial of service (DDoS) traffic, and resolve performance bottlenecks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Copy className="w-4 h-4 text-emerald-400" />
                  Interactive Simulator Functionality
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Inputs entered into the website simulator enable live preview testing of link addition, category filtering, 
                  and clipboard copy workflows without requiring any account creation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Legal Compliance & Integrity
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To comply with applicable laws, verify intellectual property notices, prevent abuse, and enforce our 
                  Terms of Service.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-300">
              <strong className="text-white">Legal Bases under GDPR / UK GDPR: </strong>
              We process support inquiries based on <em>performance of a contract or legitimate interest</em> (to provide requested assistance), 
              and server logs based on our <em>legitimate interest</em> in ensuring the cyber security, operational integrity, 
              and reliability of our online service.
            </div>
          </section>

          {/* Section 4: Data Storage, Architecture & Processing */}
          <section id="storage-architecture" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 4</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Data Storage, Architecture & Processing Locations</h2>

            <p>
              Understanding where your data lives is critical to evaluating security and privacy:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <strong className="text-white">Static Application Delivery (Vercel): </strong>
                The Website is built with React, Vite, and Tailwind CSS and compiled into an optimized static bundle. 
                It is hosted on the Vercel Edge Network, which routes requests to servers globally distributed across North America, 
                Europe, and Asia for low-latency delivery.
              </li>
              <li>
                <strong className="text-white">Absence of Website Database: </strong>
                This Website repository contains <strong>no persistent application database</strong> (such as MongoDB, PostgreSQL, Firebase, or Supabase). 
                We do not maintain user profile records, tracking tables, or session stores on our website hosting environment.
              </li>
              <li>
                <strong className="text-white">Contact Form Relay (Web3Forms): </strong>
                When you submit a support ticket via <code className="font-mono text-blue-300">/support</code>, the payload is transmitted over encrypted HTTPS 
                to <code className="font-mono text-blue-300">https://api.web3forms.com/submit</code>. Web3Forms acts as an email routing processor, forwarding the 
                submission to our verified administrator email inbox (<span className="text-blue-300 font-mono">{CONFIG.SUPPORT_EMAIL}</span>).
              </li>
              <li>
                <strong className="text-white">Browser Storage Isolation: </strong>
                The Website does not read or write data to browser <code className="font-mono text-blue-300">localStorage</code>, <code className="font-mono text-blue-300">sessionStorage</code>, or <code className="font-mono text-blue-300">IndexedDB</code>. 
                All simulator link state is ephemeral and retained only in volatile component memory during your active tab session.
              </li>
            </ul>
          </section>

          {/* Section 5: Authentication & Account Information */}
          <section id="auth-accounts" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 5</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Authentication & Account Management</h2>

            <p>
              <strong>On the Website:</strong> There is <strong>no account registration, user login, or password creation</strong>. 
              You can access every page, guide, FAQ item, and demonstration tool freely and anonymously without creating an account or authenticating.
            </p>
            <p>
              <strong>In the Chrome Extension:</strong> You can use ProfiVault in guest mode without logging in. 
              If you optionally choose to sign in with your Google account in the extension build, authentication is handled via official 
              Google OAuth (<code className="font-mono text-blue-300">chrome.identity</code>). ProfiVault only obtains basic identity tokens 
              necessary to authenticate your session and does not access private Google service content (such as email messages or documents).
            </p>
          </section>

          {/* Section 6: Cookies & Browser Storage Technologies */}
          <section id="cookies-storage" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 6</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Cookies & Browser Storage Technologies</h2>

            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                <Cookie className="w-4 h-4" />
                <span>Zero Cookie Tracking Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                The ProfiVault Website does <strong>not</strong> set first-party cookies or third-party advertising cookies 
                (<code className="font-mono text-blue-300">document.cookie</code> is never invoked). We do not utilize Google Analytics, 
                Meta Pixels, Hotjar, or similar cookie-based fingerprinting or session tracking scripts.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300">
              Technical HTTP caching headers and standard edge caching mechanisms (such as <code className="font-mono text-blue-300">Cache-Control</code> and <code className="font-mono text-blue-300">ETag</code>) 
              may be utilized by Vercel's CDN to optimize load speeds for static images and scripts, but these do not track user identities.
            </p>
          </section>

          {/* Section 7: Third-Party Services & Integrations */}
          <section id="third-parties" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 7</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Third-Party Services & Integrations</h2>

            <p>
              In accordance with our commitment to transparency, here is the comprehensive inventory of all third-party services verified in our codebase:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Vercel Inc.</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Hosting & CDN
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Role:</strong> Hosts and serves our compiled static Single Page Application (SPA), routes domain requests, terminates SSL, and maintains standard server access logs.
                </p>
                <p className="text-[11px] text-slate-400">
                  Privacy Policy:{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-0.5">
                    vercel.com/legal/privacy-policy <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Web3Forms</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    Contact Form Relay
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Role:</strong> Receives form submissions from <code className="font-mono text-blue-300">/support</code> via API and relays the message and sender email directly to our support inbox.
                </p>
                <p className="text-[11px] text-slate-400">
                  Privacy Policy:{' '}
                  <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-0.5">
                    web3forms.com/privacy <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Google Fonts (Google LLC)</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Typography Asset
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Role:</strong> Provides web fonts (Inter, Plus Jakarta Sans, JetBrains Mono) referenced in <code className="font-mono text-blue-300">index.html</code>. When fetched, Google receives standard client HTTP request headers.
                </p>
                <p className="text-[11px] text-slate-400">
                  Privacy Policy:{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-0.5">
                    policies.google.com/privacy <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Chrome Web Store (Google LLC)</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Extension Distribution
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Role:</strong> Hosts the official Chrome extension listing. When you click "Get ProfiVault", you navigate to Google's official store platform under Google's terms.
                </p>
                <p className="text-[11px] text-slate-400">
                  Store Listing:{' '}
                  <a href={CONFIG.CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-0.5">
                    Chrome Web Store <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <EyeOff className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Services Not Used: </strong>
                We do NOT integrate advertising networks, tracking SDKs (e.g., Google Tag Manager, Facebook Pixel), 
                payment processors on the website, or behavioural session replay tools.
              </div>
            </div>
          </section>

          {/* Section 8: Data Sharing & Disclosure */}
          <section id="data-sharing" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 8</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">8. Data Sharing & Disclosure</h2>

            <p>
              <strong>We do not sell, rent, monetize, or trade your personal information or profile links under any circumstances.</strong>
            </p>
            <p>
              We disclose information only under the following strictly defined conditions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <strong className="text-white">Service Providers: </strong>
                To trusted infrastructure providers (Vercel for hosting, Web3Forms for support form relay) strictly to the extent 
                necessary to execute their contracted services on our behalf.
              </li>
              <li>
                <strong className="text-white">Legal Obligations: </strong>
                If required to do so by applicable law, court order, subpoena, or lawful government regulation.
              </li>
              <li>
                <strong className="text-white">Protection of Rights & Safety: </strong>
                When necessary to enforce our Terms of Service, defend against legal claims, or protect the security, integrity, and safety 
                of our users, website, or the public.
              </li>
            </ul>
          </section>

          {/* Section 9: Data Retention Practices */}
          <section id="retention" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 9</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">9. Data Retention Practices</h2>

            <p>
              We retain data only as long as necessary for the operational purpose for which it was received:
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Customer Support Communications: </strong>
                  <span>
                    Emails received via our support form or direct mail are retained in our support email inbox for as long as needed 
                    to resolve the inquiry and maintain continuity of customer service, or until you request deletion.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <Server className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Web Server Diagnostics: </strong>
                  <span>
                    Server access logs generated by Vercel are retained in accordance with Vercel's standard operational data policies 
                    (typically up to 30 days) and are subsequently purged automatically.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <HardDrive className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Interactive Demo Simulator: </strong>
                  <span className="text-emerald-300 font-semibold">Zero seconds. </span>
                  <span>
                    Simulator entries are strictly stored in temporary browser memory. When the page is refreshed or navigated away from, 
                    all simulator data is instantly cleared.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <Database className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Chrome Extension Saved Links: </strong>
                  <span>
                    Stored in local Chrome extension storage (<code className="font-mono text-blue-300">chrome.storage.local</code>) 
                    for as long as the user retains the link or keeps the extension installed.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Access, Correction & Deletion (User Rights) */}
          <section id="user-rights" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 10</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">10. Access, Correction & Deletion (Your Rights)</h2>

            <p>
              You maintain sovereign authority over your personal information and saved content:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  Website Support Records Deletion
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  If you previously sent us a support ticket or inquiry and wish to review, correct, or permanently delete 
                  the email record from our inbox, email us at{' '}
                  <span className="text-blue-400 font-mono">{CONFIG.PRIVACY_EMAIL}</span>. We will process and confirm your request promptly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  Chrome Extension Data Deletion
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  You can edit, categorize, or delete individual links anytime from the extension popup. To delete 100% of local 
                  storage entries immediately, simply uninstall the extension from <code className="font-mono text-blue-300">chrome://extensions</code>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11: Security Practices */}
          <section id="security" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 11</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">11. Security Practices & Safeguards</h2>

            <p>
              We implement comprehensive technical safeguards designed to protect our users and systems:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <strong className="text-white">Strict HTTPS Encryption: </strong>
                All web traffic to and from <code className="font-mono text-blue-300">{CONFIG.SITE_URL}</code> is strictly encrypted 
                in transit using modern Transport Layer Security (TLS/HTTPS) certificates managed automatically by Vercel.
              </li>
              <li>
                <strong className="text-white">Minimalist Attack Surface: </strong>
                Because our Website does not store user account credentials, credit card details, or a backend database, 
                risks associated with database exfiltration and credential stuffing attacks are eliminated at an architectural level.
              </li>
              <li>
                <strong className="text-white">API Key Security: </strong>
                Our support form uses a restricted client-side access key through Web3Forms configured strictly to deliver messages 
                to our verified domain destination.
              </li>
              <li>
                <strong className="text-white">Content Security & Modern Tooling: </strong>
                Our build chain uses TypeScript and modern React, preventing common cross-site scripting (XSS) vectors.
              </li>
            </ul>
          </section>

          {/* Section 12: Children's Privacy */}
          <section id="children" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 12</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">12. Children's Privacy</h2>

            <p>
              ProfiVault is designed as a professional productivity tool for job seekers, university students, software developers, 
              and working professionals. Our service is not directed to children under 13 years of age (or under 16 in the European Economic Area).
            </p>
            <p>
              We do not knowingly solicit or collect personal information from children. If you believe that a child has provided us 
              with personal information via our contact form, please notify us immediately at{' '}
              <a href={`mailto:${CONFIG.PRIVACY_EMAIL}`} className="text-blue-400 hover:underline font-mono">
                {CONFIG.PRIVACY_EMAIL}
              </a>, and we will promptly delete that information from our records.
            </p>
          </section>

          {/* Section 13: International Data Transfers */}
          <section id="transfers" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 13</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">13. International Data Transfers</h2>

            <p>
              Our Website is hosted on infrastructure operated by Vercel Inc., with edge servers located in the United States and globally. 
              If you access our Website from the European Economic Area (EEA), the United Kingdom, Switzerland, or other regions with 
              data protection laws differing from United States law, please note that information necessary to deliver web traffic 
              and contact messages may be transferred to and processed in countries where our service providers maintain facilities.
            </p>
            <p>
              Our service providers adhere to industry-standard data protection safeguards and compliance frameworks for cross-border data routing.
            </p>
          </section>

          {/* Section 14: Regulatory Disclosures (GDPR & CCPA) */}
          <section id="regulatory" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 14</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">14. Do Not Track & Regulatory Rights (GDPR & CCPA/CPRA)</h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <strong className="text-white">Do Not Track (DNT) & Global Privacy Control (GPC):</strong>
                <p className="text-slate-300">
                  Because ProfiVault does not track visitors across third-party websites or engage in behavioral advertising, 
                  our systems inherently fulfill the intent of browser Do Not Track and Global Privacy Control signals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <strong className="text-white">California Consumer Privacy Act (CCPA / CPRA):</strong>
                <p className="text-slate-300">
                  California residents have the right to know what personal information is collected, request its deletion, 
                  and opt out of any "sale" or "sharing" of personal data. <strong>ProfiVault does not sell or share your personal information.</strong>{' '}
                  To exercise your California privacy rights regarding contact inquiries, email{' '}
                  <span className="text-blue-400 font-mono">{CONFIG.PRIVACY_EMAIL}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <strong className="text-white">European Union & United Kingdom Residents (GDPR / UK GDPR):</strong>
                <p className="text-slate-300">
                  Residents of the EEA and UK have the right to access, rectify, erase, restrict, and object to the processing of their personal data, 
                  as well as the right to data portability. You may exercise any of these rights by emailing our privacy team.
                </p>
              </div>
            </div>
          </section>

          {/* Section 15: Policy Changes & Updates */}
          <section id="updates" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Section 15</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">15. Changes & Policy Updates</h2>

            <p>
              We may periodically update this Privacy Policy to reflect enhancements to our Website or Extension, changes in third-party integrations, 
              or newly enacted statutory requirements. When updates occur, we will revise the "Last Updated" and "Effective Date" at the top of this document.
            </p>
            <p>
              The current, official version of this policy is perpetually accessible at:{' '}
              <a href={`${CONFIG.SITE_URL}/privacy-policy`} className="text-blue-400 hover:underline font-mono text-xs">
                {CONFIG.SITE_URL}/privacy-policy
              </a>
            </p>
          </section>

          {/* Section 16: Contact Information */}
          <section id="contact" className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900/90 to-slate-950 border border-blue-800/60 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Section 16</div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">16. Contact Information & Privacy Inquiries</h2>
              </div>
            </div>

            <p className="text-sm text-slate-300">
              If you have any questions, concerns, compliance inquiries, or requests regarding this Privacy Policy 
              or your personal data, please contact our team directly:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                <span className="text-slate-500 font-sans font-semibold">Product Name:</span>
                <span className="text-white font-sans">{CONFIG.PRODUCT_NAME} – Fast Profile Link Copier</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                <span className="text-slate-500 font-sans font-semibold">Official Website:</span>
                <a href={CONFIG.SITE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {CONFIG.SITE_URL}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800/80 pb-2.5">
                <span className="text-slate-500 font-sans font-semibold">Privacy & Legal Inquiries:</span>
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
                <span className="text-slate-500 font-sans font-semibold">General Support:</span>
                <a href={`mailto:${CONFIG.SUPPORT_EMAIL}`} className="text-blue-400 hover:underline">
                  {CONFIG.SUPPORT_EMAIL}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-slate-500 font-sans font-semibold">Dedicated Privacy URL:</span>
                <a href={`${CONFIG.SITE_URL}/privacy-policy`} className="text-blue-400 hover:underline">
                  {CONFIG.SITE_URL}/privacy-policy
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/support')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition cursor-pointer shadow-lg shadow-blue-600/25 flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Visit Support Hub</span>
              </button>

              <button
                onClick={() => onNavigate('/')}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition cursor-pointer border border-slate-800"
              >
                Return to Home
              </button>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};