import type { LegalDoc } from './types';

export const terms: LegalDoc = {
  title: 'Terms of Service',
  lastUpdated: 'April 26, 2026',
  intro:
    'Welcome to CastCreel. By creating an account or using our app, you agree to these Terms of Service. Please read them carefully.',
  sections: [
    {
      id: 'acceptance',
      heading: 'Acceptance of terms',
      body: 'By downloading, installing, or using CastCreel, you agree to be bound by these Terms. If you do not agree, do not use the app.',
    },
    {
      id: 'your-account',
      heading: 'Your account',
      body: 'You must be at least 13 years old to use CastCreel. You are responsible for maintaining the security of your account credentials. You agree to provide accurate information when registering. One person may not maintain multiple accounts.',
    },
    {
      id: 'what-castcreel-provides',
      heading: 'What CastCreel provides',
      body: `CastCreel is a fishing log and social platform that allows you to:

- Log and photograph your catches
- Track your fishing sessions
- View fishing spots and conditions
- Connect with other anglers
- Receive AI-powered fishing predictions and species identification

We provide these services as-is and make no guarantees about the accuracy of fishing predictions, species identification, or conditions data.`,
    },
    {
      id: 'your-content',
      heading: 'Your content',
      body: `You retain ownership of content you post on CastCreel (photos, catch logs, posts). By posting content, you grant CastCreel a non-exclusive, royalty-free license to display and distribute your content within the app.

You agree not to post content that is:

- Illegal or promotes illegal activity
- Sexually explicit or violent
- Harassing or threatening to other users
- Spam or commercial solicitation without permission
- Infringing on someone else's intellectual property

We reserve the right to remove content that violates these terms.`,
    },
    {
      id: 'ai-features',
      heading: 'AI features',
      body: `CastCreel uses AI to identify fish species from photos. AI identification is not guaranteed to be accurate. Do not rely solely on CastCreel for species identification when accuracy is critical (e.g. for regulatory compliance, invasive species reporting). Always verify with official sources.

Fishing predictions and forecasts are provided for informational purposes only and do not guarantee fishing success.`,
    },
    {
      id: 'fishing-regulations',
      heading: 'Fishing regulations',
      body: 'CastCreel does not provide legal fishing advice. You are solely responsible for knowing and complying with all applicable fishing regulations, license requirements, and local laws in your jurisdiction. CastCreel bears no responsibility for regulatory violations.',
    },
    {
      id: 'community-standards',
      heading: 'Community standards',
      body: 'CastCreel is a community for anglers. You agree to treat other users with respect. We may suspend or terminate accounts that repeatedly violate community standards or these Terms.',
    },
    {
      id: 'privacy',
      heading: 'Privacy',
      body: 'Your use of CastCreel is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
    },
    {
      id: 'disclaimers',
      heading: 'Disclaimers',
      body: 'CastCreel is provided "as is" without warranties of any kind. We do not guarantee that the app will be available at all times or that it will be free of errors. Fishing involves inherent risks — always prioritize your safety on the water.',
    },
    {
      id: 'limitation-of-liability',
      heading: 'Limitation of liability',
      body: 'To the maximum extent permitted by law, CastCreel and its developers shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.',
    },
    {
      id: 'changes',
      heading: 'Changes to terms',
      body: 'We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the new Terms. We will notify you of significant changes via the app or email.',
    },
    {
      id: 'termination',
      heading: 'Termination',
      body: 'You may delete your account at any time in Settings. We may suspend or terminate your account for violations of these Terms.',
    },
    {
      id: 'governing-law',
      heading: 'Governing law',
      body: 'These Terms are governed by the laws of the United States. Any disputes shall be resolved in the courts of the state where CastCreel is headquartered.',
    },
    {
      id: 'contact',
      heading: 'Contact',
      body: 'For questions about these Terms, contact us at legal@castcreel.com.',
    },
  ],
};
