import { Report } from './report.model';
import { ConditionSeverity } from './condition-severity.model';

export interface ReportDefinition {
  offset: number,
  limit: number,
  total: number,
  items: Report[],
  errors: [],
  facets: {
    conditionSeverity: ConditionSeverity[]
  }
}
