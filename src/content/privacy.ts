import type { LegalDoc } from './types';

export const privacy: LegalDoc = {
  title: 'Privacy Policy',
  lastUpdated: 'April 26, 2026',
  intro:
    'CastCreel ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the CastCreel mobile application.',
  sections: [
    {
      id: 'information-we-collect',
      heading: 'Information we collect',
      body: `### Account Information

When you register, we collect your email address, username, and password (stored as a secure hash).

### Location Data

We collect your GPS location when you log catches, browse the map, and during active fishing sessions. Location is used to record where catches were made, show nearby fishing spots, and pull local weather and conditions. We never sell your location data.

### Photos

When you log a catch, you may upload a photo. Photos are stored on our servers and may be analyzed by AI services for species identification. Photos are not retained by AI providers after analysis.

### Fishing Activity

We collect data about your catches, fishing sessions, species caught, and fishing spots you visit. This data is used to power predictions, your personal fishing history, and community features.

### User Content

Posts, comments, and other content you share on the CastCreel feed are stored on our servers and visible to other users according to your privacy settings.

### Device Information

We collect basic device information including device type and operating system version for app functionality and crash reporting.`,
    },
    {
      id: 'how-we-use-it',
      heading: 'How we use your information',
      body: `- To provide and improve the CastCreel app
- To identify fish species from your catch photos using AI
- To generate fishing forecasts and predictions
- To power social features including friends, groups, and the community feed
- To send push notifications about fishing conditions and activity (you can opt out in settings)
- To award badges and track your fishing progress
- To show your catches on the map (with your location fuzzed for privacy)`,
    },
    {
      id: 'ai-identification',
      heading: 'AI species identification',
      body: 'CastCreel uses artificial intelligence to identify fish species from photos you submit. This service is powered by Google Gemini and Anthropic Claude. Photos are sent to these services solely for identification purposes and are not stored or used for training by these providers. We disclose this in accordance with App Store guidelines.',
    },
    {
      id: 'location-privacy',
      heading: 'Location privacy',
      body: 'Catches you mark as public appear on the community map with your location randomized by up to 500 meters to protect your exact fishing spots. Only you can see your precise catch locations.',
    },
    {
      id: 'data-sharing',
      heading: 'Data sharing',
      body: `We do not sell your personal data. We do not share your data with advertisers. We share data only with:

- AI providers (Google, Anthropic) solely for species identification as described above
- Service providers who help us operate the app (hosting, push notifications)
- Law enforcement if required by law`,
    },
    {
      id: 'data-retention',
      heading: 'Data retention',
      body: 'We retain your account data for as long as your account is active. If you delete your account, your personal data is permanently deleted within 30 days. Some anonymized aggregate data (such as species counts by region) may be retained.',
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      body: `You have the right to:

- Access the data we hold about you
- Correct inaccurate data
- Delete your account and all associated data (available in Settings → Delete Account)
- Opt out of push notifications (available in Settings)
- Export your catch history (contact us)`,
    },
    {
      id: 'childrens-privacy',
      heading: "Children's privacy",
      body: 'CastCreel is not directed at children under 13. We do not knowingly collect data from children under 13.',
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via the app or email.',
    },
    {
      id: 'contact',
      heading: 'Contact',
      body: 'If you have questions about this Privacy Policy, contact us at privacy@castcreel.com.',
    },
  ],
};
