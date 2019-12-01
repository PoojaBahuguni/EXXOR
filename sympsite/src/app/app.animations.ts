import {
    trigger,
    query,
    style,
    animate,
    transition,
    group,
    sequence,
    stagger,
    keyframes,
    state
  } from '@angular/animations';
import { Optional } from '@angular/core';

export const scrollAnimation = trigger('scrollAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(100vh)' }),
        animate('0.8s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.8s ease-in-out', style({ transform: 'translateY(-100vh)' }))
      ], { optional: true })
    ])
  ])
  ])

  export const treesAnimation =   trigger('treesAnimation', [
    transition('void => *', [
      style({  opacity: 0 }),
      animate('2s ease-in', style({  opacity: 1 }))
    ])
])

export const baseAnimation =   trigger('baseAnimation', [
  transition('void => *', [
    style({  opacity: 0 }),
    animate('.5s ease-in', keyframes([
      style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3}),
      style({ opacity: 1, transform: 'translateX(0px)', offset: 1})
    ]))
  ])
])

export const pricingAnimation = trigger('pricingAnimation', [
  transition('void => *', [
        
        query(':enter', style({ opacity: 0}), {optional: true}),
        
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1})
          ]))
        ]))  
  ])
])

export const screenAnimation = trigger('screenAnimation', [
  transition('void => *', [
        
    animate('2s cubic-bezier(0.35, 0, 0.25, 1)', keyframes([
      
      style({  transform: 'translateY(55px)', offset: 0.1}),
      style({  transform: 'translateY(0px)', offset: .2}),
      style({  transform: 'translateY(35px)', offset: .4}),
      style({  transform: 'translateY(0px)', offset: 1}),
      
    ]))
  ])
])

export const slideButton = trigger('slideButton', [
  transition('void => *', [
      style({  opacity: 0 , position: 'absolute', left: '850px',top : '850px'}),
      animate('2s ease-in', style({ position: 'absolute', opacity: 1, left: '850px',top : '820px' }))

  ])
])

export const aboutIllustration = trigger('aboutIllustration', [
  transition('void => *', [
    style({  opacity: 0 }),
    animate('2s cubic-bezier(0.35, 0, 0.25, 1)', keyframes([
      style({ transform: 'translateY(-25px)', offset: 0.5}),
      style({ opacity:1, transform: 'translateY(0px)', offset: 1}), 
    ]))
  ])
])

export const aboutParagraph = trigger('aboutParagraph', [
  transition('void => *', [
    style({  opacity: 0 }),
    animate('2s ease-in', keyframes([
      style({ transform: 'translateX(-25px)', offset: 0.3}),
      style({ opacity:1, transform: 'translateX(0px)', offset: 1}), 
    ]))
  ])
])