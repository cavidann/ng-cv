import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getWorks(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'lesson',
      order: 'sys.createdAt'
    }, query))
    .then(res => res.items);
  }

  getOtherWorks(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'otherWorks',
      order: 'sys.createdAt'
    }, query))
    .then(res => res.items);
  }

  getWork(workId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'lesson'
    }, {'sys.id': workId}))
    .then(res => res.items[0]);
  }

  getPersons(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'person'
    }, query))
    .then(res => res.items);
  }

  getPerson(personId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'person'
    }, {'sys.id': personId}))
    .then(res => res.items[0]);
  }

  getProfileImgs(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'profileImg'
    }, query))
    .then(res => res.items);
  }


}
