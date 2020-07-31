import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanArrayService {

  constructor() { }

  getPlanArray(){
    return planArray;
  }

  getPlanDetails(){
    return planArrayDetails;
  }
}
export const planArray = [{ 
  plan: 'BASIC', 
  description: 'Perfect for most businesses who want to look their best and convert leads',
  cost: ' 50,000/-'
 },
  {
    plan: 'PROFESSIONAL', 
    description: 'Perfect for businesses who have dynamic website content and functionality',
    cost: ' 95,000/-'
  },
  {
   plan: 'PREMIUM', 
   description: 'Perfect for e-tailers and businesses that have large sites or online catalogues',
   cost: ' 1,40,000/-'
 }
]

export const planArrayDetails = [
  {
    plan: 'BASIC', 
    details: [
      'Custom Design',
      'Image search',
      'Responsive design',
      'Color theme creation',
      'Microformats (SEO)'
    ]
  },
  {
    plan: 'PROFESSIONAL',
    details: [
      'Custom Design',
      'Custom Illustration',
      'Image search',
      'Responsive design',
      'Color theme creation',
      'Microformats (SEO)',
      'Google analytics integration'
    ]
  },
  {
    plan: 'PREMIUM',
    details: [
      'Custom Design',
      'Custom Illustration',
      'Image search',
      'Responsive design',
      'Color theme creation',
      'Microformats (SEO)',
      'Google analytics integration'
    ]
  }
]