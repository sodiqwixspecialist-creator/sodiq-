import { CriticalError, ScanStep } from './types';
import { AlertTriangle, ServerCrash, Globe, Lock, FileWarning, Database, Cpu, ShieldAlert, Activity, LayoutTemplate, Link2 } from 'lucide-react';
import React from 'react';

export const EXPERT_INFO = {
  name: "Adam",
  role: "Senior WordPress Security Analyst",
  email: "wordpressexpertadam@gmail.com",
  telegram: "Wordpressteamsdvisor",
  since: "2021"
};

export const SCAN_STEPS: ScanStep[] = [
  { id: 1, message: "Resolving Host...", duration: 1500 },
  { id: 2, message: "Scanning Server Environment...", duration: 2000 },
  { id: 3, message: "Analyzing Core Files...", duration: 2500 },
  { id: 4, message: "Checking Crawler Access...", duration: 1000 },
  { id: 5, message: "Evaluating Plugin Compatibility...", duration: 2000 },
  { id: 6, message: "Inspecting Canonical Tags...", duration: 1500 },
  { id: 7, message: "Detecting Security Vulnerabilities...", duration: 2500 },
  { id: 8, message: "Finalizing Audit Report...", duration: 1000 },
];

export const CRITICAL_ERRORS: CriticalError[] = [
  {
    id: 1,
    title: "Crawler Failure – Pages Not Fetching",
    description: "Search engine bots are unable to render your pages correctly.",
    technicalDetails: "HTTP 403 Forbidden detected on User-Agent: Googlebot. The server configuration is blocking standard indexing crawlers."
  },
  {
    id: 2,
    title: "Missing Canonical Tags on 84% of Pages",
    description: "Duplicate content risk is critical. Search engines cannot determine the primary version of your content.",
    technicalDetails: "Header <link rel='canonical'> is missing or pointing to relative paths instead of absolute URLs in 84% of sampled pages."
  },
  {
    id: 3,
    title: "Core Files Corrupted or Altered",
    description: "WordPress core integrity check failed. Core files do not match the official repository checksums.",
    technicalDetails: "/wp-includes/functions.php and /wp-settings.php show unexpected file size changes. Potential malware injection or bad editing."
  },
  {
    id: 4,
    title: "Plugin Conflict Detected (Multiple Overlaps)",
    description: "Several plugins are fighting for the same resources, causing memory leaks.",
    technicalDetails: "Fatal error trapped in logs. Conflict identified between SEO functionality and active Caching layer."
  },
  {
    id: 5,
    title: "PHP Version Outdated – Security Risk",
    description: "Server is running an End-of-Life (EOL) PHP version.",
    technicalDetails: "Detected PHP 7.4.33. This version no longer receives security updates, exposing the site to known CVE vulnerabilities."
  },
  {
    id: 6,
    title: "SSL Certificate Improperly Configured",
    description: "HTTPS is present but mixed content warnings are breaking the secure lock.",
    technicalDetails: "Insecure resources (images/scripts) loaded over HTTP on an HTTPS page. HSTS header is missing."
  },
  {
    id: 7,
    title: "Core Web Vitals Failing",
    description: "User experience metrics are below Google's acceptable threshold.",
    technicalDetails: "LCP (Largest Contentful Paint) > 4.2s. CLS (Cumulative Layout Shift) > 0.25. Site fails mobile usability test."
  },
  {
    id: 8,
    title: "Indexing Blocked by robots.txt",
    description: "Critical SEO configuration error preventing site visibility.",
    technicalDetails: "Disallow: / rule in robots.txt is potentially blocking main content directories unintentionally."
  },
  {
    id: 9,
    title: "Multiple 5xx Errors Detected in Scan",
    description: "Intermittent server-side errors detected during load testing.",
    technicalDetails: "503 Service Unavailable responses received during concurrent request simulation. Server resources maxed out."
  },
  {
    id: 10,
    title: "Sitemap.xml Incorrect or Missing",
    description: "Search engines cannot discover your page structure.",
    technicalDetails: "XML parser error at line 42. Generated sitemap contains broken links and non-canonical URLs."
  },
  {
    id: 11,
    title: "Database Latency Above Recommended Levels",
    description: "Database queries are taking too long, slowing down the entire site.",
    technicalDetails: "Average query time: 0.8s. Unoptimized tables 'wp_options' and 'wp_postmeta' detected."
  },
  {
    id: 12,
    title: "Broken Internal Links Detected",
    description: "High number of 404 errors within internal navigation.",
    technicalDetails: "Found 12 orphan links pointing to non-existent resources. Increases bounce rate and hurts SEO ranking."
  },
  {
    id: 13,
    title: "Unauthorized Scripts Running",
    description: "Unknown JavaScript detected executing in the background.",
    technicalDetails: "Obfuscated JS code detected in footer.php. Signature matches known adware patterns or unauthorized tracking."
  },
  {
    id: 14,
    title: "Theme Not Optimized for Latest WordPress",
    description: "Active theme is using deprecated functions.",
    technicalDetails: "Usage of `create_function` and outdated jQuery libraries detected. Theme breaks with WordPress 6.0+ architecture."
  },
  {
    id: 15,
    title: "Critical Redirect Loop Detected",
    description: "Browser trapped in infinite redirect chain on specific pages.",
    technicalDetails: "ERR_TOO_MANY_REDIRECTS detected on login and checkout endpoints. .htaccess rules misconfigured."
  },
  {
    id: 16,
    title: "Dashboard Sync Failure – Risk of Lockout",
    description: "Communication with WordPress API is unstable.",
    technicalDetails: "JSON Rest API disabled or blocked. This can prevent updates and lead to administrative lockout."
  }
];

export const WARNINGS = [
  "Render-blocking resources found (CSS/JS)",
  "Images missing 'alt' attributes for accessibility",
  "Unused CSS detected (approx. 45KB bloat)",
  "Slow response from third-party ad scripts",
  "GZIP compression not enabled on server",
  "Browser caching headers missing"
];

export const PLUGIN_CONFLICTS = [
  "Yoast SEO ↔ Rank Math (Multiple SEO plugins active)",
  "W3 Total Cache ↔ Wordfence (Firewall blocking cache generation)",
  "Elementor ↔ JQuery Migrate (Version mismatch)",
  "WooCommerce ↔ Theme Customizer (Memory limit exhausted)"
];

export const ICONS_MAP: Record<number, React.ReactNode> = {
  1: <Globe className="w-5 h-5" />,
  2: <Link2 className="w-5 h-5" />,
  3: <FileWarning className="w-5 h-5" />,
  4: <Cpu className="w-5 h-5" />,
  5: <ServerCrash className="w-5 h-5" />,
  6: <Lock className="w-5 h-5" />,
  7: <Activity className="w-5 h-5" />,
  8: <FileWarning className="w-5 h-5" />,
  9: <ServerCrash className="w-5 h-5" />,
  10: <LayoutTemplate className="w-5 h-5" />,
  11: <Database className="w-5 h-5" />,
  12: <Link2 className="w-5 h-5" />,
  13: <ShieldAlert className="w-5 h-5" />,
  14: <LayoutTemplate className="w-5 h-5" />,
  15: <Link2 className="w-5 h-5" />,
  16: <Lock className="w-5 h-5" />
};