import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Entry } from 'contentful';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  work: Entry<any>;
  skipId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService,
    private location: Location
  ) { }

  ngOnInit() {
    const workId = this.route.snapshot.paramMap.get('id');
    this.skipId = this.route.snapshot.paramMap.get('skip');

    const pageType = this.router.url.substring(9, 10);

    if (pageType === 'l') {
      this.contentfulService.getWork(workId)
      .then((work) => {
        this.work = work;
      });
    } else if (pageType === 'o') {
      this.contentfulService.getOtherWork(workId)
      .then((work) => {
        this.work = work;
      });
    }
  }

  isNumber() {
    const key: number = (+this.skipId);
    return key;
  }

  goToProjects() {
    this.location.back();
  }

}
