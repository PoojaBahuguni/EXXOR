import {
    trigger,
    query,
    style,
    animate,
    transition,
    group,
    stagger,
    keyframes,
    state,
    animation,
  } from '@angular/animations';

  export const appearAnimation =   trigger('appearAnimation', [
    transition('void => *',[
      style({opacity:0}),
          animate('3s ease-in', keyframes([
            style({ opacity: 0, offset: 0.2}),
            style({ opacity: 0.3, offset: 0.4}),
            style({ opacity: .6, offset: 0.8}),
            style({ opacity: 1, offset: 1}), 
          ]))
        ,
    ])
])

export const lightSpeedAnimation = trigger('lightSpeedAnimation', [
  transition('void => *', [
    style({opacity:0}),
    animate('3s ease-in', keyframes([
      style({ opacity: 0, transform:'translateX(200px)', offset: 0.5}),
      style({ opacity: 0, transform: 'translateX(175px)', offset: 0.95}),
      style({ opacity: 1, transform: 'translateX(0px)', offset: 1})
    ]))
  ])
])


export const treesDestroyAnimation =   trigger('treesDestroyAnimation', [
  transition('* => void', [
     style({opacity:1}),
      animate('3s ease-in', keyframes([
        style({ opacity: 1, offset: 0.2}),
        style({ opacity: .8, offset: 0.4}),
        style({ opacity: 0, offset: 0.8}),
        style({ opacity: 0, offset: 1}), 
      ]))
   
  ])

])
      
export const pricingAnimation = trigger('pricingAnimation', [

  transition('void =>stay, stay => move', [
    
    query(':enter', style({ opacity: 0}), {optional: true}),
        query(':leave', style({ opacity: 1}), {optional: true}),
        group([
          query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({ opacity: 0, transform: 'translateY(-75px)', offset: 0}),
              style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
              style({ opacity: 1, transform: 'translateY(0px)', offset: 1})
            ]))
          ]),{ optional: true }),
          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({ opacity: 1, transform: 'translateY(0px)', offset: 0}),
              style({ opacity: 0, transform: 'translateY(-75px)', offset: 1})
            ]))
          ]),{ optional: true }),
        ])
    ]),
    // transition('move => inview', [
    //   style({opacity: 0, position:'absolute', top:'20%'}),
    //     animate('1s ease-in', keyframes([
    //       style({ opacity: 0, transform: 'translateX(20px)', offset: 0.5}),
    //       style({ opacity: 1, transform: 'translateX(0px)', offset: 1})
    //     ]))
    //   ])
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
      style({  opacity: 0 , position: 'absolute', left: '45%',top : '95%'}),
      animate('2s ease-in', style({ position: 'absolute', opacity: 1, left: '45%',top : '93%' }))

  ])
])

export const aboutIllustration = trigger('aboutIllustration', [
  transition('void => *', [
    style({  opacity: 0 }),
    animate('2s cubic-bezier(0.35, 0, 0.25, 1)', keyframes([
      style({ transform: 'translateY(-25px)', offset: 0.1}),
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

export const slideLeftAnimation = trigger('slideLeftAnimation', [
  transition('void => *', [
    style({opacity: 0}),
    animate('2.5s ease-in', keyframes([
      style({transform: 'translateX(-50px)', offset: 0.3}),
      style({ opacity:1, transform: 'translateX(0px)', offset: 1})
    ]))
  ])
])