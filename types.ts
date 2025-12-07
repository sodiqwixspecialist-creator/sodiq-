export interface ScanStep {
  id: number;
  message: string;
  duration: number; // in ms
}

export interface AuditResult {
  url: string;
  timestamp: string;
  phpVersion: string;
  serverTime: number;
  score: number;
}

export interface CriticalError {
  id: number;
  title: string;
  description: string;
  technicalDetails: string;
}

export enum ViewState {
  HOME = 'HOME',
  SCANNING = 'SCANNING',
  RESULTS = 'RESULTS'
}