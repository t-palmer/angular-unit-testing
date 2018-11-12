import { SamplesModule } from './samples.module';

describe('SamplesModule ...', () => {
  let module: SamplesModule;

  beforeEach(() => {
    module = new SamplesModule();
  });

  it('- should create', () => {
    expect(module).toBeTruthy();
  });
});
