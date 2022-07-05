import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { UsersService } from './users.service';

fdescribe('UsersService', () => {
  let service: UsersService;
  let httpClient: HttpClient;

  const httpStub = {
    get: () => {
      return new Observable((observer) => {
        observer.next([
          {
            id: 1,
            name: 'Leanne Graham',
            email: 'Sincere@april.biz'
          }
        ]);
      })
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [
      //   {
      //     provide: HttpClient,
      //     useValue: httpStub
      //   }
      // ]
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(UsersService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Like system I want verify, if method GET been called', () => {
    const spy = spyOn(httpClient, 'get').and.callThrough();
    service.getUsers();
    expect(spy).toHaveBeenCalled();
  });

  it('Like system I want verify, if method GET been called with correct url', () => {
    const spy = spyOn(httpClient, 'get').and.callThrough();
    service.getUsers();
    expect(spy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });
});
