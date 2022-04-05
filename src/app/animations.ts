import { animate, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [
    state('*',
        style({
            opacity: 1,
            transform: 'perspective(500px) translateZ(0px)',
        })
    ),
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'perspective(500px) translateZ(100px)',
        }),
        animate('2s ease')
    ]),
    transition(':leave', [
        animate('3s ease', style({
            opacity: 0,
            transform: 'perspective(500px) translateZ(-400px)',
        }))
    ])
])

export let transitTitles = trigger('transitTitles', [
    transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(500)])
]);

export let transitDates = trigger('transitDates', [
    transition('void => *', [style({ transform: 'translateX(-1000%)' }), animate(600)])
]);

export let transitTimes = trigger('transitTimes', [
    transition('void => *', [style({ transform: 'translateX(-1000%)' }), animate(300)])
]);
