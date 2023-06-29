import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    
    transition('* => bussinesData', slideto('right')),
    transition('bussinesData => *', slideto('left')),
    




    // *******************GO*****************************
    transition('registers => bussinesDatas', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.6s cubic-bezier(0.66, 0.00, 0.34, 1.00)', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.6s cubic-bezier(0.66, 0.00, 0.34, 1.00)', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    // *******************BACK*****************************
    transition('bussinesDatas => registers', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.6s cubic-bezier(0.75, 0.00, 0.25, 1.00)', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.6s cubic-bezier(0.75, 0.00, 0.25, 1.00)', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
  ]);

  function slideto(direction: any){
    const optional = {optional: true};
    return [
      query(':enter, :leave', [
        style({
          position: 'fixed',
          top: 0,
          [direction]: '-32%',
          with: '100%'
        })
      ], optional),
      query(':enter', [
        style({[direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('600ms ease', style({[direction]: '120%'}))
        ], optional),
        query(':enter',[
          animate('600ms ease', style({[direction]: '37%'}))
        ])
      ]),
    ];
  }
