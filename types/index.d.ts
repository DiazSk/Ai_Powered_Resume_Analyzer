interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}

interface Feedback {
  overallScore: number;
  ATS: {
      score: number;
      tips: {
          type: "good" | "improve";
          tip: string;
      }[];
  };
  toneAndStyle: {
      score: number;
      tips: {
          type: "good" | "improve";
          tip: string;
          explanation: string;
      }[];
  };
  content: {
      score: number;
      tips: {
          type: "good" | "improve";
          tip: string;
          explanation: string;
      }[];
  };
  structure: {
      score: number;
      tips: {
          type: "good" | "improve";
          tip: string;
          explanation: string;
      }[];
  };
  skills: {
      score: number;
      tips: {
          type: "good" | "improve";
          tip: string;
          explanation: string;
      }[];
  };
}

interface AnalysisDataSource {
  sources: JobSource[];
  dateRange: DateRange;
  jobCount: number;
  countries: string[];
  confidence: number;
}

// ================================
// DETAILED ANALYSIS INTERFACES
// ================================

// Skills matching and gap analysis
interface SkillsMatchAnalysis {
  overallScore: number; // 0-100
  matchedSkills: MatchedSkill[];
  missingSkills: MissingSkill[];
  additionalSkills: string[]; // Skills candidate has but job doesn't require
  transferableSkills: TransferableSkill[];
  skillsGrowthPotential: number; // 0-100
}

interface MatchedSkill {
  skill: string;
  jobRequirement: SkillRequirement;
  candidateLevel: ProficiencyLevel;
  matchStrength: number; // 0-100
  marketValue: number; // salary impact
}

interface MissingSkill {
  skill: string;
  importance: SkillImportance;
  learningCurve: 'easy' | 'moderate' | 'difficult';
  timeToLearn: number; // estimated weeks
  alternatives: string[];
  marketImpact: number; // salary impact if learned
}

interface TransferableSkill {
  candidateSkill: string;
  transfersTo: string;
  transferStrength: number; // 0-100
  explanation: string;
}

// Experience matching analysis
interface ExperienceMatchAnalysis {
  overallScore: number; // 0-100
  yearsMatch: YearsExperienceMatch;
  levelMatch: ExperienceLevelMatch;
  industryMatch: IndustryExperienceMatch;
  roleProgressionFit: number; // 0-100, career progression alignment
  leadershipExperience: LeadershipExperienceAnalysis | null;
}

interface YearsExperienceMatch {
  required: { min: number; max: number } | null;
  candidate: number;
  matchScore: number; // 0-100
  overqualified: boolean;
  underqualified: boolean;
  gapAnalysis: string;
}

interface ExperienceLevelMatch {
  required: ExperienceLevel;
  candidate: ExperienceLevel;
  matchScore: number; // 0-100
  careerTrajectory: 'promotion' | 'lateral' | 'step_back';
  explanation: string;
}

interface IndustryExperienceMatch {
  requiredIndustry: IndustryCategory[];
  candidateIndustries: IndustryCategory[];
  matchScore: number; // 0-100
  transferableExperience: TransferableExperience[];
}

interface TransferableExperience {
  fromIndustry: IndustryCategory;
  toIndustry: IndustryCategory;
  transferability: number; // 0-100
  commonSkills: string[];
}

// Education matching analysis
interface EducationMatchAnalysis {
  overallScore: number; // 0-100
  degreeMatch: DegreeLevelMatch;
  fieldMatch: FieldOfStudyMatch;
  institutionPrestige: number | null; // 0-100
  relevantCertifications: CertificationMatch[];
  continuousLearning: ContinuousLearningAnalysis;
}

interface DegreeLevelMatch {
  required: EducationLevel[];
  candidate: EducationLevel;
  matchScore: number; // 0-100
  overqualified: boolean;
  underqualified: boolean;
}

interface FieldOfStudyMatch {
  requiredFields: string[];
  candidateField: string;
  matchScore: number; // 0-100
  relevanceExplanation: string;
}

interface CertificationMatch {
  certification: string;
  isRequired: boolean;
  candidateHas: boolean;
  relevanceScore: number; // 0-100
  marketValue: number; // salary impact
}

interface ContinuousLearningAnalysis {
  recentLearning: boolean;
  learningTrend: TrendDirection;
  adaptabilityScore: number; // 0-100
}

// Location and salary matching
interface LocationMatchAnalysis {
  overallScore: number; // 0-100
  geographicMatch: GeographicMatch;
  remoteCompatibility: RemoteCompatibility;
  relocationAnalysis: RelocationAnalysis | null;
  commuteAnalysis: CommuteAnalysis | null;
}

interface GeographicMatch {
  distance: number | null; // kilometers
  sameCity: boolean;
  sameRegion: boolean;
  sameCountry: boolean;
  matchScore: number; // 0-100
}

interface RemoteCompatibility {
  jobOffersRemote: boolean;
  candidateWantsRemote: boolean | null;
  compatibilityScore: number; // 0-100
  remoteExperience: boolean;
}

interface RelocationAnalysis {
  willingness: number | null; // 0-100 if known
  costOfLivingChange: number; // percentage change
  marketOpportunities: number; // 0-100
  qualityOfLifeChange: number; // -100 to 100
}

interface CommuteAnalysis {
  estimatedTime: number; // minutes
  transportOptions: string[];
  feasibilityScore: number; // 0-100
}

interface SalaryFitAnalysis {
  overallScore: number; // 0-100
  salaryMatch: SalaryMatch;
  benefitsMatch: BenefitsMatch;
  totalCompensationFit: TotalCompensationFit;
  marketPositioning: CompensationMarketPosition;
}

interface SalaryMatch {
  offered: { min: number | null; max: number | null };
  expected: { min: number | null; max: number | null };
  matchScore: number; // 0-100
  offerAdequacy: 'below_expectation' | 'meets_expectation' | 'exceeds_expectation';
  negotiationPotential: number; // 0-100
}

interface BenefitsMatch {
  offeredBenefits: string[];
  expectedBenefits: string[];
  matchScore: number; // 0-100
  missingCriticalBenefits: string[];
  additionalBenefits: string[];
}

interface TotalCompensationFit {
  estimatedTotalValue: number;
  marketComparison: number; // 0-100 percentile
  competitiveness: 'below_market' | 'market_rate' | 'above_market';
}

// Cultural and soft factors
interface CultureMatchAnalysis {
  overallScore: number; // 0-100
  workStyleMatch: WorkStyleMatch;
  valuesAlignment: ValuesAlignment;
  teamFit: TeamFitAnalysis;
  companyStageMatch: CompanyStageMatch;
}

interface WorkStyleMatch {
  jobWorkStyle: WorkStyle[];
  candidatePreferences: WorkStyle[];
  matchScore: number; // 0-100
  conflicts: string[];
  synergies: string[];
}

interface ValuesAlignment {
  companyValues: string[];
  candidateValues: string[];
  alignmentScore: number; // 0-100
  sharedValues: string[];
  potentialConflicts: string[];
}

// Market rankings and trends
interface LocationRanking {
  location: JobLocation;
  rank: number;
  score: number; // 0-100
  jobCount: number;
  averageSalary: number;
  growthRate: number; // percentage
}

interface SkillRanking {
  skill: string;
  rank: number;
  demandScore: number; // 0-100
  jobCount: number;
  averageSalary: number;
  growthRate: number;
}

interface CompanyRanking {
  company: string;
  rank: number;
  jobCount: number;
  averageSalary: number;
  employeeRating: number | null; // 0-5 if available
  marketShare: number; // 0-100
}

interface IndustryRanking {
  industry: IndustryCategory;
  rank: number;
  jobCount: number;
  averageSalary: number;
  growthRate: number;
  marketSize: number;
}

// Emerging market trends
interface EmergingSkill {
  skill: string;
  category: SkillCategory;
  growthRate: number; // percentage
  currentDemand: DemandLevel;
  projectedDemand: DemandLevel;
  earlyAdopterAdvantage: number; // 0-100
  learningResources: LearningResource[];
}

interface DecliningSkill {
  skill: string;
  category: SkillCategory;
  declineRate: number; // negative percentage
  currentDemand: DemandLevel;
  projectedDemand: DemandLevel;
  replacementSkills: string[];
  transitionAdvice: string;
}

interface EmergingMarket {
  location: JobLocation;
  growthRate: number; // percentage
  currentJobCount: number;
  projectedJobCount: number;
  keyIndustries: IndustryCategory[];
  investmentLevel: 'low' | 'medium' | 'high';
  riskLevel: 'low' | 'medium' | 'high';
}

// Skill combinations and market gaps
interface SkillCombination {
  skills: string[];
  frequency: number; // how often these skills appear together
  marketValue: number; // salary premium
  demandScore: number; // 0-100
  uniquenessScore: number; // 0-100, rarity of combination
}

interface SkillGap {
  skill: string;
  demandLevel: DemandLevel;
  supplyLevel: SupplyLevel;
  gapSeverity: 'low' | 'moderate' | 'high' | 'critical';
  timeToClose: number | null; // months estimate
  marketOpportunity: number; // 0-100
}

interface SkillSalaryImpact {
  skill: string;
  salaryPremium: number; // additional salary impact
  percentageLift: number; // percentage increase
  marketDemand: DemandLevel;
  roiOfLearning: number; // return on investment
}

// Future predictions and recommendations
interface FutureSkillPrediction {
  skill: string;
  category: SkillCategory;
  currentRelevance: number; // 0-100
  futureRelevance: number; // 0-100
  timeframe: FutureProjection['timeframe'];
  drivingFactors: string[];
  preparationAdvice: string;
}

interface MarketPrediction {
  type: 'skill_demand' | 'salary_trend' | 'job_growth' | 'industry_shift';
  prediction: string;
  confidence: number; // 0-100
  timeframe: string;
  impact: 'low' | 'medium' | 'high';
  preparationSteps: string[];
}

// Learning and development resources
interface LearningResource {
  type: 'course' | 'certification' | 'book' | 'project' | 'bootcamp';
  name: string;
  provider: string;
  url: string | null;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cost: number | null;
  rating: number | null; // 0-5
}

// Improvement recommendations
interface ImprovementRecommendation {
  category: 'skills' | 'experience' | 'education' | 'presentation';
  priority: 'low' | 'medium' | 'high';
  title: string;
  description: string;
  impact: number; // 0-100, expected improvement in match score
  timeToImplement: string;
  resources: LearningResource[];
  successMetrics: string[];
}

interface AlternativeJob {
  job: Job;
  matchScore: number; // 0-100
  advantages: string[];
  tradeoffs: string[];
  preparationNeeded: string[];
}

interface PreparationTip {
  category: 'interview' | 'application' | 'skills' | 'networking';
  tip: string;
  importance: 'low' | 'medium' | 'high';
  timeToImplement: string;
  expectedOutcome: string;
}

// Additional supporting types for comprehensive analysis
interface WorkStyle {
  type: 'collaborative' | 'independent' | 'structured' | 'flexible' | 'fast_paced' | 'detail_oriented';
  preference: number; // 0-100
}

interface LeadershipExperienceAnalysis {
  hasLeadershipExperience: boolean;
  yearsInLeadership: number;
  teamSizeManaged: number | null;
  leadershipLevel: 'team_lead' | 'manager' | 'senior_manager' | 'director' | 'vp';
  leadershipMatch: number; // 0-100
}

interface TeamFitAnalysis {
  teamSize: number | null;
  workingStyle: string;
  collaborationLevel: 'low' | 'medium' | 'high';
  fitScore: number; // 0-100
}

interface CompanyStageMatch {
  companyStage: 'seed' | 'early' | 'growth' | 'mature' | 'enterprise';
  candidateFit: number; // 0-100
  stagePreferences: string[];
  adaptabilityScore: number; // 0-100
}

// Compensation and market analysis
interface CompensationMarketPosition {
  percentile: number; // 0-100
  aboveMarket: boolean;
  competitiveLevel: 'below_market' | 'competitive' | 'above_market' | 'top_tier';
  marketAverage: number;
  similarRoleSalaries: number[];
}

interface SalaryDistribution {
  range: string; // e.g., "$80k-100k"
  count: number;
  percentage: number;
  percentile: { min: number; max: number };
}

interface SalaryTrend {
  timeframe: string;
  averageSalary: number;
  changePercentage: number;
  direction: TrendDirection;
  factors: string[];
}

interface CompensationAnalysis {
  baseSalaryTrends: SalaryTrend[];
  bonusData: BonusAnalysis;
  equityTrends: EquityAnalysis;
  benefitsValue: BenefitsValueAnalysis;
  totalCompensationTrends: TotalCompensationTrend[];
}

interface BonusAnalysis {
  averageBonus: number;
  bonusFrequency: number; // 0-100, how often bonuses are given
  bonusTypes: BonusType[];
  industryComparison: number; // percentage vs industry average
}

interface EquityAnalysis {
  equityOfferedPercentage: number; // percentage of jobs offering equity
  averageEquityRange: string;
  equityByStage: { stage: CompanyStage; percentage: number }[];
  equityTrends: TrendData;
}

interface BenefitsValueAnalysis {
  averageValue: number; // estimated annual value
  commonBenefits: string[];
  premiumBenefits: string[];
  benefitsTrend: TrendData;
}

interface TotalCompensationTrend {
  timeframe: string;
  averageTotal: number;
  components: {
    base: number;
    bonus: number;
    equity: number;
    benefits: number;
  };
  changePercentage: number;
}

// Company and market intelligence
interface CompanyHiringData {
  company: string;
  jobCount: number;
  hiringTrend: TrendDirection;
  averageSalary: number;
  topRoles: string[];
  hiringVelocity: number; // jobs posted per month
  retentionRate: number | null; // if available
}

interface CompanyGrowthTrend {
  company: string;
  growthRate: number; // percentage
  fundingStage: 'bootstrapped' | 'seed' | 'series_a' | 'series_b' | 'series_c' | 'ipo' | 'public';
  marketValuation: number | null;
  hiringProjection: FutureProjection;
}

interface HiringPatternAnalysis {
  seasonalHiring: SeasonalityData;
  preferredSources: JobSource[];
  timeToHire: number; // average days
  hiringCriteria: HiringCriteria;
}

interface HiringCriteria {
  mustHaveSkills: string[];
  preferredBackground: string[];
  educationRequirements: EducationLevel[];
  experienceRequirements: { min: number; max: number };
}

interface EmployerBrandingAnalysis {
  company: string;
  brandStrength: number; // 0-100
  employeeRating: number | null; // 0-5
  reviewCount: number;
  topPositives: string[];
  topConcerns: string[];
  competitiveAdvantages: string[];
}

// Economic and market factors
interface EconomicImpactData {
  unemploymentRate: number;
  gdpGrowth: number;
  inflationRate: number;
  interestRates: number;
  marketConfidence: number; // 0-100
  impactOnHiring: 'positive' | 'neutral' | 'negative';
}

interface JobPostingTrend {
  period: string;
  jobCount: number;
  changePercentage: number;
  seasonalAdjusted: number;
  keyDrivers: string[];
}

interface IndustryTrend {
  industry: IndustryCategory;
  growthRate: number;
  jobCreation: number;
  disruptionLevel: 'low' | 'medium' | 'high';
  keyTrends: string[];
  futureOutlook: 'positive' | 'stable' | 'challenging';
}

interface SeasonalTrend {
  period: string; // e.g., "Q1", "Summer", "Holiday"
  jobPostingChange: number; // percentage change
  hiringChange: number; // percentage change
  industries: IndustryCategory[];
  explanation: string;
}

// Remote work analysis
interface RemoteWorkImpact {
  remoteJobPercentage: number;
  hybridJobPercentage: number;
  remoteJobGrowth: number;
  salaryImpact: {
    remotePremium: number; // percentage premium/discount
    locationFlexibilityValue: number;
  };
  topRemoteSkills: string[];
  geographicDistribution: LocationRanking[];
}

interface LocationCostBenefit {
  location: JobLocation;
  averageSalary: number;
  costOfLiving: number;
  realIncome: number; // salary adjusted for cost of living
  qualityOfLife: number; // 0-100
  careerOpportunities: number; // 0-100
  overallScore: number; // 0-100
}

interface LocationComparison {
  location1: JobLocation;
  location2: JobLocation;
  comparison: {
    salary: 'higher' | 'similar' | 'lower';
    costOfLiving: 'higher' | 'similar' | 'lower';
    opportunities: 'more' | 'similar' | 'fewer';
    quality: 'better' | 'similar' | 'worse';
  };
  recommendation: string;
}

// Competitive analysis
interface CompetitorOffering {
  competitor: string;
  role: string;
  salary: { min: number; max: number };
  benefits: string[];
  uniqueSellingPoints: string[];
  marketPosition: 'leader' | 'challenger' | 'follower' | 'niche';
}

interface CompetitorMap {
  company: string;
  directCompetitors: string[];
  indirectCompetitors: string[];
  competitiveAdvantages: string[];
  marketPosition: MarketPosition;
}

interface MarketShareData {
  segment: string;
  companies: {
    company: string;
    marketShare: number; // 0-100
    trendDirection: TrendDirection;
  }[];
}

interface CompetitivePosition {
  company: string;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  overallPosition: 'strong' | 'moderate' | 'weak';
}

interface CompetitiveBenchmark {
  metric: string;
  companyValue: number;
  industryAverage: number;
  bestInClass: number;
  percentileRanking: number; // 0-100
}

interface OpportunityGap {
  gapType: 'market' | 'skill' | 'geographic' | 'demographic';
  description: string;
  marketSize: number; // estimated opportunity value
  competitionLevel: number; // 0-100
  timeToMarket: string;
  requiredInvestment: 'low' | 'medium' | 'high';
}

// Types for additional enums used above
type CompanyStage = 'seed' | 'early' | 'growth' | 'mature' | 'enterprise';

interface ExperienceSalaryData {
  experienceLevel: ExperienceLevel;
  averageSalary: number;
  salaryRange: { min: number; max: number };
  jobCount: number;
  demandLevel: DemandLevel;
}

interface LocationSalaryData {
  location: JobLocation;
  averageSalary: number;
  costAdjustedSalary: number;
  salaryGrowth: number;
  competitiveness: number; // 0-100
}

interface EquityTrendData {
  averageEquityPercentage: number;
  equityGrowthTrend: TrendData;
  equityByCompanyStage: { stage: CompanyStage; averageEquity: number }[];
}

interface BenefitsAnalysis {
  commonBenefits: { benefit: string; frequency: number }[];
  premiumBenefits: { benefit: string; frequency: number; value: number }[];
  benefitsTrend: TrendData;
  industryComparison: { industry: IndustryCategory; benefits: string[] }[];
}