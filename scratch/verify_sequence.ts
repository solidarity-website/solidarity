
import { ALL_POSTS } from './src/data/posts';

const CLIENT_QUESTIONS_SLUG_SEQUENCE = [
  'indian-markets-if-the-bjp-loses-the-2024-election-2',
  'outlook-for-future-returns-5',
  'what-explains-our-optimism-when-they-are-lower-roe-vs-consumer-companies-and-hardly-generate-any-free-cash-flow',
  'how-do-we-decide-composition-of-smallmid-and-large-caps-in-the-portfolio-2',
  'pms-vs-mutual-funds-vs-alternate-investment-fund-2',
  'implications-of-global-repricing-of-risk-2',
  'why-not-sell-if-we-are-concerned-that-small-and-microcaps-are-overvalued-2',
  'our-approach-to-building-solidarity-2',
  'a-perspective-on-churn-2',
  'return-expectations-from-indian-equities-2',
  'portfolio-positioning-and-approach-2',
  'gold-2',
  'has-india-decoupled-2',
  'why-do-we-not-own-commodities-2',
  'our-process-for-exit-decisions-part-2',
  'developing-a-process-to-shut-out-the-noise-2',
  'our-perspective-to-some-commonly-asked-questions-part-1-2',
  'the-futility-of-taking-cash-calls-2',
  'our-perspective-to-some-commonly-asked-questions-part-2-2',
  'our-process-for-exit-decisions',
  'observations-on-asset-allocation-2',
  'our-approach-to-portfolio-design-2',
];

console.log('Sequence Verification:');
CLIENT_QUESTIONS_SLUG_SEQUENCE.forEach((slug, index) => {
  const post = ALL_POSTS.find(p => p.slug === slug);
  console.log(`${index + 1}. ${post ? post.title : 'NOT FOUND (' + slug + ')'}`);
});
