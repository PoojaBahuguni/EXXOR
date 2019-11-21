import {
    trigger,
    query,
    style,
    animate,
    transition,
    group
  } from '@angular/animations';

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