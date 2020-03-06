import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';

export class AnimationHelper {
  public static implementDelay(className: string): void {
    const cards = document.querySelectorAll(className);
    let delay = 150;
    cards.forEach(card => {
      delay += 150;
      card.setAttribute('data-aos-delay', delay.toString());
    });
  }
}

export const PopUpAnimation = [
  trigger('cardAnimation', [
    state('flyIn', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s 300ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ])
];

import { group, query } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }
    ),
    /* 2 */ group([
      // block executes in parallel
      query(
        ':enter',
        [
          style({ opacity: '0' }),
          animate('0.5s ease-in-out', style({ opacity: '1' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: '1' }),
          animate('0.5s ease-in-out', style({ opacity: '0' }))
        ],
        { optional: true }
      )
    ])
  ])
]);
