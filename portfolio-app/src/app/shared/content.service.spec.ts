import {TestBed} from '@angular/core/testing';

import {ContentService} from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('about information should be saved', () => {
    const dataInformation = {
      'aboutMe': 'About information text'
    }
    service.addAboutInformation(dataInformation);
    expect(service.aboutInformation).toBe(dataInformation);
  })

  it('about information should be retrieved', () => {
    service.aboutInformation = {
      'aboutMe': 'About information text'
    }
    let result = service.getAboutInformation();
    expect(result).toBe(service.aboutInformation['aboutMe']);
  })
});
