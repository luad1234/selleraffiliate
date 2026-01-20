export type RegionCode = 'us' | 'uk' | 'eu';

export interface RegionConfig {
  id: RegionCode;
  label: string;
  flag: string;
  desc: string;
}