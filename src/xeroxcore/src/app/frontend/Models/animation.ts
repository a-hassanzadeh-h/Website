import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  keyframes
} from '@angular/animations';

export const PopUpAnimation = [
  // Trigger animation cards array
  trigger('cardAnimation', [
    // Transition from any state to any state
    transition('* => *', [
      // Initially the all cards are not visible
      query(':enter', style({ opacity: 0 }), { optional: true }),

      // Each card will appear sequentially with the delay of 300ms
      query(
        ':enter',
        stagger('300ms', [
          animate(
            '.3s ease-in',
            keyframes([
              style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
              style({
                opacity: 0.5,
                transform: 'translateY(-10px) scale(1.1)',
                offset: 0.3
              }),
              style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
            ])
          )
        ]),
        { optional: true }
      ),

      // Cards will disappear sequentially with the delay of 300ms
      query(
        ':leave',
        stagger('200ms', [
          animate(
            '200ms ease-out',
            keyframes([
              style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
              style({ opacity: 0.5, transform: 'scale(.5)', offset: 0.3 }),
              style({ opacity: 0, transform: 'scale(0)', offset: 1 })
            ])
          )
        ]),
        { optional: true }
      )
    ])
  ])
];
