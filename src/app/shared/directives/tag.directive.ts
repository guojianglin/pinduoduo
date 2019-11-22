import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appTag]',
})
export class TagDirective {
    @Input() @HostBinding('style.background-color') tagBgColor = '#faefe3';
    @Input() @HostBinding('style.color') tagColor = '#ca516a';
    @Input() @HostBinding('style.font-size') tagFontSize = '0.8rem';
    @Input() @HostBinding('style.padding') tagPadding = '3px';
}