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
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    // group block executes in parallel
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

  export const rowsAnimation =   trigger('rowsAnimation', [
    transition('*<=> *', [
      style({ 'height': '*', 'opacity': '0', 'box-shadow': 'none' }),
      sequence([
        animate('.35s ease', style({
          'height': '*',
          'opacity': '1',
          'box-shadow': 'none',
        })),
        animate('.35s ease', style({
          height: '*',
          opacity: 0,
          
        })),
      ]),
    ])
]);

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

export const slideButton = trigger('slideButton', [
  transition('void => *', [
      style({  opacity: 0 , position: 'absolute', left: '850px',top : '850px'}),
      animate('2s ease-in', style({ position: 'absolute', opacity: 1, left: '850px',top : '820px' }))

  ])
])