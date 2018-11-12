# angular-unit-testing
https://github.com/t-palmer/angular-unit-testing

This is a project for Angular Unit Test training.

## Service .spec File Checklist
- Create a service variable: `let service: BlankService;`
- Add `…` after the main describe function description

### The beforeEach() function:
- Add extra lines
- Surround configureTestingModule with `{}`
- Add semicolon after
- Add line to initialize service: `service = TestBed.get(BlankService);`

### The it function:
- Add `–` in front of the it() function description
- Remove local service variable initialization


## Component .spec File Checklist
- Add `…` after the main describe function description
- Create a nativeElement variable for the Component Template:
`let nativeElement: HTMLElement;`

### The beforeEach() function:
- Remove detectChanges
- Add extra lines to declarations
- Add line to initialize the nativeElement variable:
`nativeElement = fixture.nativeElement;`
- Change should create to - should be created

