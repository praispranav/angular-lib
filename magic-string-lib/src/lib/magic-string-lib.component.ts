import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-magic-string-lib',
  template: `
    this is 2nd library
    <nk-magic-string></nk-magic-string>
    <nk-magic-string></nk-magic-string>
    <nk-magic-string></nk-magic-string>
    <nk-magic-string></nk-magic-string>
    <nk-magic-string></nk-magic-string>
    <nk-magic-string></nk-magic-string>
    <nk-magic-string></nk-magic-string>
  `,
  styles: [
  ]
})
export class MagicStringLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
