import {Selector} from 'testcafe';

fixture('login test')
    .page('https://www.etalente.co.za')

test('Successful login test', async t => {
    await t
     .typeText('input[id="mat-input-0"]', 'ebenipho1@gmail.com')
     .typeText('input[id="mat-input-1"]', 'Ebenezer@maluleke97')
     .click('app-main.ng-star-inserted:nth-child(3) div.container-fluid.min-vh-100 div.row.min-vh-100 div.col.right-section.pt-5.pl-4.pr-4.min-vh-100:nth-child(2) div.row.mt-3:nth-child(2) div.col-sm-12.et-flex-center-h form.ng-dirty.ng-valid.ng-touched div.row.mt-3:nth-child(4) div.col-sm-12.mb-3:nth-child(1) button.et-full-width.pt-1.pb-1.font-weight-bold.mat-flat-button.mat-primary span.mat-button-wrapper > span:nth-child(1)')
     .expect(Selector('app-content-wrapper.ng-star-inserted:nth-child(3) mat-sidenav-container.et-sidebar-container.mat-drawer-container.mat-sidenav-container mat-sidenav-content.et-sidebar-content.mat-drawer-content.mat-sidenav-content:nth-child(5) app-posted-jobs.ng-star-inserted:nth-child(2) main.etalente-main-content.etalente-main-content-with-top-pagination div.h-100.card-content.pt-4.pb-5:nth-child(3) div.container-fluid.mb-4.p-0 div.row div.col-sm-8.ng-star-inserted > p.et-text-color-primary.et-fs-16.mb-0').innerText).contains('Job Posts')
     .wait(5)
    });

test('UnSuccessful login test', async t => {
    await t
     .typeText('input[id="mat-input-0"]', 'admin@gmail.com')
     .typeText('input[id="mat-input-1"]', 'admin123')
     .click('app-main.ng-star-inserted:nth-child(3) div.container-fluid.min-vh-100 div.row.min-vh-100 div.col.right-section.pt-5.pl-4.pr-4.min-vh-100:nth-child(2) div.row.mt-3:nth-child(2) div.col-sm-12.et-flex-center-h form.ng-dirty.ng-valid.ng-touched div.row.mt-3:nth-child(4) div.col-sm-12.mb-3:nth-child(1) button.et-full-width.pt-1.pb-1.font-weight-bold.mat-flat-button.mat-primary span.mat-button-wrapper > span:nth-child(1)')
     .wait(1000)
     });