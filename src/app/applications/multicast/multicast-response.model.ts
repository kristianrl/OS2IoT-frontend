import { Application } from '@applications/application.model';
import { MulticastType } from '@shared/enums/multicast-type';

export class MulticastResponse {
  id: number;
  application: Application;
  groupName: string;
  address: string;
  networkSessionKey: string;
  applicationSessionKey: string;
  frameCounter: number = 0;
  dataRate: number = 0;
  frequency: number = 0;
  groupType: MulticastType;
  // periodicity: number; -> only if classB is gonna be used
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  createdByName: string;
  updatedByName: string;
}