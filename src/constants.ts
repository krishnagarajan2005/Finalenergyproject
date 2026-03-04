import { 
  Wind, 
  Zap, 
  Lightbulb, 
  Refrigerator, 
  WashingMachine,
  AirVent,
  Fan
} from 'lucide-react';

export type Status = 'Low' | 'Medium' | 'High' | 'Non-Use';

export interface ApplianceLoad {
  id: string;
  name: string;
  icon: any;
  current: number; // Amps
  voltage: number; // Volts
  power: number;   // Watts
  hours: number;
  price: number;
  status: Status;
  trend: 'up' | 'down' | 'stable';
}

export interface Suggestion {
  id: string;
  appliance: string;
  message: string;
  status: Status;
}

export const MOCK_LOADS: ApplianceLoad[] = [
  {
    id: '1',
    name: 'AC',
    icon: AirVent,
    current: 5.2,
    voltage: 220,
    power: 1144,
    hours: 8,
    price: 450,
    status: 'High',
    trend: 'up'
  },
  {
    id: '2',
    name: 'Fan',
    icon: Fan,
    current: 0.35,
    voltage: 220,
    power: 77,
    hours: 12,
    price: 35,
    status: 'Medium',
    trend: 'stable'
  },
  {
    id: '3',
    name: 'Light',
    icon: Lightbulb,
    current: 0.05,
    voltage: 220,
    power: 11,
    hours: 6,
    price: 12,
    status: 'Low',
    trend: 'down'
  },
  {
    id: '4',
    name: 'Refrigerator',
    icon: Refrigerator,
    current: 0.8,
    voltage: 220,
    power: 176,
    hours: 24,
    price: 120,
    status: 'Medium',
    trend: 'stable'
  },
  {
    id: '5',
    name: 'Washing Machine',
    icon: WashingMachine,
    current: 2.5,
    voltage: 220,
    power: 550,
    hours: 2,
    price: 85,
    status: 'High',
    trend: 'up'
  }
];

export const CHART_DATA = [
  { time: '00:00', current: 2.1, voltage: 220 },
  { time: '04:00', current: 1.8, voltage: 218 },
  { time: '08:00', current: 4.5, voltage: 222 },
  { time: '12:00', current: 6.2, voltage: 220 },
  { time: '16:00', current: 5.8, voltage: 219 },
  { time: '20:00', current: 7.5, voltage: 221 },
  { time: '23:59', current: 3.2, voltage: 220 },
];

export const PREDICTION_DATA = [
  { month: 'Jan', power: 450 },
  { month: 'Feb', power: 420 },
  { month: 'Mar', power: 480 },
  { month: 'Apr', power: 550 },
  { month: 'May', power: 620 },
  { month: 'Jun', power: 700 },
  { month: 'Jul', power: 750 },
  { month: 'Aug', power: 720 },
  { month: 'Sep', power: 600 },
  { month: 'Oct', power: 520 },
  { month: 'Nov', power: 480 },
  { month: 'Dec', power: 460 },
];
