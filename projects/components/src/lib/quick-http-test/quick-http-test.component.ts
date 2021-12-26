import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TestService } from '../services/test.service';

@Component({
    selector: 'dlc-form-quick-http-test',
    templateUrl: './quick-http-test.component.html',
    styleUrls: ['./quick-http-test.component.css']
})
export class QuickHttpTestComponent implements OnInit {
    public callResponse: any = undefined;

     @Input() public testId: string | undefined;

    constructor(
        private readonly testService: TestService,
        private readonly cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        console.log("Making http request");
        console.log(new Date());

        console.log('id: ' + this.testId);

        setTimeout(() => {
            this.testService.testCall(this.testId!).subscribe(response => {
                console.log("finished making http request");
                this.callResponse = JSON.stringify(response);
                console.log(new Date());
                this.cdr.markForCheck();
            });
        }, 5000);
    }

}
